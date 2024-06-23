
let environMent = document.querySelector(".toggle-Btn");
let myBton = document.querySelector(".myBtn");
let myBton1 = document.querySelector(".myBtn1");

const handleMouseEvent1 = () => {
    
    myBton1.classList.add("addTransition1");
    document.body.style.backgroundImage = `url("images/night.jpg")`;
    document.getElementById("btn1").style.translate = "0";
    document.getElementById("btn2").style.translate = "4rem";

};


const handleMouseEvent= () => {

    myBton.classList.add("addTransition");
    document.body.style.backgroundImage = `url("images/day.jpg")`;
    document.getElementById("btn1").style.translate = "5rem";
    document.getElementById("btn2").style.translate = "0";          
  
};

myBton.addEventListener( "click" , handleMouseEvent);
myBton1.addEventListener( "click" , handleMouseEvent1);


