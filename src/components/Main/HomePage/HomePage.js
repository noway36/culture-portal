import React from 'react';

import HomePageAbout from './HomePageAbout/HomePageAbout';
import Team from './Team/Team';

class HomePage extends React.Component {
    render() {
        return (
            <>
                <HomePageAbout />
                <Team />
            </>
        );
    }
}

export default HomePage;
