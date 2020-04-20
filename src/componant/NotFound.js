import React from 'react'
import Link from 'react-router-dom/Link'

const NotFound = () => (
    <blockquote className="blockquote text-center mt-5">
        <h3 className='h1'>404</h3>
        <p> Oops! This Page Could Not Be Found</p>
        <p className="blockquote-footer">SORRY BUT THE PAGE YOU ARE LOOKING FOR DOES NOT EXIST, HAVE BEEN REMOVED. NAME
            CHANGED OR IS TEMPORARILY UNAVAILABLE</p>
        <Link to='/'
              color='primary'
              size='lg'
              className='mt-5 btn-round'
              type='submit'>
            GO TO THE HOMEPAGE
        </Link>
    </blockquote>
)

export default NotFound