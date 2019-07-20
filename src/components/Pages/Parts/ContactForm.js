import React, {Fragment, useState, useContext} from 'react';
import {ModalContext} from '../../Contexts/ModalContext';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';


const ContactForm = () => {
    const [misOpen, setMisOpen] = useContext(ModalContext);

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
        setContact({
            name: '',
            subject: '',
            email: '',
            phone: '',
            message: ''
        });
        setMisOpen(false);
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


    return (
        <Fragment>
        <main>
            <div className="container">
                <div className="card" style={{ borderRadius: "25px" }}>
                    <div className="card-content">
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
                                <button type='submit' value='submit' id="form-submit"><Icon id='form-submit-icon'>send</Icon></button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    </Fragment>
    )
}

export default ContactForm;