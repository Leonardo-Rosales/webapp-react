import { useContext, useEffect, useState } from "react"
import MovieCard from "../components/MovieCard"
import axios from "axios"
import GlobalContext from "../context/globalContext"


export default function HomePage() {

    const { setIsLoading } = useContext(GlobalContext)

    const [movies, setMovies] = useState([])

    function fetchMovies() {

        setIsLoading(true)

        axios.get('http://localhost:3000/api/movies')

            .then(response => {
                console.log(response.data);
                setMovies(response.data)
            })
            .catch(err => {
                console.error(err);

            })
            .finally(() => {
                setIsLoading(false)
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