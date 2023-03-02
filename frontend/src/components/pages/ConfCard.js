import React from "react";
import { Card, Button, CardTitle, CardText } from "reactstrap";
import { useDispatch,useSelector } from "react-redux";
import { deleteconferance } from "../../redux/actions/confAction";
import EditConf from "./EditConf";


  const ConfCard = ({ conf}) => {
    console.log(conf,"ccc")
const dispatch=useDispatch()
const delette=()=>{
  dispatch(deleteconferance(conf._id))

}
const user=useSelector((state)=>state.authReducer.user)


  return (

   /** 
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
        <Button onClick={editCF}>edit</Button>
        </div>
      </Card>
    </div>
    */
 <div style={{ minWidth: "300px", margin: "30px" }}>
<div className="card-group">
  <div className="card">
    
    <div className="card-body">
      
      <h5 className="card-title">{conf.name}</h5>
      <p className="card-text"> {conf.desc}</p>
    </div>
    <div className="card-footer">
      {user.isadmin &&
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      
   <Button onClick={delette}>delete</Button>
    
      <EditConf conf={conf}/>
 
      </div>
    }
    </div>
    </div>
  </div>
 
  
</div>



  );
};



console.log("here");
export default ConfCard;
