import React from "react";
import { Card, Button, CardTitle, CardText } from "reactstrap";
import { useDispatch } from "react-redux";
import { deleteconferance } from "../../redux/actions/confAction";
import { editconferance } from "../../redux/actions/confAction";
import EditModal from "./EditModal";
  const ConfCard = ({ conf }) => {
    console.log(conf,"ccc")
const dispatch=useDispatch()
const delette=()=>{
  dispatch(deleteconferance(conf._id))

}

const editt=()=>{
  dispatch(editconferance(conf._id))
  
}

  return (

   
    <div style={{ minWidth: "300px", margin: "10px" }}>
      <Card
        body
        inverse
        style={{ backgroundColor: "#333", borderColor: "#333" }}
      >
        <CardTitle tag="h5"> {conf.name} </CardTitle>
      
        <CardText>{conf.desc} </CardText>
        <CardText>
   
        </CardText>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Button onClick={delette}>delete</Button>
    
        <EditModal/>
        </div>
      </Card>
    </div>
  );
};
console.log("here");
export default ConfCard;
