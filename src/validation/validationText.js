

const validationText = (e) => {
    const target = e.target;

    if(typeof target !== 'undefined') {
        const value = target.value;
        target.value = value.replace(/[^0-9\:]/g, '');  //залишаємо тільки цифри та :

        if(+value[0] > 2 || value[0] === ":"){
            target.value = value.substring(0, value.length - 1);    //перша цифра не може бути більше 2
        }

        if (value[2] && value[2] !== ":"){
            target.value = value.substring(0, value.length - 1); //якщо перша 1 друга люба цифра третій символ тільки :
        }

        if(value[0] === '0' || value[0] === '1'){ //якщо перша 0 або 1
            if(value[1] && value[1] === ":"){
                target.value = value.substring(0, value.length - 1); //якщо перша 0 або 1 то друга не може бути :
            }
            if (value[3] && +value[3] > 5){
                target.value = value.substring(0, value.length - 1); //якщо перша 0 або 1 друга люба цифра третій символ тільки : четвертий символ не більше 5
            }
        }
        if(value[0] === '2'){ //якщо перша 2
            if(value[1] && value[1] === ":" || +value[1] > 3){
                target.value = value.substring(0, value.length - 1); //якщо перша 2 то друга не може бути : та більше 3
            }
            if (value[3] && +value[3] > 5){
                target.value = value.substring(0, value.length - 1); //якщо перша 2 друга не більше 3 третій символ тільки : четвертий символ не більше 5
            }
        }
    }

    return target.value;

}

export default validationText;
