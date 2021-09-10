import React from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Subscribe from "../../components/subscribe";
import '../../styles/views/resources.css';
import Jumbotron from '../../components/resource_jumbo';
import Number from '../../components/resource_number';
import Values from '../../components/resource_values';

function Resources() {
    return (
        <React.Fragment>
            <Header />
            <Jumbotron />
            <Values />
            <Number />
            <Subscribe />
            <Footer />
        </React.Fragment>
    )
}

export default Resources;