import React, {Component} from 'react'
import Card from 'reactstrap/es/Card'
import CardHeader from 'reactstrap/es/CardHeader'
import CardBody from 'reactstrap/es/CardBody'
import Input from 'reactstrap/es/Input'
import Button from 'reactstrap/es/Button'

class Connect extends Component {
    render() {
        return (
            <Card className='connexionBox'>
                <CardHeader>
                    <h1 className='text-center'>Welcome to reactChatBox</h1>
                </CardHeader>
                <CardBody>
                    <form className='connexion'>
                        <Input
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

/*
  <div className='container'>
                <form >
                    <input required
                     placeholder='pseudo'
                    type='text' />
                    <Button color='primary'>
                    Connect
                    </Button>
                </form>
            </div>

 */