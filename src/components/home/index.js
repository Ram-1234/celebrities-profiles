import React, { useEffect, useReducer, useState } from 'react';
import Dialog from '../dialog';
import Card from '../card';
import Navbar from '../navbar';
import data from "../../celebrities.json";
import 'react-bootstrap-accordion/dist/index.css';
import { titleStyle , reducer, initialState} from '../helper';


function Home() {
    const [searchInput, setSearchInput] = useState('');
    const [state, dispatch] = useReducer(reducer, initialState);
    
    function inputField(e) {
        setSearchInput(e.target.value);
    }

    function updateInfo(id) {
        dispatch({type:"UPDATE", payload:true});
        dispatch({type:"UPDATEID", payload:id});
    }

    function deleteInfo(id) {
        dispatch({type:"DELETE", payload:true});
        dispatch({type:"DELETEID", payload:id});
    }

    function confirmDelete(){
        let newdata = state.userData?.filter((item, index) => item?.id !== state.deleteId)
        dispatch({type:"USERDATA", payload:newdata});
        dispatch({type:"DELETE", payload:false});
        dispatch({type:"DELETEID", payload:null});
    }

    function onSubmit(data){
        console.log("submit",data);
    }

    function cancelDelet(){
        dispatch({type:"DELETE", payload:false});
    }

    useEffect(() => {
        let newdata = data?.filter((item, index) => (item?.first).toLowerCase().includes(searchInput))
        dispatch({type:"USERDATA", payload:newdata});
    }, [searchInput])

    useEffect(() => {
        dispatch({type:"USERDATA", payload:data});
    }, [data])

    return (
        <>
            <Navbar />
            <div className='container'>
                <div className='row d-flex justify-content-center'>
                    <div className='col-6'>
                        <label style={titleStyle} className='m-3 float-start'>List View</label>
                    </div>
                </div>
                <div className='row d-flex justify-content-center'>
                    <div className='col-6' style={{ padding: "0", width: "45%", boxSizing: 'border-box' }}>
                        <input className="form-control" style={{ borderRadius: "8px", boxSizing: 'border-box' }} onChange={inputField} type="search" placeholder="🔍 Search" aria-label="Search" />
                    </div>
                </div>
                <div className='row d-flex justify-content-center' >
                    <div className='col-6'>
                        {state.userData && state?.userData?.map((item, index) => {
                            return <Card {...item} {...state} onSubmit={onSubmit}  dispatch={dispatch} updateHandle={updateInfo} deleteHandler={deleteInfo} key={item?.first + index}   />
                        })}
                    </div>
                </div>
            </div>
            {state.deleteUser && <Dialog confirmDelete={confirmDelete} cancelDelet={cancelDelet}/>}
        </>
    )
}

export default Home