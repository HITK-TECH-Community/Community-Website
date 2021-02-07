import React from "react";
import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";
import "./editor.css";
function Editor() {
  return (
    <div className="editor">
      <div className="motivee">
        <h1 className="heading">ADD BROADCAST</h1>
        <div className="dash"></div>
      </div>
      <div className="header">
        <p className="headingg">Broadcast heading</p>
        <input type="text" placeholder="Type here..."></input>
      </div>
      <div>
        <p className="headingg">Enter the Broadcast content here...</p>
        <SunEditor
          lang="en"
          placeholder="Please type here..."
          height="500px"
          className="edit"
        />
      </div>
    </div>
  );
}

export default Editor;
