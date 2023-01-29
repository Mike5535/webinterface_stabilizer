import React from 'react';
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { actionSwitchMode } from '@actions/commonActions'

export const ModeCard = (props = null as { modeSvg: string, titleMode: string, link: string, i?: number }) => {
    const dispatch = useDispatch()

    return (
        <Link to={props.link} key={props.i}>
            <div className="mode-card" key={props.i} onClick={() => dispatch(actionSwitchMode(props.link))}>
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