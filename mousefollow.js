const cursor = document.querySelector(".cursor");
const buttons = document.querySelectorAll("button")
let timeout; // declare timeout outside the event listener

// follow cursor on mouse move
document.addEventListener("mousemove", (e) => {
  // Use e.clientX and e.clientY for the x and y values to fix the cursor issue when scrolling down the page.
  let x = e.clientX;
  let y = e.clientY;

  cursor.style.top = y + "px";
  cursor.style.left = x + "px";
  cursor.style.display = "block";

  // cursor effects on mouse stopped
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


