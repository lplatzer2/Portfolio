const navbar=document.getElementById("navbar-wrapper");
const navWidth = navbar.offsetWidth;
const navHeight= navbar.offsetHeight;

window.addEventListener("scroll", sticky);

function sticky(e){
   
   if(window.scrollY!==0){
    navbar.style.top="0";
    navbar.style.width="100%";
   }else{
       navbar.style.top="90%";
       navbar.style.width=`${navWidth}px`;

   }  
}