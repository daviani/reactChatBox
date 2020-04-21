import React, {Component, Fragment, createRef} from 'react'
import Link from 'react-router-dom/Link'
import base from './base'
import Formulaire from './componant/Formulaire'
import Message from './componant/Message'
import './App.css'
import {Card} from 'reactstrap'

class App extends Component {
    state = {
        messages: {},
        pseudo: this.props.match.params.pseudo
    }

    messageRef = createRef()

    componentDidUpdate() {
        const ref = this.messageRef.current
        ref.scrollTop = ref.scrollHeight
    }

    componentDidMount() {
        base.syncState('/messages', {
            context: this,
            state: 'messages'
        })
    }

    addMessage = message => {
        const messages = {...this.state.messages}
        messages[`message-${Date.now()}`] = message
        this.setState({messages})
    }

    render() {
        const messages = Object
            .keys(this.state.messages)
            .map(key => (
                <Message key={key}
                         pseudo={this.state.messages[key].pseudo}
                         message={this.state.messages[key].message}/>
            ))

        return (<Fragment>
                <Card className='container mt-5'>
                    <div className='box mt-5'>
                        <h2 className='text-center'>Welcome, {this.state.pseudo}</h2>
                        <div className='mt-5'>
                            <div ref={this.messageRef}
                                 className='messages mb-5 mt-5'>
                                <div className='message'>
                                    {messages}
                                </div>
                            </div>
                            <Formulaire length={140}
                                        pseudo={this.state.pseudo}
                                        addMessage={this.addMessage}/>
                        </div>
                    </div>
                </Card>
                <Link to='/'
                      color='default'
                      type='submit'>
                    GO TO THE HOMEPAGE
                </Link>
            </Fragment>
        )
    }
}

export default App
