const boxes = document.querySelectorAll('.clickable');

boxes.forEach(box => {
  box.addEventListener('click', () => {
    alert(box.textContent + ' clicked!');
  });
});
