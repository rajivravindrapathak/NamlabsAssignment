import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Createissuepage = () => {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const handleTitle = (e) => {
        setTitle(e.target.value)
    }

    const handleDescription = (e) => {
        setDescription(e.target.value)
    }

    const handleSubmit = () => {
        console.log({ title, description})
        const LocalArray = localStorage.getItem('LocalArray') && localStorage.getItem('LocalArray').length > 0 ? JSON.parse(localStorage.getItem('LocalArray')) : []
        localStorage.setItem('LocalArray', JSON.stringify([...LocalArray, {title, description}])) 
    }

    return (
        <div className='container'>
            <h3>Createissuepage</h3>
            <input type="text" placeholder='title' required
            onChange={(e)=> handleTitle(e)} value={title}
             /><br />
            <textarea placeholder='description' required
            onChange={(e)=> handleDescription(e)} value={description}
            /><br />
            <Link to="/homepage"><button onClick={handleSubmit} className='saveButton'>Save</button></Link>
        </div>
    )
}

export default Createissuepage
