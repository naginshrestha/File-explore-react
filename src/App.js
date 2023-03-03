import './App.css';
import { Home } from './Components/Home';
import jsonData from './jsonData/folderData'
import { useState } from 'react';

function App() {

  const[folderData,setFolderData] =useState(jsonData)

  return (
    <div className="App">
      <Home  data={folderData}/>

    </div>
  );
}

export default App;
