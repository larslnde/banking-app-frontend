import React from 'react';

const Application = (props) => (
    <div>
        <p>
            {console.log('application ', props.applicationInfo)}
            {props.count}. {props.applicationInfo}
        </p>
    </div>
);

export default Application;