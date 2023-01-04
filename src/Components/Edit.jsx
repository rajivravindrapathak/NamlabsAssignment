import React from 'react'

const Edit = () => {
    return (
        <div>
            <h3>Editpage</h3>
            <input type="text" placeholder='title' required
            onChange={(e)=> handleTitle(e)} value={title}
             /><br />
            <textarea placeholder='description' required
            onChange={(e)=> handleDescription(e)} value={description}
            /><br />
            <button onClick={handleSubmit} className='saveButton'><Link to="/homepage">Save</Link></button>
        </div>
    )
}

export default Edit
