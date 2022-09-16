let hiddenDesc = document.querySelectorAll('.desktop-description');

if (window.screen.width >= 768){
    hiddenDesc.forEach((d) => {
        d.classList.remove('hidden');
    });
}

window.addEventListener(
    "resize",
    () => {
      const query = window.matchMedia("(min-width: 768px)");
      if (query.matches) {
        hiddenDesc.forEach((d) => {
            d.classList.remove('hidden');
        });
      }else {
        hiddenDesc.forEach((d) => {
            d.classList.add('hidden');
        });;
      }
    },
    true
  );