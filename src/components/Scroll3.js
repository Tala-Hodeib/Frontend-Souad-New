import React from 'react';
import { Spring } from 'react-spring/renderprops';
import { Button } from './Button';

function Scroll3() {
  return (
    <Spring 
      from={{ opacity: 0}}
      to={{ opacity: 1}}
      config={{ delay:1300, duration: 1300 }}
    >
      { props => (
        <div style={props}>
          <div>
            <Button className="btn" buttonStyle='btn--outline' buttonSize='btn--large'>Contact Me</Button>
          </div>
        </div>
      ) }
    </Spring>
  )
}


export default Scroll3
