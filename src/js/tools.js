// import '/js/audio.js'


export let dataTools = {
    'weather' : true,
    'player' : true,
    'playlist' : true,
    'pop-time' : true,
    'pop-date' : true,
    'pop-greeting' : true,
    'pop-quote' : true,
    'pop-xo' : true,
    'pop-todo' : true,
}
export let items = [
    ".weather",
    '.player-controls',
    '.play-list',
    '.time',
    '.date',
    '.greeting-container',
    '.quote-wrapper',
    '.xogame',
    '.todo-wrapper' ]

// console.log(items)
// console.log(Object.keys(dataTools))
// Object.keys(dataTools)

export function updateLocalStoreTools(){
    localStorage.setItem('dataTools', JSON.stringify(dataTools))
}

export function StartLocalStorageTools(){
    localStorage.dataTools ?
        dataTools = JSON.parse(localStorage.getItem('dataTools')) : false
}

export let popTools = document.querySelector('.pop-tools')
export let tools = document.querySelector('.tools')
export let closePop = document.querySelector('.close-pop')
export let allFuture = popTools.querySelectorAll('input')

StartLocalStorageTools()
getChoiseTools()
getElementsApp()

tools.addEventListener('click', ()=>{
    popTools.style.right = '0'

})

closePop.addEventListener('click', ()=>{
    popTools.style.right = '100%'
    saveTools()

})

export function saveTools() {
    let allFuture = popTools.querySelectorAll('input')
    allFuture.forEach( item =>{
        // console.log(item.name, item.checked)
        dataTools[item.name] = item.checked
    })

    updateLocalStoreTools()
    getChoiseTools()
    getElementsApp()
}

// смотрим локал - и отмечаем выбранные фичи (ставим убираем checked pop tools) при старте/открытии/закрытии настроек
function getChoiseTools(){
    allFuture.forEach( item =>{

        item.checked = dataTools[item.name]
        // console.log(item.name, item.checked)
        // console.log(dataTools)
    })
}

// обрабатывем нашу базу настроек и убираем добовляем элементы приложения
function getElementsApp() {
    for (let i = 0; i < items.length; i++) {
        // console.log(items[i], Object.keys(dataTools)[i] )
        !dataTools[Object.keys(dataTools)[i]] ? document.querySelector(items[i]).classList.add('hide-item') : document.querySelector(items[i]).classList.remove('hide-item')


    }
    if(dataTools['player'] === false){
        document.querySelector('.range-sound-view').style.display = 'none'
    }
    else {
        document.querySelector('.range-sound-view').style.display = 'block'
    }


}

// console.log(dataTools['player'])
// document.querySelector('#range-audio').style.display = 'none'
