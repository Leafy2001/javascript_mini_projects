{
    const loadText = document.querySelector('.ld-txt');
    const bg = document.querySelector('.bg');

    let load = 0;
    
    let int = setInterval(blurring, 30);

    function blurring(){
        load++;

        if(load === 100){
            clearInterval(int);
            loadText.innerHTML = "";
            bg.style.top = "0px";
            bg.style.left = "0px";
            bg.style.width = "100vw";
            bg.style.height = "100vh";
            return;
        }

        bg.style.filter = "blur(" + (100-load) + "px)";
        loadText.innerHTML = load + "%";
    }
    
}