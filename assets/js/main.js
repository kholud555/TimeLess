
/*=============== Cursor ===============*/
const Cursor = document.querySelector(".Cursor");

window.addEventListener("mousemove" , function(Place)
{
    const posX = Place.clientX;
    const posY = Place.clientY;
    Cursor.style.left = `${posX}px`;
    Cursor.style.top = `${posY}px`;
})



/*=========== Banner Slider ============*/
//String to array
let Slider = Array.from(document.querySelectorAll('.Banner'));
let NextBtn_Black = document.getElementById("Next--Black");
let PrevBtn_Black = document.getElementById("prev--Black");
let NextBtn_Brown = document.getElementById("Next--Brown");
let PrevBtn_Brown = document.getElementById("prev--Brown");

let CurrentSlide = 1;
//Slide To Start
Slider[0].classList.add('active');

function SlideMovement ()
{
    RemoveActiveClasses();

    if(CurrentSlide === 0)
    {
        CurrentSlide = 2;
        Slider[1].classList.add('active');
    }
    else{
        Slider[CurrentSlide - 1].classList.add('active');
    }
    
}

function RemoveActiveClasses()
{
    Slider.forEach(function(Slide){
        Slide.classList.remove('active');
    })
}

function triggerScrollReveal(imgSelector, watchSelector, textSelector) {
    ScrollReveal().reveal(watchSelector, { origin: 'bottom', distance: '800px', duration: 1000, delay: 900 ,reset:false});
    ScrollReveal().reveal('.ScrollR-whiteLayer',{origin: 'left',distance: '800px',duration: 600,delay: 1000,reset:false});
    ScrollReveal().reveal('.ScrollR-whiteLayer2',{origin: 'left',distance: '800px',duration: 600,delay: 1000,reset:false});
    ScrollReveal().reveal(imgSelector, { origin: 'left', distance: '800px', duration: 2000, delay: 1300,reset:false});
    ScrollReveal().reveal(textSelector, { origin: 'right', distance: '800px', duration: 2000, delay: 1300,reset:false});
    // return ScrollReveal().reveal();
}

NextBtn_Black.onclick = NextSLide;
PrevBtn_Black.onclick = PrevSLide;

NextBtn_Brown.onclick = NextSLide;
PrevBtn_Brown.onclick = PrevSLide;

function NextSLide ()
{
    if(CurrentSlide === 2)
    {
        CurrentSlide = 1;
        SlideMovement ();
        //ScrollReveal().reveal('.Center-Watch ,.Center-Watch2',{origin: 'bottom',distance: '800px',duration: 600,delay:550});
        triggerScrollReveal('#Slider--Img1', '#Watch1', '#Slider--Text1');
    }
    else{
        CurrentSlide++;
        SlideMovement ();
        //ScrollReveal().reveal('.Center-Watch ,.Center-Watch2',{origin: 'bottom',distance: '800px',duration: 600,delay:550});
        triggerScrollReveal('#Slider--Img2', '#Watch2', '#Slider--Text2');
    }
}
function PrevSLide ()
{
    if(CurrentSlide === 1)
    {
        CurrentSlide --;
        SlideMovement ();
        //ScrollReveal().reveal('.Center-Watch , .Center-Watch2',{origin: 'bottom',distance: '800px',duration: 600,delay:550});
        triggerScrollReveal('#Slider--Img2', '#Watch2', '#Slider--Text2');
    }
    else{
        CurrentSlide--;
        SlideMovement ();
    //ScrollReveal().reveal('.Center-Watch , .Center-Watch2',{origin: 'bottom',distance: '800px',duration: 600,delay:550});
    triggerScrollReveal('#Slider--Img1', '#Watch1', '#Slider--Text1');

}
}
/*=========== SCROLL UP ============*/
const ScrollUp = document.querySelector(".ScrollUp");

window.onscroll = function()
{
    if(scrollY >= 100)
    {
        ScrollUp.style.display = "block";
    }
    else
    {
        ScrollUp.style.display = "none";
    }
}
ScrollUp.onclick = function()
{
    scroll({
        top:0,
        left:0,
        behavior: 'smooth'
    })
}
/*=============== SCROLL REVEAL ===============*/

    let SlideLeft = {
        origin: 'left',
        distance: '800px',
        duration: 2000,
        delay: 1300,
        reset:false //Animation repeat
    }

    let SlideRight = {
        origin: 'right',
        distance: '800px',
        duration: 2000,
        delay: 1300,
        reset:false//Animation repeat
    }

    let CenterWatch = {
        origin: 'bottom',
        distance: '800px',
        duration: 1000,
        delay: 900,
        reset:false //Animation repeat
    }

    /*============= BANNER ================*/
    ScrollReveal().reveal('#Watch1', CenterWatch);
    ScrollReveal().reveal('.ScrollR-whiteLayer',{origin: 'left',distance: '800px',duration: 600,delay: 1000,reset:false});
    ScrollReveal().reveal('#Slider--Img1', SlideLeft);
    ScrollReveal().reveal('#Slider--Text1', SlideRight);
    /*============= OurStory ================*/
    ScrollReveal().reveal('.Brown--Layer', {origin:'left',distance:'400px',duration:300,delay:0});
    ScrollReveal().reveal('.Dark--Layer', {origin:'left',distance:'400px',duration:500,delay:300});
    ScrollReveal().reveal('.Our--Story--Img', {origin:'left',distance:'400px',duration:900,delay:500});
