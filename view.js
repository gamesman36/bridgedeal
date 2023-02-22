view();
function view(){
    html = /*html*/`
    <p>${player1}</p>
    <p>${player2}</p>
    <p>${player3}</p>
    <p>${player4}</p>
    <button onclick="showHands()">Shuffle</button>
    `;

    app.innerHTML = html;
}