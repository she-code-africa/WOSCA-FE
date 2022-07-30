import React from 'react';
import Header from '../../components/header';

function Project() {

    return (
        <React.Fragment>
            <Header />
            <div className="container">
                <div className="admin-greeting"> <p>Participant Report</p></div>
                <div className="contribution-cards admin-cards">
                <iframe title="partrep" src="https://forms.gle/ZZZsp5HBY922D8bN9" width="1280" height="1800" frameborder="0" marginheight="0" marginwidth="0">
                    Loading…
                </iframe>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Project;
