import React from 'react';

import './Error.css';

const Error = props => (
    <div className="error" style={{ display: props.error ? 'block' : 'none' }}>
        <strong>Error:</strong> {props.error}
    </div>
);

export default Error;