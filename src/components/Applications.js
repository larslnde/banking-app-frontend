import React from 'react';
import Application from './Application';

const Applications = (props) => (
    <div>
        <h3>Your Applications</h3>
        {
            props.applications.map((application, index) => (
                <Application
                    key={index}
                    applicationInfo={application}
                    count = {index + 1}
                />
            ))
        }
    </div>
);

export default Applications;