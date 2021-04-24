
var b1 = document.querySelector("#b1")
var b2 = document.querySelector("#b2")
var b3 = document.querySelector("#b3")
var b4 = document.querySelector("#b4")
var b5 = document.querySelector("#b5")
var b6 = document.querySelector("#b6")
var b7 = document.querySelector("#b7")
var b8 = document.querySelector("#b8")
var b9 = document.querySelector("#b9")

b1.textContent = ""
b2.textContent = ""
b3.textContent = ""
b4.textContent = ""
b5.textContent = ""
b6.textContent = ""
b7.textContent = ""
b8.textContent = ""
b9.textContent = ""

function getPlayersName() {
    var player1 = document.querySelector("#player1").value
    document.querySelector("#player1").disabled = true
    if (player1 == "") {
        player1 = "Player1";
    }
    var player2 = document.querySelector("#player2").value
    document.querySelector("#player2").disabled = true
    if (player2 == "") {
        player2 = "Player2";
    }
    var players = { "player1": player1, "player2": player2 }
    return players;
}


function letsToss() {
    var players = getPlayersName();
    var value = Math.random();
    if (value <= 0.5) {
        resultElement.textContent = players.player1 + " won toss !!!"
        resultElement.style.color = "blue"
        flag = { "name":[players.player1,'X'], "next": [players.player2,'O'] };
    } else {
        resultElement.textContent = players.player2 + " won toss !!!"
        resultElement.style.color = "blue"
        flag = { "name": [players.player2,'O'], "next": [players.player1,'X'] };
    }
}

function restartGame() {
    b1.textContent = ""
    b1.style.color="black"
    b2.textContent = ""
    b2.style.color="black"
    b3.textContent = ""
    b3.style.color="black"
    b4.textContent = ""
    b4.style.color="black"
    b5.textContent = ""
    b5.style.color="black"
    b6.textContent = ""
    b6.style.color="black"
    b7.textContent = ""
    b7.style.color="black"
    b8.textContent = ""
    b8.style.color="black"    
    b9.textContent = ""
    b9.style.color="black"
    document.querySelector("#player1").disabled = false
    document.querySelector("#player2").disabled = false
    document.querySelector("#player1").value = ""
    document.querySelector("#player2").value = ""
    resultElement.textContent = "TOSS"
    resultElement.style.color = "brown"
    isCheckwin=false
}

var flag ;
var resultElement = document.querySelector("#resultID")
resultElement.addEventListener("dblclick", letsToss)

function isResult() {
    if ((b1.textContent=="X" && b2.textContent=="X" && b3.textContent=="X")||(b1.textContent=="O" && b2.textContent=="O" && b3.textContent=="O")) {
        b1.style.color="green"
        b2.style.color="green"
        b3.style.color="green"
        resultElement.textContent = flag.name[0] + " won game"
        resultElement.style.color = "green"
        return true;
    }
    else if ((b4.textContent=="X" && b5.textContent=="X" && b6.textContent=="X")||(b4.textContent=="O" && b5.textContent=="O" && b6.textContent=="O")) {
        b4.style.color="green"
        b5.style.color="green"
        b6.style.color="green"
        resultElement.textContent = flag.name[0] + " won game"
        resultElement.style.color = "green"
        return true;
    }
    else if ((b7.textContent=="X" && b8.textContent=="X" && b9.textContent=="X")||(b7.textContent=="O" && b8.textContent=="O" && b9.textContent=="O")) {
        b7.style.color="green"
        b8.style.color="green"
        b9.style.color="green"
        resultElement.textContent = flag.name[0] + " won game"
        resultElement.style.color = "green"
        return true;
    }
    else if ((b1.textContent=="X" && b4.textContent=="X" && b7.textContent=="X")||(b1.textContent=="O" && b4.textContent=="O" && b7.textContent=="O")) {
        b1.style.color="green"
        b4.style.color="green"
        b7.style.color="green"
        resultElement.textContent = flag.name[0] + " won game"
        resultElement.style.color = "green"
        return true;
    }
    else if ((b2.textContent=="X" && b5.textContent=="X" && b8.textContent=="X")||(b2.textContent=="O" && b5.textContent=="O" && b8.textContent=="O")) {
        b2.style.color="green"
        b5.style.color="green"
        b8.style.color="green"
        resultElement.textContent = flag.name[0] + " won game"
        resultElement.style.color = "green"
        return true;
    }
    else if((b3.textContent=="X" && b6.textContent=="X" && b9.textContent=="X")||(b3.textContent=="O" && b6.textContent=="O" && b9.textContent=="O")) {
        b3.style.color="green"
        b6.style.color="green"
        b9.style.color="green"
        resultElement.textContent = flag.name[0] + " won game"
        resultElement.style.color = "green"
        return true;
    }
    else if((b1.textContent=="X" && b5.textContent=="X" && b9.textContent=="X")||(b1.textContent=="O" && b5.textContent=="O" && b9.textContent=="O")) {
        b1.style.color="green"
        b5.style.color="green"
        b9.style.color="green"
        resultElement.textContent = flag.name[0] + " won game"
        resultElement.style.color = "green"
        return true;
    }
    else if((b3.textContent=="X" && b5.textContent=="X" && b7.textContent=="X")||(b3.textContent=="O" && b5.textContent=="O" && b7.textContent=="O")) {
        b3.style.color="green"
        b5.style.color="green"
        b7.style.color="green"
        resultElement.textContent = flag.name[0] + " won game"
        resultElement.style.color = "green"
        return true;
    }
    else if( b1.textContent != "" && b2.textContent != "" && b3.textContent != "" && b4.textContent != "" && b5.textContent != "" && b6.textContent != ""&& b7.textContent != "" && b8.textContent != ""&&b9.textContent != ""){
        resultElement.textContent = "Draw"
        resultElement.style.color = "brown"
        return true;
    }
    else{
        return false;
    }
}
var isCheckwin=false;

function b1_func(){
    if(b1.textContent=="" && !isCheckwin){
        b1.textContent=flag.name[1]
        isCheckwin=isResult()
        if(!isCheckwin){
            var temp=flag.name
            flag.name=flag.next
            flag.next=temp
            resultElement.textContent = flag.name[0] + "'s Turn"
            resultElement.style.color = "black"  
        }
    }
}

function b2_func(){
    if(b2.textContent=="" && !isCheckwin){
        b2.textContent=flag.name[1]
        isCheckwin=isResult()
        if(!isCheckwin){
            var temp=flag.name
            flag.name=flag.next
            flag.next=temp
            resultElement.textContent = flag.name[0] + "'s Turn"
            resultElement.style.color = "black"    
        }
    }
}

function b3_func(){
    if(b3.textContent=="" && !isCheckwin){
        b3.textContent=flag.name[1]
        isCheckwin=isResult()
        if(!isCheckwin){
            var temp=flag.name
            flag.name=flag.next
            flag.next=temp
            resultElement.textContent = flag.name[0] + "'s Turn"
            resultElement.style.color = "black"  
        }
    }
}

function b4_func(){
    if(b4.textContent=="" && !isCheckwin){
        b4.textContent=flag.name[1]
        isCheckwin=isResult()
        if(!isCheckwin){
            var temp=flag.name
            flag.name=flag.next
            flag.next=temp
            resultElement.textContent = flag.name[0] + "'s Turn"
            resultElement.style.color = "black"  
        }
    }
}


function b5_func(){
    if(b5.textContent=="" && !isCheckwin){
        b5.textContent=flag.name[1]
        isCheckwin=isResult()
        if(!isCheckwin){
            var temp=flag.name
            flag.name=flag.next
            flag.next=temp
            resultElement.textContent = flag.name[0] + "'s Turn"
            resultElement.style.color = "black"  
        }
    }
}

function b6_func(){
    if(b6.textContent=="" && !isCheckwin){
        b6.textContent=flag.name[1]
        isCheckwin=isResult()
        if(!isCheckwin){
            var temp=flag.name
            flag.name=flag.next
            flag.next=temp
            resultElement.textContent = flag.name[0] + "'s Turn"
            resultElement.style.color = "black"  
        }
    }
}

function b7_func(){
    if(b7.textContent=="" && !isCheckwin){
        b7.textContent=flag.name[1]
        isCheckwin=isResult()
        if(!isCheckwin){
            var temp=flag.name
            flag.name=flag.next
            flag.next=temp
            resultElement.textContent = flag.name[0] + "'s Turn"
            resultElement.style.color = "black"  
        }
    }
}

function b8_func(){
    if(b8.textContent=="" && !isCheckwin){
        b8.textContent=flag.name[1]
        isCheckwin=isResult()
        if(!isCheckwin){
            var temp=flag.name
            flag.name=flag.next
            flag.next=temp
            resultElement.textContent = flag.name[0] + "'s Turn"
            resultElement.style.color = "black"  
        }
    }
}
function b9_func(){
    if(b9.textContent=="" && !isCheckwin){
        b9.textContent=flag.name[1]
        isCheckwin=isResult()
        if(!isCheckwin){
            var temp=flag.name
            flag.name=flag.next
            flag.next=temp
            resultElement.textContent = flag.name[0] + "'s Turn"
            resultElement.style.color = "black"  
        }
    }
}

