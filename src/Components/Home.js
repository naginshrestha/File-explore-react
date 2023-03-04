import React from 'react'
import { useState } from 'react'

export const Home = ({handleInsertNode =()=>{},data}) => {

const[expand,setExpand] =useState(false)

const [showInput,setShowInput] =useState({
    visible:false,
    isFolder:null
})
const [showupdate,setShowUpdate] =useState({
    visible:false,
    isFolder:null
})

const [showfolder,setShowFolder] =useState(true)

const handleNewFolder =(e,isFolder) =>{
    e.stopPropagation();
    setExpand(true)

    setShowInput({
        visible:true,
        isFolder
    })
}

const handleUpdate =(e) =>
{
    e.stopPropagation();
    setShowUpdate({
     visible:true,
    })
}

const handleDelete =(e)=>{
    e.stopPropagation();
   let item =""
    setShowFolder(false)

      handleInsertNode(data.id,item,showfolder,e.target.name)

}



const onupload =(e)=>{
    if (e.keyCode ===13 && e.target.value){

        const {name ,value} =e.target;

        handleInsertNode(data.id,value,showupdate.isFolder,name)

        setShowInput({...showInput,visible:false})
    }
}

const onAddFolder =(e) =>{
    if (e.keyCode ===13 && e.target.value){
        const {name ,value} =e.target
        handleInsertNode(data.id,value,showInput.isFolder,name)

        setShowInput({...showInput,visible:false})
    }
}

  if(data.isFolder)
  return (
   <div className='header'>

   <div visible={showfolder}  className='folder' onClick={()=> setExpand("true")}>
    <span>  <i class="fa-solid fa-folder"> </i><p> {data.name}</p></span>

    <div className='folderbutton'>
        <button name='delete' onClick={handleDelete}>Delete</button>
        <button onClick={handleUpdate}>Update</button>

        <button onClick={(e) => handleNewFolder(e,true)}>Folder +</button>
        <button onClick={(e) => handleNewFolder(e,false)}>File +</button>
    </div>
   </div>


   {
        showupdate.visible && (
            
            <input onKeyDown={onupload} name="update" onBlur={() => setShowUpdate({...showupdate, visible:false})} autoFocus/>
        )
    }

   <div className='subfolder' style={{display: expand ? "block" :"none"}}>


    
   {
    showInput.visible && (
        <div className='inputContainer'>
            <span>{showInput.isFolder ?  <i class="fa-solid fa-folder"> </i> : <i class="fa-solid fa-file"> </i>}</span>

            <input onKeyDown={onAddFolder}  name="input"  className='inpp' onBlur={() => setShowInput({...showInput,visible:false})} autoFocus/>
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
