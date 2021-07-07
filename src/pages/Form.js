import "./styles.css";
import { useState, useEffect } from "react";
import { FormBuilder } from "react-formio";


export default function Form () {
    const [display, setDisplay] = useState("");
    const [schema, setSchema] = useState({
      display: "wizard",
    });
  
    useEffect(() => {
      if (schema && schema.display !== display) {
        setSchema({ ...schema, display });
      }
    }, [schema, display]);
    return (
        <>   
        {/* <div className="Main">
          <h5>FORM BUILDER</h5> */}
        <div className="Form container">  
        
         <div className="row">
           <div className="col col-sm-2 offset-sm-2 mb-3 ml-5 text-center">
             <select
               className="form-control"
               onChange={(e) => setDisplay(e.target.value)}
               value={display}>
               <option value="form">Form</option>
               <option value="wizard">Wizard</option>
             </select>
           </div>
          </div>
         <FormBuilder form={schema} onChange={setSchema} />
       </div>
      {/* </div> */}
       </>
      );
}
 



