import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer>
            <div className="main-footer">
                <Link to='/'>Torna alla Home</Link>
            </div>
        </footer>
    )
}