let gameSeq=[];
let userSeq=[];
let btns=["one","two","three","four"];
let started=false;
let level=0;
let h2=document.querySelector("h2");
let highScore=0;
function flash(btn)
{
    btn.classList.add("white");
    setTimeout(function(){
        btn.classList.remove("white")
    },500);
}
document.addEventListener("keypress",function(){
    if(started==false)
    {
        started=true;
        console.log("Game is started");
        levelUp();
    }
})
function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;
    setTimeout(()=>{},1000);
    let randIdx=Math.floor(Math.random()*4);
    let randBtnClass=btns[randIdx];
    let randBtn=document.querySelector(`.${randBtnClass}`);
    gameSeq.push(randBtn.innerText);
    flash(randBtn);
    console.log(gameSeq);
}
function btnPress(){
    let btn=this;
    flash(btn);
    userSeq.push(btn.innerText)
    console.log(userSeq);
    checkAns(userSeq.length-1);
}
function checkAns(idx)
{
    if(gameSeq[idx]==userSeq[idx])
    {
        if(userSeq.length==gameSeq.length)
            levelUp();
    }
    else
    {
        if(highScore<level-1)
            highScore=level-1;
        h2.innerHTML=`Game Over! Your score is <b>${level-1}</b><br>Your highscore is ${highScore}<br>Press any key to start new game`;
        reset();
    }
}
function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}
let allBtns=document.querySelectorAll(".btn");
for(let btn of allBtns)
{
    btn.addEventListener("click",btnPress);
}