document.addEventListener("DOMContentLoaded", function() {
    const body = document.body;
    const toggleThemeBtn = document.createElement('button');
    toggleThemeBtn.innerText = "Toggle Dark Mode";
    toggleThemeBtn.style.display = "block";
    toggleThemeBtn.style.margin = "20px auto";
    toggleThemeBtn.style.padding = "10px";
    body.appendChild(toggleThemeBtn);

    toggleThemeBtn.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
    });
});
