const body = document.querySelector('body')
const nav_btn = document.querySelector('#nav_btn')
const navlist_item = document.querySelectorAll('.navlist-item')
const main = document.querySelector('main')

let isOn = true//
nav_btn.addEventListener('click', () => {
    if(isOn === true){
        showNavList()
    }else{
        hideNavList()
    }
})
// :)
stopPropa()
//function for showing nav menu
function showNavList(){
    for(let i = 0; i < navlist_item.length; i++){
        navlist_item[i].style.opacity = '1'
        navlist_item[i].style.pointerEvents = 'all' 
    }
    nav_btn.style.transform = 'translateX(-20px)'
    nav_btn.children[0].style.transform = 'translateY(40px)'
    nav_btn.children[1].style.transform = 'translateY(90px)'
    nav_btn.children[2].style.transform = 'translateY(140px)'
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

