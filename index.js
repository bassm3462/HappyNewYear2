
function delaytext() {
  setTimeout(() => {
      document.getElementsByClassName("displaytextArpc")[0].style.display = "none";
      document.getElementsByClassName("displayTextEnglis")[0].style.display = "block";
  }, 5000);
}
delaytext()
const snowFall = () => {
    const bg = document.querySelector(".bg");
    for (let i = 0; i < 300; i++) {
      const snow = document.createElement("span");
      snow.classList.add("snow");
      if (i % 4 === 0) {
        snow.classList.add("snowAnimation1");
      } else if (i % 4 === 1) {
        snow.classList.add("snowAnimation2");
      } else if (i % 4 === 2) {
        snow.classList.add("snowAnimation3");
      } else {
        snow.classList.add("snowAnimation4");
      }
      const aNumber = -50 + randomNumber(150);
      const timeDelay = randomNumber(10);
      const animDuration = 5 + randomNumber(10) + Math.random() + 0.2;
      const snowOpacity = randomNumber(10) * 0.1;
      const heightWidth = randomNumber(11) + 5;
      snow.style.width = `${heightWidth}px`;
      snow.style.height = `${heightWidth}px`;
      snow.style.left = `${aNumber}%`;
      snow.style.animationDelay = `${timeDelay}s`;
      snow.style.animationDuration = `${animDuration}s`;
      snow.style.opacity = `${snowOpacity}`;
      bg.appendChild(snow);
    }
  };
  
  const randomNumber = (limit) => {
    return Math.floor(Math.random() * limit);
  };
  
  snowFall();
  
function delay(){
  setTimeout(()=>{
    
  window.location.href = "https://urproducts.iq/index";
  },10000);
}
delay();
