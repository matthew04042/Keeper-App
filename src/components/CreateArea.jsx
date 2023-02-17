import React from "react";

function CreateArea(props) {
  const [inputText, setInputText] = React.useState({
    title: "",
    conten: ""
  });


  function handleChange(event) {
    const {
      name,
      value
    } = event.target;
    setInputText((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    })
  }

  function addItem(event) {
    props.onAdd(inputText);
    setInputText({
      title:"",
      content:""
    })
    event.preventDefault();
  }

  return ( <
    div >
    <
    form >
    <
    input onChange = {
      handleChange
    }
    name = "title"
    placeholder = "Title"
    value = {
      inputText.title
    }
    / > <
    textarea onChange = {
      handleChange
    }
    name = "content"
    placeholder = "Take a note..."
    rows = "3"
    value = {
      inputText.content
    }
    / > <
    button onClick = {
      addItem
    } > Add < /button>< /
    form > <
    /div>
  );
}

export default CreateArea;
