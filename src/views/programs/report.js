import React from 'react';
import Header from '../../components/header';

function Report() {

    return (
        <React.Fragment>
            <Header />
            <div className="container">
                <div className="admin-greeting"> <p>Mentor Organization Report</p></div>
                <div className="contribution-cards admin-cards">
                <iframe src="https://forms.gle/Gj4fDtW7Fn9t6EeB6" width="1280" height="1800" frameborder="0" marginheight="0" marginwidth="0">
                    Loading…
                </iframe>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Report;
