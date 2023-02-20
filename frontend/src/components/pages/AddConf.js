import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input,
    NavLink,
  } from 'reactstrap';

//import { registerUser } from '../../redux/actions/userAction';
import {useNavigate} from "react-router-dom"
import { addconferance } from '../../redux/actions/confAction';

function AddConf() {
  const [modal,setModal]=useState(false)
  const[startDate,setstartDate]=useState("")
  const[endDate,setendDate]=useState("")
  const[name,setname]=useState("")
  const[desc,setDesc]=useState("")


const toggle=()=>{
  setModal(!modal)
}
const dispatch=useDispatch()
const navigate=useNavigate()

const add=()=>{
  const data={
   
    desc:desc,

    startDate: startDate,
    endDate:endDate,

    name: name

  }
  console.log(data,"jj")


  
  dispatch(addconferance(data))
  setModal(!modal)
  setstartDate("")
  setendDate("")
  setname("")
  setDesc("")
  navigate("/ConferanceList")
}

   
  return (
    <div style={{ padding: '0 15px' }}>
    <NavLink  href="#" onClick={toggle}>
      Add New Conferance
    </NavLink>
    <Modal  isOpen={modal}>
      <ModalHeader>Add</ModalHeader>
      <ModalBody>
        <Form>
          <FormGroup>
            <Label for="startDate">startDate</Label>
            <Input
              type="date"
     onChange={(event)=>setstartDate(event.target.value)}
     
              name="name"
              id="name"
              placeholder="startDate"
              className="mb-3"
          
            />
            <Label for="endDate">endDate</Label>
            <Input
              type="date"
              onChange={(event)=>setendDate(event.target.value)}
              name="lastName"
              id="lastName"
              placeholder="endDate"
              className="mb-3"
          
            />
            <Label for="name">name</Label>
            <Input
              type="text"
              onChange={(event)=>setname(event.target.value)}
              name="email"
              id="email"s
              placeholder="name"
       
            />
            <Label for="desc">Desc</Label>
            <Input
              type="text"
              onChange={(event)=>setDesc(event.target.value)}
              name="password"
              id="password"
              placeholder="description"
              className="mb-3"
 
            />
            <Button
              color="dark"
              style={{ marginTop: '2rem' }}
              block
  onClick={add}

            >
              Add
            </Button>
          </FormGroup>
        </Form>
      </ModalBody>
    </Modal>
  </div>
  )
}

export default AddConf