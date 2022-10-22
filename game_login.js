function set_un(){
    player1=document.getElementById("input1").value;
    player2=document.getElementById("input2").value;
    localStorage.setItem("player1_name",player1);
    localStorage.setItem("player2_name",player2);
    window.location="game_page.html";
}