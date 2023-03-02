import React from "react";
import { Card, Button, CardTitle, CardText } from "reactstrap";
import { useDispatch } from "react-redux";
import EditModal from "./EditModal";
import {deletearticle, editarticle } from "../../redux/actions/articleAction";
  const ArticleCard = ({ article, onEditArticle}) => {
    console.log(article,"ccc")
const dispatch=useDispatch()
const delette=()=>{
  dispatch(deletearticle(article._id))

}

const editart = () => {
  onEditArticle(article);     
}
const editt=()=>{
  dispatch(editarticle(article._id))
  
}

  return (

   
 <div style={{ minWidth: "300px", margin: "30px" }}>
<div class="card-group">
  <div class="card">
    
    <div class="card-body">
      
      <h5 class="card-title">{article.name}</h5>
      <p class="card-text"> {article.desc}</p>
    </div>
    <div class="card-footer">
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <small class="text-muted"><Button onClick={delette}>delete</Button></small>
    
      </div>
    </div>
    </div>
  </div>
 
  
</div>



  );
};



console.log("here");
export default ArticleCard;
