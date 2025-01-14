import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSpinner } from "@fortawesome/free-solid-svg-icons"


export default function Loader() {
    return (
        <div className="loader">
            <div>
                <FontAwesomeIcon className="spin animate__animated animate__rotateIn" icon={faSpinner} />
            </div>
        </div>
    )
}