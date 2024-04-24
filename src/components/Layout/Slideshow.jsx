import React, { useState } from "react";
import leftArrow from "../../assets/img/vectorGauche.svg";
import rightArrow from "../../assets/img/vectorDroit.svg"; 

export default function Slideshow({ slides }) {
    // Ajoutez une vérification pour les slides non définis ou vides
    if (!slides || slides.length === 0) {
        return <div>Aucune image à afficher</div>; // ou autre élément de remplacement
    }

    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    return (
        <section id="carrousel-container" aria-roledescription="carousel" aria-label="Gallery">
            {length > 1 && (
                <button onClick={prevSlide} className="leftArrow" aria-label="Previous slide">
                    <img src={leftArrow} alt="Previous" />
                </button>
            )}
            {length > 1 && (
                <button onClick={nextSlide} className="rightArrow" aria-label="Next slide">
                    <img src={rightArrow} alt="Next" />
                </button>
            )}
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={current === index ? "slide active" : "slide"}
                    aria-hidden={current !== index}
                >
                    {index === current && (
                        <img src={slide} alt={`Slide ${index + 1}`} className="slide-image" />
                    )}
                </div>
            ))}
        </section>
    );
}