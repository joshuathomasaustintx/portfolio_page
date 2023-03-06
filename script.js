

// PORTRAIT MOUSEOVER STYLE CHANGE

let image = document.getElementById("portrait");


let changePhoto = function() {
    image.style.opacity = 1;
    image.style.filter = 'none';
}

let resetPhoto = function() {
   
    image.style.opacity = 0.75;
    image.style.filter = 'gray(0.75)';

}


image.addEventListener('mouseover', changePhoto);
image.addEventListener('mouseout', resetPhoto);

