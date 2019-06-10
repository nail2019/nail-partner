import React from "react";
import ReactDOM from "react-dom";
import "./imageupload.css";

function App() {
  return <div className="App" />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

class ImageUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = { file: "", imagePreviewUrl: "" };
  }

  _handleSubmit(e) {
    e.preventDefault();
    console.log("handle uploading-", this.state.file);
  }

  _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    };

    reader.readAsDataURL(file);
  }

  render() {
    let { imagePreviewUrl } = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = <img src={imagePreviewUrl} />;
    } else {
      $imagePreview = (
        <div className="previewText">Chọn ảnh để đăng lên</div>
      );
    }

    return (
      <div className="previewComponent">
        <form onSubmit={e => this._handleSubmit(e)}>
          <input className="fileInput" type="file" onChange={e => this._handleImageChange(e)} />
          {/* <button className="submitButton" type="submit" onClick={e => this._handleSubmit(e)}>Tải ảnh lên</button> */}
        </form>
        <div className="imgPreview">{$imagePreview}</div>
      </div>
    );
  }
}

ReactDOM.render(<ImageUpload />, document.getElementById("root"));
export default ImageUpload;