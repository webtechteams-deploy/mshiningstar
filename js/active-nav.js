function setActiveNav() {
  const currentPath = window.location.pathname.replace(/\/$/, '');

  document.querySelectorAll('.nav-link').forEach(link => {
    const linkPath = link.getAttribute('href')?.replace(/\/$/, '');

    if (linkPath && currentPath.endsWith(linkPath)) {
      link.classList.add('active');
      link.closest('.nav-item')?.classList.add('active');
    }
  });
}
