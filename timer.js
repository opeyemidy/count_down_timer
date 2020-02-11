const form = document.querySelector("#form");
const result = document.querySelector("h1");
const number = document.querySelector("#inputResult");
const button = document.querySelector("#submit");
const backgroundChange = document.querySelector(".wrapper");
form.addEventListener("submit", e => {
  e.preventDefault();
  value = Math.round(number.value);
  if (value > 0 && value < 1000) {
    button.disabled = "true";
    result.style.fontSize = "150px";
    result.innerHTML = value;
    let x = setInterval(() => {
      let color1 = Math.round(Math.random() * 256);
      let color2 = Math.round(Math.random() * 256);
      let color3 = Math.round(Math.random() * 256);
      let color4 = Math.round(Math.random() * 256);
      let color5 = Math.round(Math.random() * 256);
      let color6 = Math.round(Math.random() * 256);

      backgroundChange.style.background = `linear-gradient(rgb(${color1}, ${color2}, ${color3}), rgb(${color4}, ${color5}, ${color6}))`;

      result.innerHTML = value;
      value -= 1;
      if (value < 0) {
        button.removeAttribute("disabled");
        clearInterval(x);
        result.style.fontSize = "50px";
        result.innerHTML = "FINISHED!";
        return;
      }
      result.innerHTML = value;
    }, 1000);
  } else {
    alert("enter a number between 1 and 1000");
  }
});
