
import React from 'react' 

export default (props) => (
    <div>
        <button 
            disabled={!!!props.opt.length}
            className='big-button'
            onClick = {props.makeDecision}
        >Which should I pick?</button>
    </div>
)