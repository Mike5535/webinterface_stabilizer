import React from 'react';
import { Link } from "react-router-dom";

export const ModeCard = (props = null as { modeSvg: string, titleMode: string, link: string }) => {
    return (
        <Link to={props.link}>
            <div className="mode-card">
                <div className="mode-card__background">
                    <div dangerouslySetInnerHTML={{ __html: props.modeSvg }} />
                </div>
                <div className="mode-card__tittle">
                    {props.titleMode}
                </div>
            </div>
        </Link>
    );
}