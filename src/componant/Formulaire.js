import React, {Component} from 'react'
import {Button} from 'reactstrap'

class Formulaire extends Component {
    state = {
        message: ''
    }

    createMessage = () => {
        const {addMessage, pseudo} = this.props
        const message = {
            pseudo,
            message: this.state.message
        }
        addMessage(message)
        //Reset du state
        this.setState({message:''})
    }

    handleSubmit = event => {
        event.preventDefault()
        this.createMessage()
    }

    handleChange = event => {
        const message = event.target.value
        this.setState({message})
    }

    render() {
        return (
            <form className='form'
                  onSubmit={this.handleSubmit}>
                <textarea required
                          onChange={this.handleChange}
                          value={this.state.message}
                          maxLength='140'>
                     Write your message...
                </textarea>
                <div className='nfo'>
                    140
                </div>
                <Button className='btn btn-primary btn-send'>
                    Send
                </Button>
            </form>
        )
    }
}

export default Formulaire