import { Link, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"

function Register() {

    const navigate = useNavigate()

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    useEffect(
        () => {

            const token = localStorage.getItem("token")

            if(token != null){
                navigate('/products')
            }
        }
    )

    function usernameFun(e) {

        // console.log('input running...', e.target.value)

        setUsername(e.target.value)
    }

    function passwordFun(e) {

        // console.log('password input running...', e.target.value)

        setPassword(e.target.value)
    }

    async function handleSubmit(e) {
        e.preventDefault()

        console.log('wait a second...')

        let data = {
            username: username,
            password: password
        }

        const res = await fetch("http://localhost:5000/api/auth/register", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })

        if (res.ok) {
            
            console.log('[username:', username, '; password:', password, '] Registerd Successfully ✅')
            setUsername("")
            setPassword("")
        }
    }

    return (

        <div className="container d-flex justify-content-center pt-5">

            <div className="card" style={{ width: '18rem' }}>
                <form onSubmit={handleSubmit} className="card-body d-flex flex-column align-items-center gap-3">
                    <h4 className="card-title">Register</h4>
                    <input type="text" placeholder="Create Username" className="p-2 rounded-2 border-1 w-100" onChange={(e) => usernameFun(e)} required value={username} />
                    <input type="password" placeholder="Create Password" className="p-2 rounded-2 border-1 w-100" onChange={(e) => passwordFun(e)} required value={password} />
                    <button type="submit" className="btn btn-primary w-100">Submit</button>
                    <div className="d-flex gap-1">
                        <p>Already have an account?</p>
                        <Link to={'/'} className="text-decoration-none">Login</Link>
                    </div>
                </form>
            </div>

        </div>

    )

}

export default Register