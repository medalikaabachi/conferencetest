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
import { addarticle } from '../../redux/actions/articleAction';

function AddArticle() {
  const [modal,setModal]=useState(false)
  const[depotDate,setdepotDate]=useState("")
  
  const[title,settitle]=useState("")
  const[desc,setDesc]=useState("")


const toggle=()=>{
  setModal(!modal)
}
const dispatch=useDispatch()
const navigate=useNavigate()

const add=()=>{
  const data={
   
    desc:desc,

    depotDate: depotDate,
    

    title: title

  }
  console.log(data,"jj")


  
  dispatch(addarticle(data))
  setModal(!modal)
  setdepotDate("")
  
  settitle("")
  setDesc("")
  navigate("/ArticleList")
}

   
  return (
    <div style={{ padding: '0 15px' }}>
    <NavLink  href="#" onClick={toggle}>
      Add New Article
    </NavLink>
    <Modal  isOpen={modal}>
      <ModalHeader>Add</ModalHeader>
      <ModalBody>
        <Form>
          <FormGroup>
            <Label for="depotDate">depotDate</Label>
            <Input
              type="date"
     onChange={(event)=>setdepotDate(event.target.value)}
     
              name="name"
              id="name"
              placeholder="depotDate"
              className="mb-3"
          
            />
           
            <Label for="title">title</Label>
            <Input
              type="text"
              onChange={(event)=>settitle(event.target.value)}
              name="email"
              id="email"s
              placeholder="title"
       
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
            <Button
              color="dark"
              style={{ marginTop: '2rem' }}
              block
  onClick={() => setModal(false)}

            >
              cancel
            </Button>
          </FormGroup>
        </Form>
      </ModalBody>
    </Modal>
  </div>
  )
}

export default AddArticle