let btnNav = document.getElementById('btn-nav');
let nav = document.getElementById('nav')
let navNav = document.getElementById('navnav');

//oncroll
window.onscroll = function(){
    if(window.scrollY > 20){
        nav.style.height = '80px'
        navNav.style.height = '80px'
    }else{
        nav.style.height = '100px'
        navNav.style.height = '100px'
    }
}

//on click
btnNav.onclick = function(){
    btnNav.classList.toggle('fa-x')
    console.log('d')
}