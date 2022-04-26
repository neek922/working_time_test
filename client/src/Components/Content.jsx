import React from 'react';
import './content.css';
import LaneList from "./LaneList/LaneList";
import { useSelector } from "react-redux";
import validationForm from "../validation/validationForm";
import onMount from "./function/onMaunt";

const Content = () => {

    React.useEffect(() => {
		onMount();
	}, []);

    const stateWork = useSelector((currentState) => currentState.workTime.data || []);
    const flag = useSelector((currentState) => currentState.flags.validationLine);

    return (
        <div className="form">
            <div className="form_head">
                <span>✕</span>
                Редагування робочого часу
            </div>
            {stateWork.map((item, index) =>
                <LaneList index={index} key={index} item={item.hours} />
            )}
            <div className="form_submit">
                {(flag) ? <React.Fragment /> : <span style={{color: 'red'}}>Некоректна форма</span>}
                <button onClick={validationForm}>
                    Зберегти
                </button>
            </div>
        </div>
    );
};

export default Content;