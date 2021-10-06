$('body').ready(function() {
    goToUp();
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
    let docClick = (e)=>{
        // keep the toggle on after select theme
        if(e.target.parentElement == document.getElementById('themes')){
            ;
        }
        else if(themes.hasClass('show')){
            $(themesBtn.children()[1]).toggleClass('d-none');
            $(themesBtn.children()[0]).toggleClass('d-none');
            themes.toggleClass('show');
        }
    };

    // themes Btn Commented in navbar component
    let themesFunctionLinks = ()=>{
        let currentTheme = "btn-primary";
        if(!$('.themesBtn').eq(0).hasClass('btn-primary')){
            let themesBtnClasses = $('.themesBtn').eq(0).attr('class').split(' ');
            for(let i of themesBtnClasses){
                if(i.substr(0, 3) == 'bg-'){
                    currentTheme = i;
                    break;
                }
            }
        }
        let allThemes = $('#themes').children();
        for(let i of allThemes){
            if($(i).hasClass(currentTheme)){
                turnTheme({target: i});
                break;
            }
        }
    }

    // Globals
    let respNav = document.getElementById('respNav');
    let respUl = document.getElementById('respUl');
    let mainUl = $('#mainUl').eq(0);
    let myNav = $('.myNav').eq(0);

    let navBtn = document.getElementById('collapseNavBtn');
    if(navBtn)  navBtn.addEventListener('click', navCollapseFun);

    let closeIcon = document.querySelector('#closeIcon i');
    if(closeIcon)   closeIcon.addEventListener('click', navCloseIcon);

    let upBtn = $('#upBtn').eq(0);
    if(upBtn) upBtn.click(goToUp);

    let themesContainer = $('#themes');
    let themesList = themesContainer.children();
    for(theme of themesList){
        $(theme).click(turnTheme);
        $(theme).hover(onHover, outHover);
    }

    let themes = $('#themes');
    let themesBtn = $('#themesBtn');
    if(themesBtn)   themesBtn.click(themesBtnAction)

    $(document).click(docClick);

    var children = $(respUl).children();
    for(i of children){
        $(i).click(themesFunctionLinks);
    }
    var children = mainUl.children();
    for(i of children){
        $(i).click(themesFunctionLinks);
    }

    /** functions **/
    function themesBtnAction(){
        if(!themes.hasClass('show')){
            $(themesBtn.children()[0]).addClass('d-none');
            $(themesBtn.children()[1]).removeClass('d-none');
        }
        else{
            $(themesBtn.children()[1]).addClass('d-none');
            $(themesBtn.children()[0]).removeClass('d-none');
        }
    }

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
        let theme = $('body').attr('class');
        if(y){
            if(typeof(theme) != 'undefined'){
                myNav.parent().addClass(theme+'Lighter');
            }
            else{
                myNav.parent().addClass('bg-white');
            }
        }
        else{
            if(typeof(theme) != 'undefined'){
                myNav.parent().removeClass(theme+'Lighter');
            }
            else{
                myNav.parent().removeClass('bg-white');
            }
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

        let oldTheme = $('body').attr('class');

        myNav.parent().removeClass(oldTheme);

        $('body').attr('class', bgColorClass);

        turnColor('app-navbar', bgColorClass);
        turnColor($($('app-root').children()[2]).prop('tagName'), bgColorClass);
        turnColor('app-footer', bgColorClass);

        myNav.parent().removeClass(bgColorClass);

        // handle spacial case of section.treatment text color
        if(bgColorClass == 'bg-light'){
            lightThemeChanges();
        }
        else{
            lightThemeDiscard();
        }

        // handle danger text in danger theme to prevent color conflict
        let dangerText = $('#dangerText');
        if(bgColorClass == 'bg-danger'){
            dangerText.removeClass('text-danger');
            dangerText.addClass('headerColor');
        }
        else{
            dangerText.addClass('text-danger');
            dangerText.removeClass('headerColor');
        }

        // change upBtn theme color
        if(typeof(oldTheme) != 'undefined'){
            upBtn.removeClass(oldTheme+'LighterBtn');
            themesBtn.removeClass(oldTheme+'LighterBtn');
        }
        else{
            upBtn.removeClass('btn-primary');
            themesBtn.removeClass('btn-primary');
        }
        upBtn.addClass(bgColorClass+'LighterBtn');
        themesBtn.addClass(bgColorClass+'LighterBtn');

        $('#errorBanner').addClass(bgColorClass+'Lighter');

        goToUp();
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
        // upBtn.removeClass('btn-primary');
        // upBtn.addClass('btn-dark');
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

        // upBtn.addClass('btn-primary');
        // upBtn.removeClass('btn-dark');
    }

    function turnColor(elem, color) {
        if(typeof(elem) != 'string') {
            throw new Error('Must pass string!');
        }
        let ch = $(elem).children();
        if($(ch[0]).hasClass('about')){
            ch.push($('.spread')[0]);
        }
        for(i of ch){
            if($(i).prop('tagName') == 'SCRIPT'){
                continue;
            }
            for(item of i.classList){
                if(item.includes('bg-')){
                    $(i).removeClass(item);
                }
            }
            
            $(i).addClass(color);
        }
    }

    mainUl.click(highlighting);
    respUl.onclick = highlighting;

    function highlighting(){
        let href = location.href.split('/')[3];
        if(href == 'home'){
            scrollHighlight(0);
        }
        else if(href == 'about'){
            scrollHighlight(1);
        }
        else if(href == 'symptoms'){
            scrollHighlight(2);
        }
        else if(href == 'prevention'){
            scrollHighlight(3);
        }
        else if(href == 'treatment'){
            scrollHighlight(4);
        }
        else if(href == 'faq'){
            scrollHighlight(5);
        }
        else if(href == 'news'){
            scrollHighlight(6);
        }
        else{
            scrollHighlight(-1);
        }

        respUl.innerHTML = mainUl.html();

        goToUp();
    }

    let href = location.href.split('/')[3];
    if(href == 'home'){
        scrollHighlight(0);
    }
    else if(href == 'about'){
        scrollHighlight(1);
    }
    else if(href == 'symptoms'){
        scrollHighlight(2);
    }
    else if(href == 'prevention'){
        scrollHighlight(3);
    }
    else if(href == 'treatment'){
        scrollHighlight(4);
    }
    else if(href == 'faq'){
        scrollHighlight(5);
    }
    else if(href == 'news'){
        scrollHighlight(6);
    }
    else{
        scrollHighlight(-1);
    }
    respUl.innerHTML = mainUl.html();
})