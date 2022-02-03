import React from 'react';
import {Form} from "react-bootstrap";
import "./InputLabel.scss";

class InputLabel extends React.Component {
    render() {
        const {
            name,
            type,
            label,
            placeholder,
            'label-type':labelType,
            width
        } = this.props;
      
        let labelWidth = width ? width : '5rem';

        return (
            <div className={`input-label`}>
                <Form.Control name={name} className={`label-input`} style={labelType == 'prefix' ? {paddingLeft :`calc(${labelWidth} + 1rem)`} : {paddingRight :`calc(${labelWidth} + 1rem)`}} type={type} placeholder={placeholder} />
                <div className={`label-${labelType}`}>
                    <span className="badge-label" style={{width:labelWidth}}>{label}</span>
                </div>
            </div>
        );
    }
}

export default InputLabel;