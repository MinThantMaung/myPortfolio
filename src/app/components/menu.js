import React from 'react';

const Menu = ({ onClose }) => {
    const handleMenuClose = () => {
        onClose && onClose();
    };

    return (
        <div className="relative">
            <div className="flex flex-col justify-center items-center w-full h-screen bg-white">
                <button onClick={handleMenuClose}>Close Menu</button>
                <div>
                    Home
                </div>
                <div>
                    About
                </div>
                <div>
                    Projects
                </div>
                <div>
                    Contact
                </div>
            </div>
        </div>
    );
};

export default Menu;
