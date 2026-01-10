document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-include]").forEach(el => {
    fetch(el.dataset.include)
      .then(res => res.text())
      .then(html => {
        el.innerHTML = html;

        // 🔥 AFTER form is injected, bind EmailJS
        if (window.bindDemoForm) {
          window.bindDemoForm();
        }
      })
      .catch(err => console.error("Include error:", err));
  });
});
