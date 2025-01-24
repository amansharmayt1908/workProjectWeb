import React, { useState, useEffect } from 'react'
import './firstPage.css'
import fullBase from '../images/fullBase.png'
import bottleCap from '../images/cap.png'
import leftbottle from '../images/leftbottle.png'
import rightbottle from '../images/rightbottle.png'
import SecondPage from './secondPage'
function Main() {

    const [zIndex, setZIndex] = useState(1); // Initial z-index of the button

    useEffect(() => {
        // Set a timeout to change the z-index after 2 seconds
        const timer = setTimeout(() => {
            setZIndex(1);
        }, 3000);

        // Cleanup the timeout in case the component unmounts
        return () => clearTimeout(timer);
        
    }, []);

    useEffect(() => {
        // Start the scroll animation after a delay to match the bottle animation
        const scrollTimer = setTimeout(() => {
            const startTime = Date.now();
            const duration = 2000; // Match this with the bottle animation duration
            const startScroll = window.scrollY;
            const mainContainer = document.querySelector('.main-container');
            const targetScroll = mainContainer.offsetTop + mainContainer.offsetHeight;

            const animateScroll = () => {
                const currentTime = Date.now();
                const elapsed = currentTime - startTime;
                
                if (elapsed < duration) {
                    const progress = elapsed / duration;
                    const scrollPosition = startScroll + (targetScroll - startScroll) * progress;
                    
                    window.scrollTo({
                        top: scrollPosition,
                        behavior: 'auto'
                    });
                    requestAnimationFrame(animateScroll);
                } else {
                    window.scrollTo({
                        top: targetScroll,
                        behavior: 'auto'
                    });
                }
            };

            requestAnimationFrame(animateScroll);
        }, 3500); // Start slightly after the bottle animation

        return () => clearTimeout(scrollTimer);
    }, []);

    return (
        <div className="fullmain">
            <div className="main-container">
                <div className="product-showcase">
                    <div className="gradient-circle"></div>
                    <div className="bottle-container">
                        <div className="text">
                            <h1>The Ultimate Companion for Hydration</h1>
                            <span>We Believe in the Power of hydration.</span>
                            <span>Our mission is simple yet Vital</span>
                        </div>
                        <div className="button-container" style={{ zIndex: zIndex }} >
                            <button className='inquiry-button' >Inquiry Now</button>
                        </div>
                        <div className="bottle-cap">
                            <img src={bottleCap} alt="Bottle Cap" />
                        </div>
                        <div className="bottle-base">
                            <img src={fullBase} alt="Bottle Base" />
                        </div>
                    </div>
                </div>
                <div className="leftbottle"><img src={leftbottle} alt="leftbottle" /></div>
                <div className="rightbottle"><img src={rightbottle} alt="rightbottle" /></div>

            </div>
            <div className="second-page-container">
                <SecondPage/>
            </div>
        </div>


    )
}

export default Main;
