function toggleMenu() {
  const nav = document.getElementById("nav-links");
  nav.classList.toggle("show");
}

// Troca de Secao
const pages = {
  inicio: `
   
  `,
  servicos: `
    <section style="height:100vh; background:black;"></section>
  `,

  frota: `
    <section style="height:100vh; background:black;"></section>
  `,

  sobre: `
    <section style="height:100vh; background:black;"></section>
  `,

  contato: `
    <section style="height:100vh; background:black;"></section>
  `,

  cotacao: `
    <section style="height:100vh; background:black;"></section>
  `
};

// Funcao Navbar
function navigate(pageKey) {
  const main = document.getElementById("main-content");

  // Fade out
  main.classList.add("page-exit");

  setTimeout(() => {
    // Troca de Conteudo
    main.innerHTML = pages[pageKey] || pages["inicio"];

    // Scroll 
    window.scrollTo({ top: 0, behavior: "smooth" });

    // Fade in
    main.classList.remove("page-exit");
    main.classList.add("page-enter");

    setTimeout(() => main.classList.remove("page-enter"), 400);
  }, 200);

  // Funcao Link
  document.querySelectorAll("#nav-links a").forEach(link => {
    link.classList.remove("active");
    if (link.dataset.page === pageKey) {
      link.classList.add("active");
    }
  });

  // Fechar menu
  document.getElementById("nav-links").classList.remove("show");
}

// INIT
document.addEventListener("DOMContentLoaded", () => {

  // Click na Navbar
  document.querySelectorAll("#nav-links a[data-page]").forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      navigate(link.dataset.page);
    });
  });

  // Botao
  const ctaBtn = document.querySelector(".navbar > .btn");
  if (ctaBtn) {
    ctaBtn.addEventListener("click", (e) => {
      e.preventDefault();
      navigate("cotacao");
    });
  }

  // Inicio
  navigate("inicio");
});