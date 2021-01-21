import React from 'react' 
import Option from './Option.js'

export default (props) => {
    return (
        <div>
            <div className='widget-header'>
                <h3 className='widget-header__title'>Here are your options</h3>                      
                <button className="button button--link" onClick = {props.clearOptions}>Clear Options</button>
            </div>
            <div >
                {props.opt.length === 0 && <p className='widget__message'>Please add an option to get started</p>}
                {props.opt.map((opt,index) => <Option key={index+1} opt={[index+1,opt]} delOption={props.delOption}/>)} 
            </div>
            
        </div>
    )
}
