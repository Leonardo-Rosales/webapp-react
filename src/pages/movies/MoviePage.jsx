import axios from "axios"
import { useParams } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import ReviewCard from "../../components/ReviewCard"
import FormReview from "../../components/FormReview"
import GlobalContext from "../../context/globalContext"


export default function MoviePage() {

    const { setIsLoading } = useContext(GlobalContext)

    const [movie, setMovie] = useState(null)
    const { id } = useParams()

    function fetchMovie() {

        setIsLoading(true)

        axios.get(`http://localhost:3000/api/movies/${id}`)

            .then(res => {
                console.log(res.data);
                setMovie(res.data)
            })
            .catch(err => {
                console.error(err);

            })
            .finally(() => {
                setIsLoading(false)
            })
    }

    useEffect(() => {
        fetchMovie()
    }, [id])


    return (
        movie && <>
            <section>
                <h1>Movie Page</h1>
                <div className="movie-page">
                    <figure className="img-page">
                        <img src={`http://localhost:3000/${movie.image}`} alt="" />
                    </figure>
                    <div className="body-page">
                        <h2 className="title">{movie.title}</h2>
                        <p>Director: {movie.director}</p>
                        <p>Genre: {movie.genre}</p>
                        <strong>Release year: {movie.release_year}</strong>
                        <p>Abstract: {movie.abstract}</p>
                    </div>
                </div>
                <div>
                    <h2 className="reviews-title">Reviews</h2>
                    {movie.reviews.length ?
                        <ul>
                            {movie.reviews.map(review => (
                                <ReviewCard review={review} key={review.id} />
                            ))}
                        </ul> :
                        <div>Nessuna recensione</div>
                    }
                </div>
                <FormReview id={id} fetchMovie={fetchMovie} />
            </section>
        </>
    )
}