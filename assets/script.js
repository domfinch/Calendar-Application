//display the current day when opening application

var currentDay = moment().format("MMMM Do YYYY, h:mm a");
$("#currentDay").text(currentDay);
var hour = parseInt(moment().format("H"));
var time = $(".time-block");
var saveBtn = $(".saveBtn");

//WHEN I view the time blocks for that day
// THEN each time block is color-coded to indicate whether it is in the past, present, or future
function timeTracker() {
  time.each(function () {
    var block = $(this);
    var blockHr = parseInt(block.attr("id"));

    if (blockHr === hour) {
      block.addClass("present").removeClass("past future");
    }
    if (blockHr < hour) {
      block.addClass("past").removeClass("present future");
    }
    if (blockHr > hour) {
      block.addClass("future").removeClass("past present");
    }
  });
}

timeTracker();

//   WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage
//save local storage
saveBtn.click(function () {
  var plan = $(this).siblings(".description").val();
  var block = $(this).parent().attr("id");
  localStorage.setItem(block, plan);
});

// //clear local storage
// $("#clearDay").on("click", function () {
//   localStorage.clear();
//   initPage()
// });

//   WHEN I refresh the page
// THEN the saved events persist
$("#9 .description").text(localStorage.getItem("9"));
$("#10 .description").text(localStorage.getItem("10"));
$("#11 .description").text(localStorage.getItem("11"));
$("#12 .description").text(localStorage.getItem("12"));
$("#13 .description").text(localStorage.getItem("13"));
$("#14 .description").text(localStorage.getItem("14"));
$("#15 .description").text(localStorage.getItem("15"));
$("#16 .description").text(localStorage.getItem("16"));
$("#17 .description").text(localStorage.getItem("17"));
$("#18 .description").text(localStorage.getItem("18"));
