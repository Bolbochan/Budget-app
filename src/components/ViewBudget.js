import React from 'react';
import edit from '../edit.svg';
import '../App.css';


const ViewBudget = (props) => {
    return (
        <>
            <span>Бюджет: ₴{props.budget}</span>
            <button type='button' class='btn btn-primary check' onClick={props.handleEditClick}>
                <img width="28" height="28" src={edit} alt={"edit"} />
            </button>
        </>
    );
};

export default ViewBudget;