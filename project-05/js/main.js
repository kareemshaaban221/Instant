// Document events
document.addEventListener('scroll', scrollFun);

//functions with =>
let onHover = (e)=>{
    let elem = $(e.target);
    let bgColor = elem.attr('class').split(' ')[0];
    e.target.innerHTML = bgColor.split('-')[1];
}
let outHover = (e)=>{
    e.target.innerHTML = '';
}

// Globals
let respNav = document.getElementById('respNav');
let respUl = document.getElementById('respUl');
let mainUl = $('#mainUl').eq(0);
let myNav = $('.myNav').eq(0);

let navBtn = document.getElementById('collapseNavBtn');
navBtn.addEventListener('click', navCollapseFun);

let closeIcon = document.querySelector('#closeIcon i');
closeIcon.addEventListener('click', navCloseIcon);

let upBtn = $('#upBtn').eq(0);
upBtn.click(goToUp);

let themesContainer = $('#themes');
let themesList = themesContainer.children();
for(theme of themesList){
    $(theme).click(turnTheme);
    $(theme).hover(onHover, outHover);
}


/** functions **/
function navCollapseFun(){
    respNav.classList.remove('d-none');
    setTimeout(function(){
        respNav.classList.add('show', 'navPos');
        respNav.classList.remove('hide');
    }, 10);
}

function navCloseIcon(){
    respNav.classList.remove('show');
    respNav.classList.add('hide');
    setTimeout(function(){ // wait 200ms after change display property
        respNav.classList.remove('navPos');
        respNav.classList.add('d-none');
    }, 200);
}

function scrollFun(){
    // bad solution of highlighting scroll navbar elements ********
    // let selected = 0;   // selected nav item to be highlighted

    let y = window.scrollY;
    if(y){
        if(!$('body').hasClass('bg-light')){
            myNav.parent().addClass('bg-white'); //
        }
        else{
            myNav.parent().removeClass('bg-white');
            myNav.parent().addClass('bg-black'); //
        }

        let abouty = $('#about').offset().top - 50;
        let symy = $('#symptoms').offset().top - 50;
        let preveny = $('#prevention').offset().top - 50;
        let treaty = $('#treatment').offset().top - 50;
        let fQy = $('#fQ').offset().top - 50;
        let doDont = $('#doDont').offset().top - 50;
        let news = $('#news').offset().top - 50;
        let footer = $('#footer').offset().top - 50;

        if(y >= 0 && y < abouty){
            scrollHighlight(0);
        }
        else if(y >= abouty && y < symy) { // the second item in the nav
            scrollHighlight(1);
        }
        else if(y >= symy && y < preveny) { // the third
            scrollHighlight(2);
        }
        else if(y >= preveny && y < treaty) { // the fourth
            scrollHighlight(3);
        }
        else if(y >= treaty && y < doDont) {
            scrollHighlight(4);
        }
        else if(y >= doDont && y < fQy) {
            scrollHighlight(-1);
        }
        else if(y >= fQy && y < news) {
            scrollHighlight(5);
        }
        else if(y >= news && y < footer) {
            scrollHighlight(6);
        }
        else{
            scrollHighlight(-1);
        }
    }
    else{
        if(!$('body').hasClass('bg-light')){
            myNav.parent().removeClass('bg-white');
        }
        else{
            myNav.parent().removeClass('bg-black'); //
        }

        scrollHighlight(0);
    }

    if(y >= 600 && !upBtn.hasClass('show')){
        upBtn.removeClass('d-none');
        upBtn.addClass('upBtnPos');
        setTimeout(function(){
            upBtn.addClass('show');
            upBtn.removeClass('hide');
        });
    }
    if(y < 600 && upBtn.hasClass('show')){
        upBtn.removeClass('show upBtnPos');
        upBtn.addClass('hide d-none');
    }
    

    // bad solution of highlighting scroll navbar elements ********
    // for(val of respUl.children){
    //     val.children[0].classList = '';
    // }
    // respUl.children[selected].children[0].classList = "selected";
    respUl.innerHTML = mainUl.html(); // replace mainUl with respUl or vice versa
}

function goToUp(){
    window.scrollTo({
        top: 0
        // behavior: 'smooth'
    })
}

function scrollHighlight(i){
    let allLi = mainUl.children();

    if(i == -1){
        for(val of allLi){
            val.children[0].classList = '';
        }
    }
    else if(!allLi[i].children[0].classList.contains('selected')){
        for(val of allLi){
            val.children[0].classList = '';
        }
        allLi[i].children[0].classList.add('selected');
    }
}

function turnTheme(e){
    let clicked = $(e.target);
    let bgColorClass = clicked.attr('class').split(' ')[0];

    if(bgColorClass == 'bg-primary'){
        bgColorClass = 'bg-darkerBlue';
    }

    $('body').attr('class', bgColorClass);

    let ch = $('body').children();
    ch.push($('.spread')[0]);
    for(elem of ch){
        if($(elem).prop('tagName') == 'SCRIPT'){
            continue;
        }
        for(item of elem.classList){
            if(item.includes('bg-')){
                $(elem).removeClass(item);
            }
        }
        
        $(elem).addClass(bgColorClass);
    }

    // handle spacial case of section.treatment text color
    if(bgColorClass == 'bg-light'){
        lightThemeChanges();
    }
    else{
        lightThemeDiscard();
    }
}

let treatmentText = $('#treatmentText');
let footer = $('#footer');
let myName = $('#myName');
let footerIcons = $('#footerIcons');
function lightThemeChanges(){
    for(item of treatmentText.children()){
        $(item).addClass('text-dark');
    }

    /***** changing elements themes *****/
    var t = footer.children()[0].children;
    for(item of t){
        if(!$(item.children[0]).hasClass('text-dark')){
            $(item.children[0]).removeClass('text-light');
            $(item.children[0]).addClass('text-dark');
        }
        else{
            break;
        }
    }
    if(!myName.hasClass('text-dark')){
        myName.removeClass('text-light');
        myName.addClass('text-dark');
    }
    for(i of footerIcons.children()){
        if(!i.classList.contains('text-dark'))
            i.classList.add('text-dark');
        else
            break;
    }

    /***** changing upBtn themes *****/
    upBtn.removeClass('btn-primary');
    upBtn.addClass('btn-dark');
}

function lightThemeDiscard(){
    for(item of treatmentText.children()){
        $(item).removeClass('text-dark');
    }

    var t = footer.children()[0].children;
    for(item of t){
        if($(item.children[0]).hasClass('text-dark')){
            $(item.children[0]).addClass('text-light');
            $(item.children[0]).removeClass('text-dark');
        }
        else{
            break;
        }
    }
    if(myName.hasClass('text-dark')){
        myName.addClass('text-light');
        myName.removeClass('text-dark');
    }
    for(i of footerIcons.children()){
        if(i.classList.contains('text-dark'))
            i.classList.remove('text-dark');
        else
            break;
    }

    upBtn.addClass('btn-primary');
    upBtn.removeClass('btn-dark');
}