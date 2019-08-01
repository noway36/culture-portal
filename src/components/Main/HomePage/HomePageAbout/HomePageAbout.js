import React from 'react';
import './home-page-about.css';

import Head from './Head/Head';
import Content from './Content/Content';
import DailyPerson from './DailyPerson/DailyPerson';

class HomePageAbout extends React.Component {
    render() {
        return (
            <>
                <div className='home-page-about'>
                    <Head />
                    <Content />
                    <DailyPerson />
                </div>
            </>
        );
    }
}

export default HomePageAbout;
