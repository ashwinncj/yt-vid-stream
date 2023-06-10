import React, { useState, useEffect } from 'react';

function FileDisplay() {
    const [message, setMessage] = useState('');

    // call getFiles() and set the message state
    useEffect(() => {
        window.readRobotsTxt(setMessage);
    }, []);

    return (
        <div>
            <p>{message}</p>
        </div>
    );
}

export default FileDisplay;