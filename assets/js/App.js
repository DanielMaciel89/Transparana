function toggleMenu() {
  const nav = document.getElementById("nav-links");
  nav.classList.toggle("show");
}

// Troca de Secao
const pages = {
  inicio: `
    <section class="hero">
      <div class="hero-text">
        <h1>Transporte Executivo, Viagens & Fretamento de Vans</h1>
        <p>Conforto, segurança e pontualidade para sua viagem.</p>
        <div class="hero-buttons">
          <a href="#" class="btn">Solicitar Orçamento</a>
          <a href="#" class="btn btn-outline">Saiba Mais</a>
        </div>
      </div>
    </section>

    <section class="services">
      <div class="service">
        <img src="./assets/img/executivo.png" alt="">
        <h3>Transporte Executivo</h3>
        <p>Transfers e viagens corporativas com qualidade.</p>
      </div>

      <div class="service">
        <img src="./assets/img/Turismo e Viagem.png" alt="">
        <h3>Viagens e Turismo</h3>
        <p>Passeios e excursões com total conforto.</p>
      </div>

      <div class="service">
        <img src="./assets/img/fretamento.png" alt="">
        <h3>Fretamento de Vans</h3>
        <p>Serviço para grupos e empresas.</p>
      </div>
    </section>
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