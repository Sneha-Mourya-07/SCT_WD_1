
window.addEventListener('scroll', () => {
  const header = document.getElementById('header');
  if (window.scrollY > 50) {
    header.style.boxShadow = '0 2px 8px rgba(0,0,0,0.2)';
  } else {
    header.style.boxShadow = 'none';
  }
});
