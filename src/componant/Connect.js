import React, { Component } from 'react';
import { Button } from 'reactstrap';

class Connect extends Component {
    render() {
        return(
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
        )
    }
}

export default Connect