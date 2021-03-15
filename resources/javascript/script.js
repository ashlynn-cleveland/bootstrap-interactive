const order = document.getElementById('order_one');
const book = document.getElementById('book_one');

function redirect(event) {
    event.target.closest('body').innerHTML =
        `<div id="redirect">
          <p>Thank you for your business! :)<p>
          <button type="button" class="btn btn-outline-danger">Exit</button>
        </div>`;
};

order.addEventListener('click', redirect);
book.addEventListener('click', redirect);