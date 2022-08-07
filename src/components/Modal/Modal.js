 import React from 'react';

 const Modal = ({itemName, onPayClick=()=>{}}) => {
     function handlePay() {
         console.log('start pay:',itemName);
         onPayClick && onPayClick();
     }
    return (
        <div className="modal js-modal">
        <div className="modal-content js-modal-container">
            <div className="modal-close js-modal-close">
                <i className="ti-close"></i>
            </div>

            <header className="modal-header">
                <i className="modal-heading-icon ti-bag"></i>
                {itemName}
            </header>

            <div className="modal-body">
                <label for="input-ticket-number" className="modal-label">
                    <i className="ti-shopping-cart"></i>
                    {itemName}
                </label>
                <input id="input-ticket-number" type="text" className="modal-input" placeholder="How many?" />


                <label for="input-ticket-email" className="modal-label">
                    <i className="ti-user"></i>
                    Send To
                </label>
                <input id="input-ticket-email" type="email" className="modal-input" placeholder="Enter email" />


                <button id="buy-ticket" onClick={handlePay}>
                    Pay <i className="ti-check"></i>
                </button>

            </div>
            <footer className="modal-footer">
                <p className="modal-help">Need <a href="">help?</a></p>
            </footer>
        </div>
    </div>
    );
}

export default Modal;
    
    
 

     {/* <script>
         const buyBtns = document.querySelectorAll('.js-buy-ticket');
         const modal = document.querySelector('.modal');
         const modalClose = document.querySelector('.js-modal-close');
         const modalContainer = document.querySelector('.js-modal-container');

         function showBuyTickets() {
            modal.classNameList.add('open');
        }

        function hideBuyTickets() {
            modal.classNameList.remove('open');
        }

        for (const buyBtn of buyBtns) {
            buyBtn.addEventListener('click', showBuyTickets);
        }

        modalClose.addEventListener('click', hideBuyTickets);
        modal.addEventListener('click', hideBuyTickets);

        modalContainer.addEventListener('click', function (event) {
            event.stopPropagation();
        })
    </script> */}