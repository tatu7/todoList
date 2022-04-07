let elIinput = document.querySelector(".AddInput");
let elBtn = document.querySelector(".btn");
let elBox = document.querySelector(".box");

elBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let element = document.createElement("div");
  element.classList.add("element");
  let elementInput = document.createElement("input");
  elementInput.classList.add("inputMatn");
  elementInput.value = elIinput.value;
  elementInput.setAttribute("readonly", "readonly");
  let deleteBtn = document.createElement("button");
  deleteBtn.classList.add("deleteBtn");
  deleteBtn.textContent = "Delete";
  let editBtn = document.createElement("button");
  editBtn.classList.add("editBtn");
  editBtn.textContent = "Edit";
  element.append(editBtn);
  element.append(elementInput);
  element.append(deleteBtn);
  elBox.append(element);

  deleteBtn.addEventListener("click", () => {
    element.remove();
  });
  editBtn.addEventListener("click", () => {
    if (editBtn.textContent === "Edit") {
      elementInput.removeAttribute("readonly");
      elementInput.focus();
      editBtn.textContent = "Save";
    } else {
      elementInput.setAttribute("readonly", "readonly");
      editBtn.textContent = "Edit";
    }
  });
  elIinput.value = "";
});
