var image = document.querySelector(".images");
var btn1 = document.querySelector(".btn1");
var btn2 = document.querySelector(".btn2");
var images = ["url('cat1.jpg')","url('cat2.jpg')","url('cat3.jpg')","url('cat4.jpg')","url('cat5.jpg')","url('cat6.jpg')"]
var i = 0;



function forwardBtn(){
    if(i===5){
        i = 0;    
       image.style.backgroundImage = images[i] ;
       }
       else
       i++;
       image.style.backgroundImage = images[i] ;

}
function reverseBtn(){
    
    if(i===0){
        i = 5;    
       image.style.backgroundImage = images[i] ;
       }
       else
       i--;
       image.style.backgroundImage = images[i] ;
}



btn1.addEventListener("click",function(){
    reverseBtn();
})
 
btn2.addEventListener("click",function(){
    
    forwardBtn();
})
