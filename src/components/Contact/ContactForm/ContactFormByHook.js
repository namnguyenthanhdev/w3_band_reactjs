import React from 'react';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import cx from 'classnames';
import styles from './ContactForm.module.scss';


export default function ContactFormByHook() {
    const { register, handleSubmit, formState: { errors }, className } = useForm({
    criteriaMode: 'all',
});
    const onSubmit = data => alert("Thank you for your feedback. Hope to see you soon.");
    const onError = data => alert("There are some errors. Please check again!");

    console.log(errors);

    function renderErrorMessage([type, message]) {
        return <p key={type} className={styles.formMessage}>{message}</p>;

    }

    return (
        <form onSubmit={handleSubmit(onSubmit, onError)} className={cx(styles.containerForm, className)}>
                <label className={styles.formName}>Name</label>
                <input
                    name="Name"
                    type="text"
                    placeholder="Name: "
                    className={styles.formControl}
                    {...register("Name", {
                        required: "This field is required",
                        maxLength: {
                            value: 3,
                            message: "Total characters must be not exceed 80.",
                        }
                    })}
                />

            <ErrorMessage
                errors={errors}
                name="Name"
                render={({messages}) =>
                    messages &&
                    Object.entries(messages).map(renderErrorMessage)
                }
            />

                <label className={styles.formName}>Gender</label>
                <select
                    className={styles.formSelect}
                    {...register("Sex", {
                        required: "This field is required" })}>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>



            <ErrorMessage
                errors={errors}
                name="Sex"
                render={({messages}) =>
                    messages &&
                    Object.entries(messages).map(renderErrorMessage)
                }
            />

                <label className={styles.formName}>Age
                </label>
                <select
                    className={styles.formSelect}
                    {...register("Old range", {
                        required: "This field is required" })}>
                    <option value="Under18">Under 18</option>
                    <option value="From18to29">From 18 to 29</option>
                    <option value="From3to40">From 30 to 40</option>
                    <option value="Over40">Over 40</option>
                </select>


            <ErrorMessage
                errors={errors}
                name="Old range"
                render={({messages}) =>
                    messages &&
                    Object.entries(messages).map(renderErrorMessage)
                }
            />

                <label className={styles.formName}>Email</label>
                <input
                    type="text"
                    placeholder="Email"
                    className={styles.formControl}
                    {...register("Email", {
                        required: "This field is required.",
                        pattern: {
                            value: /^\S+@\S+$/i,
                            message: "Please enter a valid email address.",
                        },
                    })}
                />




            <ErrorMessage
                errors={errors}
                name="Email"
                render={({ messages }) =>
                messages &&
                Object.entries(messages).map(renderErrorMessage)
            }
            />

                <label >Phone</label>
                    <input
                        type="tel"
                        placeholder="Mobile number"
                        className={styles.formControl}
                        {...register("Mobile number", {
                            required: "This field is required",
                            minLength :{
                                value: 6,
                                message: "Total characters must be not over 6."
                            },
                            maxLength: {
                                value: 12,
                                message: "Total characters must be not exceed 12.",
                            }
                        })}
                    />


            <ErrorMessage
                errors={errors}
                name="Mobile number"
                render={({messages}) =>
                    messages &&
                    Object.entries(messages).map(renderErrorMessage)
                }
            />
            <label className={styles.formName}>Feedback</label>
                    <textarea
                        placeholder="Feedback"
                        className={styles.formFeedback}
                        {...register("Feedback", {
                            required: "This field is required",
                            maxLength: {
                                value: 1000,
                                message: "Total characters must be not exceed 1000.",
                            }
                        })}
                    />
            <ErrorMessage
                errors={errors}
                name="Feedback"
                render={({messages}) =>
                    messages &&
                    Object.entries(messages).map(renderErrorMessage)
                }
            />

            <input type="submit" className={styles.button} />
        </form>
    );
}