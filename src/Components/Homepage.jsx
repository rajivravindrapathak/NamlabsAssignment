import React, { useEffect, useState } from 'react'

const Homepage = () => {

    const [data, setData] = useState([])

    useEffect(()=> {
        const LocalArray = localStorage.getItem('LocalArray')
        setData(JSON.parse(LocalArray))
    }, [data])

    const handleEdit = (doutindex, newdata) => {
        const _data = data.filter((e, dinindex) => {
            if(doutindex !== dinindex)  {
                return e
            } else {
                return newdata
            }
        })
        setData(_data)
        localStorage.setItem('LocalArray', JSON.stringify(_data))
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
                        <button onClick={() => handleEdit()}>edit</button>
                        <button onClick={() => handleDelete(dindex)} >delete</button> 
                    </div>
                    
                ))}
            </div>
        </div>
    )
}

export default Homepage
