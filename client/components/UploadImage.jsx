import React from 'react';

class UploadImage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [],

        }
        this.onChangeHandler = this.onChangeHandler.bind(this);

    }
  
    onChangeHandler(e) {
      // const img = this.state.files.slice();
      // this.setState({ images: [...e.target.files] })
      // console.log(event.target.files)
      const arr = [];
      for (let i = 0; i < event.target.files.length; i++) {
        arr.push(event.target.files[i])
      }
      // console.log('arr', arr);
      // const data = new FormData() 
      // data.append('file', arr)
      // this.setState({ images: arr });
      // this.sendImages();
      this.props.getImages(arr);
    }

    // sendImages() {
    //   this.props.getImages(this.state.images);
    // }
  
    render() {
      return (
          <input type="file" multiple onChange={this.onChangeHandler} />
      )
    }
  }

  export default UploadImage;