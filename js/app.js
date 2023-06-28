const popBox = document.querySelector('.pop-up-box')
const product = document.getElementById('product')
const menu = document.getElementById('menu')
const exit = document.getElementById('exit')

product.addEventListener('click', function () {
    popBox.classList.toggle('d-block')
})

menu.addEventListener('click', function () {
    popBox.classList.toggle('d-block')
})

exit.addEventListener('click', function () {
    popBox.classList.toggle('d-block')
})