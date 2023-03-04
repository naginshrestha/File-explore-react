const useTree =() =>
{

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

    return{insertNode};

};

export default useTree;