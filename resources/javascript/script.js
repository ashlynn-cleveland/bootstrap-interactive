const order = document.getElementById('order_one');
const book = document.getElementById('book_one');
const message = document.getElementById('redirect');

function redirect(event) {
    event.target.closest('body').style.backgroundColor = 'gray';
    event.target.closest('body').style.opacity = '40%'
    message.style.display = 'visible';
};

order.addEventListener('click', redirect);
book.addEventListener('click', redirect);