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
    <h1><a href="index.html">Home</a></h1>
    <div class="typeEffectContainer">
        <h2>With element ID (No parameters)</h2>
        <p  id="a" class="typeEffect">Text 1</p>
        <script>
            initTypeEffect({id:'a'});
        </script>
        <h2>With Classnames</h2>
        <p  id="b" class="typeEffect">Text 2</p>
        <p  id="c" class="typeEffect">Text title</p>
        <script>
            let params = {
                id          : null,
                timeOut     : 0.2,
                forwards    : false,
                color       : 'red',
                blinkerColor: 'red'
            }
            initTypeEffect(params);
        </script>
        <h3>With Forwards true</h3>
        <h2 id="d" class="typeEffect">Text title</h2>
        <script>
            params = {
                id          : 'd',
                timeOut     : 0.2,
                forwards    : true,
                color       : 'violet',
                blinkerColor: 'black'
            }
            initTypeEffect(params);
        </script>
    </div>
</body>
</html>