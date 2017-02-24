function changeColor() {
  setTimeout(function() {
    document.getElementById("firstHeading").style.background = "yellow";
    setTimeout(function() {
      document.getElementById("firstHeading").style.color = "white";
    }, 2000);
  }, 2000);
}









// setTimeout(function () {
//   console.log("first task");
//   setTimeout(function() {
//     console.log("second task");
//     setTimeout(function() {
//       console.log("third task");
//     }, 2000);
//   }, 2000);
// }, 2000);

// console.log("when do i start?");

