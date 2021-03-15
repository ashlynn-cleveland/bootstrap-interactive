const order = document.getElementById('order');
const book = document.getElementById('book');
const welcome = document.getElementById('intro-para');
const menu = document.getElementById('menu');

const redirect = function(event) {
    if (event.target.closest('intro-para') === true) {
        welcome.innerHTML =
            `<div id="redirect">
          <p>Thank you for your business!:)</p>
          <button class="btn btn-outline-danger">Exit</button>
         </div>`;
    } else if (event.target.closest('menu') === true) {
        menu.innerHTML =
            `<div id="redirect">
          <p>Thank you for your business!:)</p>
          <button class="btn btn-outline-danger">Exit</button>
         </div>`;
    };
    console.log('I ran!');
};

order.addEventListener('click', redirect());
book.addEventListener('click', redirect());