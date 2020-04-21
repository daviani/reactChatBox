import React from 'react';

const Message = ({message}) => {
    return ( <p className='user-message mt-3'>
       <strong>{message}</strong>
    </p>
    );
}

export default Message;