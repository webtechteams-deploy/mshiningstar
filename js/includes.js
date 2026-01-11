function setActiveNav() {
  const currentPage = document.body.dataset.page;
  if (!currentPage) return;

  document.querySelectorAll('.nav-link').forEach(link => {
    if (link.dataset.page === currentPage) {
      link.classList.add('active');
      link.closest('.nav-item')?.classList.add('active');
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
