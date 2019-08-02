import React from 'react';
import './daily-person.css';
import { Link } from 'gatsby';
import { withTranslation, Trans } from 'react-i18next';

class DailyPerson extends React.Component {
    render() {
        return (
            <div className="home-page-about-daily">
                <h3>
                    <Trans>Photographer of the day</Trans>
                </h3>
                <h4>
                    <Trans>Anempodistov Mikhail Vladimirovich</Trans>
                </h4>
                <h5>
                    <Trans>March 16, 1964 - January 23, 2018</Trans>
                </h5>
                <p>
                    <Trans>AnempodistovAbout</Trans>
                </p>
                <img
                    src="https://i.ibb.co/0GB7fxV/anempodistov.jpg"
                    alt="Foto"
                />
                <Link to="/photographers/anempodistov">
                    <button type="button">
                        <Trans>Go to</Trans>
                    </button>
                </Link>
            </div>
        );
    }
}

export default withTranslation()(DailyPerson);
