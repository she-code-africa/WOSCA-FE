import React from 'react';
import n1 from '../assets/images/01.svg';
import n2 from '../assets/images/02.svg';
import n3 from '../assets/images/03.svg';

const Number = () => {
    return (
        <div className="container">
            <div className="row rn">
                <div className="col-md-2 r_no">
                    <img src={n1} alt=".." />
                </div>
                <div className="col">
                    <p className="resource_lead">
                        Support open source and pick a limited edition T-shirt or plant a tree. Hacktoberfest 2020 has ended. Keep contributing to open source & we'll see you next year!Support open source and pick a limited edition T-shirt or plant a tree. Hacktoberfest 2020 has ended. Keep contributing to open source & we’ll see you next year!
                    </p>
                </div>
            </div>
            <div className="row rn">
                <div className="col-md-2 r_no">
                    <img src={n2} alt=".." />
                </div>
                <div className="col">
                    <p className="resource_lead">
                        Support open source and pick a limited edition T-shirt or plant a tree. Hacktoberfest 2020 has ended. Keep contributing to open source & we'll see you next year!Support open source and pick a limited edition T-shirt or plant a tree. Hacktoberfest 2020 has ended. Keep contributing to open source & we’ll see you next year!
                    </p>
                </div>
            </div>
            <div className="row rn">
                <div className="col-md-2 r_no">
                    <img src={n3} alt=".." />
                </div>
                <div className="col">
                    <p className="resource_lead">
                        Support open source and pick a limited edition T-shirt or plant a tree. Hacktoberfest 2020 has ended. Keep contributing to open source & we'll see you next year!Support open source and pick a limited edition T-shirt or plant a tree. Hacktoberfest 2020 has ended. Keep contributing to open source & we’ll see you next year!
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Number;