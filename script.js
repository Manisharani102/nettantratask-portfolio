const container = document.querySelector(".container");
const menu = document.querySelector(".menu");
container.addEventListener("click", () =>{
    container.classList.toggle("active");
    menu.classList.toggle("active");
})

document.querySelectorAll("#li").forEach(n => n.addEventListener("click", () =>{
    container.classList.remove("active");
    menu.classList.remove("active");
}))

function myfun(event){
    var name=document.getElementById("name").value;
    var email=document.getElementById("email").value;  
     var msg=document.getElementById("mssg1").value;

 if(name=="" || email=="" || msg==""){
  alert("please fill all the details");
 }
  else if(email.search(/^[a-z0-9]+@[a-z]+(?:\.[a-z]+)*$/)){
        alert("invalid email..");
    }else{
     localStorage.setItem("name",name);
     localStorage.setItem("email",email);
    localStorage.setItem("msg",msg);    
    }
}                        