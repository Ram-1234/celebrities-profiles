import React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import {accordianStyle} from "../helper"
import { useForm, SubmitHandler } from "react-hook-form"

import Accordion from 'react-bootstrap/Accordion';
import { nameTitleStyle, subtitleStyle,textDescriptionStyle,textAreaDescriptionStyle,nameTitleInputStyle,inputFieldStyle, picStyle, buttonStyle, subtitleHeadingStyle, Wrapper } from "../helper"

function Card(props) {
    const { first, last, dob, picture, email, country, description, id, gender, update, updateHandle, deleteHandler, updateId, dispatch, onSubmit } = props;
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm();

    console.log(watch('fullname'))

    let Dob = new Date(dob)
    let today = new Date();
    let age = today.getFullYear() - Dob.getFullYear();

    const disable = (id === updateId) && update

    const buttons = (update, id, updateId) => {
        return update && (id===updateId) ? (<>
            <CancelIcon onClick={()=> dispatch({type:"UPDATE", payload:false})} style={buttonStyle({ color: "#FF0800" })} />
            <CheckCircleOutlineIcon onClick={onSubmit} style={buttonStyle({ color: "#228B22", marginLeft: "10px" })} />
        </>) :
            (<>
                <DeleteIcon onClick={() => deleteHandler(id)} style={buttonStyle({ color: "#FF0800" })} />
                <EditIcon onClick={() => updateHandle(id)} style={buttonStyle({ color: "#318CE7", marginLeft: "10px" })} />
            </>)
    }

    return (
        <Accordion flush={true} key={'celebrities' + id} defaultActiveKey={id} style={accordianStyle}>
            <Accordion.Item eventKey='0'>
                <Accordion.Header>
                    <Wrapper>
                        <img src={picture} style={picStyle} alt="celebrities_picture" />
                    </Wrapper>
                    {/* <span style={nameTitleStyle}>{first + " " + last}</span> */}
                    <input type='text' {...register("fullname")} value={first + " " + last} disabled={!disable} style={nameTitleInputStyle({ border: disable ? "1px solid grey" : "none", textAlign: disable?"center":"left"})} />
                </Accordion.Header>
                <Accordion.Body>
                    <div className='container'>
                        <div className='row d-flex justify-content-center align-items-start'>
                            <div className='col-4' >
                                <div style={subtitleHeadingStyle}>Age</div>
                                {/* <div style={subtitleStyle}>{age}</div> */}
                                <input type='text' {...register("age")} value={age} disabled={!disable} style={inputFieldStyle({ border: disable ? "1px solid grey" : "none"})} />
                            </div>
                            <div className='col-4' >
                                <div style={subtitleHeadingStyle}>Gender</div>
                                {/* <div style={subtitleStyle}>{gender}</div> */}
                                <input type='text' {...register("gender")} value={gender} disabled={!disable} style={inputFieldStyle({ border: disable ? "1px solid grey" : "none"})} />
                            </div>
                            <div className='col-4' >
                                <div style={subtitleHeadingStyle}>Country</div>
                                {/* <div style={subtitleStyle}>{country}</div> */} 
                                <input type='text' {...register("country")}  value={country} disabled={!disable} style={inputFieldStyle({ border: disable ? "1px solid grey" : "none"})} />
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title" style={{ ...subtitleHeadingStyle, textAlign: "start" }}>Description</h5>
                        {/* <p className="card-text" style={textDescriptionStyle}>{description}</p> */}
                        <textarea type='text' {...register("description")} cols="40" rows='8' value={description} disabled={!disable} style={textAreaDescriptionStyle({ border: disable ? "1px solid grey":"none"})} />
                        <div className='container'>
                            <div className='row d-flex justify-content-end'>
                                <div className='col-3' style={{ display: "flex", justifyContent: "end", padding: 0, margin: 0 }}>
                                    {buttons(update , id, updateId) }
                                </div>
                            </div>
                        </div>
                    </div>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    )
}

export default Card