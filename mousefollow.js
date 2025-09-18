const cursor = document.querySelector(".cursor");
const buttons = document.querySelectorAll("button")
let timeout; 

document.addEventListener("mousemove", (e) => {
  let x = e.clientX;
  let y = e.clientY;

  cursor.style.top = y + "px";
  cursor.style.left = x + "px";
  cursor.style.display = "block";

  function mouseStopped() {
    cursor.style.display = "none";
  }

  clearTimeout(timeout);
  timeout = setTimeout(mouseStopped, 30000);
});

document.addEventListener("mouseout", () => {
  cursor.style.display = "none";
});

buttons.forEach(button=>{
    button.addEventListener("mouseover", () => {
        cursor.style.width = "30px";
        cursor.style.height = "30px";
        cursor.style.opacity = "75%"
    });
    button.addEventListener("mouseout", () => {
        cursor.style.width = "20px";
        cursor.style.height = "20px";
        cursor.style.opacity = "100%"
  });
})


