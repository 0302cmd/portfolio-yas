window.addEventListener("scroll", function() {
  var button = document.getElementById("btn-topo");
  if (window.pageYOffset > 300) {
    button.classList.add("active");
  } else {
    button.classList.remove("active");
  }
});

document.getElementById("btn-topo").addEventListener("click", function() {
  window.scrollTo({top: 0, behavior: "smooth"});
});
