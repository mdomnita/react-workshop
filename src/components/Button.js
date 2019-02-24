import React from 'react';

function Button(props) {
    let { text, onClick, isDisabled } = props;
    return (
        <button onClick={onClick} disabled={isDisabled}>
            {text}
        </button>
    );
}

export default Button;
