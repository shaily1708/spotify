
console.log("WELCOME TO MY SPOTIFY");
let songIndex = 0;
let poster = document.getElementById('image');
let audioElement =  new Audio('0.mp3');
let masterPlay = document.getElementById('ctrlicon');
let masterPla = document.getElementById('ctrlico');
let myProgressBar = document.getElementById('progress');
let myProgressBa = document.getElementById('progress2');
let masterSongName = document.getElementById('masterSongName');
let masterSongNam = document.getElementById('songname');
let masterSongNa = document.getElementById('singer');
let songItemPlay = document.getElementsByClassName('songItemPlay');
let background = document.getElementById("container1");
let songs = [
    {songName: "Namo Namo", filePath: "0.mp3", coverPath: "namo.jpeg",singerName: "Amit Trivedi"},
    {songName: "Thunder", filePath: "1.mp3", coverPath: "thunder.jpg",singerName: "Imagine Dragons"},
    {songName: "Maan Meri Jaan", filePath: "2.mp3", coverPath: "maan.jpg",singerName: "King"},
    {songName: "Who Din", filePath: "3.mp3", coverPath: "chichhore.jpg",singerName: "Arijit Singh"},
    {songName: "Gulabi Ankhen", filePath: "4.mp3", coverPath: "gulabi.jpg",singerName: "Sanam"},
    {songName: "Excuses", filePath: "5.mp3", coverPath: "excuses.jpg",singerName: "A.P.Dhillon"},
    {songName: "Raatain", filePath: "6.mp3", coverPath: "raatain.jpg",singerName: "Jubin Nautiyal"},
]
var img = ["0.jpg","1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg"];


masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        masterPla.classList.remove('fa-play');
        masterPla.classList.add('fa-pause');
       
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-play');
        masterPla.classList.remove('fa-pause');
        masterPla.classList.add('fa-play');
       
    }
})
masterPla.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPla.classList.remove('fa-play');
        masterPla.classList.add('fa-pause');
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
       
    }
    else{
        audioElement.pause();
        masterPla.classList.remove('fa-pause');
        masterPla.classList.add('fa-play');
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-play');
    }
})

audioElement.addEventListener('timeupdate', ()=>{
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
    myProgressBar.value = progress;
})
myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})
audioElement.addEventListener('timeupdate', ()=>{
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
    myProgressBa.value = progress;
})
myProgressBa.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBa.value * audioElement.duration/100;
})
const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause');
        element.classList.add('fa-play');
    })
}
Array.from(songItemPlay).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeAllPlays();
        songIndex =  parseInt(e.target.id);
        audioElement.src = `${songIndex}.mp3`;
        poster.src =  `${songIndex}.jpg`;
        if(songIndex==0){
            background.style.backgroundImage = "url('0.jpg')";
         
        }
        else if(songIndex==1){
            background.style.backgroundImage = "url('1.jpg')";
      
        }
        else if(songIndex==2){
            background.style.backgroundImage = "url('2.jpg')";
      
        }
        else if(songIndex==3){
            background.style.backgroundImage = "url('3.jpg')";
      
        }
        else if(songIndex==4){
            background.style.backgroundImage = "url('4.jpg')";
      
        }
        else if(songIndex==5){
            background.style.backgroundImage = "url('5.jpg')";
      
        }
        else if(songIndex==6){
            background.style.backgroundImage = "url('6.jpg')";
      
        }
        masterSongName.innerText = songs[songIndex].songName;
        masterSongNam.innerText = songs[songIndex].songName;
        masterSongNa.innerText = songs[songIndex].singerName;
        if(audioElement.paused || audioElement.currentTime<=0){
            audioElement.play();
            masterPla.classList.remove('fa-play');
            masterPla.classList.add('fa-pause');
            masterPlay.classList.remove('fa-play');
            masterPlay.classList.add('fa-pause');
            e.target.classList.remove('fa-play');
        e.target.classList.add('fa-pause');
        }
        else if(audioElement.play){
            audioElement.pause();
            masterPla.classList.remove('fa-pause');
            masterPla.classList.add('fa-play');
            masterPlay.classList.remove('fa-pause');
            masterPlay.classList.add('fa-play');
            e.target.classList.remove('fa-pause');
            e.target.classList.add('fa-play');
        }
    })
})
    
document.getElementById('next').addEventListener('click', ()=>{
           if(songIndex>=6){
            songIndex=0
            
           }
           else{
            songIndex += 1;
         
           }
           audioElement.src = `${songIndex}.mp3`;
           poster.src =  `${songIndex}.jpg`;
           masterSongName.innerText = songs[songIndex].songName;
           masterSongNam.innerText = songs[songIndex].songName;
           masterSongNa.innerText = songs[songIndex].singerName;
           audioElement.currentTime = 0;
           audioElement.play();
           masterPlay.classList.remove('fa-play');
           masterPlay.classList.add('fa-pause'); 
           masterPla.classList.remove('fa-play');
           masterPla.classList.add('fa-pause');
        
})
document.getElementById('nex').addEventListener('click', ()=>{
    if(songIndex>=6){
     songIndex=0
    }
    else{
     songIndex += 1;
    }
    audioElement.src = `${songIndex}.mp3`;
    poster.src =  `${songIndex}.jpg`;
    masterSongName.innerText = songs[songIndex].songName;
    masterSongNam.innerText = songs[songIndex].songName;
    masterSongNa.innerText = songs[songIndex].singerName;
    audioElement.currentTime = 0;
    audioElement.play();
     masterPla.classList.remove('fa-play');
    masterPla.classList.add('fa-pause');
    masterPlay.classList.remove('fa-play');
           masterPlay.classList.add('fa-pause'); 
 
})
document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
     songIndex=0
    }
    else{
     songIndex -= 1;
    }
    audioElement.src = `${songIndex}.mp3`;
    poster.src =  `${songIndex}.jpg`;
    masterSongName.innerText = songs[songIndex].songName;
    masterSongNam.innerText = songs[songIndex].songName;
    masterSongNa.innerText = songs[songIndex].singerName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');  
    masterPla.classList.remove('fa-play');
    masterPla.classList.add('fa-pause');
})
document.getElementById('previou').addEventListener('click', ()=>{
    if(songIndex<=0){
     songIndex=0
    }
    else{
     songIndex -= 1;
    }
    audioElement.src = `${songIndex}.mp3`;
    poster.src =  `${songIndex}.jpg`;
    masterSongName.innerText = songs[songIndex].songName;
    masterSongNam.innerText = songs[songIndex].songName;
    masterSongNa.innerText = songs[songIndex].singerName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPla.classList.remove('fa-play');
    masterPla.classList.add('fa-pause'); 
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');  
})
document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex==0){
        background.style.backgroundImage = "url('0.jpg')";
     
    }
    else if(songIndex==1){
        background.style.backgroundImage = "url('1.jpg')";
  
    }
    else if(songIndex==2){
        background.style.backgroundImage = "url('2.jpg')";
  
    }
    else if(songIndex==3){
        background.style.backgroundImage = "url('3.jpg')";
  
    }
    else if(songIndex==4){
        background.style.backgroundImage = "url('4.jpg')";
  
    }
    else if(songIndex==5){
        background.style.backgroundImage = "url('5.jpg')";
  
    }
    else if(songIndex==6){
        background.style.backgroundImage = "url('6.jpg')";
  
    }
   
 
})
document.getElementById('nex').addEventListener('click', ()=>{
    if(songIndex==0){
        background.style.backgroundImage = "url('0.jpg')";
     
    }
    else if(songIndex==1){
        background.style.backgroundImage = "url('1.jpg')";
  
    }
    else if(songIndex==2){
        background.style.backgroundImage = "url('2.jpg')";
  
    }
    else if(songIndex==3){
        background.style.backgroundImage = "url('3.jpg')";
  
    }
    else if(songIndex==4){
        background.style.backgroundImage = "url('4.jpg')";
  
    }
    else if(songIndex==5){
        background.style.backgroundImage = "url('5.jpg')";
  
    }
    else if(songIndex==6){
        background.style.backgroundImage = "url('6.jpg')";
  
    }
   
 
})
document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex==0){
        background.style.backgroundImage = "url('0.jpg')";
     
    }
    else if(songIndex==1){
        background.style.backgroundImage = "url('1.jpg')";
  
    }
    else if(songIndex==2){
        background.style.backgroundImage = "url('2.jpg')";
  
    }
    else if(songIndex==3){
        background.style.backgroundImage = "url('3.jpg')";
  
    }
    else if(songIndex==4){
        background.style.backgroundImage = "url('4.jpg')";
  
    }
    else if(songIndex==5){
        background.style.backgroundImage = "url('5.jpg')";
  
    }
    else if(songIndex==6){
        background.style.backgroundImage = "url('6.jpg')";
  
    }
   
 
})
document.getElementById('previou').addEventListener('click', ()=>{
    if(songIndex==0){
        background.style.backgroundImage = "url('0.jpg')";
     
    }
    else if(songIndex==1){
        background.style.backgroundImage = "url('1.jpg')";
  
    }
    else if(songIndex==2){
        background.style.backgroundImage = "url('2.jpg')";
  
    }
    else if(songIndex==3){
        background.style.backgroundImage = "url('3.jpg')";
  
    }
    else if(songIndex==4){
        background.style.backgroundImage = "url('4.jpg')";
  
    }
    else if(songIndex==5){
        background.style.backgroundImage = "url('5.jpg')";
  
    }
    else if(songIndex==6){
        background.style.backgroundImage = "url('6.jpg')";
  
    }
   
 
})
