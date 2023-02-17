import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

  const [item, setItem] = React.useState([]);

  function addNote(inputText) {
    setItem(prevValue => {
      return [...prevValue, inputText]
    });
  }
  function deleteItem(id){
    setItem((prevValue)=>{
      return prevValue.filter((item, index)=>{
        return index !== id;
      });
    });
  }

  return ( <
    div >
    <
    Header / >
    <
    CreateArea onAdd = {
      addNote
    }
    /> {
      item.map((newItem, index) => {
        return <Note
        key = {
          index
        }
        id = {
          index
        }
        title = {
          newItem.title
        }
        content = {
          newItem.content
        }
        onChecked = {
          deleteItem
        }
        />
      })
    } <
    Footer / >
    </div>
  );
}

export default App;
