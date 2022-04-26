import React from 'react';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import './textField.css';
import handleAddTime from "../function/handleAddTime";
import validationText from "../../validation/validationText";
import {useSelector} from "react-redux";
import setErrEmptyField from "../function/setErrEmptyField";

const TextField = ({ title, index, placeholder, value }) => {
    const fieldErrMessage = useSelector((curentState) => curentState.workTime.data[index][title + 'FieldErrMessage']);
    const fieldError = useSelector((curentState) => curentState.workTime.data[index][title + 'FieldError']);

    const _handleChange = React.useCallback((e) => handleAddTime(e, title, index), [
        index,
        title,
    ]);

    const BlurHandler = (e) => {
        (e.target.value)
            ? setErrEmptyField(false, index, title)
            : setErrEmptyField(true, index, title, "Обов'язкове поле!");
        _handleChange(validationText(e))
    }
    const ChangeHandler = (e) => {
        (e.target.value)
            ? setErrEmptyField(false, index, title)
            : setErrEmptyField(true, index, title, "Обов'язкове поле!");
        _handleChange(validationText(e))
    }

    return (
        <div className="column">
            <div className="column_time">
                <AccessTimeIcon style={{color: '#304386', paddingBottom: '5px'}} fontSize="small" />
                <input
                    required={fieldError}
                    value={value}
                    maxLength="5"
                    placeholder={placeholder}
                    type="text"
                    onBlur={e => BlurHandler(e)}
                    onChange={e => ChangeHandler(e)}/>
            </div>
            {(fieldError && fieldErrMessage) ? <div style={{color: 'red', paddingRight: "12px"}}>{fieldErrMessage}</div> : <React.Fragment />}
        </div>

    );
};

export default TextField;