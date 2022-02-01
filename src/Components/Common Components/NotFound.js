import React from 'react';
import './NotFound.css'

function NotFound(props) {
    return (
        <div className="not-found-page">
            <div class="error">404</div>
            <br /><br />
            <span class="info">File not found</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="wave-top"><path fill="#273036" fill-opacity="1" d="M0,320L48,314.7C96,309,192,299,288,250.7C384,203,480,117,576,101.3C672,85,768,139,864,138.7C960,139,1056,85,1152,106.7C1248,128,1344,224,1392,272L1440,320L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="wave"><path fill="#ff5500" fill-opacity="1" d="M0,64L48,85.3C96,107,192,149,288,170.7C384,192,480,192,576,170.7C672,149,768,107,864,96C960,85,1056,107,1152,117.3C1248,128,1344,128,1392,128L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
        </div>
    );
}

export default NotFound;