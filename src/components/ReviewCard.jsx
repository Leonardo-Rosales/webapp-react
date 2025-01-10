export default function ReviewCard({ review }) {

    const { text, name, vote } = review
    return (
        <div className="reviews">
            <p>User: {name}</p>
            <p>Review: {text}</p>
            <strong>Vote: {vote}</strong>

        </div>
    )
}