import React from 'react';
import './NotFound.css'

function NotFound(props) {
    return (
        <>
            <div class="error">404</div>
            <br /><br />
            <span class="info">File not found</span>
            <img src="http://images2.layoutsparks.com/1/160030/too-much-tv-static.gif" class="static" alt="hello" />
        </>
    );
}

export default NotFound;