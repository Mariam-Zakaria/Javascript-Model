var imgs = document.getElementsByClassName('img-item'),
    lightboxItem = document.querySelector('.lightbox-item'),
    lightboxContainer = document.querySelector('.lightbox-container'),
    imgsArray = [],
    next = document.getElementById('next'),
    prev = document.getElementById('prev'),
    wClose = document.getElementById('wClose'),
    currentIndex = 0;



for(var i=0; i<imgs.length; i++){

    imgsArray.push(imgs[i]);

    imgs[i].addEventListener('click', function(e){
        lightboxContainer.classList.add('show');
        var imgSrc = e.target.src;
        lightboxItem.style.backgroundImage = "url("+imgSrc+")";

        currentIndex = imgsArray.indexOf(e.target);
    })
}


next.addEventListener('click', function(e){
    nextFunction();
});
function nextFunction(){
    currentIndex++;
    if(currentIndex == imgsArray.length){
        currentIndex = 0;
    }
    lightboxItem.style.backgroundImage = "url("+imgsArray[currentIndex].src+")";
};



prev.addEventListener('click', function(e){
    prevFunction();
});
function prevFunction(){
    currentIndex--;
    if(currentIndex < 0){
        currentIndex = imgsArray.length -1;
    }
    lightboxItem.style.backgroundImage = "url("+imgsArray[currentIndex].src+")";
}


wClose.addEventListener('click', function(){
    lightboxContainer.classList.remove('show');
})



document.addEventListener('keydown' , function(e){

    if(e.keyCode == 27){
        lightboxContainer.classList.remove('show');
    }
    else if (e.keyCode == 39){
        nextFunction();
    }
    else if(e.keyCode == 37){
        prevFunction();
    }
});


document.addEventListener('click' , function(e){
    if(e.target == lightboxContainer){
        lightboxContainer.classList.remove('show');
    }
})