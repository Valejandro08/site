let introvert= document.querySelector(".introvert");
let extrovert= document.querySelector(".extrovert");
let yes= document.querySelector(".yes");
let no= document.querySelector(".no");
let submit= document.querySelector(".submit");
let input= document.querySelector(".choice1");
let input2= document.querySelector(".choice2");

introvert.addEventListener("click", function(){
    input=introvert;
    
    });
    
    
    
    
    extrovert.addEventListener("click", function(){
    input=extrovert;
  
    });
    
    
    yes.addEventListener("click", function(){
    input2= yes;
   
    });
    
    
    
    
    no.addEventListener("click", function(){
        input2= no;
       
    });
    



submit.addEventListener("click", function(){
    let message= document.querySelector(".message");  
  
if (input===introvert && input2=== no) {message.innerHTML=
    `
    <h3>you are a Cane Corso</h3>
    <img src="Cane-Corso.jpg">
    
    `;}

else if (input=== introvert && input2===yes) {message.innerHTML=
    `
    <h3> you are a Corgi</h3>
    <img src="Corgi.webp">
    `;}

else if (input===extrovert && input2===no) {message.innerHTML=`
<h3>you are a Pitbull</h3>

`;}

else if (input===extrovert && input2===yes) {message.innerHTML="you are a Golden Retriever";}
});

