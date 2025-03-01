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


////////// hide and appear list
let list = document.getElementById("list");
//on click
btnNav.onclick = function(){
    btnNav.classList.toggle('fa-x')
    list.classList.toggle('ha-list')
}



/////////////////////////////////////////////////////////////////////////////
//// appear and hide ul in list
let ulMood = document.getElementById('ul-mood');
let ulMoodIcon = document.getElementById('moodIcon');
let pListLi = document.getElementById('p-list-mood');

pListLi.onclick = function () {
    // إذا كانت القائمة مخفية، قم بإظهارها والعكس
    if (ulMood.style.display === "none" || ulMood.style.display === "") {

        ulMoodIcon.classList.remove('fa-angle-left')
        ulMoodIcon.classList.add('fa-angle-down')
        
        ulMood.style.display = "flex";
        setTimeout(() => ulMood.style.opacity = "1", 50); // إضافة تأثير تدريجي
    } else {
        ulMoodIcon.classList.add('fa-angle-left')
        ulMoodIcon.classList.remove('fa-angle-down')

        ulMood.style.opacity = "0";
        setTimeout(() => ulMood.style.display = "none", 300); // إخفاء القائمة بعد انتهاء التأثير
    }
};

let pListFont = document.getElementById('p-list-font')
let pListFontIcon = document.getElementById('fontIcon')
let listFontUl = document.getElementById('list-font-ul')

pListFont.onclick = function () {
    // إذا كانت القائمة مخفية، قم بإظهارها والعكس
    if (listFontUl.style.display === "none" || listFontUl.style.display === "") {
        listFontUl.style.display = "grid";

        pListFontIcon.classList.remove('fa-angle-left')
        pListFontIcon.classList.add('fa-angle-down')

        setTimeout(() => listFontUl.style.opacity = "1", 50); // إضافة تأثير تدريجي
    } else {
        pListFontIcon.classList.add('fa-angle-left')
        pListFontIcon.classList.remove('fa-angle-down')

        listFontUl.style.opacity = "0";
        setTimeout(() => listFontUl.style.display = "none", 300); // إخفاء القائمة بعد انتهاء التأثير
    }
};








