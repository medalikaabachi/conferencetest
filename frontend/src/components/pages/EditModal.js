import React,{useState} from 'react'
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Form,
    FormGroup,
    Label,
    Input,
  } from "reactstrap";
  import { useDispatch } from "react-redux";
import { editconferance } from '../../redux/actions/confAction';

function EditModal({conf}) {
   const[modal,setModal]=useState(false)
   const[startDate,setstartDate]=useState(conf.startDate)
   const[endDate,setendDate]=useState(conf.endDate)
   const[name,setname]=useState(conf.name)
   const[desc,setdesc]=useState(conf.desc)
const dispatch=useDispatch()
const toggle=()=>{
setModal(!modal)
}
const editt=()=>{
  const newconf={startDate,endDate,name,desc}
dispatch(editconferance(conf._id,newconf))
toggle()
}  
  return (
    <div>
    <Button color="danger"  onClick={toggle}>
      edit contact{" "}
    </Button>
    <Modal isOpen={modal}>
      <ModalHeader >edit modal</ModalHeader>
      <ModalBody>
        <Form>
        <FormGroup>
            <Label for="examplestartDate">startDate</Label>
            <Input
      onChange={(e)=>setstartDate(e.target.value)}
     value={Date}
           
              type="Date"
              name="Date"
              id="exampleDate"
            
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleendDate">endDate</Label>
            <Input
     
     onChange={(e)=>setendDate(e.target.value)}
     value={Date}
              type="Date"
              name="Date"
              id="exampleDate"
            
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplename">name</Label>
            <Input
          onChange={(e)=>setname(e.target.value)}
          value={name}
              type="name"
              name="password"
              id="examplePassword"
            
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampledesc">desc</Label>
            <Input
          onChange={(e)=>setdesc(e.target.value)}
          value={desc}
              type="desc"
              name="password"
              id="examplePassword"
            
            />
          </FormGroup>
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={editt} >
          save
        </Button>{" "}
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  </div>
  )
}

export default EditModal