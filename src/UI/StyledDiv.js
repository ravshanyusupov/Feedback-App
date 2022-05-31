import React from 'react';

function StyledDiv({children, back}) {
    return (
        <div className={`card ${back && 'back'}`}>
            {children}
        </div>
    );
}

export default StyledDiv;