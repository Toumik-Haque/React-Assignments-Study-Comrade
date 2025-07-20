import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { movieContext } from "./movieContext";

function Movie() {

    const { id } = useParams() // read the id from url

    // At first, fetch the all Movies
    const { data } = useContext(movieContext)


    // Secondly, Filter the Movie Data of only the id from url
    const [movieData, setMovieData] = useState({})
    function filterData() {

        const newData = data.filter((ele) => id == ele.id) // newData is an array of one single obj (filtered obj)

        setMovieData(newData[0]) // movieData = newData[0] = obj
    }
    useEffect(
        () => {
            filterData()
        }, [data] //
    )

    console.log(movieData)

    return (

        <div className="d-flex flex-column align-items-center">

            <div className="movietitle d-flex justify-content-center my-3">
                <h3>{movieData?.title}</h3>
            </div>

            <div className="moviecard rounded bg-white">


                <img src={movieData?.image} className="img-fluid movieimg rounded-start" alt="image" />

                <div className="card-body">

                    <div className="d-flex gap-2">
                        <b>Director: </b> <p>{movieData?.director}</p>
                    </div>
                    <div className="d-flex gap-2">
                        <b>Producer: </b> <p>{movieData?.producer}</p>
                    </div>
                    <div className="d-flex gap-2">
                        <b>Released On: </b> <p>{movieData?.release_date}</p>
                    </div>
                    <h5 className="mt-3"><b>About</b></h5>
                    <p className="card-text">{movieData?.description}</p>

                </div>


            </div>

        </div>

    )
}

export default Movie