import React from 'react';
import PropTypes from 'prop-types';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './gallery.css';

class Gallery extends React.Component {
    constructor(props) {
        super(props);

        this.gallery = props.gallery;
    }

    render() {
        return (
            <div className="gallery-container">
                <p className="gallery-text">Галерея</p>
                <Carousel
                    autoPlay
                    infiniteLoop
                    useKeyboardArrows
                    interval={3000}
                    dynamicHeight
                    emulateTouch
                    showStatus={false}
                    centerMode
                    centerSlidePercentage={100}
                >
                    {this.gallery.map((item, index) =>
                        <div key={this.gallery[index]}>
                            <img src={item} alt={index}/>
                        </div>)}
                </Carousel>
            </div>
        );
    }
}
Gallery.propTypes = {
    gallery: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Gallery;
