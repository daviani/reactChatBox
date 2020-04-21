import React, {Component} from 'react'
import {Button} from 'reactstrap'

class Formulaire extends Component {
    state = {
        message: '',
        length: this.props.length
    }

    createMessage = () => {
        const {addMessage, pseudo, length} = this.props
        const message = {
            pseudo,
            message: this.state.message
        }
        addMessage(message)
        //Reset du state
        this.setState({message: '', length})
    }

    handleSubmit = event => {
        event.preventDefault()
        this.createMessage()
    }

    handleChange = event => {
        const message = event.target.value,
            length = this.props.length - message.length
        this.setState({message, length})
    }

    handleKeyUp = event => {
        if (event.key === 'Enter') {
            this.createMessage()
        }
    }
    render() {
        return (
            <form className='form'
                  onSubmit={this.handleSubmit}>
                <textarea required
                          onKeyUp={this.handleKeyUp}
                          onChange={this.handleChange}
                          value={this.state.message}
                          maxLength={this.props.length}>
                     Write your message...
                </textarea>
                <div className='nfo'>
                {this.state.length}
                </div>
                <Button className='btn btn-primary btn-send'>
                    Send
                </Button>
            </form>
        )
    }
}

export default Formulaire