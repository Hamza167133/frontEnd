let TextColor = ['red', 'green', 'blue', 'purple', 'orange', 'tomato'];
let TextSize = ['32px', '40px','50px', '60px', '80px'];

let TextColorIndex = 0;
let TextSizeIndex = 0;

let text = document.getElementById('text');
let ChangeColor = document.getElementById('ChangeColor');
let ChangeSize = document.getElementById('ChangeSize');

ChangeColor.addEventListener('click', function() {
    TextColorIndex = (TextColorIndex + 1) % TextColor.length;
    text.style.color = TextColor[TextColorIndex]; 
});

ChangeSize.addEventListener('click', function() {
    TextSizeIndex = (TextSizeIndex + 1) % TextSize.length;
    text.style.fontSize = TextSize[TextSizeIndex]; 
});