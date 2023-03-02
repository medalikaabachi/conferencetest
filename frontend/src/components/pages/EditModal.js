import React,{useState, useEffect} from 'react'
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
import { editarticle } from '../../redux/actions/articleAction';

function EditModal({confToEdit}) {
   const[modal,setModal]=useState(false)
   const[startDate,setstartDate]=useState(null)
   const[endDate,setendDate]=useState(null)
   const[name,setname]=useState(null)
   const[desc,setdesc]=useState(null)
   const dispatch=useDispatch()
   const toggle=()=>{
   setModal(!modal)
}


  
useEffect(() => {

  toggle()
  setstartDate(confToEdit?.startDate)
  setendDate(confToEdit?.endDate)
  setname(confToEdit?.name)
  setdesc(confToEdit?.desc)
} ,[confToEdit])

const editt=()=>{
  const newconf={startDate,endDate,name,desc}
  console.log("gg ",newconf)
  dispatch(editconferance(confToEdit._id,newconf))
  toggle()
}  
  return (
    <div>
    <Button color="danger" style={{ display: "none" }}  onClick={toggle}>
    </Button>
    <Modal isOpen={modal}>
      <ModalHeader >edit modal</ModalHeader>
      <ModalBody>
        <Form>
        <FormGroup>
            <Label for="examplestartDate">startDate</Label>
            <Input
      onChange={(e)=>setstartDate(e.target.value)}
     value={startDate}
           
              type="Date"
              name="Date"
              id="exampleDate"
            
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleendDate">endDate</Label>
            <Input
     
     onChange={(e)=>setendDate(e.target.value)}
     value={endDate}
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

function EditeModal({articleToEdit}) {
  const[modal,setModal]=useState(false)
  const[depotDate,setdepotDate]=useState(null)
  
  const[title,settitle]=useState(null)
  const[desc,setdesc]=useState(null)
  const dispatch=useDispatch()
  const toggle=()=>{
  setModal(!modal)
}


 
useEffect(() => {

 toggle()
 setdepotDate(articleToEdit?.depotDate)
 
 settitle(articleToEdit?.title)
 setdesc(articleToEdit?.desc)
} ,[articleToEdit])

const editt=()=>{
 const newarticle={depotDate,title,desc}
 console.log("gg ",newarticle)
 dispatch(editarticle(articleToEdit._id,newarticle))
 toggle()
}  
 return (
   <div>
   <Button color="danger" style={{ display: "none" }}  onClick={toggle}>
   </Button>
   <Modal isOpen={modal}>
     <ModalHeader >edite modal</ModalHeader>
     <ModalBody>
       <Form>
       <FormGroup>
           <Label for="exampledepotDate">depotDate</Label>
           <Input
     onChange={(e)=>setdepotDate(e.target.value)}
    value={depotDate}
          
             type="Date"
             name="Date"
             id="exampleDate"
           
           />
         </FormGroup>
        
         <FormGroup>
           <Label for="exampletitle">title</Label>
           <Input
         onChange={(e)=>settitle(e.target.value)}
         value={title}
             type="title"
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