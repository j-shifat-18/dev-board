document.getElementById("go-to-blogs").addEventListener("click", function () {
  window.location.href = "../blogs.html";
});

// date
const date = new Date();
const day = new Intl.DateTimeFormat("en-us", { weekday: "short" }).format(date);
const month = new Intl.DateTimeFormat("en-us", { month: "short" }).format(date);
const monthDate = date.getDate();
const year = date.getFullYear();

document.getElementById("day").innerText = day;
document.getElementById(
  "month-year"
).innerText = `${month} ${monthDate} , ${year}`;

// card 1
document
  .getElementById("completed-btn-1")
  .addEventListener("click", function () {
    completedBtnByIdAndTitle("completed-btn-1", "title-1");
  });

// card 2
document
  .getElementById("completed-btn-2")
  .addEventListener("click", function () {
    completedBtnByIdAndTitle("completed-btn-2", "title-2");
  });

// card 3
document
  .getElementById("completed-btn-3")
  .addEventListener("click", function () {
    completedBtnByIdAndTitle("completed-btn-3", "title-3");
  });

// card 4
document
  .getElementById("completed-btn-4")
  .addEventListener("click", function () {
    completedBtnByIdAndTitle("completed-btn-4", "title-4");
  });

// card 5
document
  .getElementById("completed-btn-5")
  .addEventListener("click", function () {
    completedBtnByIdAndTitle("completed-btn-5", "title-5");
  });

// card 6
document
  .getElementById("completed-btn-6")
  .addEventListener("click", function () {
    completedBtnByIdAndTitle("completed-btn-6", "title-6");
  });



//   clear history
document
  .getElementById("clear-history-btn")
  .addEventListener("click", function () {
    document.getElementById("history-cards-container").innerText = "";
  });
