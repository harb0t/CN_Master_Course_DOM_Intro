// document.addEventListener("click", (e) => {
//   console.log(e);
//   console.log(e.target);
// });

const list = document.getElementById("list");

list.addEventListener("mouseover", (e) => {
  e.target.textContent = e.target.textContent.toUpperCase();
});

list.addEventListener("mouseout", (e) => {
  e.target.textContent = e.target.textContent.toLowerCase();
});

    // What the hell does this do?