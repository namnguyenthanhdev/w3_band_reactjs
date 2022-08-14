import React from 'react';
import {useForm} from 'react-hook-form';
import {ErrorMessage} from '@hookform/error-message';
import cx from 'classnames';
import styles from './ContactForm.module.scss';
import FormUnitComponent from "./components/FormUnitComponent/FormUnitComponent";


const FormUnitName = {
    NAME: "name"
}

export default function ContactFormByHook(props) {
    const {className} = props;
    const {register, handleSubmit, formState: {errors}} = useForm({criteriaMode: 'all'});

    function onSubmit(data) {
        alert("Thank you for your feedback. Hope to see you soon.");
    }

    function onError(data) {
        alert("There are some errors. Please check again!");
    }

    console.log("errors:", errors);


    function renderErrorMessage({messages}) {
        return messages && Object.entries(messages).map(([type, message]) => {
            return <p key={type} className={styles.formMessage}>{message}</p>;
        })
    }

    function isError() {
        console.log('test:', Object.keys(errors).length !== 0);
        return errors && Object.keys(errors).length !== 0;
    }

    return (<form onSubmit={handleSubmit(onSubmit, onError)}
                  className={cx(isError() ? styles.invalidContainerForm : styles.containerForm, className)}>
        <FormUnitComponent labelName={"Name"} className={styles.formUnit}>
            <input
                name={FormUnitName.NAME}
                className={errors && errors[FormUnitName.NAME] && styles.errorBorder}
                type="text"
                placeholder="Name: "
                {...register(FormUnitName.NAME, {
                    required: "This field is required", maxLength: {
                        value: 80, message: "Total characters must be not exceed 80.",
                    }
                })}
            />
            <ErrorMessage errors={errors} name={FormUnitName.NAME} render={renderErrorMessage}/>
        </FormUnitComponent>


        <FormUnitComponent labelName={"Gender"} className={styles.formUnit}>
            <select name={"Gender"}
                    {...register("Gender", {
                        required: "This field is required"
                    })}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
            </select>
            <ErrorMessage errors={errors} name="Sex" render={renderErrorMessage}/>
        </FormUnitComponent>


        <FormUnitComponent labelName={"Age"} className={styles.formUnit}>
            <select name={"age"}
                    {...register("Old range", {
                        required: "This field is required"
                    })}>
                <option value="Under18">Under 18</option>
                <option value="From18to29">From 18 to 29</option>
                <option value="From3to40">From 30 to 40</option>
                <option value="Over40">Over 40</option>
            </select>
            <ErrorMessage errors={errors} name="age" render={renderErrorMessage}/>
        </FormUnitComponent>


        <FormUnitComponent labelName={"Email"} className={styles.formUnit}>

            <input type="text" name={"Email"} placeholder="Email"
                   {...register("Email", {
                       required: "This field is required.", pattern: {
                           value: /^\S+@\S+$/i, message: "Please enter a valid email address.",
                       },
                   })}
            />
            <ErrorMessage errors={errors} name="Email" render={renderErrorMessage}/>
        </FormUnitComponent>

        <FormUnitComponent labelName={"Phone"} className={styles.formUnit}>
            <input name={"Phone"} type="tel" placeholder="Mobile number"
                   {...register("Mobile number", {
                       required: "This field is required", minLength: {
                           value: 6, message: "Total characters must be not over 6."
                       }, maxLength: {
                           value: 12, message: "Total characters must be not exceed 12.",
                       }
                   })}
            />
            <ErrorMessage errors={errors} name="Phone" render={renderErrorMessage}/>
        </FormUnitComponent>


        <FormUnitComponent labelName={"Feedback"} className={styles.formUnit}>
            <textarea name={"Feedback"} placeholder="Feedback"
                      {...register("Feedback", {
                          required: "This field is required", maxLength: {
                              value: 1000, message: "Total characters must be not exceed 1000.",
                          }
                      })}
            />
            <ErrorMessage errors={errors} name="Feedback" render={renderErrorMessage}/>
        </FormUnitComponent>
        <input type="submit" className={styles.button}/>
    </form>);
}