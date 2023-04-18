import React, { useState } from 'react'
import { Button, Tooltip } from '@material-ui/core'
import './Todo.css'
const Todo = () => {
    const [inputData, setInputData] = useState()
    const [Items, setItems] = useState([])


    const addItems = (event) => {
        event.preventDefault();
        if(!inputData){
        }else{
            setItems([ inputData,...Items])
            setInputData('')
        }}

        const deleteItem = (id) => {
        setItems((preValue)=>{
            return preValue.filter((items,index)=>{
                return index !== id;
            })})}
    
        const removeAll = () => {
            setItems([])
            setInputData('')
        }

    return (

        <div className="container mt-5">
            <div className="row mt-5">
                <div className="col-10 mx-auto mt-5">
                    <div className="row mmt-5">
                        <div className="col-md-6 col-10 mx-auto mt-5">
                            <div className="card">
                                <center><img src="images/OIP.jpg" className="card-img-top" alt="images" style={{ width: '160px', height: '100px' }} /></center>
                                <div className="card-body">
                                    <h5 className="card-title text-center">Add Your List Here</h5>
                                    <div className='d-flex'>
                                        <input type='text' placeholder='✍️ Add Items ...' className='form-control' value={inputData} onChange={(event) =>{
                                            setInputData(event.target.value)
                                        }} />
                                        <Tooltip title='Add Item'>
                                        <Button variant="contained" pill color='primary' onClick={addItems}><i className="fa-solid fa-plus" /></Button>
                                        </Tooltip>
                                    </div>
                                    <br></br>
                                    {Items.map((item, index)=>
                                        <div className='d-flex justify-content-between align-items-center border rounded-3 p-1 mb-3 delete' key={index}>
                                            <h5>{item}</h5>
                                            <Tooltip title='Delete Selected Item'>
                                            <Button variant="contained" className='btn-delete' pill onClick={()=> deleteItem(index)}><i className="fa-solid fa-trash"></i></Button>
                                            </Tooltip>
                                        </div>
                                        )}

                                    <br />
                                    <div className='text-center'>
                                        <Tooltip title='Delete All Item'>
                                        <Button variant="contained" pill color='primary' onClick={removeAll}>Check List</Button>
                                        </Tooltip>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Todo;