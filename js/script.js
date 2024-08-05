const toggleBtn = document.getElementById("toggle-theme");
const darkIcon = document.getElementById("toggle-theme-dark-icon");
const lightIcon = document.getElementById("toggle-theme-light-icon");

if (
  localStorage.getItem("color-theme") === "dark" ||
  (!("color-theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  // Show light icon
  lightIcon.classList.remove("hidden");
} else {
  // Show dark icon
  darkIcon.classList.remove("hidden");
}

// Listen to toggle button
toggleBtn.addEventListener("click", toggleMode);

function toggleMode() {
  // Toggle icons
  darkIcon.classList.toggle("hidden");
  lightIcon.classList.toggle("hidden");

  // If "color-theme" is set in localStorage
  if (localStorage.getItem("color-theme")) {
    // If light, make dark and save it in localStorage
    if (localStorage.getItem("color-theme") === "light") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    }
  } else {
    // If not set in localStorage
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    }
  }
}
