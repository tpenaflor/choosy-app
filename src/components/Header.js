import React from 'react' 

export default (props) => (
    <div className='header'>
        <div className='container'>

            <h1 className='header__title'>{props.appObj.title}</h1>
                {props.appObj.subtitle && <h2 className='header__subtitle'>{props.appObj.subtitle}</h2>}

        </div>    
    </div>
)

