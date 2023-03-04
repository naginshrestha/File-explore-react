import './App.css';
import { Home } from './Components/Home';
import jsondata from './jsonData/folderData'
import { useState } from 'react';

function App() {

  const[folderData,setFolderData] =useState(jsondata)

  console.log("ggs",folderData);
  return (
    <div className="App">
      <Home  data={folderData}/>

    </div>
  );
}

export default App;
