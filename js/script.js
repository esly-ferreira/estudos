hljs.highlightAll();

function copyCode(button) {
  const code = button.nextElementSibling.querySelector("code").innerText;
  navigator.clipboard.writeText(code).then(() => {
    button.innerText = "Copiado!";
    setTimeout(() => (button.innerText = "Copiar"), 2000);
  });
}

const toggleBtn = document.getElementById("toggleSidebar");
const sidebar = document.querySelector(".sidebar");
const conteudo = document.querySelector(".conteudo");

toggleBtn.addEventListener("click", () => {
  sidebar.classList.toggle("hidden");
});
