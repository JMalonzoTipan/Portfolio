const back_end = document.querySelector('.back-end')
const front_end = document.querySelector('.front-end')
const services_section = document.querySelector('.My-services')
const removeTranslate = [
    {transform: 'translateX(0)'}
]
const removeOptions = {
    duration: 3000,
    fill: "forwards"
}


window.addEventListener('scroll', () => {
  if (isElementInViewport(backend)) {
    document.body.style.backgroundColor = 'black'
    main.style.color = 'white'
    nav_btn.style.color = 'white'
    for(let i = 0; i < front_end.children.length; i++){
        front_end.children[i].animate(removeTranslate, removeOptions)
    }
    for(let i = 0; i < back_end.children.length; i++){
        back_end.children[i].animate(removeTranslate, removeOptions)
    }
  } else {
    document.body.style.backgroundColor = 'white'
    main.style.color = 'black'
    nav_btn.style.color = 'black'
    front_end.children[1].animate([{transform: 'translateX(-120%)'}], {duration: 1000, fill: 'forwards'})
    front_end.children[2].animate([{transform: 'translateX(120%)'}], {duration: 1000, fill: 'forwards'})
   
    back_end.children[1].animate([{transform: 'translateX(120%)'}], {duration: 1000, fill: 'forwards'})
    back_end.children[2].animate([{transform: 'translateX(-120%)'}], {duration: 1000, fill: 'forwards'})
    back_end.children[3].animate([{transform: 'translateX(120%)'}], {duration: 1000, fill: 'forwards'})
  }
});

function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();

  const viewportHeight = window.innerHeight || document.documentElement.clientHeight;

  return (
    rect.top < viewportHeight && rect.bottom > 0     
  );
}
