// Select MegaMenu
let otherLinks = document.querySelector('.other-links');
let megaMenu = document.querySelector('.mega-menu');
otherLinks.onmouseover =() => {
    megaMenu.classList.add('open')
}
megaMenu.onmouseleave = () => {
    megaMenu.classList.remove('open')
}
// handle all links
let allLinks = document.querySelectorAll('.main-nav a');
allLinks.forEach(link => {
    link.addEventListener("click",(e)=>{
        e.preventDefault();
        document.querySelector(e.target.dataset.section).scrollIntoView({
            behavior:"smooth"
        })
    })
})

// on scroll
// 
const skillsSection = document.querySelector('.our-skills');
const howWorkSection = document.querySelector('.how-work');
const statisticesSection =document.querySelector('.statistices');
let started = false;
window.onscroll = () =>{
    if(window.scrollY >= skillsSection.offsetTop - 50){
        let spanProgress = document.querySelectorAll('.progrees-holder span')
        spanProgress.forEach(span=>{
            // console.log();
            span.style.width = span.dataset.width;
        })
    }
    if(window.scrollY>= howWorkSection.offsetTop - 280){
        let infoPart = document.querySelector('.how-work .info');
        let image = document.querySelector('.how-work .container img');
        infoPart.classList.add('active')
        image.classList.add('active')
    }
    if(window.scrollY>= statisticesSection.offsetTop - 50){
        let theNumbers = document.querySelectorAll('.statistices .box .number');
        if(!started){
            theNumbers.forEach(number =>{
                startCount(number);
            })
        }
        started = true;
    }
}
function startCount(element){
    let goal = element.dataset.goal;
    let count = setInterval(() => {
        element.textContent++;
        if(element.textContent == goal){
            clearInterval(count)
        }
    },2000 / goal);
}

//----------------------//
// Events section =>Do Number counter
let countDownDate = new Date("dec 31, 2024 23:59:59").getTime();
// console.log(countDownDate)
let counter = setInterval(() => {
    // get date now
    let dateNow = new Date().getTime();
    let dateDiffrence = countDownDate - dateNow;
    // Get Time Units
    let days = Math.floor(dateDiffrence / ( 1000 * 60 * 60 * 24));
    let hours = Math.floor(dateDiffrence % ( 1000 * 60 * 60 * 24) / (1000*60*60));
    let minutes = Math.floor(dateDiffrence % ( 1000 * 60 * 60) / (1000*60));
    let second = Math.floor(dateDiffrence % ( 1000* 60) / (1000));
    document.getElementById("days").innerHTML=days;
    document.getElementById("hours").innerHTML=hours;
    document.getElementById("minutes").innerHTML=minutes;
    document.getElementById("second").innerHTML=second < 10 ? `0${second}` : second;
    if(dateDiffrence <= 0){
        clearInterval(counter)
    }
}, 1000);
// ---------------------- //