# Type Effect JS
## Created by [Batuhan Özen](https://batuhanozen.com)
## How to use
### Quick Start
- [Download](https://github.com/bb7hn/TypeEffectJS/archive/refs/heads/main.zip) the repo and go to examples.html
### Initialization
- Download and require the css and js files
```html
    <!-- TYPE EFFECT JS -->
    <link rel="stylesheet" href="path/to/TypeEffect.css">
    <script src="path/to//TypeEffect.js"></script>
    <!-- END OF TYPE EFFECT JS -->
```
- create an element for type effect with *typeEffect* class and *a* id than set the element text
```html
    <p  id="a" class="typeEffect">Text 1</p>
```
- **Note:** Element's width must to be equal text's one else library will not work like expected! If you want you can use it in typeEffect's container like this:
```html
    <div class="typeEffectContainer">
        <p  id="a" class="typeEffect">Text 1</p>
    </div>
```  
- next step is initializing with js.
```html
    <script>
        initTypeEffect({id:'a'});
    </script>
```
- You don't have to describe an id for initializing but suggested method is using with id
```html
    <script>
        initTypeEffect();
    </script>
```
# Full Code:
```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <link rel="stylesheet" href="css/TypeEffect.css">
        <script src="js/TypeEffect.js"></script>
    </head>
    <body>
        <div class="typeEffectContainer">
            <h2>This is not typing</h2>
            <p  id="a" class="typeEffect">This is typing</p>
            <script>
                initTypeEffect({
                    id           : 'a',
                    timeOut      : 0.5,
                    forwards     : false,
                    color        : 'violet',
                    blinkerColor : 'red'
                });
            </script>
        </div>
    </body>
    </html>
```
# Parameters :
<hr>
<table>
    <tr>
        <td><b>Parameter</b></td>
        <td><b>Description</b></td>
        <td><b>Default Value</b></td>
    </tr>
    <tr>
        <td>id</td>
        <td>Element id. if it is null all elements with <i>typeEffect</i>class will get compiled</td>
        <td>NULL</td>
    </tr>
    <tr>
        <td>timeOut</td>
        <td>Typing time. it is timeout value for each letter. i.g. if its 0.1 first letter will get typed in 0.1 seconds and second will 0.2 and third...</td>
        <td>0.2</td>
    </tr>
    <tr>
        <td>forwards</td>
        <td>If this is true. type effect work only once.</td>
        <td>false</td>
    </tr>
    <tr>
        <td>color</td>
        <td>This is a basic css color. you can set it as hex, rgb/rgba, hsl, color name etc. Sets the color of the text</td>
        <td>'black'</td>
    </tr>
    <tr>
        <td>blinkerColor</td>
        <td>Same with color but sets the color of the blinker</td>
        <td>'#000000' Value</td>
    </tr>
</table>
<hr>