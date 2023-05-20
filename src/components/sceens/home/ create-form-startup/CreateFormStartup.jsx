import { useState } from "react"

function CreateFormStartup(){
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [autor, setAutor] = useState('')

    const CreateStartup = e =>{
        e.preventDefault()
        console.log({name,price,autor})
    }

    return(
        <form >
            <input placeholder="Name"
            onChange={e => setName(e.target.value)}
            value={name}
            />
            <input placeholder="Price"
            onChange={e => setPrice(e.target.value)}
            value={price}
            />
            <input placeholder="Autor"
            onChange={e => setAutor(e.target.value)}
            value={autor}
            />
            <input placeholder="Image"/>

            <button onClick={e => CreateStartup(e)}>Publick</button>
        </form>
    )
}

export default CreateFormStartup