import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons'
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons'

export default function ReviewCard({ review }) {

    const { text, name, vote } = review

    const stars = []

    for (let i = 0; i < 5; i++) {
        if (i < vote) {
            stars.push(faStarSolid)
        } else {
            stars.push(faStarRegular)
        }

    }


    return (
        <div className="reviews">
            <p>User: {name}</p>
            <p>Review: {text}</p>
            <span>
                Voto:
                {stars.map((star, i) => (
                    <FontAwesomeIcon key={i} icon={star} />
                ))}
            </span>

        </div>
    )
}