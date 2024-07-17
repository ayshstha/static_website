/* function that shows a alert msg when
 a customer buys a product */
function buy() {
  // alert msg 
  alert("Thank you your order has been placed.");
}


/* function that validates if all the input 
field is entered by the user or not */
function formvali() {
  // asigning variable to the value input by the user
  var a = document.getElementById("email").value;
  var b = document.g("pass").value;
  // if condition to check if the field is empty or not 
  if (a == "" || b == "") {
    // alert message 
    alert("Please fill all the required informtion!");
  }
}

