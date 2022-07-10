let initializedTypeEffects = [];
const typeEffect = (element, text, time_out = 0.2, forwards = false) => {
  timeOut = 0;
  element.innerHTML = "";
  [...text].forEach((letter) => {
    timeOut += time_out;
    setTimeout(() => {
      element.innerHTML += letter;
    }, timeOut * 1000);
  });
  setTimeout(() => {
    if (!forwards) {
      reverseTypeEffect(element, text);
    }
  }, 5000);
};
const reverseTypeEffect = (element, text, time_out = 0.2) => {
  timeOut = 0;
  [...text].forEach((_, i) => {
    timeOut += time_out;
    setTimeout(() => {
      element.innerText = element.innerText.slice(0, -1);
    }, timeOut * 1000);
  });
  setTimeout(() => {
    typeEffect(element, text);
  }, 2500);
};
const initTypeEffect = (params={}) => {
  let options = {
    id: params.id ? params.id : null,
    timeOut: params.timeOut ? params.timeOut : 0.2,
    forwards: params.forwards ? true : false,
    color: params.color ? params.color : "black",
    blinkerColor: params.blinkerColor ? params.blinkerColor : "#000",
  };
  if (options.id) {
    let item = document.getElementById(options.id);
    if (!initializedTypeEffects.filter((e) => e == item).length) {
      initializedTypeEffects.push(item);
    }
    item.style.setProperty("--typeEffectColor", options.color);
    item.style.setProperty("--typeEffectBlinkerColor", options.blinkerColor);
    typeEffect(item, item.innerText, options.timeOut, options.forwards);
  } else {
    let items = document.querySelectorAll(".typeEffect");
    items.forEach((_) => {
      if (initializedTypeEffects.filter((e) => e == _).length) {
        return false;
      }
      initializedTypeEffects.push(_);
      _.style.setProperty("--typeEffectColor", options.color);
      _.style.setProperty("--typeEffectBlinkerColor", options.blinkerColor);
      typeEffect(_, _.innerText, options.timeOut, options.forwards);
    });
  }
};
