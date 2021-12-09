{
    const boxes = document.querySelectorAll('.box');
    const trig = window.innerHeight * 0.8;

    check();
    
    function check(){
        boxes.forEach((box) => {
            const btop = box.getBoundingClientRect().top;
    
            if(btop < trig){
                box.classList.add('show');
            }else{
                box.classList.remove('show');
            }
        });
    }
    
    window.addEventListener("scroll", check);
}