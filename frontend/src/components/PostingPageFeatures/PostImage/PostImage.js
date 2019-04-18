
import React, { Component } from 'react';

class PostImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      EventPicture: '',
      imagePreviewUrl: ''
    };
    this._handleImageChange = this._handleImageChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
    this.sendPostingPictureData = this.props.sendPostingPictureData.bind(this);

  }

  sendPostingFormData = () => {
    this.props.getPostingFormData(this.state);
  }

  _handleSubmit(e) {
    e.preventDefault();
    this.sendPostingPictureData(this.state);
  }

  _handleImageChange(e) {
    e.preventDefault();
    let reader = new FileReader();
    let EventPicture = e.target.files[0];
    reader.onloadend = () => {
      this.setState({
        EventPicture: EventPicture,
        imagePreviewUrl: reader.result
      });
    }

    reader.readAsDataURL(EventPicture)
    console.log('preview has rn in event pic', EventPicture)
  }

  render() {
    let { imagePreviewUrl } = this.state;
    let $imagePreview = null;

    if (imagePreviewUrl) {
      $imagePreview = (<img src={imagePreviewUrl} />);
    }

    return (
      <div>
        <form onSubmit={this._handleSubmit}>
          <input type="file" onChange={this._handleImageChange} />
          <button type="submit" onClick={this._handleSubmit}>Upload Image</button>
        </form>
        {$imagePreview}
      </div>
    )
  }
}

export default PostImage;
