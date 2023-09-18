"use strict";

let checkboxes = document.querySelectorAll("[type=checkbox]");
let lastCheck = -1;
for (let i = 0; i < checkboxes.length; i++) {
  whenClicked(checkboxes[i], i);
}

function whenClicked(box, index) {
  box.addEventListener("click", function () {
    if (lastCheck >= 0) {
      if (event.shiftKey) {
        if (index > lastCheck) {
          for (let i = index; i >= lastCheck; i--) {
            checkboxes[i].checked = true;
          }
        } else {
          for (let i = index; i <= lastCheck; i++) {
            checkboxes[i].checked = true;
          }
        }
      }
    }
    lastCheck = index;
  });
}
