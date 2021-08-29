import React from "react";
import "./styles.css";
import { useState, useEffect } from "react";
import { Form } from "react-formio";
import { FormBuilder, FormEdit } from "react-formio";

const CustomForm = (props) => {
  const [note, setNote] = useState({
    title: props.formObj.title ? props.formObj.title : "",
  });

  const [localFormObj, setLocalFormObj] = useState(props.formObj.form);

  useEffect(() => {
    console.log(props.formObj);
    setLocalFormObj(props.formObj.form);
    setNote({ title: props.formObj.title ? props.formObj.title : "" });
  }, [props.formObj]);

  const InputEvent = (event) => {
    const { name, value } = event.target;

    setNote((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  const addEvent = (form) => {
    if (note.title === "") {
      alert("Please Add Title Name");
    } else {
      if (props.mode === "create") {
        props.passNote({
          title: note.title,
          form: form,
        });
      } else {
        props.editNote({ title: note.title, form: form }, props.selectedidx);
      }
      console.log({
        title: note.title,
        form: form,
      });
      props.setComponent("CreatNote");
    }
  };

  return (
    <>
      <div className="Form container">
        <div className="row">
          <input
            type="text"
            name="title"
            value={note.title}
            onChange={InputEvent}
            placeholder="Title"
            autoComplete="off"
          />
          <FormEdit
            saveText="Save Form"
            saveForm={(form) => addEvent(form)}
            form={localFormObj}
          />
        </div>
      </div>
    </>
  );
};

export default CustomForm;
