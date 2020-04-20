import React, {Component} from 'react'
import {Card} from 'reactstrap'
import Link from 'react-router-dom/Link'
import Formulaire from './componant/Formulaire'
import Message from './componant/Message'
import './App.css'

class App extends Component {
    state = {
        messages: {},
        pseudo: this.props.match.params.pseudo
    }

    addMessage = message => {
        const messages = {...this.state.messages}
        messages[`message-${Date.now()}`] = message
        this.setState({messages})
    }

    render() {
        return (
            <div className='container mt-5'>
                <Card>
                    <div className='box mt-5'>
                        <h2 className='text-center'>chatBox</h2>
                        <div className='mt-5'>
                            <div className='messages mb-5 mt-5'>
                                <Message/>
                            </div>
                            <Formulaire pseudo={this.state.pseudo}
                                        addMessage={this.addMessage}/>
                        </div>

                        <Link to='/'
                              color='primary'
                              size='lg'
                              className='mt-5 btn-round'
                              type='submit'>
                            GO TO THE HOMEPAGE
                        </Link>

                    </div>
                </Card>
            </div>

        )
    }
}

export default App
