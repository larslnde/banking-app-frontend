import React from 'react';
import Applications from './Applications';
import AddApplication from './AddApplication';

class Dashboard extends React.Component {
    state = {
        applications: ["dave", "michelle"]
    };

    componentDidMount() {
        try {
            const json = localStorage.getItem('applications');
            const applications = JSON.parse(json);

            if(applications) {
                this.setState(() => ({ applications }))
            }
        } catch (e) {
            // no data to set state
        }
    }

    componentDidUpdate(prevProps, prevState) {
        // potentially add some logic here to prevent it from updating all the time?
        const json = JSON.stringify(this.state.applications);
        localStorage.setItem('applications', json);
    }

    render() {
        return (
            <div>
                <Applications applications = {this.state.applications}/>
                {/* <button onClick={this.props.history.push('/')}>New Application</button> */}
                <AddApplication/>
            </div>
        )
    }
}

export default Dashboard;