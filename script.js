// grab elements
var xOut = document.getElementById("xOut");
var yOut = document.getElementById("yOut");
var evtOut = document.getElementById("evtOut");
var box = document.getElementById("garden");
var dot = document.getElementById("mover");

// show mouse position anywhere on the page
document.addEventListener("mousemove", function (e) {
  xOut.textContent = e.pageX;
  yOut.textContent = e.pageY;
  evtOut.textContent = "mousemove";
});

// click inside the garden to move the dot (and log event)
box.addEventListener("click", function (e) {
  console.log(e); // log the event object

  var rect = box.getBoundingClientRect();
  var x = e.clientX - rect.left;
  var y = e.clientY - rect.top;

  // center a 26x26 dot on the click
  var half = 13;
  dot.style.left = (x - half) + "px";
  dot.style.top  = (y - half) + "px";

  // little pop animation
  dot.classList.add("pop");
  setTimeout(function () {
    dot.classList.remove("pop");
  }, 250);

  evtOut.textContent = "click";
});

// double-click: show a visible pink ripple at the click point (and log event)
box.addEventListener("dblclick", function (e) {
  console.log(e); // log the event object

  var rect = box.getBoundingClientRect();
  var rx = e.clientX - rect.left;
  var ry = e.clientY - rect.top;

  // create a ripple element
  var ring = document.createElement("div");
  ring.className = "ripple";
  ring.style.left = rx + "px";
  ring.style.top  = ry + "px";

  // add to the box and remove after animation
  box.appendChild(ring);
  setTimeout(function () {
    box.removeChild(ring);
  }, 750);

  evtOut.textContent = "dblclick";
});
