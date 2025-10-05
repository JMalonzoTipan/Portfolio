const body = document.querySelector('body')
const nav_btn = document.querySelector('#nav_btn')
const navlist_item = document.querySelectorAll('.navlist-item')
const main = document.querySelector('main')
const burgerContainer = document.querySelector('.burger')
const burger = burgerContainer.children[0]
const X = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x-icon lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>'
const burgerSvg = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu-icon lucide-menu"><path d="M4 5h16"/><path d="M4 12h16"/><path d="M4 19h16"/></svg>'


let isOn = true//
nav_btn.addEventListener('click', () => {
    if(isOn === true){
        showNavList()
        burger.remove()
        burgerContainer.innerHTML = X
    }else{
        hideNavList()
        burgerContainer.innerHTML = ''
        burgerContainer.innerHTML = burgerSvg
    }
})
for(let i = 0; i < navlist_item.length; i++){
    navlist_item[i].addEventListener('click', () => {
    hideNavList()
    burgerContainer.innerHTML = ''
    burgerContainer.innerHTML = burgerSvg
})
}
// :)
stopPropa()
//function for showing nav menu
function showNavList(){
    for(let i = 0; i < navlist_item.length; i++){
        navlist_item[i].style.opacity = '1'
        navlist_item[i].style.pointerEvents = 'all' 
    }
    
    nav_btn.style.transform = 'translateX(-20px)'
    nav_btn.children[1].style.transform = 'translateY(40px)'
    nav_btn.children[2].style.transform = 'translateY(90px)'
    nav_btn.children[3].style.transform = 'translateY(140px)'
    isOn = false
    main.style.opacity = '0.2'
    
}
//function for hiding nav menu
function hideNavList(){
    for(let i = 0; i < navlist_item.length; i++){
        navlist_item[i].removeAttribute('style')
    }
    nav_btn.style.transform = 'translateX(0)'
    isOn = true
    main.style.opacity = '1'
}

// for children elements from propagation
function stopPropa(){
    for(let i = 0; i < navlist_item.length; i++){
        navlist_item[i].addEventListener('click' ,(event) => {
            event.stopPropagation()
        })
    }
}
