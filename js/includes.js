function setActiveNav() {
  // Current page file name (e.g. index.html)
  let currentPage = window.location.pathname.split('/').pop();

  if (!currentPage) {
    currentPage = 'index.html';
  }

  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (!href) return;

    // Extract file name from href
    const linkPage = href.split('/').pop();

    if (linkPage === currentPage) {
      link.classList.add('active');

      const parentLi = link.closest('.nav-item');
      if (parentLi) parentLi.classList.add('active');
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-include]").forEach(el => {
    fetch(el.dataset.include)
      .then(res => res.text())
    .then(html => {
  el.innerHTML = html;

  // ✅ Set nav active AFTER header loads
  setActiveNav();

  // 🔥 AFTER form is injected, bind EmailJS
  if (window.bindDemoForm) {
    window.bindDemoForm();
  }
})
      .catch(err => console.error("Include error:", err));
  });
});
