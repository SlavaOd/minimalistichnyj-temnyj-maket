var menu = document.querySelector('.menu')
var menu_block = document.querySelector('.menu_block')
var menu_close = document.querySelector('.menu_close')
var sign_in_block = document.querySelector('.sign_in_block')
var sign_in = document.querySelector('.sign_in')
var sign_in_btn = document.querySelector('.sign_in_btn')
var sign_up = document.querySelector('.sign_up')
var sign_up_block = document.querySelector('.sign_up_block')
var sign_up_btn = document.querySelector('.sign_up_btn')


menu.onclick = function() {
    menu_block.style.display = 'block'
}

menu_close.onclick = function() {
    menu_block.style.display = 'none'
}

sign_in.onclick = function() {
    sign_in_block.style.display = 'block'
}

sign_in_btn.onclick = function() {
    sign_in_block.style.display = 'none'
}

sign_up.onclick = function() {
    sign_up_block.style.display = 'block'
}

sign_up_btn.onclick = function() {
    sign_up_block.style.display = 'none'
}


var logo = document.querySelector('.logo')
    web = document.querySelector('.web')
    ui = document.querySelector('.ui')
    photo = document.querySelector('.photo')
    web_info = document.querySelector('.web_info')
    logo_info = document.querySelector('.logo_info')
    ui_info = document.querySelector('.ui_info')
    photography_info = document.querySelector('.photography_info')


logo.onclick = function() {
    web_info.style.display = 'none'
    ui_info.style.display = 'none'
    photography_info.style.display = 'none'
    logo_info.style.display = 'inline-block'
}
web.onclick = function() {
    web_info.style.display = 'inline-block'
    ui_info.style.display = 'none'
    photography_info.style.display = 'none'
    logo_info.style.display = 'none'
}
ui.onclick = function() {
    web_info.style.display = 'none'
    ui_info.style.display = 'inline-block'
    photography_info.style.display = 'none'
    logo_info.style.display = 'none'
}
photo.onclick = function() {
    web_info.style.display = 'none'
    ui_info.style.display = 'none'
    photography_info.style.display = 'inline-block'
    logo_info.style.display = 'none'
    console.log('123')
}
