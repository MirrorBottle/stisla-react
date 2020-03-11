import React, { Component } from 'react'
import { Editor } from '@tinymce/tinymce-react';
export default class PostCreate extends Component {
    constructor(props) {
        super(props)
        this.handleEditorChange = this.handleEditorChange.bind(this)
    }
    handleEditorChange(content, editor) {
        console.log('Content was updated:', content);
    }
    render() {
        return (
            <React.Fragment>
                <h2 className="section-title">Create New Post</h2>
                <p className="section-lead">
                    On this page you can create a new post and fill in all fields.
                </p>
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header">
                                <h4>Write Your Post</h4>
                            </div>
                            <div className="card-body">
                                <div className="form-group row mb-4">
                                    <label className="col-form-label text-md-right col-12 col-md-3 col-lg-3">Title</label>
                                    <div className="col-sm-12 col-md-7">
                                        <input type="text" className="form-control" />
                                    </div>
                                </div>
                                <div className="form-group row mb-4">
                                    <label className="col-form-label text-md-right col-12 col-md-3 col-lg-3">Category</label>
                                    <div className="col-sm-12 col-md-7">
                                        <select className="form-control selectric">
                                            <option>Tech</option>
                                            <option>News</option>
                                            <option>Political</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group row mb-4">
                                    <label className="col-form-label text-md-right col-12 col-md-3 col-lg-3">Content</label>
                                    <div className="col-sm-12 col-md-7">
                                        <Editor
                                            initialValue="<p>This is the initial content of the editor</p>"
                                            init={{
                                                height: 300,
                                                menubar: false,
                                                plugins: [
                                                    'advlist autolink lists link image charmap print preview anchor',
                                                    'searchreplace visualblocks code fullscreen',
                                                    'insertdatetime media table paste code help wordcount'
                                                ],
                                                toolbar:
                                                    'undo redo | formatselect | bold italic backcolor | \
                                                    alignleft aligncenter alignright alignjustify | \
                                                    bullist numlist outdent indent | removeformat | help'
                                            }}
                                            onEditorChange={this.handleEditorChange}
                                        />
                                    </div>
                                </div>
                                <div className="form-group row mb-4">
                                    <label className="col-form-label text-md-right col-12 col-md-3 col-lg-3">Thumbnail</label>
                                    <div className="col-sm-12 col-md-7">
                                        <div id="image-preview" className="image-preview">
                                            <label for="image-upload" id="image-label">Choose File</label>
                                            <input type="file" name="image" id="image-upload" />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group row mb-4">
                                    <label className="col-form-label text-md-right col-12 col-md-3 col-lg-3">Tags</label>
                                    <div className="col-sm-12 col-md-7">
                                        <input type="text" className="form-control inputtags" />
                                    </div>
                                </div>
                                <div className="form-group row mb-4">
                                    <label className="col-form-label text-md-right col-12 col-md-3 col-lg-3">Status</label>
                                    <div className="col-sm-12 col-md-7">
                                        <select className="form-control selectric">
                                            <option>Publish</option>
                                            <option>Draft</option>
                                            <option>Pending</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group row mb-4">
                                    <label className="col-form-label text-md-right col-12 col-md-3 col-lg-3"></label>
                                    <div className="col-sm-12 col-md-7">
                                        <button className="btn btn-primary">Create Post</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
