import React, { useState } from "react";
import Navbar from "./components/Navbar";
import CreateNote from "./pages/CreateNote";
import CustomForm from "./pages/CustomForm";

const App = () => {
  const [componentToDisplay, setComponentToDisplay] = useState("CreateNote");
  const [formObject, setFormObject] = useState({});
  const [mode, setMode] = useState("create");
  const [selectedidx, setSelectedIdx] = useState(-1);

  const [addItem, setAddItem] = useState([]);

  const addNote = (note) => {
    setAddItem((prevData) => {
      return [...prevData, note];
    });
    console.log(note);
  };

  const editNote = (note, index) => {
    setAddItem((prevData) => {
      return prevData.map((data, idx) => (idx === index ? note : data));
    });
  };

  const onDelete = (id) => {
    setAddItem((oldData) => {
      return oldData.filter((_currData, index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
      <Navbar />
      {componentToDisplay === "CreateNote" ? (
        <CreateNote
          setMode={setMode}
          setIndex={setSelectedIdx}
          formObj={formObject}
          setFormObject={setFormObject}
          addItem={addItem}
          deleteItem={onDelete}
          editItem={onDelete}
          setComponent={() => setComponentToDisplay("CustomForm")}
        />
      ) : (
        <CustomForm
          mode={mode}
          selectedidx={selectedidx}
          formObj={formObject}
          setFormObject={setFormObject}
          passNote={addNote}
          setComponent={() => setComponentToDisplay("CreateNote")}
          editNote={editNote}
        />
      )}
    </>
  );
};

export default App;
