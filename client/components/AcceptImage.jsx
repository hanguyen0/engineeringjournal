import React, { useCallback } from "react";
// Import the dropzone component
import MyDropzone from "./Dropzone.jsx";

// import "./App.css";

class AcceptImage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            images:[]
        }
        // this.handleChange = this.handleChange.bind(this);

    }
  // onDrop function  
//   onDrop = useCallback(acceptedFiles => {
//     // this callback will be called after files get dropped, we will get the acceptedFiles. If you want, you can even access the rejected files too
//     console.log(acceptedFiles);

//   }, []);

  onDrop = useCallback(acceptedFiles => {
    // Loop through accepted files
    acceptedFiles.map(file => {
      // Initialize FileReader browser API
      const reader = new FileReader();
      // onload callback gets called after the reader reads the file data
      reader.onload = function(e) {
        // add the image into the state. Since FileReader reading process is asynchronous, its better to get the latest snapshot state (i.e., prevState) and update it. 
        setImages(prevState => [
          ...prevState,
          { id: cuid(), src: e.target.result }
        ]);
      };
      // Read the file as Data URL (since we accept only images)
      reader.readAsDataURL(file);
      return file;
    });
  }, []);
  
  // We pass onDrop function and accept prop to the component. It will be used as initial params for useDropzone hook
  render() {
    return (
        <div className="App">
          <MyDropzone onDrop={onDrop} accept={"image/*"} />
        </div>
      );
  }

}

export default AcceptImage;