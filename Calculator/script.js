let on = false;
function switchon() {
  if (!on) {
    let input1 = document.getElementById("temp");
    input1.style.backgroundColor = "rgb(157, 238, 157)";
    on = true;
    calculate();  
    // call the function 
  } 
  else {
    let input1 = document.getElementById("temp");
    input1.style.backgroundColor = "black";
    on = false;
    string = "";
  }
}


function calculate() {
  let string = "";
  let buttons = document.querySelectorAll(".button");

  Array.from(buttons).forEach( function(button) {

    button.addEventListener("click", function (e) {

      //   for =
      if (e.target.innerHTML == "=") {
        string = eval(string);
        document.querySelector("input").value = string;
      }
      // for sq root
      else if (e.target.innerHTML == "√") {
        string = Math.sqrt(string);
        document.querySelector("input").value = string;
      }
      // for square
      else if (e.target.innerHTML == "x<sup>2</sup>") {
        string = Math.pow(string, 2);
        document.querySelector("input").value = string;
      }
    
      //for PI
      else if (e.target.innerHTML == "π") {
        string = Math.PI(string);
        document.querySelector("input").value = string;
      } else if (e.target.innerHTML == "log()") {
        string = Math.log(string);
        document.querySelector("input").value = string;
      }
      // for cos
      else if (e.target.innerHTML == "cos()") {
        string = Math.cos(string);
        document.querySelector("input").value = string;
      }
      // for tan
      else if (e.target.innerHTML == "tan()") {
        string = Math.tan(string);
        document.querySelector("input").value = string;
      }
      // for sin
      else if (e.target.innerHTML == "sin()") {
        string = Math.sin(string);
        document.querySelector("input").value = string;
      }
      //  for +/-
      else if (e.target.innerHTML == "+/-") {
        string = "-";
        document.querySelector("input").value = string;
      }

      // for back space
      else if (
        e.target.innerHTML ==
        '<i class="fa fa-arrow-left" aria-hidden="true"></i>'
      ) {
        var str = document.querySelector("input").value;
        var arr = str.split("");
        arr.pop();
        string = arr.join("");
        document.querySelector("input").value = string;
      }
      // for clear
      else if (e.target.innerHTML == "C") {
        string = "";
        document.querySelector("input").value = string;
      } else {
        console.log(e.target);
        string = string + e.target.innerHTML;
        document.querySelector("input").value = string;
      }
    });
  });
}

// let string = "";
// let buttons = document.querySelectorAll('.button');
// Array.from(buttons).forEach((button)=>{
//   button.addEventListener('click', (e)=>{
//     if(e.target.innerHTML == '='){
//       string = eval(string);
//       document.querySelector('input').value = string;
//     }
//     else if(e.target.innerHTML == 'C'){
//       string = ""
//       document.querySelector('input').value = string;
//     }
//     else{
//     console.log(e.target)
//     string = string + e.target.innerHTML;
//     document.querySelector('input').value = string;
//       }
//   })
// })
