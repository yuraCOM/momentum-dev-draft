// get random number
export function getRandomNum (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

let randomN = getRandomNum(1, 20)

// get number image
export let numOfImg = ''
randomN <10?numOfImg =`0${randomN}`: numOfImg = randomN

//импорт время суток
import {timeOfDay} from './date-time.js';
// https://github.com/yuraCOM/stage1-tasks/tree/assets/images/afternoon
//функция меняет бэкгарунд
export function changeBackgroundImg() {
    let body = document.querySelector('body')
    // body.style.backgroundImage = `url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDay}/${numOfImg}.jpg')`;
    body.style.backgroundImage = `url('https://raw.githubusercontent.com/yuraCOM/stage1-tasks/assets/images/${timeOfDay}/${numOfImg}.jpg')`;

}

//

export function getSlideNext() {
    numOfImg = Number(numOfImg)
    numOfImg+=1
    numOfImg === 20 ? numOfImg = 1 : false
    numOfImg <10 ? numOfImg = `0${numOfImg}`: numOfImg = numOfImg

    const img = new Image();
    // img.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDay}/${numOfImg}.jpg`;
    img.src = `https://raw.githubusercontent.com/yuraCOM/stage1-tasks/assets/images/${timeOfDay}/${numOfImg}.jpg`;
    img.onload = () => {
        let body = document.querySelector('body')
        body.style.backgroundImage = `url('https://raw.githubusercontent.com/yuraCOM/stage1-tasks/assets/images/${timeOfDay}/${numOfImg}.jpg`;
    };
}

export function getSlidePrev() {
    numOfImg = Number(numOfImg)
    numOfImg-=1
    numOfImg === 1 ? numOfImg = 20 : false
    numOfImg <10 ? numOfImg = `0${numOfImg}`: numOfImg = numOfImg

    const img = new Image();
    img.src = `https://raw.githubusercontent.com/yuraCOM/stage1-tasks/assets/images/${timeOfDay}/${numOfImg}.jpg`;
    img.onload = () => {
        let body = document.querySelector('body')
        body.style.backgroundImage = `url('https://raw.githubusercontent.com//yuraCOM/stage1-tasks/assets/images/${timeOfDay}/${numOfImg}.jpg`;
    };
}
