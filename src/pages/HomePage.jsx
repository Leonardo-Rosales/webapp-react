import { useEffect, useState } from "react"
import MovieCard from "../components/MovieCard"
import axios from "axios"


export default function HomePage() {

    const [movies, setMovies] = useState([])

    function fetchMovies() {
        axios.get('http://localhost:3000/api/movies')

            .then(response => {
                console.log(response.data);
                setMovies(response.data)
            })
            .catch(err => {
                console.error(err);

            })
    }

    useEffect(() => {
        fetchMovies()
    }, [])



    return (
        <>
            <section>
                <h1>Home Page</h1>
                <div className="container">
                    <ul className="row">
                        {movies.map(movie => {
                            return (
                                <li className="col-33" key={movie.id}>
                                    <MovieCard movie={movie} />
                                </li>
                            )
                        })}
                    </ul>
                </div>

            </section>
        </>
    )
}