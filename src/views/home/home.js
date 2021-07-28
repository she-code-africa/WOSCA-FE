import React, { useContext } from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Jumbotron from '../../components/Jumbotron'

function Home() {
    return (
        <React.Fragment>
            <Header />
            <div className="home">
            <Jumbotron/>
            </div>
            {/* <Footer /> */}
        </React.Fragment>
    )
}

export default Home;