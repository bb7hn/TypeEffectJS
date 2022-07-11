let initializedTypeEffects = [];
const typeEffect = (element, text, time_out = 0.2, forwards = false) => {
  let timeOut = 0;
  let blinker = document.createElement('span');
  blinker.innerText = '|';
  blinker.classList.add('blinker');
  blinker.style.setProperty('color','var(--typeEffectBlinkerColor)');
  element.innerHTML = "";
  element.appendChild(blinker);
  [...text].forEach((letter) => {
    timeOut += time_out;
    setTimeout(() => {
      blinker.remove();
      element.innerHTML += letter;
      element.appendChild(blinker);
    }, timeOut * 1000);
  });
  setTimeout(() => {
    if (!forwards) {
      reverseTypeEffect(element, text);
    }
  }, 5000);
};
const reverseTypeEffect = (element, text, time_out = 0.2) => {
  let timeOut = 0;
  let blinker = document.createElement('span');
  blinker.classList.add('blinker');
  blinker.style.setProperty('color','var(--typeEffectBlinkerColor)');
  [...text].forEach((_, i) => {
    timeOut += time_out;
    setTimeout(() => {
      blinker.remove();
      element.innerText = element.innerText.slice(0, -1);
      element.appendChild(blinker);
    }, timeOut * 1000);
  });
  element.appendChild(blinker);
  setTimeout(() => {
    element.innerText='';
    blinker.remove();
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
    text        : params.text?params.text:false
  };
  if (options.id) {
    let item = document.getElementById(options.id);
    if (!initializedTypeEffects.filter((e) => e == item).length) {
      initializedTypeEffects.push(item);
    }
    item.style.setProperty("--typeEffectColor", options.color);
    item.style.setProperty("--typeEffectBlinkerColor", options.blinkerColor);
    typeEffect(item, options.text?options.text:item.innerText, options.timeOut, options.forwards);
  } else {
    let items = document.querySelectorAll(".typeEffect");
    items.forEach((_) => {
      if (initializedTypeEffects.filter((e) => e == _).length) {
        return false;
      }
      initializedTypeEffects.push(_);
      _.style.setProperty("--typeEffectColor", options.color);
      _.style.setProperty("--typeEffectBlinkerColor", options.blinkerColor);
      typeEffect(_, options.text?options.text:_.innerText, options.timeOut, options.forwards);
    });
  }
};
