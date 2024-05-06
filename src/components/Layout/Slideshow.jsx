import React, { useState, useCallback } from "react";
import leftArrow from "../../assets/img/vectorGauche.svg";
import rightArrow from "../../assets/img/vectorDroit.svg";

export default function Slideshow({ slides }) {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = useCallback(() => {
        setCurrent((prevCurrent) => (prevCurrent === length - 1 ? 0 : prevCurrent + 1));
    }, [length]);

    const prevSlide = useCallback(() => {
        setCurrent((prevCurrent) => (prevCurrent === 0 ? length - 1 : prevCurrent - 1));
    }, [length]);

    if (!slides || slides.length === 0) {
        return <div>Aucune image à afficher</div>;
    }

    return (
        <section id="carrousel-container" aria-roledescription="carousel" aria-label="Gallery">
            {length > 1 && (
                <>
                    <button onClick={prevSlide} className="leftArrow" aria-label="Previous slide">
                        <img src={leftArrow} alt="Previous" />
                    </button>
                    <button onClick={nextSlide} className="rightArrow" aria-label="Next slide">
                        <img src={rightArrow} alt="Next" />
                    </button>
                    <div className="slide-counter">
                        {current + 1}/{length}
                    </div>
                </>
            )}
            {slides.map((slide, index) => (
                <div key={index} className={current === index ? "slide active" : "slide"} aria-hidden={current !== index}>
                    {index === current && <img src={slide} alt={`Slide ${index + 1}`} className="slide-image" />}
                </div>
            ))}
        </section>
    );
}