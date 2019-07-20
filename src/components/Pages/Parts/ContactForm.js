import React, {Fragment, useState, useContext} from 'react';
import {ModalContext} from '../../Contexts/ModalContext';
import Icon from '@material-ui/core/Icon';
import * as emailjs from 'emailjs-com';



const ContactForm = () => {
    const [misOpen, setMisOpen] = useContext(ModalContext);
    const [sent, setSent] = useState(false);

    const onSubmit = e => {
        e.preventDefault();
        var temp = {
            ...contact,
            name,
            subject,
            email,
            phone,
            message
        };
        console.log(temp);
        setSent(true);
        //build email obj in email js format ================================================
        emailObj = {
            'from_name': name,
            'from_subject': subject,
            'reply_to': email,
            'phone': phone,
            'to_name': 'jake',
            'message_html': message
        }
        emailjs.send(service_id,template_id, emailObj, user_id)
        .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
        }, (err) => {
            console.log('FAILED...', err);
        });

        //reset contact form ================================================================
        setContact({
            name: '',
            subject: '',
            email: '',
            phone: '',
            message: ''
        });
        setMisOpen(false);
        setSent(false);
    }

    const [contact, setContact] = useState({
        name: '',
        subject: '',
        email: '',
        phone: '',
        message: ''
    });

    const { name, subject, email, phone, message } = contact;

    const onChange = e => setContact({ ...contact, [e.target.name]: e.target.value });


    //emailjs form send ==================================================================
    let emailObj = {
        "from_name": "from_name_value",
        'from_subject': 'from_subject_value',
        "reply_to": "reply_to_value",
        "to_name": "to_name_value",
        "message_html": "message_html_value"
     }
     
     const service_id = "bufu2o2";
     const template_id = "Portfolio_contact-Me";
     const user_id = 'user_hz3FeZv9n0eggWA6hV8a6'





    return (
        <Fragment>
            <div className="container">
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <label>Name</label>
                        <input className='form-half' id="form-name" type="text" name='name' placeholder="Name" required value={name} onChange={onChange} />
                    </div>
                    <div className="form-group">
                        <label>Subject</label>
                        <input className='form-half' id="form-subject" type="text" name='subject' placeholder="Subject" required value={subject} onChange={onChange} />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input className='form-half'  id="form-email" type="email" name='email' placeholder="Email" required value={email} onChange={onChange} />
                    </div>
                    <div className="form-group">
                        <label>Phone</label>
                        <input className='form-half' id="form-phone" type="phone" name='phone' placeholder="Phone Number" value={phone} onChange={onChange} />
                    </div>
                    <div className="form-group" id='-message'>
                        <label>Message</label>
                        <textarea id="form-message" type="textarea" name='message' placeholder="Message" required value={message} onChange={onChange} />
                    </div>
                    <div className="center">
                        <button type='submit' value='submit' id="form-submit">
                            <Icon id='form-submit-icon'>send</Icon>
                        </button>
                    </div>
                </form>
            </div>
    </Fragment>
    )
}

export default ContactForm;