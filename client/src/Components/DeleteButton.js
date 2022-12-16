import React from 'react';
import axios from 'axios';

const DeleteButton = (props) => {
    const { authorid, succesCallback} = props;
    const deleteProduct = (e) => {
        axios.delete('http://localhost:8000/api/author/'+ authorid)
        .then((res) => {
            succesCallback();
        })
        .catch((err) => {
            console.log(err);
        })
    }
    return (
        <div>
            <button className='btn btn-danger' onClick={deleteProduct}>Delete</button>
        </div>
    )
}

export default DeleteButton