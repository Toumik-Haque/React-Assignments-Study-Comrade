import { useState } from "react";

function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [modal, setModal] = useState(false)

    function handleSubmit(e) {
        e.preventDefault(); // Prevents page refresh
        setModal(true)
        setName("")
        setEmail("")
        setMessage("")
    }

    return (
        <div className="d-flex justify-content-center contact-body">
            <form onSubmit={handleSubmit} className="card p-3">
                <h4 className="my-4 pb-2 text-center">Contact Us</h4>

                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="floatingInput" placeholder="Enter Name" value={name} onChange={(e) => setName(e.target.value)} required/>
                    <label htmlFor="floatingInput">Enter Name</label>
                </div>

                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="floatingEmail" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                    <label htmlFor="floatingEmail">Enter Email</label>
                </div>

                <div className="form-floating mb-3">
                    <textarea type="text" className="form-control" id="floatingMessage" placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)} required/>
                    <label htmlFor="floatingMessage">Message</label>
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

            {
                modal ? (

                    <div className="modal d-block modal-bg" tabIndex="-1">
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">

                                <div className="modal-body text-center">
                                    <p className="text-success fw-bold fs-4">You Submitted Successfully 🎉</p>
                                    <p>We will contact you soon</p>
                                    <button className="btn btn-success mt-3" type="button" onClick={() => setModal(false)}>OK</button>
                                </div>

                            </div>
                        </div>
                    </div>

                ) : null
            }

        </div>
    );
}

export default Contact;
