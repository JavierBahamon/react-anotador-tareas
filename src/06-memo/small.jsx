
import React from "react";
export const Small = React.memo(({ value }) => {

    console.log(' me volvi ');
    
  return (
    <small>{ value }</small>
  )
})
