import axios from "axios"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import ReviewCard from "../../components/ReviewCard"


export default function MoviePage() {

    const [movie, setMovie] = useState(null)
    const { id } = useParams()

    function fetchMovie() {
        axios.get(`http://localhost:3000/api/movies/${id}`)

            .then(res => {
                console.log(res.data);
                setMovie(res.data)
            })
            .catch(err => {
                console.error(err);

            })
    }

    useEffect(() => {
        fetchMovie()
    }, [id])


    return (
        movie ? <>
            <section>
                <h1>Movie Page</h1>
                <div className="movie-page">
                    <figure className="img-page">
                        <img src={`http://localhost:3000/${movie.image}`} alt="" />
                    </figure>
                    <div className="page-body">
                        <h2>{movie.title}</h2>
                        <p>{movie.director}</p>
                        <p>{movie.genre}</p>
                        <strong>{movie.release_year}</strong>
                        <p>{movie.abstract}</p>
                    </div>
                </div>
                <div>
                    {movie.reviews.length ?
                        <ul>
                            {movie.reviews.map(review => (
                                <ReviewCard review={review} key={review.id} />
                            ))}
                        </ul> :
                        <div>Nessuna recensione</div>
                    }
                </div>
            </section>
        </> : <p>loading</p>
    )
}