document.addEventListener("DOMContentLoaded", () => {
  // Auto year
  document.getElementById("year").textContent = new Date().getFullYear();

  // Dark/Light Mode
  const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    themeToggle.textContent = "☀️"; 
  } else {
    themeToggle.textContent = "🌙"; 
  }
});

  // Edit All
  const editBtn = document.getElementById("edit-btn");
  editBtn.addEventListener("click", () => {
    const sections = document.querySelectorAll(".editable-section");
    const editable = !sections[0].isContentEditable;
    sections.forEach(sec => sec.contentEditable = editable);
    editBtn.textContent = editable ? "Save" : "Edit";
  });
});
