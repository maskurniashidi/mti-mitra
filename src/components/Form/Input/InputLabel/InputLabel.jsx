import React from 'react';
import {Form} from "react-bootstrap";
import "./InputLabel.scss";

const InputLabel = ({name, type, label, placeholder, 'label-type':labelType, width}) => {
    let labelWidth = width ? width : '5rem';

    return (
        <div className={`input-label`}>
            <Form.Control name={name} className={`label-input`} 
                style={labelType === 'prefix' ? {
                    paddingLeft :`calc(${labelWidth} + 1rem)`
                } : {
                    paddingRight :`calc(${labelWidth} + 1rem)`
                }} type={type} placeholder={placeholder} />
            <div className={`label-${labelType}`}>
                <span className="badge-label" style={{width:labelWidth}}>{label}</span>
            </div>
        </div>
    );
}

export default InputLabel;