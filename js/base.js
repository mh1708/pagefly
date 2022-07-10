window.addEventListener("DOMContentLoaded",function(){
    const header = document.querySelector(".header");
    window.addEventListener("scroll", function(){
    if(window.pageYOffset > header.scrollTop){
        header.classList.add("active");
        document.querySelector(".header-logo__img").src = "images/logo_dark.svg";
    }else{
        header.classList.remove("active");
        document.querySelector(".header-logo__img").src = "images/logo.svg";      
    }
   })
//    acordion
// Select all accordion items
// Select all accordion items
var acc = document.querySelectorAll('.accordion__button');

// Iterate to add event listeners
acc.forEach(item => {
    item.addEventListener('click', function () {
        // When it's clicked, loop through all the items
        acc.forEach(el => {
            // Close any open items
            if (el.classList.contains('active')) {
                closeAcc(el);
                // If it's the one that was clicked and it's closed, open it
            } else if (el === item) {
                openAcc(el);
            }
        });
    });
});

function closeAcc (el) {
    el.classList.remove('active');
    el.nextElementSibling.style.maxHeight = null;
};

function openAcc (el) {
    el.classList.add('active');
    el.nextElementSibling.style.maxHeight = el.nextElementSibling.scrollHeight + 'px';
}
// open sreach__box
    const btn_search =document.querySelector(".searchBox")
    btn_search.addEventListener("click", function(){
        
    })
});
