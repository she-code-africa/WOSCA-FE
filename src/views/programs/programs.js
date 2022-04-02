import React from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Subscribe from '../../components/subscribe';
import woman from '../../assets/images/c1.png';
import man from '../../assets/images/c2.jpg';
import '../../styles/views/event.css';
import Jumb from '../../components/con_jumbotron';
import Overview from '../../components/con_overview';
import Partners from '../../components/Partners';

function Programs() {

    return (
        <React.Fragment>
            <Header />
            <div className="container">
                <div className="jumbotron">
                    <div className="row">
                        <div className="col up">
                            <img src={woman} style={{ 'border-radius': '50%' }} alt="..." />
                        </div>
                        <div className="col-md-7 mid">
                            <h1>Contributhon by She Code Africa</h1>
                            <p className="lead">Creating more diversity in the African open source ecosystem.</p>
                            <p className="lead"><a href="https://shecodeafrica.org/" target='_blank' rel='noreferrer'>Find Out More About SCA</a></p>
                        </div>
                        <div className="col down">
                            <img src={man} style={{ 'border-radius': '50%' }} alt="..." />
                        </div>
                    </div>

                </div>
                <Jumb />
                <Partners />
                <Overview />
                {/* remove when subscription is back */}
                <div className='jumbotron'></div>
                {/* <Subscribe /> */}

                {/* <div id="guide">
                    <Part />
                </div>
                <div id="mentor">
                    <Mentor />
                </div>
                <div id="sponsor">
                    <Sponsor />
                </div> */}



            </div>
            <Footer />
        </React.Fragment >
    )
}

export default Programs;