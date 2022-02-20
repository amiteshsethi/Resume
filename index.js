// ==========================================================================
// Skill bar animation  
// ==========================================================================

var animationDone = false;
var progressbar = document.querySelectorAll('.performance');
var skillsContainer= document.getElementById('skills') ;

function initialisebars(){
    for (var bar of progressbar){
        bar.style.width = 0 + '%';
    }
}
initialisebars();

function fillbars() {
    for (let bar of progressbar){
        let currentWidth =0 ;
        let intrval = setInterval(function(){
            let targetWidth = bar.getAttribute('data-bar-width') ; 
            if(currentWidth >= targetWidth){
                clearInterval(intrval);
                return;
            }
            currentWidth++;
            bar.style.width = currentWidth  + '%';
        },20);
    }
}

function checkScroll(){
    var coordinates = skillsContainer.getBoundingClientRect();
    if (!animationDone && coordinates.top <= window.innerHeight){
        animationDone = true;  
        fillbars();
    }else if(coordinates.top > window.innerHeight1) {
        animationDone = false;
        initialisebars();
    }
}

window.addEventListener("scroll", checkScroll);
