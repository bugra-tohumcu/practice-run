fetch('data.json')
  .then(r => r.json())
  .then(books => {
    const list = document.getElementById('list');
    books.forEach(title => {
      const li = document.createElement('li');
      li.textContent = title;
      li.addEventListener('click', () => li.classList.toggle('done'));
      list.appendChild(li);
    });
  });
