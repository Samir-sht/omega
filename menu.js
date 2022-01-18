let togglemenu=document.getElementById("navbar");
let navbars=document.getElementById("js-navbar-toggle");

    navbars.addEventListener("click",function(){
        togglemenu.classList.toggle('active');
    });


    //Study Abroad
    let study=document.getElementById("studies");
    let studymenu=document.getElementById("menus");
    study.addEventListener("click",function(){
        studymenu.classList.toggle('active');
    });

