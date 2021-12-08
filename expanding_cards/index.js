{
    function f(X){
        let cE = document.getElementsByClassName('active')[0];
        cE.classList.remove('active');
        X.classList.add("active");
    }

    const panels = document.querySelectorAll('.panel');
    panels.forEach((panel) => {
        console.log(panel);
        panel.addEventListener("click", function(event){
            f(panel);
        });
    });

}