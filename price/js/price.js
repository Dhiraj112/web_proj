var slider = document.getElementById("checkbox");
var price1 = document.querySelector(".second__basic__price");
var price2 = document.querySelector(".second__professional__price");
var price3 = document.querySelector(".second__master__price");
var option1=document.querySelector(".first__options1");
var option2=document.querySelector(".first__options2");
//Select all the divs and buttons
const div1=document.querySelector(".second__basic")
const div2=document.querySelector(".second__professional");
const div3=document.querySelector(".second__master")
const button1=document.querySelector(".second__basic__learnmore");
const button2=document.querySelector(".second__professional__learnmore");
const button3=document.querySelector(".second__master__learnmore");
//all the div functions.
div1.addEventListener('mouseover',()=>{
    button1.style.backgroundColor="white";
    button1.style.color="hsl(237, 63%, 64%)";
})
div1.addEventListener('mouseout',()=>{
    button1.style.backgroundColor='';
    button1.style.color="white";

})
div2.addEventListener('mouseover',()=>{
    button2.style.backgroundColor="white";
    button2.style.color="hsl(237, 63%, 64%)";
})
div2.addEventListener('mouseout',()=>{
    button2.style.backgroundColor='';
    button2.style.color="white";

})
div3.addEventListener('mouseover',()=>{
    button3.style.backgroundColor="white";
    button3.style.color="hsl(237, 63%, 64%)";
})
div3.addEventListener('mouseout',()=>{
    button3.style.backgroundColor='';
    button3.style.color="white";

})
/*Changing the properties. */
slider.addEventListener('click', function() {
  if (slider.checked) {
    price1.textContent = "$19.99";
    price2.textContent = "$24.99";
    price3.textContent = "$39.99";
    price1.style.transition="0.8s";
    price2.style.transition="0.8s";
    price3.style.transition="0.8s";
    option2.style.color="hsl(237, 63%, 64%)";
    option1.style.color="black";
    option2.style.transition="0.4s";


  } else {
    price1.textContent = "$199.99";
    price2.textContent = "$249.99";
    price3.textContent = "$399.99";
    price1.style.transition="0.8s";
    price2.style.transition="0.8s";
    price3.style.transition="0.8s";
    option1.style.color="hsl(237, 63%, 64%)";
    option2.style.color="black";
    option1.style.transition="0.4s";
  }
});
