import "./css/Slideshow.css";
import React from 'react';


const Slideshow = () => {
    const [imageIndex, setImageIndex] = useState(0);

    const importAll = (resource) => {
        return resource.keys().map(resource);
    };

    const images = importAll(
        require.context("../images/slideshow", false, /\.(png|jpe?g|svg$|gif)/)
    );

    const showNextImage = () => {
        /*
        if(imageIndex == images.length - 1){
            setImageIndex(0);
        } else {
            setImageIndex(imageIndex+1);
        }
            */
        
        setImageIndex(imageIndex == images.length -1? 0: imageIndex+1);
    }

    const showPreviousImage = () => {
        setImageIndex(imageIndex == 0? images.length-1: imageIndex-1);
    }

    return (
        <section className="slideshow">
            <img src = {images[imageIndex]} />
            <p>
                <button onClick={showNextImage}>Next</button>
                <button onClick={showPreviousImage}>Previous</button>
            </p>
        </section>
    );
};

export default Slideshow;