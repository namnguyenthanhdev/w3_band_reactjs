 import React from 'react';
 import cx from 'classnames';
 import styles from './Modal.module.scss'


//  const Modal = ({itemName, onPayClick=()=>{}}) => {
//      function handlePay() {
//          console.log('start pay:',itemName);
//          onPayClick && onPayClick();
//      }
//     return (
//
//     );
// }

 class Modal extends React.Component {
     constructor(props) {
         super(props);
         this.state = {value: 'Please write an essay about your favorite DOM element.'};

         this.handleChange = this.handleChange.bind(this);
         this.handleSubmit = this.handleSubmit.bind(this);
     }

     handleChange(event) {
         this.setState({value: event.target.value});
     }

     handleSubmit(event) {
         alert('A name was submitted: ' + this.state.value);
         event.preventDefault();
     }

     render() {
         return (
             <form onSubmit={this.handleSubmit}>
                 <label>
                     Name:
                     <input type="text" value={this.state.value} onChange={this.handleChange} />
                 </label>
                 <input type="submit" value="Submit" />
             </form>
         );
     }
 }

export default Modal;

 // <div className="modal js-modal">
 //     <div className="modal-content js-modal-container">
 //         <div className="modal-close js-modal-close">
 //             <i className="ti-close"></i>
 //         </div>
 //
 //         <header className="modal-header">
 //             <i className="modal-heading-icon ti-bag"></i>
 //             {itemName}
 //         </header>
 //
 //         <div className="modal-body">
 //             <label htmlFor="input-ticket-number" className="modal-label">
 //                 <i className="ti-shopping-cart"></i>
 //                 {itemName}
 //             </label>
 //             <input id="input-ticket-number" type="text" className="modal-input" placeholder="How many?"/>
 //
 //
 //             <label htmlFor="input-ticket-email" className="modal-label">
 //                 <i className="ti-user"></i>
 //                 Send To
 //             </label>
 //             <input id="input-ticket-email" type="email" className="modal-input" placeholder="Enter email"/>
 //
 //
 //             <button id="buy-ticket" onClick={handlePay}>
 //                 Pay <i className="ti-check"></i>
 //             </button>
 //
 //         </div>
 //         <footer className="modal-footer">
 //             <p className="modal-help">Need <a href="">help?</a></p>
 //         </footer>
 //     </div>
 // </div>
 

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