/*calling them all in one function will cause all the animals make sounds at the same time :') */

function play1(){
    var audio1 = document.getElementById("hau");
    audio1.play(); }

function play2(){
    var audio2 = document.getElementById("miau");
    audio2.play(); }

function play3(){
    var audio3 = document.getElementById("purpur");
    audio3.play(); }

function play4(){
    var audio4 = document.getElementById("ihahaa");
    audio4.play(); }

function play5(){
    var audio5 = document.getElementById("huhuu");
    audio5.play(); }

function play6(){
    var audio6 = document.getElementById("howl");
    audio6.play(); }

function play7(){
    var audio7 = document.getElementById("roar");
    audio7.play(); }

function play8(){
    var audio8 = document.getElementById("pruut");
    audio8.play(); }

function play9(){
    var audio9 = document.getElementById("song");
    audio9.play(); }


//just remove if you want to display all the images, I have this saved elsewhere :)
    let index = 1;
    showSlides(index);
    
    // Next/previous controls
    function siirry(n) {
      showSlides(index += n);
    }
   
    function showSlides(n) {
      let i;
      let slides = document.getElementsByClassName("slide");
      if (n > slides.length) {index = 1}
      if (n < 1) {index = slides.length}
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slides[index-1].style.display = "block";
    }
