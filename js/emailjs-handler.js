(function () {
    function showLoader(show) {
      const loader = document.getElementById("ftco-loader");
      if (!loader) return;
  
      if (show) {
        loader.classList.add("show");
      } else {
        loader.classList.remove("show");
      }
    }
  
    function bindDemoForm() {
      const form = document.getElementById("demoForm");
      if (!form || form.dataset.bound === "true") return;
      form.dataset.bound = "true";
  
      const msg = document.getElementById("formMessage");
      const btn = form.querySelector('input[type="submit"]');
  
      emailjs.init("-T9ZbiIRbpXdPVlNV");
  
      form.addEventListener("submit", function (e) {
        e.preventDefault();
  
        showLoader(true);
        btn.disabled = true;
        msg.style.display = "none";
  
        emailjs.sendForm(
          form.dataset.service,
          form.dataset.template,
          form
        ).then(
          () => {
            showLoader(false);
            btn.disabled = false;
  
            msg.style.display = "block";
            msg.style.color = "#d4ffd4";
            msg.textContent = "✅ Your demo request has been sent successfully!";
            form.reset();
          },
          (error) => {
            showLoader(false);
            btn.disabled = false;
  
            msg.style.display = "block";
            msg.style.color = "#ffd4d4";
            msg.textContent = "❌ Something went wrong. Please try again.";
            console.error("EmailJS error:", error);
          }
        );
      });
    }
  
    window.bindDemoForm = bindDemoForm;
  })();
  