/* ajout des évènement aux clics*/
window.addEventListener('click', (e) =>{
    let cercle = document.createElement("div");
    cercle.classList.add("clickAnim");
    cercle.style.top = `${e.pageY - 15}px`;
    cercle.style.left = `${e.pageX -15}px`;
    document.body.appendChild(cercle); 
})