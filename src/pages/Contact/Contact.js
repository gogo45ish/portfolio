import React, { useEffect, useState } from 'react'
import emailjs from 'emailjs-com'
import classes from './Contact.module.scss'
import { Store } from 'react-notifications-component';
const Contact = () => {


    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [nameFlag, setNameFlag] = useState(false)
    const [emailFlag, setEmailFlag] = useState(false)
    const [subjectFlag, setSubjectFlag] = useState(false)
    const [messageFlag, setMessageFlag] = useState(false)



    const nameHandler = (event) => {
        setNameFlag(false);
        setName(event.target.value)
        // Store.addNotification({
        //     title: "Success!",
        //     message: "Your message has been sent to George.",
        //     type: "success",
        //     insert: "top",
        //     container: "top-center",
        //     animationIn: ["animate__animated", "animate__fadeIn"],
        //     animationOut: ["animate__animated", "animate__fadeOut"],
        //     dismiss: {
        //         duration: 5000,
        //         onScreen: true
        //     }
        // });


    }
    const emailHandler = (event) => {
        setEmailFlag(false);

        setEmail(event.target.value)
    }
    const subjectHandler = (event) => {
        setSubjectFlag(false);

        setSubject(event.target.value)
    }
    const messageHandler = (event) => {
        setMessageFlag(false);

        setMessage(event.target.value)
    }

    const templateParams = {
        email: email,
        name: name,
        subject: subject,
        message: message
    };

    const submit = (e) => {
        e.preventDefault();
        if (name === "") {
            setNameFlag(true);
        }
        if (email === "") {
            setEmailFlag(true);

        }
        if (subject === "") {
            setSubjectFlag(true);

        }
        if (message === "") {
            setMessageFlag(true);

        }
        if (name !== "" && email !== "" && subject !== "" && message !== "") {

            emailjs.sendForm('service_yi8rxnv', 'template_6p9ev9k', e.target, 'user_PuIaGaCRy94irht2x2Wl9')
                .then(result => {
                    console.log("alo");
                    Store.addNotification({
                        title: "Success!",
                        message: "Your message has been sent to George.",
                        type: "success",
                        insert: "top",
                        container: "top-center",
                        animationIn: ["animate__animated", "animate__fadeIn"],
                        animationOut: ["animate__animated", "animate__fadeOut"],
                        dismiss: {
                            duration: 5000,
                            onScreen: true
                        }
                    });
                }).catch(error => {
                    console.log(error.text);
                })
        }



        e.target.reset()

    }

    return (
        <div>
            <h2 className={classes.title}>Contact me!</h2>

            <form onSubmit={submit} noValidate>
                <div className={classes.box}>
                    <div className={classes.box__name}>
                        <label className={nameFlag ? classes.error : classes.customField}>
                            <input className={classes.nameInput} type="text" placeholder='Name' name='name' required value={name} onChange={nameHandler} />
                            {/* <span className={classes.placeholder}>Name</span> */}
                        </label>
                    </div>
                    <div className={classes.box__email}>
                        <label className={emailFlag ? classes.error : classes.customField}>
                            <input className={classes.emailInput} type="text" placeholder='Email' name='email' required value={email} onChange={emailHandler} />
                            {/* <span className={classes.placeholder}>Name</span> */}
                        </label>
                    </div>
                    <div className={classes.box__subject}>
                        <label className={subjectFlag ? classes.error : classes.customField}>
                            <input className={classes.subjectInput} type="text" placeholder='subject' name='subject' required value={subject} onChange={subjectHandler} />
                            {/* <span className={classes.placeholder}>Name</span> */}
                        </label>
                    </div>
                    <div className={classes.box__textArea}>
                        <label className={messageFlag ? classes.error : classes.customField}>
                            <textarea type="text" placeholder='message' name='message' required value={message} onChange={messageHandler} />
                            {/* <span className={classes.placeholder}>Name</span> */}
                        </label>
                    </div>
                    <div className={classes.box__btn}>
                        <input type="submit" value="Submit" />

                    </div>


                </div>
            </form>
        </div>
    )
}

export default Contact