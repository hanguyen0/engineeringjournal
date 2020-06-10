import React from 'react';
// import axios from 'axios';

class UploadImage extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //     images: [],

    // }
    this.state = {
      file: [null]
    }
    this.uploadMultipleFiles = this.uploadMultipleFiles.bind(this)
    this.onChangeHandler = this.onChangeHandler.bind(this);

  }

  onChangeHandler(e) {
    // const img = this.state.files.slice();
    // this.setState({ images: [...e.target.files] })
    // console.log(event.target.files)
    // const arr = [];
    const formData = new FormData();

    for (let i = 0; i < event.target.files.length; i++) {
      // arr.push(event.target.files[i])
      formData.append('file', event.target.files[i])
    }
    // console.log('arr', arr);
    // const data = new FormData() 
    // data.append('file', arr)
    // this.setState({ images: arr });
    // this.sendImages();
    //     axios.post("/journals", formData, { 
    //     // receive two    parameter endpoint url ,form data
    // })
    // .then(res => { // then print response status
    //   console.log(res.statusText)
    // })
    // this.props.getImages(formData);
  }

  uploadMultipleFiles(e) {
    // this.fileObj.push(e.target.files)
    const fileObj = [];
    fileObj.push(e.target.files);
    const array = [];
    for (let i = 0; i < fileObj[0].length; i++) {
      array.push(URL.createObjectURL(fileObj[0][i]))
    }
    // this.setState({ file: this.fileArray })
    console.log(array);
    this.props.getImages(array);
  }

  // sendImages() {
  //   this.props.getImages(this.state.images);
  // }

  // uploadFiles(e) {
  //   e.preventDefault()
  //   console.log(this.state.file)
  // }

  render() {
    return (
      // <input type="file" multiple onChange={this.onChangeHandler} />
      <div className="form-group">
        <input type="file" className="form-control" onChange={this.uploadMultipleFiles} multiple />
        {/* <button type="button" className="btn btn-danger btn-block" onClick={this.uploadFiles}>Upload</button> */}
      </div>

    )
  }
}

export default UploadImage;