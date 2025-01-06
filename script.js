const form = document.getElementById("form");
const input = document.getElementById("input");
const todos = document.getElementById("todos");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  addTodo();
});

function addTodo() {
  const todoText = input.value;

  if (todoText.trim() !== "") {
    const todoEl = document.createElement("li");
    todoEl.classList.add(
      "flex",
      "justify-between",
      "items-center",
      "bg-gray-100",
      "p-3",
      "rounded-lg",
      "shadow-md"
    );

    // Text content
    const textEl = document.createElement("span");
    textEl.innerText = todoText;
    textEl.classList.add("flex-1", "text-gray-700");

    // Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.classList.add(
      "bg-red-500",
      "text-white",
      "px-3",
      "py-1",
      "rounded",
      "hover:bg-red-600"
    );

    deleteBtn.addEventListener("click", () => {
      todoEl.remove();
    });

    // Mark complete toggle
    todoEl.addEventListener("click", () => {
      textEl.classList.toggle("line-through");
      textEl.classList.toggle("text-gray-400");
    });

    todoEl.appendChild(textEl);
    todoEl.appendChild(deleteBtn);
    todos.appendChild(todoEl);

    input.value = "";
  }
}
