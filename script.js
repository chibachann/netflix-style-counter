let count = 0;
const counterElement = document.getElementById('counter');

document.getElementById('increment').addEventListener('click',function() {
    count++;
    counterElement.innerText = count;
});

document.getElementById('decrement').addEventListener('click', function () {
    count--;
    counterElement.innerText = count;
});
