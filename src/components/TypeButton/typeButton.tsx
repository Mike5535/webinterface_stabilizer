import React from 'react';
import { useDispatch } from 'react-redux'
import { actionSwitchControlType } from '@actions/commonActions';
import { switchControlTypeSuccess } from '@/store/slices/commonSlice';

export const TypeButton = (props = null) => {
  const dispatch = useDispatch();
  return (
    <div onClick={() => dispatch(switchControlTypeSuccess(props.tittle==='Авто'?'auto':'manual'))} 
      className={props.isActive?"type-button_pressed":"type-button_nopressed"}
    >
      {props.tittle}
    </div>
  );
}
