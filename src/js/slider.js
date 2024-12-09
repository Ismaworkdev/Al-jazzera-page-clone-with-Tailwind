  //slider

  const slider = document.getElementById("slider");
  const leftBtn = document.getElementById("left");
  const rightBtn = document.getElementById("right");


  let pos = 0;


  leftBtn.addEventListener("click", () => {
    pos = 0;
    slider.style.left = `${pos}px`;
  });


  rightBtn.addEventListener("click", () => {
    pos = -1000; 
    slider.style.left = `${pos}px`;
  });


    //slider1

    const slider1 = document.getElementById("slider1");
    const leftBtn1 = document.getElementById("left1");
    const rightBtn1 = document.getElementById("right1");
  
  
    let pos1 = 0;
  
  
    leftBtn1.addEventListener("click", () => {
      pos1 = 0;
   
      slider1.style.left = `${pos1}px`;
    });
  
  
    rightBtn1.addEventListener("click", () => {
      pos1 = -1000; 
      slider1.style.left = `${pos1}px`;
   
    });