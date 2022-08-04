 <div class="modal js-modal">
        <div class="modal-content js-modal-container">
            <div class="modal-close js-modal-close">
                <i class="ti-close"></i>
            </div>

            <header class="modal-header">
                <i class="modal-heading-icon ti-bag"></i>
                Tickets
            </header>

            <div class="modal-body">
                <label for="input-ticket-number" class="modal-label">
                    <i class="ti-shopping-cart"></i>
                    Tickets, $15 per person
                </label>
                <input id="input-ticket-number" type="text" class="modal-input" placeholder="How many?">


                <label for="input-ticket-email" class="modal-label">
                    <i class="ti-user"></i>
                    Send To
                </label>
                <input id="input-ticket-email" type="email" class="modal-input" placeholder="Enter email">


                <button id="buy-ticket">
                    Pay <i class="ti-check"></i>
                </button>

            </div>
            <footer class="modal-footer">
                <p class="modal-help">Need <a href="">help?</a></p>
            </footer>
        </div>
    </div> */}

    // <script>
    //     const buyBtns = document.querySelectorAll('.js-buy-ticket');
    //     const modal = document.querySelector('.modal');
    //     const modalClose = document.querySelector('.js-modal-close');
    //     const modalContainer = document.querySelector('.js-modal-container');

    //     function showBuyTickets() {
    //         modal.classList.add('open');
    //     }

    //     function hideBuyTickets() {
    //         modal.classList.remove('open');
    //     }

    //     for (const buyBtn of buyBtns) {
    //         buyBtn.addEventListener('click', showBuyTickets);
    //     }

    //     modalClose.addEventListener('click', hideBuyTickets);
    //     modal.addEventListener('click', hideBuyTickets);

    //     modalContainer.addEventListener('click', function (event) {
    //         event.stopPropagation();
    //     })
    // </script>