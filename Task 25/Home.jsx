import { useEffect, useState } from "react"

function Home() {

    const [data, setData] = useState([])

    async function showData() {

        const res = await fetch('https://jsonplaceholder.typicode.com/posts/')
        const newData = await res.json()
        console.log(newData.slice(0,5))
        setData(newData.slice(0, 5))
    }

    useEffect(
        () => {
            showData()
        }, []
    )

    return (

        <div>

            <h2 className="d-flex my-4 justify-content-center">Data Cards</h2>

            <div className="d-flex flex-wrap gap-3 container mb-3">

                {
                    data.map((ele, index) => (

                        <div className="card" key={index}>
                            <div className="card-body">
                                <h5 className="card-title" >{ele.title}</h5>
                                <p className="card-text">{ele.body}</p>
                            </div>
                        </div>
                    ))
                }

            </div>

        </div>
    )
}

export default Home