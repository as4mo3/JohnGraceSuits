// // Get the modal
// var modal = document.getElementById('productModal');
//
// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];
//
// // Get the button that opens the modal
// var btns = document.querySelectorAll('.pack.suits');
//
// // When the user clicks on the button, open the modal
// [].forEach.call(btns, function(el) {
//   el.onclick = function() {
//       modal.style.display = "block";
//       $(this).addClass("img-selected").siblings().removeClass("img-selected");
//   }
// })
//
// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//     modal.style.display = "none";
//     removeSelectedClass();
// }
//
// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//         removeSelectedClass();
//     }
// }
//
// // Close modal on esc pressed
// $(document).keydown(function(event) {
//   if (event.keyCode == 27) {
//     modal.style.display = "none";
//     removeSelectedClass();
//   }
// });
