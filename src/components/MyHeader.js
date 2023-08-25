import React, { useEffect } from 'react';
import Typed from 'react-typed';


function MyHeader(props){


    return (
        <div className='header-wraper'>
            <div className='main-info'>
                <h1>{props.text}</h1>
                <Typed
                    className='typed-text'
                    strings={['Web development', 'Software development','Game development', 'Mobile App development']}
                    typeSpeed={25}
                    backSpeed={40}
                    loop
                />
            </div>
        </div>
    );
}

export default MyHeader;