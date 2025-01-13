import { useState } from "react"
import axios from "axios"

const initialFormData = {

    vote: 1,
    name: '',
    text: ''
}


export default function FormReview({ id, fetchMovie }) {

    const [formData, setFormData] = useState(initialFormData)

    function onFormChange(e) {

        const { value, name } = e.target

        setFormData({
            ...formData,
            [name]: value
        })
    }

    function storeReview(e) {

        e.preventDefault()

        axios.post(`http://localhost:3000/api/movies/${id}/reviews`, formData)

            .then(res => {
                console.log(res);
                setFormData(initialFormData)
                fetchMovie()
            }).catch(err => {
                console.error(err);

            })

    }


    return (
        <div>
            <div className="form-title">
                <h2>Aggiungi una recensione</h2>
            </div>
            <div>
                <form onSubmit={storeReview}>
                    <p>
                        <label htmlFor="name">Nome *</label>
                        <input required type="text" placeholder="Inserisci un nome" name='name' id="name" value={formData.name} onChange={onFormChange} />
                    </p>
                    <p>
                        <label htmlFor="text">Recensione</label>
                        <textarea name="text" id="text" placeholder="Scrivi la tua recensione" value={formData.text} onChange={onFormChange}></textarea>
                    </p>
                    <p>
                        <label htmlFor="vote">Voto *</label>
                        <select required name="vote" id="vote" value={formData.vote} onChange={onFormChange}>

                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>

                        </select>
                    </p>
                    <div>
                        <button>Invia</button>
                    </div>
                </form>
            </div>
        </div>
    )
}