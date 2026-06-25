const installButton = document.querySelector("#install-button");
const toast = document.querySelector("#toast");

let toastTimer;

installButton.addEventListener("click", () => {
  installButton.textContent = "Instalando…";
  installButton.disabled = true;
  toast.classList.add("is-visible");

  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => {
    installButton.textContent = "Instalado";
    toast.textContent = "Aplicativo instalado";

    window.setTimeout(() => {
      toast.classList.remove("is-visible");
    }, 1800);
  }, 900);
});
