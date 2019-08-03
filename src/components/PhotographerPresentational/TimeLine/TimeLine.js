import React from 'react';
import PropTypes from 'prop-types';
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';
import { withTranslation, Trans } from 'react-i18next';

class PersonTimeLine extends React.Component {
    constructor(props) {
        super(props);

        this.timeLineDates = props.timeLineDates;
        this.timeLineInfos = props.timeLineInfos;
    }

    render() {
        return (
            <Timeline lineColor="#ddd">
                {this.timeLineDates.map((item, index) => {
                    return (
                        <TimelineItem
                            key={item}
                            dateText={item}
                            dateInnerStyle={{
                                background: '#61b8ff',
                                color: '#000',
                            }}
                            bodyContainerStyle={{
                                background: '#ddd',
                                padding: '20px',
                                borderRadius: '8px',
                                boxShadow:
                                    '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
                            }}
                        >
                            <p>
                                <Trans>{this.timeLineInfos[index]}</Trans>
                            </p>
                        </TimelineItem>
                    );
                })}
            </Timeline>
        );
    }
}

PersonTimeLine.propTypes = {
    timeLineDates: PropTypes.arrayOf(PropTypes.string).isRequired,
    timeLineInfos: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default withTranslation()(PersonTimeLine);
