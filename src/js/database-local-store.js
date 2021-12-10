export let baseMoment = {
    name : '...enter name',
    city : 'Minsk'
}

export function updateLocalStore(){
    localStorage.setItem('baseMoment', JSON.stringify(baseMoment))
}

//local store обновление при старте
export function StartlocalStorage (){
    localStorage.baseMoment ?
        baseMoment = JSON.parse(localStorage.getItem('baseMoment')) : false
}

