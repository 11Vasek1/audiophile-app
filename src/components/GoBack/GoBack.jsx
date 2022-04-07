import React from 'react';
import './GoBack.scss';
import { useNavigate } from 'react-router-dom';



function GoBack(){
    const navigate = useNavigate();
    const goBack = () => navigate(-1);

    return(
        <button
            type="button"
            className="go-back-button"
            onClick={goBack}
        >
            Go Back
        </button>
    )
}

export default GoBack