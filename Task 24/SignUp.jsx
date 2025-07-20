import { Link, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"

function SignUp() {

    const navigate = useNavigate()

    const [name, setName] = useState("")
    const [age, setAge] = useState('')
    const [dob, setDob] = useState('')
    const [contact, setContact] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState("")
    const [showmodal, setShowmodal] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault()

        console.log('wait a second...')

        const res = await fetch("http://localhost:5000/api/fullauth/signup", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, age, dob, contact, email, password })
        })

        if (res.ok) {

            console.log('[email:', email, '; password:', password, '] Signed Up Successfully ✅')
            setName("")
            setAge("")
            setDob("")
            setContact("")
            setEmail("")
            setPassword("")
            setShowmodal(true)
        }
    }

    function goLogin() {

        navigate('/')
        setShowmodal(false)
    }

    return (

        <div className="container d-flex justify-content-center pt-5">

            <div className="card" style={{ width: '18rem' }}>
                <form onSubmit={handleSubmit} className="card-body d-flex flex-column align-items-center gap-3">
                    <h4 className="card-title">Create Account</h4>
                    <input type="text" placeholder="Name" className="form-control" onChange={(e) => setName(e.target.value)} required />
                    <input type="text" placeholder="Age" className="form-control" onChange={(e) => setAge(e.target.value)} required />
                    <div className="form-floating w-100">
                        <input id="dob" type="date" className="form-control" placeholder="Date of Birth" onChange={(e) => setDob(e.target.value)} required />
                        <label htmlFor="dob">Date of Birth</label>
                    </div>
                    <input type="text" placeholder="Number" className="form-control" onChange={(e) => setContact(e.target.value)} required />
                    <input type="email" placeholder="Email" className="form-control" onChange={(e) => setEmail(e.target.value)} required />
                    <input type="password" placeholder="Create Password" className="form-control" onChange={(e) => setPassword(e.target.value)} required />
                    <button type="submit" className="btn btn-primary w-100">Sign Up</button>
                    <div className="d-flex gap-1">
                        <p>Already have an account?</p>
                        <Link to={'/'} className="text-decoration-none">Login</Link>
                    </div>
                </form>
            </div>

            {
                showmodal ? (

                    <div className="modal d-block modal-bg" tabIndex="-1">
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                                
                                <div className="modal-body d-flex flex-column align-items-center gap-3 my-3">
                                    <h5 className="text-success">Sign Up Successfull !</h5>
                                    <button type="button" className="btn btn-primary" onClick={goLogin}>Go to Login Page</button>
                                </div>
                            </div>
                        </div>
                    </div>

                ) : null
            }

        </div>

    )

}

export default SignUp