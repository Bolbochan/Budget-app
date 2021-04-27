import React, { useState } from 'react';
import download from '../download.svg';

const EditBudget = (props) => {
    const [value, setValue] = useState(props.budget);
    return (
        <>
            <input
                required='required'
                type='number'
                class='form-control mr-3'
                id='name'
                value={value}
                onChange={(event) => setValue(event.target.value)}
            />
            <button
                type='button'
                class='btn btn-primary check'
                onClick={() => props.handleSaveClick(value)}
            >
                <img width="28" height="28" src={download} alt={"download"} />
            </button>
        </>
    );
};

export default EditBudget;