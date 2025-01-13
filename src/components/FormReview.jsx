import { useState } from "react"
import axios from "axios"
import { text } from "@fortawesome/fontawesome-svg-core"

const initialFormData = {

    vote: 1,
    name: '',
    text: ''
}


export default function FormReview({ id, fetchMovie }) {

    const [formData, setFormData] = useState(initialFormData)
    const [isFormValid, setIsFormValid] = useState(true)

    function onFormChange(e) {

        const { value, name } = e.target

        setFormData({
            ...formData,
            [name]: value
        })
    }

    function storeReview(e) {

        e.preventDefault()
        setIsFormValid(true)
        console.log('Salva la review sul server');


        const data = {
            text: formData.text.trim() || undefined,
            name: formData.name.trim(),
            vote: parseInt(formData.vote)
        }

        if (
            !data.name ||
            !data.vote ||
            !data.vote < 1 ||
            !data.vote > 5
        ) {
            console.log('Form is not valid');
            setIsFormValid(false)

        }

        axios.post(`http://localhost:3000/api/movies/${id}/reviews`, formData)

            .then(res => {
                console.log(res);
                setFormData(initialFormData)
                fetchMovie()
            }).catch(err => {
                console.error(err);
                setIsFormValid(false)

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
                        {isFormValid === false &&
                            <div>I dati non sono validi</div>
                        }
                        <button>Invia</button>
                    </div>
                </form>
            </div>
        </div>
    )
}