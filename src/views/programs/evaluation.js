import React from 'react';
import Header from '../../components/header';

function Evaluation() {

    return (
        <React.Fragment>
            <Header />
            <div className="container">
                <div className="admin-greeting"> <p>Participant Evaluation Form</p></div>
                <div className="contribution-cards admin-cards">
                <iframe src="https://forms.gle/VV8auHmMaTUMX9JS8" title="evalform" width="1280" height="1800" frameborder="0" marginheight="0" marginwidth="0">
                    Loading…
                </iframe>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Evaluation;
