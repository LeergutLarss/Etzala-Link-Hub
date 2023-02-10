const links = document.querySelectorAll('.link-group a');

links.forEach((link) => {
  link.addEventListener('mouseover', () => {
    link.classList.add('on-hover');
  });
});

links.forEach((link) => {
    link.addEventListener('mouseout', () => {
      link.classList.remove('on-hover');
    });
  });

