{
    let open_btn = document.querySelector('.nav_button.open');
    let close_btn = document.querySelector('.nav_button.close');
    let nav = document.querySelector('.main');

    let art = document.querySelector('.article');
    
    open_btn.addEventListener("click", (event) => {
        art.classList.remove('rotate-back');
        art.classList.add('rotate-for');
        close_btn.classList.remove('hidden');
        open_btn.classList.add('hidden');
        nav.classList.remove('out');
        nav.classList.add('in');
        
    });

    close_btn.addEventListener("click", (event) => {
        art.classList.remove('rotated-for');
        art.classList.add('rotate-back');
        open_btn.classList.remove('hidden');
        close_btn.classList.add('hidden');
        nav.classList.remove('in');
        nav.classList.add('out');
    });
}