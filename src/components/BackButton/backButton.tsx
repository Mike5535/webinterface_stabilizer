import React from 'react';
import { Link } from "react-router-dom";

export const BackButton = () => {
    return (
        <Link className='back-button__link' to={'/'}>
            <div className='back-button'>
                Назад
            </div>
        </Link>
    );
}
