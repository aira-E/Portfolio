const navLinks = document.querySelectorAll('nav a');
const animation = document.querySelector('.animation');

function handleLinkClick(e) {
  e.preventDefault();
  const targetLink = e.target;
  const linkWidth = targetLink.offsetWidth;
  const linkPosition = targetLink.offsetLeft;
  animation.style.width = linkWidth + 'px';
  animation.style.left = linkPosition + 'px';
}

navLinks.forEach(link => {
  link.addEventListener('click', handleLinkClick);
});
