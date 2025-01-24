import React from 'react';
import './secondPage.css';
import secondPageImage from '../images/2ndpageimg.png';
import vacuumBottle from '../images/1st.png';
import fridgeBottle from '../images/2nd.png';
import borosilicateBottle from '../images/3rd.png';
import kettle from '../images/4th.png';

const SecondPage = () => {
    const categories = [
        {
            icon: <img src={vacuumBottle} alt="Vacuum Bottle" />,
            title: "Vacuum Bottles"
        },
        {
            icon: <img src={fridgeBottle} alt="Fridge Bottle" />,
            title: "Fridge Bottles & Jugs"
        },
        {
            icon: <img src={borosilicateBottle} alt="Borosilicate Bottle" />,
            title: "Borosilicate Bottles"
        },
        {
            icon: <img src={kettle} alt="Kettle" />,
            title: "Kettles"
        }
    ];

    return (
        <div className="second-page-container">
            <div className="product-section">
                <div className="product-image-container">
                    <img src={secondPageImage} alt="Product" className="product-image" />
                </div>
                <div className="categories-container">
                    {categories.map((category, index) => (
                        <div key={index} className="category-item">
                            <div className="category-icon">{category.icon}</div>
                            <h3 className="category-title">{category.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SecondPage;
