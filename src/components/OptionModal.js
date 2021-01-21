import React from 'react' 
import Modal from 'react-modal'

export default (props) => (
    <Modal
        className="modal"
        closeTimeoutMS={200}
        isOpen = {!!props.selected}
        contentLabel = "selected option"
        onRequestClose={props.clearSelection}
        ariaHideApp={false}
    >
        <h3 className='modal__title'>Selected Option</h3>
        <p className='modal__body'>{props.selected}</p>
        <button className='button' onClick = {props.clearSelection}>Done</button>
    </Modal>
)
