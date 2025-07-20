import { Link } from "react-router-dom"
import { useState } from "react"

function Login() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [showmodal, setShowmodal] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault()

        let data = { email, password }

        const res = await fetch("http://localhost:5000/api/fullauth/login", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })

        const newData = await res.json() // newData have message & token
        localStorage.setItem('token', newData.token) // store the token in localStorage to stay the user logged in
        console.log(newData)

        if (res.ok) {
            console.log('[email :', email, '; password :', password, '] Logged In Successfully ✅')
            setShowmodal(true)
            setEmail("")
            setPassword("")
        }
        else {
            alert('Login Failed')
        }
    }

    function offmodal(){
        setShowmodal(false)
    }

    return (

        <div className="container d-flex justify-content-center pt-5">

            <div className="card" style={{ width: '18rem' }}>
                <form onSubmit={handleSubmit} className="card-body d-flex flex-column align-items-center gap-3">
                    <h4 className="card-title">Login</h4>
                    <input type="text" placeholder="Email" className="form-control" required onChange={(e) => setEmail(e.target.value)} value={email}/>
                    <input type="password" placeholder="Password" className="form-control" required onChange={(e) => setPassword(e.target.value)} value={password}/>
                    <button type="submit" className="btn btn-primary w-100">Submit</button>
                    <div className="d-flex gap-1">
                        <p>Have no account?</p>
                        <Link to={'/register'} className="text-decoration-none">Sign Up</Link>
                    </div>
                </form>
                {
                    showmodal ? (

                        <div className="modal d-block modal-bg" tabIndex="-1">
                            <div className="modal-dialog modal-dialog-centered">
                                <div className="modal-content">

                                    <div className="modal-body d-flex flex-column align-items-center gap-3 my-3">
                                        <h5 className="text-success">Logged In Successfully ✅</h5>
                                        <button type="button" className="btn btn-success" onClick={offmodal}>OK</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    ) : null
                }
            </div>

        </div>

    )

}

export default Login