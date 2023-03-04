import './App.css';
import { Home } from './Components/Home';
import jsondata from './jsonData/folderData'
import { useState } from 'react';
import useTree from './custom/tree';

function App() {

  const[folderData,setFolderData] =useState(jsondata)

  const {insertNode} = useTree();

  const handleInsertNode = (folderId,item,isFolder)=>{



    const finalTree = insertNode(folderData,folderId,item,isFolder)

     setFolderData(finalTree)



  }

  return (
    <div className="App">
      <Home  handleInsertNode={handleInsertNode} data={folderData}/>

    </div>
  );
}

export default App;
