import React, {Component} from 'react';
import cx from 'classnames';
import styles from '../../ContactForm.module.scss';

class ContactForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            message: '',
            errors: {},
        };
        // this.handleChange = null;
        // this.handleSubmit = null;
        // this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (event) => {
        const target = event.target;
        if (target.type === "name") {
            this.setState({name: target.value});
        } else if (target.type === "email") {
            this.setState({email: target.value});
        } else if (target.type === "password") {
            this.setState({password: target.value});
        } else {
            this.setState({message: target.value,});
        }
        // switch (target.type) {
        //     case "name": {
        //         this.setState({name: target.value});
        //         break;
        //     }
        //     case "email": {
        //         this.setState({email: target.value});
        //         break;
        //     }
        //     case "password": {
        //         this.setState({password: target.value});
        //         break;
        //     }
        //     case "message": {
        //         this.setState({message: target.value,});
        //         break;
        //     }
        //     default:
        //         return ;
        // }

           // [event.target.name]: event.target.value,



       };

    handleSubmit = (event) => {
        alert("Submitting");
        console.log(this.state);
    }


    render() {
        const {name, email, password, message, className,
        } = this.state;
        return (
            <form onSubmit={this.handleSubmit} className={cx(styles.form, className)}>
                <div className={styles.formGroup}>
                    <label htmlFor={name} className={styles.formLabel}>Full name</label>
                    <input
                        name={name}
                        type="name"
                        placeholder="Enter your name"
                        value={name}
                        className={styles.formControl}
                        onChange={this.handleChange} />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor={email} className={styles.formLabel}>Email</label>
                    <input
                        name={email}
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        className={styles.formControl}
                        onChange={this.handleChange} />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor={password} className={styles.formLabel}>Password</label>
                    <input
                        name={password}
                        type="password"
                        placeholder="VD: Enter your password"
                        value={password}
                        className={styles.formControl}
                        onChange={this.handleChange} />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor={message} className={styles.formLabel}>Feedback</label>
                    <textarea
                        name={message}
                        type="message"
                        placeholder="Enter your feedback"
                        value={message}
                        className={styles.formControl}
                        onChange={this.handleChange}
                    />
                </div>
                <button className={styles.button}>Submit</button>
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