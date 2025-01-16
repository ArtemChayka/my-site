const block = document.querySelector('.block-1')

block.onclick = function () {
    this.style.background = 'green'
    console.log('green')
}

let r = 0
let w = 0
let h = 0

block.addEventListener('mousemove', function () {
    this.style.height = 100 + h + 'px'
    this.style.width = 100 + w + 'px'
    this.style.rotate = r + 15 + 'deg'
    r = r + 15
    w++
    h++
    if (w > 300 && h > 300) {
        this.style.height = 300 + 'px'
        this.style.width = 300 + 'px'
    }
    console.log('mousemove')
})




block.addEventListener('dblclick', function () {
    this.style.background = 'red'
    console.log('red')
})


block.oncontextmenu = function () {
    this.style.background = 'blue'
    console.log('blue')
    return false
}

//onmouseenter
// block.onmouseenter=function(){
//     this.style.background='grey'
//     console.log('Onmouseenter')
// return false // запрет вызова oncontextmenu
// }

block.onmouseleave = function () {
    this.style.background = 'purple'
}

block.onmouseup = function () {
    this.style.background = 'yellow'
}


block.addEventListener('dblclick', function (event) {
    this.style.background = 'cyan'
    this.style.rotate = (n - 15) + 'deg'
    n = n - 15
})

let n = 0

block.onmousedown = function (event) {
    this.style.background = 'cyan'
    this.style.rotate = (n - 15) + 'deg'
    n = n - 15
    console.log(event.button)
    console.log('button:' + event.button)
    console.log('which:' + event.which)
}


block.ondragstart = function () {
    this.style.background = '#e62ae9'
}


