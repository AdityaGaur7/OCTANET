

function f1(){

 setInterval(() => {
    document.querySelector('.box').style.background="url('pet/bird2.jpg') no-repeat  center ";
    

}, 4000);
setInterval(() => {
    document.querySelector('.box').style.background="url('pet/fish3.webp') no-repeat  center ";
}, 8000);
setInterval(() => {
    document.querySelector('.box').style.background="url('pet/dog2.jpg') no-repeat  center";
}, 12000);
setInterval(() => {
    document.querySelector('.box').style.background="url('pet/dog3.jpg') no-repeat center ";
}, 16000);
setInterval(() => {
    document.querySelector('.box').style.background="url('pet/bird1.jpg') no-repeat  center ";
}, 20000);
setInterval(() => {
    document.querySelector('.box').style.background="url('pet/ani1.jpg') no-repeat  center ";
}, 24000);
setInterval(() => {
    document.querySelector('.box').style.background="url('pet/bird1.jpg') no-repeat  center ";
}, 28000);
setInterval(() => {
    document.querySelector('.box').style.background="url('pet/cat2.jpg') no-repeat  center ";
}, 32000);
setInterval(() => {
    document.querySelector('.box').style.background="url('pet/dog6.jpg') no-repeat  center ";
}, 36000);
setInterval(() => {
    document.querySelector('.box').style.background="url('pet/cat5.jpg') no-repeat  center ";
}, 40000);
setInterval(() => {
    document.querySelector('.box').style.background="url('pet/bird6.jpg') no-repeat  center ";
}, 44000);
setInterval(() => {
    document.querySelector('.box').style.background="url('pet/dog7.jpg') no-repeat  center ";
}, 48000);
};


let a=0,b=0,c=0,d=0,e=0,f=0;
var neg1 = ()=>{
 
    document.querySelector('#no1').innerHTML=--a;
   
    if(a<0||b<0||c<0||d<0||e<0){
        alert("Error!! items could not be <0 ");
       a=0; 
    }
}
var pos1 = ()=>{
    document.querySelector('#no1').innerHTML=++a;
}
var neg2 = ()=>{
    document.querySelector('#no2').innerHTML=--b;
    if(a<0||b<0||c<0||d<0||e<0){
        alert("Error!! items could not be <0 ");
       b=0; 
    }
}
var pos2 = ()=>{
    document.querySelector('#no2').innerHTML=++b;
}
var neg3 = ()=>{
    document.querySelector('#no3').innerHTML=--c;
    if(a<0||b<0||c<0||d<0||e<0){
        alert("Error!! items could not be <0 ");
       c=0; 
    }
}
var pos3 = ()=>{
    document.querySelector('#no3').innerHTML=++c;
}
var neg4 = ()=>{
    document.querySelector('#no4').innerHTML=--d;
    if(a<0||b<0||c<0||d<0||e<0){
        alert("Error!! items could not be <0 ");
       d=0; 
    }
}
var pos4 = ()=>{
    document.querySelector('#no4').innerHTML=++d;
}
var neg5 = ()=>{
    document.querySelector('#no5').innerHTML=--e;
    if(a<0||b<0||c<0||d<0||e<0){
        alert("Error!! items could not be <0 ");
       e=0; 
    }
}
var pos5 = ()=>{
    document.querySelector('#no5').innerHTML=++e;
}
var neg6 = ()=>{
    document.querySelector('#no6').innerHTML=--f;
    if(a<0||b<0||c<0||d<0||e<0||f<0){
        alert("Error!! items could not be <0 ");
       f=0; 
    }
}
var pos6 = ()=>{
    document.querySelector('#no6').innerHTML=++f;
}







var a1=()=>{
    alert("ALL SELECTED ITEMS HAS BEEN ADDED TO THE CART 🛒");
    var itm1= document.querySelector('#no1').innerText ;
var itm2= document.querySelector('#no2').innerText ;
var itm3= document.querySelector('#no3').innerText ;
var itm4= document.querySelector('#no4').innerText ;
var itm5= document.querySelector('#no5').innerText ;
var itm6= document.querySelector('#no6').innerText ;


let total = (199*itm1)+(149*itm2)+(199*itm3)+(199*itm4)+(299*itm5)+(199*itm6);
console.log(total);
document.getElementById('sum').innerHTML='Rs '+total;
}




function kart1() {
    
    document.querySelector('.kart').style.display="flex";
    document.querySelector('#kart1').style.display="none";
    document.querySelector('#kart2').style.display="flex";

}
function kart2() {
    
    document.querySelector('.kart').style.display="none";
    document.querySelector('#kart1').style.display="flex";
    document.querySelector('#kart2').style.display="none";

}
function vbar1(){
    document.getElementById('vnav').style.display="block"
    document.getElementById('vbar2').style.display="block"
    document.getElementById('vbar1').style.display="none"

}
function vbar2(){
    document.getElementById('vnav').style.display="none"
    document.getElementById('vbar2').style.display="none"
    document.getElementById('vbar1').style.display="block"

}
