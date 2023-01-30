import React from 'react';
import { useDispatch } from 'react-redux'
import { actionSwitchControlType } from '@actions/commonActions';

export const TypeButton = (props = null) => {
  const dispatch = useDispatch();
  return (
    <div onClick={() => dispatch(actionSwitchControlType(props.tittle==='Авто'?'auto':'manual'))} 
      className={props.isActive?"type-button_pressed":"type-button_nopressed"}
    >
      {props.tittle}
    </div>
  );
}
