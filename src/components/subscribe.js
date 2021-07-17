import React, { Component } from 'react';
import '../styles/components/subscribe.css';
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

class Subscribe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: true,
        };
    }

    render() {
        return (
            <div className="row">
                <div className="col"></div>
                <div className="col-md-10">
                    <div className="jumbotrons">
                        <div className="row">
                            <div className="col"></div>
                            <div className="col-md-7">
                                <h2>Subscribe to our Newsletter</h2>
                                <p className="leads"> Support open source and pick a limited edition T-shirt or plant a tree.</p>
                                <Form>
                                    <Form.Row>
                                        <Col md={8} sm={7}>
                                            <Form.Control placeholder="Email Address" />
                                        </Col>
                                        <Col >
                                            <Button className="sub-button xbs" type="submit">SUBSCRIBE</Button>
                                        </Col>
                                    </Form.Row>
                                </Form>
                            </div>
                            <div className="col"></div>
                        </div>
                    </div>
                </div>
                <div className="col"></div>
            </div>

        )
    }
}
export default Subscribe;