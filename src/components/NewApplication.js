import React from 'react';
import { Redirect } from 'react-router';

class NewApplication extends React.Component {
    state = {
        error: undefined
    }

    handleAddApplication = (e) => {
        console.log('enters handleAddApplication')
        e.preventDefault();
        
        if (e.target.elements.name.value) {
            const name = e.target.elements.name.value;
            const email = e.target.elements.email.value;
            const phone = e.target.elements.phone.value;
            const amount = e.target.elements.amount.value;

            //TODO START USING THIS BUT IMPLEMENT IT IN THE DASHBOARD/APPLICATIONS FIRST!
            // const json = JSON.stringify({name: name, email: email, phone_number: phone, loan_amount: amount});

            try {
                // const json = localStorage.getItem('applications');
                // const applications = JSON.parse(json);
                
                if(name) {
                    // applications.push(name)
                    
                    localStorage.setItem('applications', name);
                    console.log('localStorage updated! with ', name);
                    this.props.history.push('/dashboard');
                }
            } catch (e) {
                // no data to set state
                console.log('Try failed in handleAddApplication')
            }
        }
    }

    render() {
        return(
            <div>
                <form onSubmit={this.handleAddApplication}>
                    Name: 
                    <input type='text' name='name'></input>
                    Email:
                    <input type='email' name='email'></input>
                    Phone number:
                    <input type='tel' name='phone'></input>
                    Loan Amount (requested):
                    <input type='number' name='amount'></input>
                    <button>Submit Application</button>
                </form>

            </div>
        )
    }
};

export default NewApplication;