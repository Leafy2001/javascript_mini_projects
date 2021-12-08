"use strict"

{
    let nxt_btn = document.querySelector('.buttons .next');
    let prev_btn = document.querySelector('.buttons .prev');

    nxt_btn.addEventListener("click", (event) => {
        let steps = document.querySelectorAll('.step');
        let done = false;
        steps.forEach((step) => {
            // console.log(step);
            if(!step.classList.contains('active') && !done){
                step.classList.add('active');
                done = true;
            }
        });

        let lines = document.querySelectorAll('.line');
        done = false;
        lines.forEach((line) => {
            if(!line.classList.contains('active') && !done){
                line.classList.add('active');
                done = true;
            }
        });

        steps = document.querySelectorAll('.step');
        if(steps[steps.length-1].classList.contains('active')){
            nxt_btn.classList.add('disable');
        }
        prev_btn.classList.remove('disable');
    });

    prev_btn.addEventListener("click", (event) => {
        let steps = document.querySelectorAll('.step.active');
        if(steps.length > 1){
            let step = steps[steps.length-1];
            step.classList.remove('active');
        }

        let lines = document.querySelectorAll('.line.active');
        if(lines.length > 0){
            let line = lines[lines.length-1];
            line.classList.remove('active');
        }
        nxt_btn.classList.remove('disable');
        if(steps.length == 2){
            prev_btn.classList.add('disable');
        }
    });

}