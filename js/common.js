function setActiveNav() {
  var currentPath = window.location.pathname;

  if (currentPath === '/' || currentPath === '') {
    currentPath = '/index.html';
  }

  var links = document.querySelectorAll('.nav-link');

  links.forEach(function (link) {
    var linkPath = link.getAttribute('href');

    if (linkPath === currentPath) {
      link.classList.add('active');
      link.closest('.nav-item').classList.add('active');
    }
  });
}
