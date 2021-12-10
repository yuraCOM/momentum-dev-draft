import './js/xo.js'
import './js/todo.js'
import './js/tools.js'
import './js/audio'
import {showDate} from "./js/date-time";
import {showTime} from './js/date-time.js';
import {changeBackgroundImg} from './js/random-img.js';
import {baseMoment} from "./js/database-local-store";
import {updateLocalStore} from "./js/database-local-store";
import {StartlocalStorage} from "./js/database-local-store";
// import {timeOfDay} from "./js/date-time";
// import {numOfImg} from "./js/random-img";
import {getQuotes} from "./js/phases.js";
import {getSlideNext} from "./js/random-img";
import {getSlidePrev} from "./js/random-img";
import {getWeather} from "./js/weather";
import {clearWeather} from "./js/weather";
// import {playAudio} from "./js/audio";

let name = document.querySelector('.name')
let city = document.querySelector('.city')

document.addEventListener("DOMContentLoaded", function() {
    city.value = baseMoment.city
    city.textContent = baseMoment.city
    getWeather(baseMoment.city)

});


let changeQuoteBtn = document.querySelector('.change-quote')
let nextSlide = document.querySelector('.slide-next')
let prevSlide = document.querySelector('.slide-prev')


StartlocalStorage()
showTime()
showDate()
changeBackgroundImg()
getQuotes()
getWeather(baseMoment.city)

// window.onload = ()=>{
//     city.value = baseMoment.city
//     console.log('stazrt')
// }


// обновляем время суток
// document.querySelector('.greeting').innerHTML = `Good ${timeOfDay}`

// очистка импута при наведении
function clearInput(){
    this.value = ''
}

//запись изменения инпута в базу
function updateInput (item, itemName){
    baseMoment[itemName] = item.value
    // item.value === '' ? (item.value = '...enter...', updateLocalStore())  :
    //     baseMoment[itemName] = item.value
    updateLocalStore()
    StartlocalStorage()
}

// имя пользователя
// console.log(baseMoment.name.trim().length)
baseMoment.name.trim().length<=0 ? name.value = '...enter name' : name.value = baseMoment.name
name.addEventListener('focus', clearInput)
name.addEventListener('blur', function(){
    updateInput(name, 'name')
    baseMoment.name.trim().length<=0 ? name.value = '...enter name' : name.value = baseMoment.name
    updateLocalStore()

})

// город
baseMoment.city.trim().length === 0 ? city.value = '...enter city' : city.value = baseMoment.city
// city.value = baseMoment.city
city.addEventListener('focus', clearInput)
city.addEventListener('blur', function () {
    updateInput(city, 'city')
    baseMoment.city.trim().length === 0 ? clearWeather() :  getWeather(baseMoment.city)
    baseMoment.city.trim().length === 0 ? city.value = '...enter city' : city.value = baseMoment.city
    baseMoment.city = city.value
    updateLocalStore()
    StartlocalStorage()

})

//phases chandge
changeQuoteBtn.addEventListener('click', getQuotes)

//slider
nextSlide.addEventListener('click', ()=>{
    getSlideNext()
})

prevSlide.addEventListener('click', ()=>{
    getSlidePrev()
})

console.log(
`
Ваша оценка - 126 баллов 
Отзыв по пунктам ТЗ:
Не выполненные/не засчитанные пункты:
1) переводится язык и меняется формат отображения даты 

2) переводится приветствие 

3) переводится прогноз погоды в т.ч описание погоды 

4) переводится цитата дня  

5) переводятся настройки приложения, при переключении языка приложения в настройках, язык настроек тоже меняется 

6) в качестве источника изображений может использоваться Unsplash API 

7) в качестве источника изображений может использоваться Flickr API 

8) в настройках приложения можно указать язык приложения (en/ru или en/be)  

9) язык настроек определяется языком приложения, при переключении языка приложения, язык настроек тоже меняется 

10) в настройках приложения можно указать источник получения фото для фонового изображения: коллекция изображений GitHub, Unsplash API, Flickr API 

11) если источником получения фото указан API, в настройках приложения можно указать тег, для которого API будет присылает фото 

Выполненные пункты:
1) время выводится в 24-часовом формате, например: 21:01:00 

2) время обновляется каждую секунду - часы идут. Когда меняется одна из цифр, остальные при этом не меняют своё положение на странице (время не дёргается) 

3) выводится день недели, число, месяц, например: "Воскресенье, 16 мая" / "Sunday, May 16" / "Нядзеля, 16 траўня" 

4) текст приветствия меняется в зависимости от времени суток (утро, день, вечер, ночь). Проверяется соответствие приветствия текущему времени суток 

5) пользователь может ввести своё имя. При перезагрузке страницы приложения имя пользователя сохраняется 

6) ссылка на фоновое изображение формируется с учётом времени суток и случайного номера изображения (от 01 до 20). Проверяем, что при перезагрузке страницы фоновое изображение изменилось. Если не изменилось, перезагружаем страницу ещё раз 

7) изображения можно перелистывать кликами по стрелкам, расположенным по бокам экрана.Изображения перелистываются последовательно - после 18 изображения идёт 19 (клик по правой стрелке), перед 18 изображением идёт 17 (клик по левой стрелке) 

8) изображения перелистываются по кругу: после двадцатого изображения идёт первое (клик по правой стрелке), перед 1 изображением идёт 20 (клик по левой стрелке) 

9) при смене слайдов важно обеспечить плавную смену фоновых изображений. Плавную смену фоновых изображений не проверяем: 1) при загрузке и перезагрузке страницы 2) при открытой консоли браузера 3) при слишком частых кликах по стрелкам для смены изображения 

10) при перезагрузке страницы приложения указанный пользователем город сохраняется, данные о нём хранятся в local storage 

11) для указанного пользователем населённого пункта выводятся данные о погоде, если их возвращает API. Данные о погоде включают в себя: иконку погоды, описание погоды, температуру в °C, скорость ветра в м/с, относительную влажность воздуха в %. Числовые параметры погоды округляются до целых чисел 

12) выводится уведомление об ошибке при вводе некорректных значений, для которых API не возвращает погоду (пустая строка или бессмысленный набор символов) 

13) при загрузке страницы приложения отображается рандомная цитата и её автор 

14) при перезагрузке страницы цитата обновляется (заменяется на другую). Есть кнопка, при клике по которой цитата обновляется (заменяется на другую) 

15) при клике по кнопке Play/Pause проигрывается первый трек из блока play-list, иконка кнопки меняется на Pause 

16) при клике по кнопке Play/Pause во время проигрывания трека, останавливается проигрывание трека, иконка кнопки меняется на Play 

17) треки пролистываются по кругу - после последнего идёт первый (клик по кнопке Play-next), перед первым - последний (клик по кнопке Play-prev) 

18) трек, который в данный момент проигрывается, в блоке Play-list выделяется стилем 

19) после окончания проигрывания первого трека, автоматически запускается проигрывание следующего. Треки проигрываются по кругу: после последнего снова проигрывается первый. 

20) добавлен прогресс-бар в котором отображается прогресс проигрывания 

21) при перемещении ползунка прогресс-бара меняется текущее время воспроизведения трека 

22) над прогресс-баром отображается название трека 

23) отображается текущее и общее время воспроизведения трека 

24) есть кнопка звука при клике по которой можно включить/отключить звук 

25) добавлен регулятор громкости, при перемещении ползунка регулятора громкости меняется громкость проигрывания звука 

26) можно запустить и остановить проигрывания трека кликом по кнопке Play/Pause рядом с ним в плейлисте 

27) в настройках приложения можно скрыть/отобразить любой из блоков, которые находятся на странице: время, дата, приветствие, цитата дня, прогноз погоды, аудиоплеер, список дел/список ссылок/ваш собственный дополнительный функционал 

28) Скрытие и отображение блоков происходит плавно, не влияя на другие элементы, которые находятся на странице, или плавно смещая их 

29) настройки приложения сохраняются при перезагрузке страницы 

30) ToDo List - список дел (как в оригинальном приложении) или Список ссылок (как в оригинальном приложении) или Свой собственный дополнительный функционал, по сложности аналогичный предложенным 
добавлено ToDo List + игра КрестикиНолики

`
)
