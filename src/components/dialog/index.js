import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {textDescriptionStyle} from "../helper"

function Dialog(props) {
    const { cancelDelet } = props;
    return (
        <div
            className="modal show"
            style={{ display: 'block', position: 'sticky', bottom:"50%"}}
        >
            <Modal.Dialog>
                <Modal.Header onClick={cancelDelet} style={{...textDescriptionStyle,border:"none"}} closeButton>
                   Are you sure you want to delete?
                </Modal.Header>
                <div className='container'>
                    <div className='row d-flex justify-content-end'>
                        <div className='col-6'>
                            <Button style={{padding:"0 5px", margin:"10px", fontSize:"12px"}}  onClick={cancelDelet} variant="light">Cancel</Button>
                            <Button style={{padding:"0 5px",margin:"10px", fontSize:"12px"}}  variant="danger">Delete</Button>
                        </div>
                    </div>
                </div>
            </Modal.Dialog>
        </div>
    );
}

export default Dialog;