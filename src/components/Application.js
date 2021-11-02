import React from 'react';

const Application = (props) => (
    <div>
        <p>{props.count}. </p>
        <p>
            {props.applicationInfo}
        </p>
        <p>
            email
        </p>
        <p>
            phone number
        </p>
        <p>
            loan amount
        </p>
    </div>
);

export default Application;