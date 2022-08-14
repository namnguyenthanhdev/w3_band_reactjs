import React, {Component} from 'react';
import Validator from './FormValidator';
import cx from 'classnames';
import styles from './ContactForm.module.scss';

class ContactForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            address: '',
            subject: '',
            message: '',
            errors: {},
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        const requiredWith = (value, field, state) => (!state[field] && !value) || !!value;
        const rules = [
            {
                field: 'name',
                method: 'isEmpty',
                validWhen: false,
                message: 'The name field is required.',
            },
            {
                field: 'name',
                method: 'isLength',
                args: [{min: 5}],
                validWhen: true,
                message: 'The name must be at least 5 characters.',
            },
            {
                field: 'email',
                method: 'isEmpty',
                validWhen: false,
                message: 'The email field is required.',
            },
            {
                field: 'email',
                method: 'isEmail',
                validWhen: true,
                message: 'The email must be a valid email address.',
            },
            {
                field: 'address',
                method: 'isEmpty',
                validWhen: false,
                message: 'The address field is required.',
            },
            {
                field: 'message',
                method: requiredWith,
                args: ['subject'],
                validWhen: true,
                message: 'The message field is required when subject is present.',
            },
        ];
        this.validator = new Validator(rules);

    }

    handleInputChange(event) {
       this.setState({
           [event.target.name]: event.target.value,
       });
    };

    handleSubmit(event) {
       this.setState({
           errors: this.validator.validate(this.state),
       })
        alert(this.validator.errors.message)
    }

    render() {
        const {name, email, address, message, handleChange = () => {}, className, errors} = this.state;
        return (
            <form id='form-1' action="" method="POST" className={cx(styles.form, className)}>
                <div className={styles.formGroup}>
                    <label htmlFor={name} className={styles.formLabel}>Full name</label>
                    <input id={name} name={name} type="text" placeholder="VD: Thanh Nam" className={styles.formControl} onChange={handleChange} />
                    {errors.name && <span className={styles.formMessage}></span>}
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor={email} className={styles.formLabel}>Email</label>
                    <input id={email} name={email} type="text" placeholder="VD: Thanhnam@gmail.com" className={styles.formControl} onChange={handleChange} />
                    {errors.email && <span className={styles.formMessage}></span>}
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor={address} className={styles.formLabel}>Password</label>
                    <input
                        id={address} name={address} type="password" placeholder="VD: Enter your password"
                        className={styles.formControl} onChange={handleChange} />
                    {errors.address && <span className={styles.formMessage}></span>}
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor={message} className={styles.formLabel}>Password confirmation</label>
                    <input
                        id={message} name={message} type="password" placeholder="VD: Enter your password"
                           className={styles.formControl} onChange={handleChange} />
                    {errors.message && <span className={styles.formMessage}></span>}
                </div>
                <button onSubmit={this.handleSubmit} className={styles.button}>Submit</button>
            </form>

        )
    }

}
export default ContactForm;



// <form>
//     <label>
//         Is going:
//         <input
//             name="isGoing"
//             type="checkbox"
//             checked={this.state.isGoing}
//             onChange={this.handleInputChange} />
//     </label>
//     <br />
//     <label>
//         Number of guests:
//         <input
//             name="numberOfGuests"
//             type="number"
//             value={this.state.numberOfGuests}
//             onChange={this.handleInputChange} />
//     </label>
// <textarea value={value} onChange={this.handleChange}/>
// <select>
//     <option value="grapefruit">Grapefruit</option>
//     <option value="lime">Lime</option>
//     <option selected value="coconut">Coconut</option>
//     <option value="mango">Mango</option>
// </select>
// </form>