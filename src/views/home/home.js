import React from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
// import Subscribe from "../../components/subscribe";
import Jumbotron from '../../components/Jumbotron';
import Rewards from '../../components/Rewards';
import Testimonial from '../../components/Testimonial';
import Partners from '../../components/Partners';
import Slack from '../../components/Slack';

function Home() {
    return (
        <React.Fragment>
            <Header />
            <div className="homepage_">
                <Jumbotron />
                <Rewards />
                <Testimonial />
                <Partners />
                <Slack />
            </div>
            {/* <Subscribe /> */}
            <div className="jumbotron"></div>
            <Footer />
        </React.Fragment>
    )
}

export default Home;