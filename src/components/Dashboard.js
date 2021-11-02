import React from 'react';
import Applications from './Applications';
import AddApplication from './AddApplication';

class Dashboard extends React.Component {
    state = {
        applications: ["dave", "michelle"]
    };

    render() {
        console.log('Dashboard ', this.state.applications);
        return (
            <div>
                <Applications applications = {this.state.applications}/>
                <AddApplication />
            </div>
        )
    }
}

export default Dashboard;