{
    let open_btn = document.querySelector('.nav_button.open');
    let close_btn = document.querySelector('.nav_button.close');

    let art = document.querySelector('.article');
    
    open_btn.addEventListener("click", (event) => {
        art.classList.remove('rotate-back');
        art.classList.add('rotate-for');
        close_btn.classList.remove('hidden');
        open_btn.classList.add('hidden');
    });

    close_btn.addEventListener("click", (event) => {
        art.classList.remove('rotated-for');
        art.classList.add('rotate-back');
        open_btn.classList.remove('hidden');
        close_btn.classList.add('hidden');
    });
}