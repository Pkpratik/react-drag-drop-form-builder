import React, { Component } from "react";
import ToolBox from "./components/ToolBox";
import FormContainer from "./components/FormContainer";
import "./css/App.css";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import DropBox from "./components/DropBox";
import Field from "./components/Field";

class TestComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toolType: "CUSTOM_COM",
      num1: 1,
      num2: 2,
    };
  }

  changeValue(value) {
    this.setState({
      num1: value,
    });
    setTimeout(() => {
      return this.props.changeState(this.state, this.props.index);
    }, 0);
  }

  render() {
    return (
      <div className="container">
        <span
          className="pull-right cross"
          onClick={() => this.props.removeField(this.props.index)}
        >
          x
        </span>
        <input onChange={(e) => this.changeValue(e.target.value)} type="text" />
      </div>
    );
  }
}

class TestPreview extends Component {
  render() {
    return <h3>{this.props.toolType}</h3>;
  }
}

const myCustoms = [
  {
    container: <TestComponent />,
    preview: <TestPreview />,
    toolbox: {
      title: "Test",
      icon: "fa fa-user",
      name: "CUSTOM_COM",
    },
    states: {
      toolType: "CUSTOM_COM",
      num1: 1,
      num2: 2,
    },
  },
];
const fields = [
  { id: 1, name: "Field 1" },
  { id: 2, name: "Field 2" },
  { id: 3, name: "Field 3" },
  // Add more fields as needed
];

class App extends Component {
  render() {
    return (
      <DndProvider backend={HTML5Backend}>
        <div style={{ display: "flex" }}>
          <div style={{ flex: 1 }}>
            <h2>Available Fields</h2>
            {fields.map((field, index) => (
              <Field key={field.id} fieldName={field.name} index={index} />
            ))}
          </div>
          <div style={{ flex: 3 }}>
            <h2>Custom Form</h2>
            <DropBox />
          </div>
        </div>
      </DndProvider>
    );
  }

  updateForm(callback) {
    // let rawForm = '[{"title":"ADS","toolType":"RADIO_BUTTONS","multiple":false,"inline":false,"defaultValue":"","placeholder":"","description":"","validation":{"isReadOnly":false,"isRequired":false,"min":6,"max":6},"radios":[]},{"title":"Title","toolType":"CHECK_BOXES","inline":false,"defaultValue":"","placeholder":"","description":"","validation":{"isReadOnly":false,"isRequired":false,"min":6,"max":6},"checkBoxes":[]}]';
    //let form = JSON.parse(rawForm);
    //  callback(form);
  }

  myForm(form) {
    console.log(form);
  }
}

export default App;
