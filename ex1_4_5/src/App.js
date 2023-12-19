//ex1.4

// import "typeface-roboto";
// import React, { useState } from "react";
// import FormGroup from "@mui/material/FormGroup";
// import MyTextInput from './MyTextInput';
// import MySelect from './MySelect';

// export default function App() {
//   return (
//     <FormGroup style={{ width: 200, margin: 10}}>
//       <MyTextInput />
//       <MySelect />
//     </FormGroup>
//   )
// }

// //ex1.5
// import "typeface-roboto";
// import React, { useState } from "react";
// import Button from "@mui/material/Button";
// import Grid from "@mui/material/Grid";
// import IconButton from "@mui/material/IconButton";
// import AndroidIcon from "@mui/icons-material/Android";

// const buttonStyle = { margin: 10 };

// function toggleColor(setter, value) {
//   setter(value === "default" ? "primary" : "default");
// }

// export default function App() {
//   const [contained, setContained] = useState("default");
//   const [text, setText] = useState("default");
//   const [outlined, setOutlined] = useState("default");
//   const [icon, setIcon] = useState("default");

//   return (
//     <Grid container>
//       <Grid
//         item
//         component={Button}
//         variant="contained"
//         style={buttonStyle}
//         color={contained}
//         onClick={() => toggleColor(setContained, contained)}
//       >
//         Contained
//       </Grid>
//       <Grid
//         item
//         component={Button}
//         style={buttonStyle}
//         color={text}
//         onClick={() => toggleColor(setText, text)}
//       >
//         Text
//       </Grid>
//       <Grid
//         item
//         component={Button}
//         style={buttonStyle}
//         color={outlined}
//         onClick={() => toggleColor(setOutlined, outlined)}
//       >
//         Outlined
//       </Grid>
//       <Grid
//         item
//         component={IconButton}
//         style={buttonStyle}
//         color={icon}
//         onClick={() => toggleColor(setIcon, icon)}
//       >
//         <AndroidIcon />
//       </Grid>
//     </Grid>
//   );
// }

//ex1.6
import {useState} from 'react'
import './App.css'
import FormExample0 from './FormExample0'
import FormExample1 from './FormExample1'
import ShowData from './ShowData'

const onSubmit = (v) =>
  alert('Submit value: ' + JSON.stringify(v, null, 2))

function App() {
  const [formFields, setFormFields] = useState({})
  const [errors, setErrors] = useState({})
  const [valid, setValid] = useState()
  const [firstForm, setFirstForm] = useState(true)

  return (
    <div className="App">
      <nav>
        <select
       onChange={(evt) => setFirstForm(evt.target.value === 'first')}

      >
        <option value="first">Single field</option>
        <option value="second">Multiple fields</option>
        </select>
      </nav>
      <main>
        {firstForm ? ( 
          <FormExample0
          onChange={(ff, v, e) => {
            setFormFields(ff)
            setValid(v)
            setErrors(e)
          }}
          onSubmit={onSubmit}
          initialValue={{
            field: 'Some stuff',
          }}
        />
        ) : (
          <FormExample1
          onChange={(ff, v, e) => {
            setFormFields(ff)
            setValid(v)
            setErrors(e)
          }}
          onSubmit={onSubmit}
          initialValue={{
            address1: '1 Main Street',
          }}
        />
        )}

          <ShowData
            formFields={formFields}
            errors={errors}
            valid={valid}
          />
      </main>
    </div>
  )
}

export default App;;