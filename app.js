const accordion = document.getElementsByClassName('accordion');
let i;


for(i=0; i < accordion.length; i++) {
    accordion[i].addEventListener('click', (e) => {
        e.target.classList.toggle('bg-red-600');
        let panel = e.target.nextElementSibling;
        if(panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}