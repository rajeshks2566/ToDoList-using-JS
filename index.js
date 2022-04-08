let button = document.getElementById("btn");
let input = document.getElementById("inp");
let res = document.getElementById("maindiv");
button.addEventListener("click", () => {
  if (input.value == "") {
    alert("Cannot be Empty");
  } else {
    let div = document.createElement("div");
    div.className = "pdiv";
    let p = document.createElement("p");
    p.id = "p1";
    p.innerHTML = input.value;
    let i1 = document.createElement("i");
    i1.className = "fas fa-check-double";
    i1.id = "tick";
    i1.style.visibility = "hidden";

    let i2 = document.createElement("i");
    i2.className = "fas fa-times";
    i2.id = "secicon";

    div.appendChild(i1);
    div.appendChild(p);
    div.appendChild(i2);
    res.appendChild(div);
    input.value = "";

    div.addEventListener("click", () => {
      p.style.textDecoration = "line-through";
      p.style.color = "red";
      div.style.background = "#0000009a";
      i1.style.visibility = "visible";
      i1.style.color = "greenyellow";
    });

    i2.addEventListener("click", () => {
      confirm("Are you Sure,You want to delete this item ??");

      div.style.display = "none";
    });

    i1.addEventListener("dblclick", () => {
      p.style.textDecoration = "none";
      p.style.color = "black";
      alert("Added to cart");
      i1.style.visibility = "hidden";
      div.style.background = "#00802686";
    });
  }
});
