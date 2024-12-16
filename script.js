document.querySelectorAll('.hotspot').forEach(hotspot => {
  hotspot.addEventListener('click', () => {
    if (hotspot.classList.contains('pc-area')) {
      window.location.href = 'pc-page.html';
    } else if (hotspot.classList.contains('bookshelf-area')) {
      window.location.href = 'bookshelf-page.html';
    } else if (hotspot.classList.contains('poster-area')) {
      window.location.href = 'poster-page.html';
    } else if (hotspot.classList.contains('certificate-area')) {
      window.location.href = 'certificate-page.html';
    }
  });
});