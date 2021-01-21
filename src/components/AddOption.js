import React from 'react' 

class AddOption extends React.Component {
    handleAddOption = (e) => {
        e.preventDefault()
        const val = e.target.elements.option.value.trim()
    
        if (val) {
            e.target.elements.option.value = ''
            this.props.addOption(val)
        }
    }

    render() {
        return (
            <div>
                <form className='add-option' onSubmit={this.handleAddOption}>
                    <input className='add-option__input' type="text" name="option"/>
                    <button className='button'>Add Option</button>
                </form>
            </div>
        )
    }
}

export default AddOption