// ==========================
// SKYLAR ACADEMY SCRIPT
// ==========================

// Animated Counter
const counters = document.querySelectorAll(".count");

const runCounter = () => {
    counters.forEach(counter => {

        const target = +counter.getAttribute("data-target");
        let count = 0;

        const speed = target / 120;

        const update = () => {

            if (count < target) {

                count += speed;

                counter.innerHTML = Math.ceil(count);

                setTimeout(update, 20);

            } else {

                counter.innerHTML = target;

                if(target==1000){
                    counter.innerHTML="1000+";
                }

                if(target==98){
                    counter.innerHTML="98%";
                }

            }

        };

        update();

    });
};

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

runCounter();

observer.disconnect();

}

});

});

const counterSection=document.querySelector(".counter");

if(counterSection){

observer.observe(counterSection);

}

// Smooth Scroll

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href")).scrollIntoView({

behavior:"smooth"

});

});

});

// Navbar Shadow

window.addEventListener("scroll",()=>{

const header=document.querySelector("header");

if(window.scrollY>50){

header.style.background="rgba(0,0,0,.85)";
header.style.boxShadow="0 0 20px rgba(255,140,0,.4)";

}else{

header.style.background="rgba(0,0,0,.55)";
header.style.boxShadow="none";

}

});

// Hero Text Animation

const title=document.querySelector(".hero h1");

if(title){

title.animate([

{transform:"translateY(-20px)",opacity:0},

{transform:"translateY(0)",opacity:1}

],{

duration:1500,

fill:"forwards"

});

}

// Floating Cards

document.querySelectorAll(".box").forEach((box,index)=>{

box.animate([

{transform:"translateY(0px)"},

{transform:"translateY(-12px)"},

{transform:"translateY(0px)"}

],{

duration:2500+(index*200),

iterations:Infinity

});

});

// Mouse Glow

document.addEventListener("mousemove",(e)=>{

const glow=document.querySelector(".cursor-glow");

if(glow){

glow.style.left=e.clientX+"px";

glow.style.top=e.clientY+"px";

}

});

// Loading Screen

window.addEventListener("load",()=>{

const loader=document.querySelector(".loader");

if(loader){

loader.style.opacity="0";

setTimeout(()=>{

loader.style.display="none";

},700);

}

});

// Scroll To Top Button

const topBtn=document.createElement("button");

topBtn.innerHTML="⬆";

topBtn.id="topBtn";

document.body.appendChild(topBtn);

topBtn.style.position="fixed";
topBtn.style.right="20px";
topBtn.style.bottom="110px";
topBtn.style.width="50px";
topBtn.style.height="50px";
topBtn.style.borderRadius="50%";
topBtn.style.border="none";
topBtn.style.background="#ff8800";
topBtn.style.color="#fff";
topBtn.style.fontSize="22px";
topBtn.style.cursor="pointer";
topBtn.style.display="none";
topBtn.style.zIndex="999";

window.addEventListener("scroll",()=>{

if(window.scrollY>300){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

// Welcome Message

setTimeout(()=>{

console.log("Welcome to Skylar Academy");

},1000);

