import React from 'react';
// import PropTypes from 'prop-types';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './gallery.css';
import foto1 from './anempodistov/1.jpg';
import foto2 from './anempodistov/2.jpg';
import foto3 from './anempodistov/3.jpg';
import foto4 from './anempodistov/4.jpg';
import foto5 from './anempodistov/5.jpg';

class Gallery extends React.Component {
    constructor(props) {
        super(props);

        this.fotoStatic = props.fotoStatic;

    }


    render() {
        return (
            <div className="gallery-container">
                <p className="gallery-text">Галерея</p>
                <Carousel autoPlay>
                    <div>
                        <img src={foto1} alt="1"/>
                        <p className="legend">1</p>
                    </div>
                    <div>
                        <img src={foto2} alt="2"/>
                        <p className="legend">2</p>
                    </div>
                    <div>
                        <img src={foto3} alt="3"/>
                        <p className="legend">3</p>
                    </div>
                    <div>
                        <img src={foto4} alt="4"/>
                        <p className="legend">3</p>
                    </div>
                    <div>
                        <img src={foto5} alt="5"/>
                        <p className="legend">3</p>
                    </div>
                </Carousel>
            </div>
        );
    }
}
Gallery.propTypes = {
    fotoStatic: PropTypes.string.isRequired,
};

export default Gallery;
