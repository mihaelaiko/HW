// TASK: change the code, so that when a user clicks on a button, its background will be changed in red after 2 seconds.
function changeToRed() {
    setTimeout(() => {  this.style.background = "red";  
      }, 2000);
   
  }
  let btn1 = document.querySelector("#btn1");
  let btn2 = document.querySelector("#btn2");
  
  btn1.addEventListener("click", changeToRed);
  btn2.addEventListener("click", changeToRed);