import React, {useState} from 'react';
import './ServiceRegistration.css'
import ContactUsService from "../../../services/contactService/ContactUsService";

const ServiceRegistration = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    function onChangeUsername(e) {
        setName(e.target.value)
    }

    function onChangePhone(e) {
        setPhone(e.target.value)
    }

    function onChangeEmail(e) {
        setEmail(e.target.value)
    }

    function onChangeMessage(e) {
        setMessage(e.target.value)
    }

    function onSave(e) {
        e.preventDefault()
        ContactUsService.saveContactUs(name,phone,email,message)
    }

    return (
        <div className={"sr_registration_row"}>
            <form style={{width: "100%"}} onSubmit={onSave}>
                <p className="fs-5 text-center text-black">Please fill this form and one of our professional will be
                    contacting you shortly.</p>
                <div className="mb-3 input-group-lg">
                    <label form={"name"} className="form-label text-black">Name</label>
                    <input type="name" className="form-control " id="name" onChange={onChangeUsername}/>
                </div>
                <div className="mb-3 input-group-lg">
                    <label form={"phone"} className="form-label text-black">Phone</label>
                    <input type="tel" className="form-control" id="phone" onChange={onChangePhone}/>
                </div>
                <div className="mb-3 input-group-lg">
                    <label form={"email"} className="form-label text-black">Email</label>
                    <input type="email" className="form-control" id="email" onChange={onChangeEmail}/>
                </div>

                <div className=" mb-3 input-group-lg">
                    <label form={"message"} className="form-label text-black">Message</label>
                    <textarea className="form-control overflow-auto" style={{maxHeight: "100px"}} id="message"
                              onChange={onChangeMessage}/>
                </div>
                <button type="submit" className="btn btn-primary text-black">Submit</button>
            </form>
        </div>
    );
};

export default ServiceRegistration;