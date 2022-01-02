import React, { useState } from 'react';
import './../Styles/Footer.css'

function Footer() {
    const [inputValue, setInputValue] = useState('')
    const handleInputChange = (e) => {
        setInputValue(e.target.value)
        console.log(inputValue);
    }
    return (
        <div className="subscribe">
            <div className="flex-cont">
                <h1>Join the Sooth family</h1>
                <div className="verticle-divider"></div>
                <p>lorem ipsum dolor si gnjdn kdnfm kdndk ksnenek pwkndk</p>
            </div>
            <div className="flex-1">
                <input type="text" onChange={handleInputChange} />
                <button>Subscribe</button>
            </div>
        </div>
    );
}

export default Footer;