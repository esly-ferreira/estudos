// copiar cogido que esta no console
hljs.highlightAll();

function copyCode(button) {
  const code = button.nextElementSibling.querySelector("code").innerText;
  navigator.clipboard.writeText(code).then(() => {
    button.innerText = "Copiado!";
    setTimeout(() => (button.innerText = "Copiar"), 2000);
  });
}

// side bar
const toggleBtn = document.getElementById("toggleSidebar");
const sidebar = document.querySelector(".sidebar");
const conteudo = document.querySelector(".conteudo");

toggleBtn.addEventListener("click", () => {
  sidebar.classList.toggle("hidden");
});

document.addEventListener("click", (e) => {
  const clicouForaSidebar = !sidebar.contains(e.target);
  const clicouForaBtn = e.target !== toggleBtn && !toggleBtn.contains(e.target);

  if (clicouForaSidebar && clicouForaBtn) {
    sidebar.classList.add("hidden");
  }
});

// mostra toast copiado
function showToast(message, duration = 3000) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.style.visibility = 'visible';
  toast.style.opacity = '1';

  setTimeout(() => {
    toast.style.opacity = '0';
    setTimeout(() => {
      toast.style.visibility = 'hidden';
    }, 500);
  }, duration);
}

document.addEventListener('DOMContentLoaded', () => {
  const fontSizeMap = {
    font14: { size: 14, lineHeight: 20 },
    font16: { size: 16, lineHeight: 24 },
    font18: { size: 18, lineHeight: 27 },
    font24: { size: 24, lineHeight: 36 },
    font36: { size: 36, lineHeight: 44 },
    font48: { size: 48, lineHeight: 56 },
    font52: { size: 52, lineHeight: 60 },
    font64: { size: 64, lineHeight: 72 },
    font72: { size: 72, lineHeight: 80 },
    font84: { size: 84, lineHeight: 92 },
    font96: { size: 96, lineHeight: 104 },
  };

  document.querySelectorAll('.ajuste-fontes p').forEach(p => {
    p.addEventListener('click', async () => {
      const fontClass = p.className;
      const data = fontSizeMap[fontClass];
      if (!data) return console.warn('Classe não mapeada');

      const cssText = `.${fontClass} {\n  font-size: ${data.size}px;\n  line-height: ${data.lineHeight}px;\n}`;

  console.log(fontClass)

      try {
        await navigator.clipboard.writeText(cssText);
        showToast(`Copiado ${fontClass}`);
      } catch (err) {
        console.error('Erro ao copiar:', err);
        showToast('Erro ao copiar!');
      }
    });
  });
});