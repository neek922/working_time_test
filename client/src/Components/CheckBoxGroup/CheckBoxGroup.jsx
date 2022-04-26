import React from 'react';
import { FormControlLabel, FormGroup } from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";
import { useSelector } from "react-redux";
import handleAddCheck from "../function/handleAddCheck";

const CheckBoxGroup = ({ index }) => {
        const stateCheckBox = useSelector((currentState) => currentState.workTime.data[index].days)
        const _handleChange = React.useCallback((e) => handleAddCheck(e, index), [
                index,
        ]);

    return (
        <FormGroup row>
                {stateCheckBox.map((item, index) =>
                    <FormControlLabel
                        key={item.name}
                        value="top"
                        control={<Checkbox
                                    disabled={item.disabled}
                                    checked={item.checked}
                                    onChange={_handleChange}
                                    name={index.toString()} />}
                        label={item.label}
                        labelPlacement="top"
                    />
                )}
        </FormGroup>
    );
};

export default CheckBoxGroup;