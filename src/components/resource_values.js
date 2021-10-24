import React, { Component } from 'react';
import '../styles/views/resources.css';
import arrow from '../assets/images/values_polygon.svg';
import value_img from '../assets/images/res_vs.png';

class Values extends Component {
    constructor(props) {
        super(props);
        this.state = {
            values: true,
            get_started: false,
            beginners: false,
            maintainers: false
        };
    }

    changeValue = (i) => {
        if (i === 1) {
            this.setState({ values: true });
            this.setState({ get_started: false });
            this.setState({ beginners: false });
            this.setState({ maintainers: false });
        } else if (i === 2) {
            this.setState({ values: false });
            this.setState({ get_started: true });
            this.setState({ beginners: false });
            this.setState({ maintainers: false });
        } else if (i === 3) {
            this.setState({ values: false });
            this.setState({ get_started: false });
            this.setState({ beginners: true });
            this.setState({ maintainers: false });
        } else if (i === 4) {
            this.setState({ values: false });
            this.setState({ get_started: false });
            this.setState({ beginners: false });
            this.setState({ maintainers: true });
        }
    }

    render() {
        return (
            <div className="container">
                <div className="row hrs vn">
                    <div className="col" onClick={() => { this.changeValue(1); }}>
                        {
                            this.state.values ? (
                                <>
                                    <p className="r_value_h_active">Values</p>
                                    <p className="r_value_b_active">
                                        Inspired by you
                                    </p>
                                    <img src={arrow} alt=".." className="r_value_active_img" />
                                </>
                            ) : <>
                                <p className="r_value_h">Values</p>
                                <p className="r_value_b">
                                    Inspired by you
                                </p>
                            </>
                        }
                    </div>
                    <div className="col" onClick={() => { this.changeValue(2); }}>
                        {
                            this.state.get_started ? (
                                <>
                                    <p className="r_value_h_active">Getting Started</p>
                                    <p className="r_value_b_active">
                                        Getting started with Hacktoberfest
                                    </p>
                                    <img src={arrow} alt=".." className="r_value_active_img1" />
                                </>
                            ) : <>
                                <p className="r_value_h">Getting Started</p>
                                <p className="r_value_b">
                                    Getting started with Hacktoberfest
                                </p>
                            </>
                        }
                    </div>
                    <div className="col" onClick={() => { this.changeValue(3); }}>

                        {
                            this.state.beginners ? (
                                <>
                                    <p className="r_value_h_active">Beginners</p>
                                    <p className="r_value_b_active">
                                        If you’re new to open source
                                    </p>
                                    <img src={arrow} alt=".." className="r_value_active_img2" />
                                </>
                            ) : <>
                                <p className="r_value_h">Beginners</p>
                                <p className="r_value_b">
                                    If you’re new to open source
                                </p>
                            </>
                        }
                    </div>
                    <div className="col" onClick={() => { this.changeValue(4); }}>

                        {
                            this.state.maintainers ? (
                                <>
                                    <p className="r_value_h_active">Maintainers</p>
                                    <p className="r_value_b_active">
                                        If you’re new to open source
                                    </p>
                                    <img src={arrow} alt=".." className="r_value_active_img2" />
                                </>
                            ) : <>
                                <p className="r_value_h">Maintainers</p>
                                <p className="r_value_b">
                                    If you’re new to open source
                                </p>
                            </>
                        }
                    </div>
                </div>
                <div className="row vn">
                    {
                        this.state.values ? (
                            <img src={value_img} alt=".." className="r_value_img" />
                        ) : this.state.get_started ? (
                            <img src={value_img} alt=".." className="r_value_img" />
                        ) : this.state.beginners ? (
                            <img src={value_img} alt=".." className="r_value_img" />
                        ) : this.state.maintainers ? (
                            <img src={value_img} alt=".." className="r_value_img" />
                        ) : (
                            <img src={value_img} alt=".." className="r_value_img" />
                        )
                    }
                </div>
            </div>

        )
    }
}

export default Values;