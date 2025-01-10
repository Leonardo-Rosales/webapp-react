export default function ReviewCard({ review }) {

    const { text, name, vote } = review
    return (
        <div className="reviews">
            <p>By {name}</p>
            <p>{text}</p>
            <strong>{vote}</strong>

        </div>
    )
}