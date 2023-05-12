let t=new Date();
let button=document.getElementById('bu');
button.addEventListener('click',showMsg);
function showMsg()
{
    setInterval(showMsg,1000);
    let d=new Date();
    

    let ta=document.getElementsByClassName('ta');
    ta[00].innerHTML=d.getHours();
    let tb=document.getElementsByClassName('tb');
    tb[00].innerHTML=d.getMinutes();
    let tc=document.getElementsByClassName('tc');
    tc[00].innerHTML=d.getSeconds();

   
}