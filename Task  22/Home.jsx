import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
function Home() {

    const navigate = useNavigate()

    useEffect(() => {

        navigate('/array')
    })

    return(

        <div>
            
        </div>
    )
}

export default Home