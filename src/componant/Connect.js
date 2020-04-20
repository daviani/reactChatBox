import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'
import {Card, CardHeader, CardBody, Input, Button} from 'reactstrap'


class Connect extends Component {
    state = {
        pseudo: '',
        goToChat: false
    }

    handleChange = event => {
        const pseudo = event.target.value
        this.setState({pseudo})
    }

    handleSubmit = event => {
        event.preventDefault()
        this.setState({goToChat:true})
    }

    render() {

        if(this.state.goToChat) {
            return <Redirect push to={`/pseudo/${this.state.pseudo}`}/>
        }

        return (
            <Card className='connexionBox'>
                <CardHeader>
                    <h1 className='text-center'>Welcome to reactChatBox</h1>
                </CardHeader>
                <CardBody>
                    <form className='connexion'
                    onSubmit={this.handleSubmit}>
                        <Input value={this.state.pseudo}
                                onChange={this.handleChange}
                               type="text"
                               name="pseudo"
                               placeholder="Enter your pseudo"
                               required/>
                        <Button color='primary'
                                size='lg'
                                className='mt-5 btn-round'
                                type='submit'>
                            GO !!
                        </Button>
                    </form>
                </CardBody>
            </Card>
        )
    }
}

export default Connect