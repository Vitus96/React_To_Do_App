import React from "react";
import Button from 'react-bootstrap/Button';

// Icons:
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'


function ButtonFormDelete({onClick}) {
    return (
        <>
            <Button type="button" onClick={onClick} className="button-add button-delete">
                {/* <i class="fa-solid fa-trash-can"></i> */}
                <FontAwesomeIcon icon={faTrashCan} />
            </Button>

        </>
    );
}


export default ButtonFormDelete;