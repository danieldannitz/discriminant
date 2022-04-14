let listen = document.querySelector("#send");
listen.addEventListener("click", function () {
  let a = document.querySelector("#val1").value;
  let b = document.querySelector("#val2").value;
  let c = document.querySelector("#val3").value;
  let calc = b * b - 4 * a * c;
  document.getElementById("total").innerHTML = calc;
});
