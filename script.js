let slideIndex1 = 0;
showSlides1();

function showSlides1(){
    let i;
    let slides = document.getElementsByClassName("imageslideshow1");
    for(i=0;i<slides.length;i++)
    {
        slides[i].style.display="none";
    }
    slideIndex1++;
    if(slideIndex1>slides.length)
    {
        slideIndex1=1;
    }
    slides[slideIndex1-1].style.display="block";
    setTimeout(showSlides1,4000);
}
let slideIndex2 = 0;
showSlides2();

function showSlides2(){
    let i;
    let slides = document.getElementsByClassName("imageslideshow2");
    for(i=0;i<slides.length;i++)
    {
        slides[i].style.display="none";
    }
    slideIndex2++;
    if(slideIndex2>slides.length)
    {
        slideIndex2=1;
    }
    slides[slideIndex2-1].style.display="block";
    setTimeout(showSlides2,4000);
}

let slideIndex3 = 0;
showSlides3();

function showSlides3(){
    let i;
    let slides = document.getElementsByClassName("imageslideshow3");
    for(i=0;i<slides.length;i++)
    {
        slides[i].style.display="none";
    }
    slideIndex3++;
    if(slideIndex3>slides.length)
    {
        slideIndex3=1;
    }
    slides[slideIndex3-1].style.display="block";
    setTimeout(showSlides3,4000);
}

let slideIndex4 = 0;
showSlides4();

function showSlides4(){
    let i;
    let slides = document.getElementsByClassName("imageslideshow4");
    for(i=0;i<slides.length;i++)
    {
        slides[i].style.display="none";
    }
    slideIndex4++;
    if(slideIndex4>slides.length)
    {
        slideIndex4=1;
    }
    slides[slideIndex4-1].style.display="block";
    setTimeout(showSlides4,4000);
}

let slideIndex5 = 0;
showSlides5();

function showSlides5(){
    let i;
    let slides = document.getElementsByClassName("imageslideshow5");
    for(i=0;i<slides.length;i++)
    {
        slides[i].style.display="none";
    }
    slideIndex5++;
    if(slideIndex5>slides.length)
    {
        slideIndex5=1;
    }
    slides[slideIndex5-1].style.display="block";
    setTimeout(showSlides5,4000);
}

let slideIndex6 = 0;
showSlides6();

function showSlides6(){
    let i;
    let slides = document.getElementsByClassName("imageslideshow6");
    for(i=0;i<slides.length;i++)
    {
        slides[i].style.display="none";
    }
    slideIndex6++;
    if(slideIndex6>slides.length)
    {
        slideIndex6=1;
    }
    slides[slideIndex6-1].style.display="block";
    setTimeout(showSlides6,4000);
}

let slideIndex7 = 0;
showSlides7();

function showSlides7(){
    let i;
    let slides = document.getElementsByClassName("imageslideshow7");
    for(i=0;i<slides.length;i++)
    {
        slides[i].style.display="none";
    }
    slideIndex7++;
    if(slideIndex7>slides.length)
    {
        slideIndex7=1;
    }
    slides[slideIndex7-1].style.display="block";
    setTimeout(showSlides7,4000);
}