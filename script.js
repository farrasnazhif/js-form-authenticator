const studentNames = [
  "Ahmad",
  "Aulia",
  "Budi",
  "Citra",
  "Dewi",
  "Eka",
  "Farhan",
  "Fitri",
  "Gita",
  "Hendra",
];

const nameInput = document.getElementById("name");
const suggestionsBox = document.getElementById("suggestions");
const form = document.getElementById("registrationForm");
const emailInput = document.getElementById("email");
const modal = document.getElementById("modal");
const closeModalBtn = document.getElementById("closeModal");

function showSuggestions(query) {
  suggestionsBox.innerHTML = "";
  if (!query) return;

  const matches = studentNames.filter((name) =>
    name.toLowerCase().startsWith(query.toLowerCase())
  );

  matches.forEach((name) => {
    const option = document.createElement("div");
    option.textContent = name;

    option.onclick = () => {
      nameInput.value = name;
      suggestionsBox.innerHTML = "";
    };

    suggestionsBox.appendChild(option);
  });
}

// show suggestions
nameInput.addEventListener("input", () => {
  showSuggestions(nameInput.value);
});

// check email
form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!emailInput.value.trim()) {
    // open modal
    modal.style.display = "block";
  } else {
    alert("Registration successful!");
    form.reset();
  }
});

closeModalBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// click outside modal to close
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    // clode modal
    modal.style.display = "none";
  }
});
