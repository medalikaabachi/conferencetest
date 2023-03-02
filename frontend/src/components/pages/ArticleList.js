import React,{useEffect, useState} from 'react'
import{useSelector,useDispatch} from "react-redux"
import { getArticle } from '../../redux/actions/articleAction'
import ArticleCard from './ArticleCard'
import EditModal from './EditModal'
import EditeModal from './EditModal'

function ArticleList() {
  const [articleEdit, setArticleEdit] = useState()
  const dispatch=useDispatch()

  
  useEffect(()=>dispatch(getArticle()),[])
  const articles=useSelector(state=>state.articleReducer.Articles)
  console.log(articles,"hello confs")


  const editArticle = (articleEdit1) => {
    setArticleEdit(articleEdit1)
  }
 
  return (
    <div style={{ display: "flex", flexWrap: "wrap", margin: "20px" }}>
      {articles && (
        <div>
          {articles.map((el)=>(
            <ArticleCard key={el.id} article={el} onEditArticle={editArticle} />
          ))}

          <EditeModal articleToEdit={articleEdit}/>
        </div>
      )
      
      }
  
    </div>
  )
}

export default ArticleList