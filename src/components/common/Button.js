import React from 'react';

function Button(props) {
    let { text, onClick, isDisabled, classname } = props;
    return (
        <button onClick={onClick} disabled={isDisabled} className={classname}>
            {text}
        </button>
    );
}

export default Button;
