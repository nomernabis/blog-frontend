import React, { Component } from 'react'
import TextFieldGroup from './TextFieldGroup'
import { addPost } from '../actions/postActions'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class AddPostForm extends Component{
    constructor(props){
        super(props)
        this.state = {
            title: '',
            text: '',
            image: null,
            errors: null
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.fileSelected = this.fileSelected.bind(this)
    }
    onChange(e){
        this.setState({[e.target.name]: e.target.value})
    }
    onSubmit(e){
        e.preventDefault()
        var formData = new FormData()
        for(var name in this.state){
            formData.append(name, this.state[name])
        }
        this.props.addPost(formData)
            .then(response => response.json().then(data => ({ data: data, ok: response.ok })))
            .then(json => {
                if(json.ok){
                    this.props.history.push('/')
                } else {
                    this.setState({errors: json.data})
                }
            })
    }
    fileSelected(e){
        this.setState({image: e.target.files[0]})
    }
    render(){
        console.log('state', this.state)
        return(
            <div>
                <TextFieldGroup value={this.state.title} field="title" type="text" label="Title" onChange={this.onChange} error={this.state.errors && this.state.errors.title[0]}/>
                <div className="group">
                    <textarea className="login-input" value={this.state.text} onChange={this.onChange} error={this.state.errors && this.state.errors.text[0]} name="text" >
                    </textarea>
                    <span className="bar"></span>
                    <label className="group-label">Text</label>
                </div>
                <input type="file" onChange={this.fileSelected} />
                <button onClick={this.onSubmit} className="button-login">
                    Post
                </button>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    addPost: (data) => dispatch(addPost(data))
})

export default withRouter(connect(null, mapDispatchToProps)(AddPostForm))
