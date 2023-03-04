const useTree =() =>
{
  //create a new folder
   const insertNode = (trees,folderid,item,isFolder)=>{

        if(trees.id === folderid && trees.isFolder){

          
            trees.items.unshift({
                id:new Date().getTime(),//used to get unique id
                name:item,
                isFolder,
                items:[]
            })
        }

        let latestNode =[]

        latestNode= trees.items.map((dataa)=>{
            return insertNode(dataa,folderid,item,isFolder)
        })

        return ({...trees,items:latestNode})
   
    }

    //for update

    const updateNode =(datas,folderid,item,isFolder)=>{
  
    if(datas.id === folderid){
        datas.name = item
    }     
        let newupdates =[]
        newupdates= datas.items.map((dat)=>{
        return updateNode(dat,folderid,item,isFolder)
        })
        return {...datas,items:newupdates};
    }
 

    const deleteNode = (val,folderid,isFolder) =>{

        if(val.id !== folderid){
         
           return val
        }  
        let newupdates =[]
     
        newupdates= val.items.filter((dat)=>{
        return updateNode(dat,folderid)
        })
        return {...val,items:newupdates};


    }
   
    return{insertNode,updateNode,deleteNode};
};

export default useTree;