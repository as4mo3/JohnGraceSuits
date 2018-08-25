// function validateForm() {
//   // This function deals with validation of the form fields
//   var x, y, i, valid = true;
//   x = document.getElementsByClassName("tab");
//   y = x[currentTab].getElementsByTagName("input");
//   // A loop that checks every input field in the current tab:
//   for (i = 0; i < y.length; i++) {
//     // If a field is empty...
//     if (y[i].value == "") {
//       // add an "invalid" class to the field:
//       y[i].className += " invalid";
//       // and set the current valid status to false:
//       valid = false;
//     }
//   }
//   // If the valid status is true, mark the step as finished and valid:
//   if (valid) {
//     document.getElementsByClassName("step")[currentTab].className += " finish";
//   }
//   return valid; // return the valid status
// }
//
// function validateImages() {
//   // This function makes it mandatory to select at least one image
//   var x, y, z, valid = true;
//   x = document.getElementsByClassName('tab');
// 	x = x[currentTab].getElementsByClassName('ui-selected');
// 	// y = document.getElementsByClassName('tab')
// 	// y = x[currentTab].getElementsByTagName("input");
// 	z = document.getElementsByClassName('tab');
// 	z = z[currentTab].children;
//   // y = x.getElementsByClassName("image");
//   if (x.length != (z.length - 1)) {
//     // add an "invalid" class to the field:
//     // y[i].className += " invalid";
//     // and set the current valid status to false:
//     valid = false;
//   }
//   if (valid) {
//     document.getElementsByClassName("step")[currentTab].className += " finish";
//   }
//   return valid; // return the valid status
// }
//
// function fixStepIndicator(n) {
//   // This function removes the "active" class of all steps...
//   var i, x = document.getElementsByClassName("step");
//   for (i = 0; i < x.length; i++) {
//     x[i].className = x[i].className.replace(" active", "");
//   }
//   //... and adds the "active" class to the current step:
//   x[n].className += " active";
// }
