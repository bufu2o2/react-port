import React, {Fragment, useState} from 'react';



const ContactForm = () => {

    const onSubmit = e => {
        e.preventDefault();
        var temp = {
            ...job,
            name,
            subject,
            email,
            phone,
            message
        };
        console.log(temp);
    }

    const [job, setJob] = useState({
        name: '',
        subject: '',
        email: '',
        phone: '',
        message: ''
    });

    const { name, subject, email, phone, message } = job;

    const onChange = e => setJob({ ...job, [e.target.name]: e.target.value });


    return (
        <Fragment>
        <main>
            <div className="container">
                <div className="card" style={{ borderRadius: "25px" }}>
                    <div className="card-content">
                        <form onSubmit={onSubmit}>
                            <div className="form-group">
                                <input id="form-name" type="text" name='name' placeholder="Name" required value={name} onChange={onChange} />
                            </div>
                            <div className="form-group">
                                <input id="form-subject" type="text" name='subject' placeholder="Subject" required value={subject} onChange={onChange} />
                            </div>
                            <div className="form-group">
                                <input id="form-email" type="email" name='email' placeholder="Email" required value={email} onChange={onChange} />
                            </div>
                            <div className="form-group">
                                <input id="form-phone" type="phone" name='phone' placeholder="Phone Number" value={phone} onChange={onChange} />
                            </div>
                            <div className="form-group">
                                <input id="form-message" type="textarea" name='message' placeholder="Message" required value={message} onChange={onChange} />
                            </div>
                            <div className="center">
                                <button type='submit' value='submit' id="form-submit" className="waves-effect waves-light btn">Send</button>
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