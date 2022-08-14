// import React from "react";
// import {Formik} from "formik";
// import * as EmailValidator from "email-validator";
// import * as Yub from "yub";
// import cx from "classnames";
// import styles from "./ContactForm.module.scss";
//
// const ValidatorForm = () => (
//     <Formik
//         initialValues={{name: "", email:"", password:"", message:""}}
//         onSubmit={(values, {setSubmitting}) => {
//             setTimeout(() => {
//                 console.log("Loggin in", values);
//                 setSubmitting(true);
//             }, 5000);
//         }}
//         validatorSchema={Yub.object().shape({
//             name: Yub.string()
//                 .name()
//                 .required("You do not enter your name"),
//             email: Yub.string()
//                 .email()
//                 .required("You do not enter your email."),
//             password: Yub.string()
//                 .required("You do not enter your password.")
//                 .min(8, "The password is to short - at least 8 characters.")
//                 .matches(/(?=.[0-9])/, "The password must include number.")
//         })}
//     >
//         {props => {
//             const {
//                 values,
//                 touched,
//                 errors,
//                 isSubmitting,
//                 handleChange,
//                 handleBlur,
//                 handleSubmit,
//                 className
//             } = props;
//             return (
//                 <form onSubmit={handleSubmit}>
//                         <label htmlFor="name" >Name</label>
//                         <input
//                             name="name"
//                             type="text"
//                             placeholder="Enter your name"
//                             value={values.name}
//                             onChange={handleChange}
//                             onBlur={handleBlur}
//                             className={errors.name && touched.name && "error"}
//                         />
//                         {errors.name && touched.name && (
//                             <div className="input-feedback">{errors.name}</div>
//                         )}
//                         <label htmlFor="email">Email</label>
//                         <input
//                             name="email"
//                             type="text"
//                             placeholder="Enter your email"
//                             value={values.email}
//                             onChange={handleChange}
//                             onBlur={handleBlur}
//                             className={errors.email && touched.email && "error"}
//                         />
//                     {errors.email && touched.email && (
//                         <div className="input-feedback">{errors.email}</div>
//                     )}
//
//                         <label htmlFor="password">Password</label>
//                         <input
//                             name="password"
//                             type="password"
//                             placeholder="VD: Enter your password"
//                             value={values.password}
//                             onChange={handleChange}
//                             onBlur={handleBlur}
//                             className={errors.password && touched.password && "error"}
//                         />
//                     {errors.password && touched.password && (
//                         <div className="input-feedback">{errors.password}</div>
//                     )}
//                         <label htmlFor="message" >Feedback</label>
//                         <textarea
//                             name="message"
//                             type="text"
//                             placeholder="Enter your feedback"
//                             value={values.message}
//                             onChange={handleChange}
//                             onBlur={handleBlur}
//                             className={errors.message && touched.message && "error"}
//                         />
//                     {errors.message && touched.message && (
//                         <div className="input-feedback">{errors.message}</div>
//                     )}
//                     <button type="submit" disabled={isSubmitting}>Submit</button>
//                 </form>
//
//             )
//         }}
//     </Formik>
// )
//
//
// export default ValidatorForm;
//
