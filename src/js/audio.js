// export const playList = [
//     {
//         num: 1,
//         title: 'Aqua Caelestis',
//         src: 'assets/sounds/Aqua Caelestis.mp3',
//         duration: '00:58'
//     },
//     {
//         num: 2,
//         title: 'River Flows In You',
//         src: 'assets/sounds/River Flows In You.mp3',
//         duration: '03:50'
//     },
//     {
//         num: 3,
//         title: 'Ennio Morricone',
//         src: 'assets/sounds/Ennio Morricone.mp3',
//         duration: '01:37'
//     },
//     {
//         num: 4,
//         title: 'Summer Wind',
//         src: 'assets/sounds/Summer Wind.mp3',
//         duration: '01:50'
//     }
// ]
export const playList = [
    {
        num: 1,
        title: 'Night',
        src: 'assets/sounds/1.mp3',
        duration: '06:24'
    },
    {
        num: 2,
        title: 'Like in war',
        src: 'assets/sounds/2.mp3',
        duration: '04:05'
    },
    {
        num: 3,
        title: 'Under the blue sky',
        src: 'assets/sounds/3.mp3',
        duration: '02:39'
    },
    {
        num: 4,
        title: 'Careless Angel',
        src: 'assets/sounds/4.mp3',
        duration: '03:58'
    }

]

export let playlist = document.querySelector('.play-list')
playList.forEach( item=>{
    playlist.innerHTML += `
    <li id ="${item.num}">${item.title}</li>
`
})

export let audio = document.querySelector('audio');
audio.src = 'assets/sounds/1.mp3'
audio.volume = 0.5

audio.onended = NextPlayMusic

let curretnMusic = playList[0].num-1

export let audioPlay = document.querySelector('.play');

export let nextPlay = document.querySelector('.play-next')
nextPlay.addEventListener('click', NextPlayMusic)

export let prevPlay = document.querySelector('.play-prev')
prevPlay.addEventListener('click', PrevPlayMusic)

export let mute = document.querySelector('.mute')

let soundVolume = document.querySelector('#soundVolume')

let rangeaudio = document.querySelector('#range-audio')
rangeaudio.value = '0'

soundVolume.addEventListener('pointerdown', function () {
    audio.volume = soundVolume.value
    audio.muted = false
    mute.classList.remove('downv')

    soundVolume.addEventListener('pointermove', function(){
        audio.volume = soundVolume.value
    })
})

mute.addEventListener('click', function (){
    changeVolume()
})



// *********
//показываем текущее время игры аудио / длительность аудио playList[curretnMusic].duration
// console.log(playList[curretnMusic].duration)
// console.log(playList[curretnMusic].currentTime)
audio.addEventListener('timeupdate',function(){
    let currentTimeMs = audio.currentTime; // текущее время при проигриывании

    // console.log(Math.floor(currentTimeMs / 60) + ':' + Math.floor(currentTimeMs % 60) + '/' + playList[curretnMusic].duration);
    // document.querySelector('.duration').textContent = '0' + Math.floor(currentTimeMs / 60) + ':' + Math.floor(currentTimeMs % 60) + ' / ' + playList[curretnMusic].duration

    let seconds = Math.floor(currentTimeMs % 60)
    let minutes = Math.floor(currentTimeMs / 60);

    document.querySelector('.duration').textContent = ('0' + minutes) + ':' + ('0' + seconds).substr(-2) + ' / ' + playList[curretnMusic].duration

},false);

//*************

playlist.querySelectorAll('li').forEach( item =>{
    item.addEventListener('click', ()=>{
        if (item.id-1 !== curretnMusic){
            // console.log(item.id-1, curretnMusic)
            // console.log('item.id-1 = curretnMusic')
            curretnMusic = (item.id-1)
            activeAudio()
            audio.src = playList[item.id-1].src
        }

        togglePlayAudio()
    })

})

audioPlay.addEventListener('click', togglePlayAudio)

export function togglePlayAudio() {
    // document.querySelector('#range-audio').value = '0'
    // rangeaudio.value =0
    // audio.onended = document.querySelector('#range-audio').value = '0'
    getCurrenSongName()
    activeAudio()
    if (audio.paused){
        audioPlay.style.backgroundImage = "url(assets/svg/pause.svg)"
        audio.play()
    }
    else {
        audio.pause();
        audioPlay.style.backgroundImage = "url(assets/svg/play.svg)"
        let buffer = `${curretnMusic}`
        buffer = Number(buffer)+1
        document.getElementById(`${buffer.toString()}`).style.color = 'green'
        document.getElementById(`${buffer.toString()}`).style.backgroundImage = 'url(assets/svg/play.svg)'
    }


    // audio.onended = rangeaudio.value =0
    audio.addEventListener('timeupdate',function(){
        // rangeaudio.value =0
        rangeaudio.value = ( audio.currentTime*100)/audio.duration
    })

}

rangeaudio.addEventListener('input', function(){
    audio.currentTime = (rangeaudio.value*audio.duration)/100
})

export function NextPlayMusic() {

    if (curretnMusic ===3){
        curretnMusic = 0
        audio.src = playList[curretnMusic].src
        togglePlayAudio()
    } else{
        curretnMusic+=1
        audio.src = playList[curretnMusic].src
        togglePlayAudio()
    }
}

export function PrevPlayMusic() {
    if (curretnMusic ===0){
        curretnMusic = 3
        audio.src = playList[curretnMusic].src
        togglePlayAudio()
    } else{
        curretnMusic-=1
        audio.src = playList[curretnMusic].src
        togglePlayAudio()
    }
}

function activeAudio() {

    document.querySelector('.play-list').querySelectorAll('li').forEach( item=>{
        item.style.color = 'white'
        item.style.backgroundImage = 'url(assets/svg/play.svg)'
    })
    let buffer = `${curretnMusic}`
    buffer = Number(buffer)+1
    document.getElementById(`${buffer.toString()}`).style.color = 'red'
    document.getElementById(`${buffer.toString()}`).style.backgroundImage = 'url(assets/svg/pause.svg)'
}


function changeVolume() {
    mute.classList.toggle('downv')
    audio.muted = audio.muted !== true
    // audio.value === 0 ? audio.muted = true : false
}

function getCurrenSongName() {
    let currSongName = document.querySelector('.song-name')
    currSongName.textContent = playList[curretnMusic].title
        // console.log(playList[curretnMusic].title)

}
