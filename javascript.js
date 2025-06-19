function openNav () {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}
function closeNav () {
  document.getElementById("mysidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}
function openNav () {
  document.getElementById("mysidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  document.body.style.backgroundColor = "#a1f0f0";
  
}
function closeNav () {
  document.getElementById("mysidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  document.body.style.backgroundColor = "#a1f0f0";
}
document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.remove("fade-out");

  const links = document.querySelectorAll("a[href]");
  links.forEach(link => {
    const target = link.getAttribute("target");
    if (target !== "_blank" && !link.href.startsWith("javascript:")) {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        const href = this.href;
        document.body.classList.add("fade-out");
        setTimeout(() => {
          window.location.href = href;
        }, 300);
      });
    }
  });
});
