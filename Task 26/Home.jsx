import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { movieContext } from "./movieContext"

function Home() {

    const {data} = useContext(movieContext)

    return (

        <div className="body">

            <h2 className="d-flex my-4 text-white justify-content-center">Choose Your Movie</h2>

            <div className="d-flex flex-wrap gap-5  container mb-3">

                {
                    data.map((ele, index) => (

                        <div className="card homecard" key={index}>
                            <img src={ele.image} className="card-img-top cardimg" alt="..."/>
                            <Link to={`/movie/${ele.id}`} className="card-body text-decoration-none">
                                <h5 className="card-title text-primary" >{ele.title}</h5>
                            </Link>
                        </div>
                    ))
                }

            </div>

        </div>
    )
}

export default Home