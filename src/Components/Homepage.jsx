import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Homepage = () => {

    const [data, setData] = useState([])

    useEffect(()=> {
        const LocalArray = localStorage.getItem('LocalArray')
        setData(JSON.parse(LocalArray))
    }, [data])

    const handleEdit = (dindex) => {
        localStorage.setItem('editIndex', dindex)
    }

    const handleDelete = (doutindex) => {
        const _data = data.filter((e, dinindex) => {
            return doutindex !== dinindex
        })
        setData(_data)
        localStorage.setItem('LocalArray', JSON.stringify(_data))
    }

    return (
        <div>
            <h3>homepage</h3>

            <div className="Divtodo">
                { data && data.map((e, dindex) => (
                    <div className='mapDiv'>
                        <span>Title: {e.title}</span>,
                        <span> desccription: {e.description}</span>
                        <Link to='/edit'><button className='EditButton' onClick={() => handleEdit(dindex)}>edit</button></Link>
                        <button onClick={() => handleDelete(dindex)} >delete</button> 
                    </div>
                    
                ))}
            </div>
        </div>
    )
}

export default Homepage
