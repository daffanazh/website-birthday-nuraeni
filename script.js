const start = document.getElementById("start");

const modal = document.getElementById("cameraModal");

const video = document.getElementById("video");

const canvas = document.getElementById("canvas");

const countdown = document.getElementById("countdown");

const flash = document.getElementById("flash");

const closeCamera = document.getElementById("closeCamera");

const photo1 = document.getElementById("photo1");

const photo2 = document.getElementById("photo2");

const photo3 = document.getElementById("photo3");

let stream;

let photos=[];

start.onclick = async ()=>{

modal.style.display="flex";

stream = await navigator.mediaDevices.getUserMedia({

video:true

});

video.srcObject=stream;

takeSequence();

}

closeCamera.onclick=()=>{

stream.getTracks().forEach(track=>track.stop());

modal.style.display="none";

}

async function takeSequence(){

photos=[];

for(let i=3;i>0;i--){

await countdownTimer();

takePhoto();

}

stream.getTracks().forEach(track=>track.stop());

modal.style.display="none";

showPhotos();

}

function countdownTimer(){

return new Promise(resolve=>{

let n=3;

countdown.style.display="block";

countdown.innerHTML=n;

let interval=setInterval(()=>{

n--;

if(n==0){

clearInterval(interval);

countdown.style.display="none";

resolve();

}else{

countdown.innerHTML=n;

}

},1000);

});

}

function takePhoto(){

flash.classList.add("flash-animation");

setTimeout(()=>{

flash.classList.remove("flash-animation");

},300);

canvas.width=video.videoWidth;

canvas.height=video.videoHeight;

canvas.getContext("2d").drawImage(

video,

0,

0

);

photos.push(canvas.toDataURL("image/png"));

}

function showPhotos(){

if(photos.length>=3){

photo1.src=photos[0];

photo2.src=photos[1];

photo3.src=photos[2];

}

}

/* ===========================
   TIUP LILIN
=========================== */

document.addEventListener("DOMContentLoaded", () => {

    const blowBtn = document.getElementById("blow");
    const flames = document.querySelectorAll(".flame");
    const smokes = document.querySelectorAll(".smoke");
    const cake = document.querySelector(".cake3d");

    blowBtn.addEventListener("click", () => {

        // tombol tidak bisa diklik dua kali
        blowBtn.disabled = true;

        // animasi kue
        cake.classList.add("cakeBounce");

        flames.forEach((flame, index) => {

            setTimeout(() => {

                flame.classList.add("out");

                if(smokes[index]){
                    smokes[index].classList.add("show");
                }

            }, index * 200);

        });

        setTimeout(() => {

            document.getElementById("birthdayModal").classList.add("show");

        },1500);

    });

    

});

document.getElementById("continueBtn").onclick=()=>{

    document.getElementById("birthdayModal")
    .classList.remove("show");

}