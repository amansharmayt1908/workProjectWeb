import React, { useState, useEffect } from 'react';
// import WeekProgress from './weekProgress';
import './fourthPage.css';
import image from '../images/last_image.png';
import Footer from './footer';

const FourthPage = () => {
    const [showTimeline, setShowTimeline] = useState(false);
    const [activeWeekIndex, setActiveWeekIndex] = useState(0);

    const weeks = [
        {
            number: 1,
            title: "Relief & Clarity",
            description: "Feel the weight start to lift as you open up, discovering clarity in a safe, non-judgmental space."
        },
        {
            number: 4,
            title: "Increased Resilience",
            description: "Begin to notice your reactions shift—less anxiety, more calmness, and tools to manage stress."
        },
        {
            number: 8,
            title: "Lasting Positivity",
            description: "Wake up with a renewed sense of well-being, as you start to take control of your mental and emotional health."
        },
        {
            number: 12,
            title: "Months & Beyond - Thriving",
            description: "Live with confidence, peace, and joy as you embrace the lasting impact of therapy on every area of your life."
        }
    ];

    const getPosition = (index, activeIndex) => {
        // Special case for final position
        if (activeIndex === weeks.length - 1) {
            if (index === weeks.length - 2) return 'left'; // Week 8
            if (index === weeks.length - 1) return 'center'; // Week 12
            return 'far-left'; // Others
        }

        const diff = index - activeIndex;
        if (diff === 0) return 'center';
        if (diff === 1) return 'right';
        if (diff === -1) return 'left';
        if (diff < -1) return 'far-left';
        return 'far-right';
    };

    const handleImageClick = () => {
        setShowTimeline(true);
    };

    useEffect(() => {
        if (showTimeline) {
            const interval = setInterval(() => {
                setActiveWeekIndex((prev) => {
                    if (prev < weeks.length - 1) return prev + 1;
                    clearInterval(interval); // Stop the interval at final position
                    return prev;
                });
            }, 3000);

            return () => clearInterval(interval);
        }
    }, [showTimeline]);

    return (
        <div className='fourth-page-container'>
            <div className={`image-container ${showTimeline ? 'show' : ''}`} onClick={handleImageClick}>
                <img src={image} alt='Background' />
                {!showTimeline && (
                    <div className='text-container'>
                        <div className='textFourthPage'>
                            <span className='textHide'>YOUR TRANSFORMATION, ONE STEP AT A TIME</span>
                            <h3 className='textHide'>Fitness is a journey - every day brings</h3>
                            <h3 className='textHide'>you closer to the life you want</h3>
                        </div>
                    </div>
                )}

                {showTimeline && (
                    <div className="timeline-container">
                        <div className="timeline-fixed-line"></div>
                        <div className={`timeline-dot pos-${activeWeekIndex}`}></div>
                        {weeks.map((week, index) => (
                            <div
                                key={week.number}
                                className={`week-container ${getPosition(index, activeWeekIndex)} ${showTimeline ? 'show' : ''}`}
                            >
                                <div className="week-content">
                                    <h4>Week {week.number} - {week.title}</h4>
                                    <p>{week.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <div className="footer">
            <Footer/>
            </div>
        </div>
    );
};

export default FourthPage;
