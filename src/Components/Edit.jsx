import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Edit = () => {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const handleTitle = (e) => {
        setTitle(e.target.value)
    }

    const handleDescription = (e) => {
        setDescription(e.target.value)
    }

    const handleEdit = () => {
        const edata = localStorage.getItem('LocalArray') && localStorage.getItem('LocalArray').length > 0 ? JSON.parse(localStorage.getItem('LocalArray')) : []
        const _data = edata.map((e, dataeindex) => {
            if(dataeindex == localStorage.getItem('editIndex'))  {
                return { title, description }
            } else {
                return e
            }
        })
        localStorage.setItem('LocalArray', JSON.stringify(_data))
    }

    return (
        <div>
            <h3>Createissuepage</h3>
            <input type="text" placeholder='title' required
            onChange={(e)=> handleTitle(e)} value={title}
             /><br />
            <textarea placeholder='description' required
            onChange={(e)=> handleDescription(e)} value={description}
            /><br />
            <Link to="/homepage"><button onClick={handleEdit} className='saveButton'>Save</button></Link>
        </div>
    )
}

export default Edit
