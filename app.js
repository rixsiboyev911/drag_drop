const item = document.querySelector(".item");
const placeholders = document.querySelectorAll(".placeholder");
item.addEventListener("dragstart", dragstart);
item.addEventListener("dragend", dragend);
for (const placeholder of placeholders) {
  placeholder.addEventListener("dragover", dragover);
  placeholder.addEventListener("dragenter", dragenter);
  placeholder.addEventListener("dragleave", dragleave);
  placeholder.addEventListener("drop", dragdrop);
}
function dragstart(event) {
  console.log("start", event.target);
  event.target.classList.add("hold");
  setTimeout(() => event.target.classList.add("hide"), 0);
}

function dragend(event) {
  //   console.log("end");
  event.target.classList = "item";
}
function dragover(event) {
  event.preventDefault();
}
function dragenter(event) {
  event.target.classList.add("holder");
}
function dragleave(event) {
  event.target.classList.remove("holder");
}
function dragdrop(event) {
  event.target.classList.remove("holder");

  event.target.append(item);
}
