import React,{useEffect} from 'react'
import{useSelector,useDispatch} from "react-redux"
import { getConferance } from '../../redux/actions/confAction'
import ConfCard from './ConfCard'

function ConfList() {
  const dispatch=useDispatch()

  
  useEffect(()=>dispatch(getConferance()),[])
  const confs=useSelector(state=>state.confReducer.Confs)
  console.log(confs,"hello confs")


  return (
    <div style={{ display: "flex", flexWrap: "wrap", margin: "20px" }}>
      {confs && 
      confs.map((el)=>(
      <ConfCard key={el.id} conf={el} />
      ))
      }
  
    </div>
  )
}

export default ConfList