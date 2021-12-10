import {getRandomNum} from "./random-img"

let author = document.querySelector('.author')
let quote = document.querySelector('.quote')

export async function getQuotes() {
    const quotes = 'js/base-phases.json';
    const res = await fetch(quotes);
    const data = await res.json();
    let pharaseNum = getRandomNum(0, Object.keys(data).length)
    author.innerHTML = data[pharaseNum].author
    quote.innerHTML = `" ${data[pharaseNum].text} "`

}

// export function getQuotes() {
//     const quotes = '../js/base-phases.json';
//     fetch(quotes)
//         .then(res => res.json())
//         .then(data => {
//             // console.log(data);
//             let pharaseNum = getRandomNum(0, Object.keys(data).length)
//             author.innerHTML = data[pharaseNum].author
//             quote.innerHTML = `" ${data[pharaseNum].text} "`
//         });
//
// }

// let z = getQuotes();
// let {first, second} = getValues();
// export f

