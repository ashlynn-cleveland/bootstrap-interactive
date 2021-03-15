const order_one = document.getElementById('order_one');
const book_one = document.getElementById('book_one');

function redirect(event) {
    event.target.closest('body').style.backgroundColor = 'gray';
    event.target.closest('body').style.opacity = '40%';
    setTimeout(function() {
        if (confirm('Thank you for your business! :)')) {
            event.target.closest('body').style.backgroundColor = 'transparent';
            event.target.closest('body').style.opacity = '100%';
        }
    }, 1000);
};

order_one.addEventListener('click', redirect);
book_one.addEventListener('click', redirect);