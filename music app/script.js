console.log("welcome to musify");

let songIndex = 0;
let audioElement = new Audio('songs/stay.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let mastersongname = document.getElementById('mastersongname');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
{songname: "STAY", filePath: "songs/stay.mp3", coverPath:"cover/stay.jpeg"},
{songname: "Ay Hirathe", filePath: "songs/ayhirathe.mp3", coverPath:"cover/ayhairathe.jpeg"},
{songname: "Chammak Challo", filePath: "songs/chammakchallo.mp3", coverPath:"cover/chammakchallo.jpeg"},
{songname: "Paviza Mazha", filePath: "songs/pavizamaza.mp3", coverPath:"cover/pavizamaza.jpeg"},
{songname: "Habibo", filePath: "songs/habibo.mp3", coverPath:"cover/habibo.jpeg"},
{songname: "She Move It Like", filePath: "songs/shemoveitlike.mp3", coverPath:"cover/shemoveitlike.jpeg"},
]

songItems.forEach((element, i) =>{
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songname")[0].innerText = songs[i].songname;
})



masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
        
    }else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle'); 
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity=0;
    }
})

audioElement.addEventListener('timeupdate', ()=>{
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime=myProgressBar.value * audioElement.duration/100;

})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-circle-play');
        
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        songIndex = parseInt(e.target.id);
        makeAllPlays();
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = songs[songIndex].filePath;
        mastersongname.innerText =songs[songIndex].songname;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-pause-circle');
    });
});

document.getElementById('next').addEventListener('click', ()=>{
   if(songIndex>5){
    songIndex=0
   } else{
    songIndex += 1;
   }
   audioElement.src = songs[songIndex].filePath;
   mastersongname.innerText =songs[songIndex].songname;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<0){
     songIndex=5
    } else{
     songIndex -= 1;
    }
    audioElement.src = songs[songIndex].filePath;
    mastersongname.innerText =songs[songIndex].songname;
         audioElement.currentTime = 0;
         audioElement.play();
         gif.style.opacity=1;
         masterPlay.classList.remove('fa-circle-play');
         masterPlay.classList.add('fa-pause-circle');
 })

 
document


