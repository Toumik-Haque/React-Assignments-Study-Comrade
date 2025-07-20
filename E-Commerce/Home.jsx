import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

function Home() {
    
    const navigate = useNavigate() // initiating the function

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
        setUsername(e.target.value)
    }

    function passwordFun(e) {
        setPassword(e.target.value)
    }
    async function handleSubmit(e) {
        e.preventDefault()

        let data = {username, password}

        const res = await fetch("http://localhost:5000/api/auth/login", {
            method : 'POST',
            headers : {'Content-Type' : 'application/json'},
            body : JSON.stringify(data)
        })

        const newData = await res.json() // newData have message & token
        
        console.log(newData)
        
        if(res.ok) {
            localStorage.setItem('token', newData.username) // store the token in localStorage to stay the user logged in
            console.log('[username :', username, '; password :', password, '] Logged In Successfully ✅')
            navigate('/products')
            alert('Logged In Successfully ✅')
        }
        else{
            alert('User not found');
        }
    }

    return (

        <div className="container d-flex justify-content-center pt-5">

            <div className="card" style={{width: '18rem'}}>
                    <form onSubmit={handleSubmit} className="card-body d-flex flex-column align-items-center gap-3">
                        <h4 className="card-title">Login</h4>
                        <input type="text" placeholder="Username" className="p-2 rounded-2 border-1 w-100" required onChange={(e) => usernameFun(e)}/>
                        <input type="password" placeholder="Password" className="p-2 rounded-2 border-1 w-100" required onChange={(e) => passwordFun(e)}/>
                        <button type="submit" className="btn btn-primary w-100">Submit</button>
                        <div className="d-flex gap-1">
                            <p>Have no account?</p>
                            <Link to={'/register'} className="text-decoration-none">Register</Link>
                        </div>
                    </form>
            </div>

        </div>

    )

}

export default Home