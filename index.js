const dodger = document.getElementById("dodger");
dodger.style.background ="#FF69B4";
dodger.style.bottom = "10px";

document.addEventListener("keydown",function(e){
    console.log(e);
});

document.addEventListener("keydown",function(e){
    if(e.key === "ArrowLeft"){
        const leftNumbers = dodger.style.left.replace("px","");
        const left = parseInt(leftNumbers,10);
        dodger.style.left = `${left -1}`
    }
});
 document.addEventListener("keydown",function(event){
    if(event.key === "ArrowRight"){
        const leftNumbers = dodger.style.left.replace("px", "");
        const left = parseInt(leftNumbers, 10);
    
        dodger.style.left = `${left + 1}`;
    }
 });

 function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }

  function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left < 360) {
      dodger.style.left = `${left + 1}px`;
    }
  }
  document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowLeft") {
      moveDodgerLeft();
    }
  });
  document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowRight") {
      moveDodgerRight();
    }
  });