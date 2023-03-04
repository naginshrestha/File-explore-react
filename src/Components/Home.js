import React from 'react'
import { useState } from 'react'

export const Home = ({handleInsertNode =()=>{},data}) => {

const[expand,setExpand] =useState(false)
const [showInput,setShowInput] =useState({
    visible:false,
    isFolder:null
})

const handleNewFolder =(e,isFolder) =>{
    e.stopPropagation();
    setExpand(true)

    setShowInput({
        visible:true,

        isFolder
    })
}

const onAddFolder =(e) =>{
    if (e.keyCode ===13 && e.target.value){
        handleInsertNode(data.id,e.target.value,showInput.isFolder)

        setShowInput({...showInput,visible:false})
    }
}

  if(data.isFolder)
  return (
   <div className='header'>

   <div className='folder' onClick={()=> setExpand("true")}>
    <span>  <i class="fa-solid fa-folder"> </i><p> {data.name}</p></span>

    <div className='folderbutton'>
        <button onClick={(e) => handleNewFolder(e,true)}>Folder +</button>
        <button onClick={(e) => handleNewFolder(e,false)}>File +</button>
    </div>
   </div>

   <div className='subfolder' style={{display: expand ? "block" :"none"}}>
    
   {
    showInput.visible && (
        <div className='inputContainer'>
            <span>{showInput.isFolder ?  <i class="fa-solid fa-folder"> </i> : <i class="fa-solid fa-file"> </i>}</span>

            <input onKeyDown={onAddFolder} className='inpp' onBlur={() => setShowInput({...showInput,visible:false})} autoFocus/>
        </div>

    )
   }


    {data.items.map(item =>{
        return <Home  handleInsertNode ={handleInsertNode} data={item} key={item.id}/>
    })}
   </div>
   
   </div>
  )
  else
  {
    return <div className='file'> <span><i class="fa-solid fa-file"></i> {data.name}</span></div>

  }
}
