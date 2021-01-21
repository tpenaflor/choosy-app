import React from 'react' 

export default (props) => (
    <div className='widget__entry' >
        <p className='widget__item'>
            {`${props.opt[0]}. ${props.opt[1]}`}
        </p>
        <button 
            className="button button--link"
            onClick={ () => {
                props.delOption(props.opt[1])
            }
        }>Remove</button>
    </div>
)

