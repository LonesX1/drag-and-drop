const dragAndDrop = () => {
  const card = document.querySelector('.dragDrop');
  const cells = document.querySelectorAll('.block');


  const dragStart = function () {
  setTimeout(() => {
    this.classList.add('hide');
  }, 0);
  };
  const dragEnd = function () {
    setTimeout(() => {
      this.classList.remove('hide');
    }, 0);
  };
  const dragOver = function (event) {
    event.preventDefault();
  }
  const dragEnter = function (event) {
    event.preventDefault();

    this.classList.add('hovered');
  }
  const dragLeave = function () {
    this.classList.remove('hovered');
  }
  const dragDrop = function () {
    this.append(card);
    this.classList.remove('hovered')
  }

  cells.forEach((cell) => {
    cell.addEventListener('dragover', dragOver);
    cell.addEventListener('dragenter', dragEnter);
    cell.addEventListener('dragleave', dragLeave);
    cell.addEventListener('drop', dragDrop);
  })

  card.addEventListener('dragstart', dragStart);
  card.addEventListener('dragend', dragEnd);
}

dragAndDrop()
