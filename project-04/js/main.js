i = setTimeout(function() {
    $(document).ready(function() {
        let nav = document.querySelector('nav');
        let start = document.getElementsByTagName('div');
        nav.classList.remove('d-none');
        start[0].classList.add('d-none');
    })
}, 1000)

let head = document.querySelector('.heading h1');
        j = setInterval(function(){
            head.innerHTML += '.'
        }, 100);
        setTimeout(function(){
            clearInterval(j);
        }, 1000);