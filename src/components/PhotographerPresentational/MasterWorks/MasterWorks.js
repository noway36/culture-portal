import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation, Trans } from 'react-i18next';
import './masterworks.css';

class MasterWorks extends React.Component {
    constructor(props) {
        super(props);

        this.masterWorks = props.masterWorks;
    }

    render() {
        return this.masterWorks ? (
            <div className="master-works-container">
                <p className="master-works-text">
                    <Trans>Masterworks</Trans>
                </p>
                <table className="table_blur">
                    <thead>
                        <tr>
                            <th>
                                <Trans>Exhibitions</Trans>
                            </th>
                            <th>
                                <Trans>CreationDay</Trans>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.masterWorks.map(item => (
                            <tr key={item.id}>
                                <td>{item.composition}</td>
                                <td>{item.dateOfCreation}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        ) : null;
    }
}
MasterWorks.propTypes = {
    masterWorks: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default withTranslation()(MasterWorks);
