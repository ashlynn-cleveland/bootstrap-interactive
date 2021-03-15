const order = document.getElementById('order_one');
const book = document.getElementById('book_one');
const message = document.getElementById('redirect');

function redirect(event) {
    event.target.closest('body').style.backgroundColor = 'gray';
    event.target.closest('body').style.opacity = '40%';
    setTimeout(function() {
        if (confirm('Thank you for your business! :)')) {
            event.target.closest('body').style.backgroundColor = 'none';
            event.target.closest('body').style.opacity = '100%';
        }
    }, 1000);
};

order.addEventListener('click', redirect);
book.addEventListener('click', redirect);