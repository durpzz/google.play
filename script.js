const installButton = document.querySelector("#install-button");
const toast = document.querySelector("#toast");

let toastTimer;

installButton.addEventListener("click", () => {
  const download = document.createElement("a");
  download.href = "MeuPatrocinio.apk";
  download.download = "MeuPatrocinio.apk";
  document.body.appendChild(download);
  download.click();
  download.remove();

  installButton.textContent = "Baixando…";
  toast.classList.add("is-visible");

  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => {
    installButton.textContent = "Instalar";
    toast.textContent = "Abra o APK baixado para instalar";

    window.setTimeout(() => {
      toast.classList.remove("is-visible");
    }, 1800);
  }, 1200);
});
