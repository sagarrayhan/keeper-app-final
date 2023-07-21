import React from 'react';

import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import axios from 'axios';


const ShowNote = (props) => {
    const deleteContent = ()=>{
        console.log(props.id);
        axios.post("https://keeper-app-backend-1d3c.onrender.com/delete", {id : props.id} )
        
    }
    return (
        <div className='note'>
            <h1 className='text-red'>{props.title}</h1>
            <p>{props.note}</p>
            <button onClick={deleteContent}><DeleteOutlineIcon/></button>
        </div>
    );
};

export default ShowNote;