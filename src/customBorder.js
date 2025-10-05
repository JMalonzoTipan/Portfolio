const myServices = document.querySelector('.myservices')
const backend = document.querySelector('.backend')
const frontend = document.querySelector('.frontend')
function customBorder(container,width, height, content){
    const line1 = document.createElement('div')
    const line2 = document.createElement('div')
    const line3 = document.createElement('div')
    const line4 = document.createElement('div')
    const contentEle = document.createElement('h2')
    contentEle.append(content)

    container.append(line1)
    container.append(line2)
    container.append(contentEle)
    container.append(line3)
    container.append(line4)

    container.style.display = 'grid'
    container.style.gridTemplateColumns = '4% 1fr 4%'
    container.style.gridTemplateRows = '5% 1fr 5%'
    container.style.width = width
    container.style.height = height
    container.style.justifySelf = 'center'
    container.style.alignSelf = 'center'
    contentEle.style.textAlign = 'center'
    line1.style.gridColumn = 'span 3'
    line2.style.gridRow = 'span 2'
    line3.style.gridRow = 'span 2'
    line1.setAttribute('class', 'line1 line')
    line2.setAttribute('class', 'line2 line')
    line3.setAttribute('class', 'line3 line')
    line4.setAttribute('class', 'line4 line')
}

customBorder(myServices,'fit-content', '80px', 'My Services')
customBorder(backend,'fit-content', 'fit-content', 'Back End')
customBorder(frontend,'fit-content', 'fit-content', 'Front End')