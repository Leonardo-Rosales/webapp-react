import { Link } from "react-router-dom"

export default function MovieCard({ movie }) {

    const { title, image, director, genre, release_year, abstract } = movie

    return (
        <div>
            <figure>
                <img src={`http://localhost:3000/${image}`} alt="" />
            </figure>
            <h3>{title}</h3>
            <p>{director}</p>
            <p>{genre}</p>
            <strong>{release_year}</strong>
            <p>{abstract}</p>
        </div>
    )
}