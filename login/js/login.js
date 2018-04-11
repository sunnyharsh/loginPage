window.addEventListener("load",init);

function init(){
    document.getElementById("email_1").addEventListener('click',showEmail);
    document.getElementById("first_input").addEventListener('mouseleave', hideEmail);
    document.getElementById("pass").addEventListener("click" ,showpass);
    document.getElementById("second_input").addEventListener("mouseleave" , hidePass);
}

function showEmail(){
    let move=document.getElementById("email_1");
    move.className='email_div';
    anim=document.getElementById('first_input');
    anim.className="focus";
}
function hideEmail(){
    let move=document.getElementById("email_1");
    move.className='email';

}
function showpass(){
    let passMove=document.getElementById("pass");
    passMove.className="pass_div";
}
function hidePass(){
    let passMove=document.getElementById("pass");
    passMove.className="password";
}
