import React from 'react';

function Header(props) {
    return (
            <div style={{ background: 'black', color: 'white', padding: '10px 20px', textAlign: 'center'}}>
                <h1>{props.text}</h1>
            </div>
    );
}

Header.defaultProps = {
    text: 'Feedback App'
}

export default Header;