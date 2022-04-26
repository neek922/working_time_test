import React from 'react';
import TextField from "../TextField/TextField";
import CheckBoxGroup from "../CheckBoxGroup/CheckBoxGroup";
import AssignmentOutlinedIcon from '@material-ui/icons/AssignmentOutlined';
import handleAddLine from "../function/handleAddLine";
import './laneList.css';
import validationNewLine from "../../validation/validationNewLine";
import HandlerGetInformation from "../function/handlerGetInformation";

const LaneList = ({ index, item }) => {

    return (
        <div className="form_content">
            <div className="row_icon">
                {(index === 0)
                    ? <span  onClick={validationNewLine} className="column_add" id="add_row">Додати ще +</span>
                    : <AssignmentOutlinedIcon onClick={HandlerGetInformation} className="column_add" fontSize="small"/>}
            </div>
            <div className="row_input">
                <TextField value={item['time_to']} index={index} title="time_to" placeholder="час по"/>
                <span> - </span>
                <TextField value={item['time_from']} index={index} title="time_from" placeholder="час від"/>
                <CheckBoxGroup index={index}/>
            </div>
        </div>
    );
};

export default LaneList;