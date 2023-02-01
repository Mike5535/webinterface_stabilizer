import { actionStart, actionStop } from '@store/actions/commonActions';
import React from 'react';
import { useDispatch } from 'react-redux'

export const StartButton = (props = null) => {
  const dispatch = useDispatch();
  const handlerClik = (e) => {
    props.isActive?
    dispatch(actionStart())
    : dispatch(actionStop())
  }
  return (
    <div
      className={props.isActive?
        props.isActive === "pressed"?
          "type-button__start_active":
          "type-button__start"
        : "type-button__stop"
      }
      onClick={handlerClik}
    >
      {props.tittle}
    </div>
  );
}
