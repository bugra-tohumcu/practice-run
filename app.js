fetch('data.json')
  .then(r => r.json())
  .then(books => {
    const list = document.getElementById('list');
    const status = document.createElement('p');
    document.body.insertBefore(status, list);
    const update = () => {
      const done = list.querySelectorAll('.done').length;
      status.textContent = done + ' of ' + books.length + ' read';
    };
    books.forEach(title => {
      const li = document.createElement('li');
      li.textContent = title;
      li.addEventListener('click', () => { li.classList.toggle('done'); update(); });
      list.appendChild(li);
    });
    update();
  });
