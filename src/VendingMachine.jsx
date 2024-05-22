import React from 'react';
import { Link } from 'react-router-dom';
import './VendingMachine.css';

function VendingMachine() {
    return (
        <div>
            <img src="https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iUUFDCgR9r7I/v2/-1x-1.jpg"></img>
            <Link to="/ollipop">Ollipop!  </Link>
            <Link to="/boomchicka">Boom Chicka Pop!  </Link>
            <Link to="/cashews">Cashews!  </Link>
        </div>
    )
}

export default VendingMachine;