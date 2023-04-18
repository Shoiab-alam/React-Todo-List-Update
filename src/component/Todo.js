import React, { useState } from 'react'
import { Button, Tooltip } from '@material-ui/core'
import './Todo.css'
const Todo = () => {
    const [inputData, setInputData] = useState()
    const [Items, setItems] = useState([])
    const [toggleSubmit,setToggleSubmit] = useState(true)
    const [isEditItem,setIsEditItem] = useState(null)


    const addItems = (event) => {
        event.preventDefault();
        if(!inputData){
            
        }else if(inputData && !toggleSubmit){
            setItems(Items.map((elem)=>{
                if(elem.id === isEditItem){

                    return {...elem,name:inputData}
                    
                }return elem
            }))
            setToggleSubmit(true)
            setInputData('')
            
        }else{
            const allInputData = {id : new Date().getTime().toString(), name: inputData}
            setItems([...Items, allInputData]);
            setInputData('')
        }}


        const deleteItem = (id) => {   
            const deleteItems = Items.filter((elem)=>{
                return id !== elem.id
            })           
            setItems(deleteItems)
        }

    
        const removeAll = () => {
            setItems([])
            setInputData('')
        }

        const editItems = (id) =>{
            let newEditData = Items.find((elem)=>{
                return elem.id === id;
            })
            setToggleSubmit(false)
            setInputData(newEditData.name)
            setIsEditItem(id)
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
                                        
                                        {toggleSubmit? <Button title='Add Item' variant="contained" pill color='primary' onClick={addItems}><i className='fa-solid fa-plus'/></Button>: <Button title='Update Item' variant="contained" pill color='primary' onClick={addItems}><i className="fa-solid fa-pen-to-square"/></Button> }
                    
                                    </div>
                                    <br></br>

                                    {Items.map((elem)=>
                                        <div className='d-flex justify-content-between align-items-center border rounded-3 p-1 mb-3 delete' key={elem.id}>
                                            <h6>{elem.name}</h6>
                                            <div>
                                            <Tooltip title='Edit Selected Item'>
                                            <Button variant="contained" className='btn-delete mx-2' pill onClick={()=> editItems(elem.id)} >
                                                <i className="fa-solid fa-pen-to-square"/>
                                                </Button>
                                            </Tooltip>
                                            <Tooltip title='Delete Selected Item'>
                                            <Button variant="contained" className='btn-delete' pill onClick={()=> deleteItem(elem.id)}><i className="fa-solid fa-trash"/></Button>
                                            </Tooltip>
                                            </div>
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