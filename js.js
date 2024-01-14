
//animace revealu
window.addEventListener('scroll', reveal);

function reveal(){
    let reveals = document.querySelectorAll('.reveal');

    for(let i = 0; i < reveals.length; i++){
        let windowHeight = window.innerHeight;
        let revealTop = reveals[i].getBoundingClientRect().top;
        let revealPoint = 150;

        if(revealTop < windowHeight - revealPoint){
            reveals[i].classList.add('actives');
        }
        else{
            reveals[i].classList.remove('actives');
        }
    }
}


//aktivace navbaru
document.addEventListener("DOMContentLoaded", function() {
    let sections = document.querySelectorAll("section"); 
    
    function makeNavLinksActive() {
      let scrollPosition = window.pageYOffset;
      
      sections.forEach(function(current) {
        let sectionTop = current.offsetTop - 200; 
        let sectionHeight = current.offsetHeight;
        let sectionId = current.getAttribute("id");
        let navLink = document.querySelector('a[href="#' + sectionId + '"]');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          navLink.classList.add("active");
        } else {
          navLink.classList.remove("active");
        }
      });
    }
    
    window.addEventListener("scroll", makeNavLinksActive);
  });



  //uspechy
  $(document).ready(function(){
    $(".action").click(function(e){
        e.preventDefault();

        $(".slide").removeClass("activeU");
        let slide = $(this).closest(".slide");
        slide.addClass("activeU");
    });

});


checkWidth = function(){
    let windowsize = $(window).width();
    if (windowsize > 480) {
        let slideWidth = $('.activeU').width();
        $('.slide-content').css({
            "width" : slideWidth+"px"
        });
    }
    
}

$(window).resize(function() {
    checkWidth();
    clearTimeout(window.resizedFinished);
    window.resizedFinished = setTimeout( checkWidth , 500);
});


//modalni okno odeslat
document.addEventListener('DOMContentLoaded', function () {
  // Přiřazení funkce k tlačítku "ODESLAT"
  document.getElementById('odeslatBtn').addEventListener('click', function () {
    // Otevření modálního okna
    $('#odeslatModal').modal('show');
  });
});