const next = document.getElementById("btn_commencer");

next.addEventListener('click', () => {
    const block_inside2 = document.getElementsByClassName("block_inside2")[0];
    if (block_inside2) {
       
            block_inside2.style.display = "block";
            next.style.display = "none";
    }
})