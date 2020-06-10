import React from 'react';
import UploadImage from './UploadImage.jsx';
// import AcceptImage from './AcceptImage.jsx';

class Write extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            descriptions: '',
            images:[],
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.getFiles = this.getFiles.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const name = target.name;
        this.setState({ [name]: target.value });
    }

    getFiles(files) {
        console.log(files);
        this.setState({images: files})
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.getData(this.state);
    }

    render() {
        const { title, descriptions } = this.state;
        return (
            <div className="write-form">
                <form onSubmit={this.handleSubmit} className="form">
                    <label> Title:
                        <input value={title} onChange={this.handleChange} name="title"></input>
                    </label>
                    <label>Info: 
                        <textarea
                            name="descriptions"
                            value={descriptions}
                            onChange={this.handleChange}
                            rows={5}
                            cols={5}
                        />
                    </label>
                    <label>Upload images:
                        <UploadImage getImages={this.getFiles}/>
                    </label>
                    {/* <AcceptImage /> */}
                    <input type="submit" value="Submit" />
                </form>
                
            </div>
        )
    }
}

export default Write;