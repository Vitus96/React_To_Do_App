import React from "react";
import Button from 'react-bootstrap/Button';

// Icons:



function ButtonFormDelete() {
    return (
        <>
            <Button type="submit" className="button-add button-delete">
                <i class="fa-solid fa-trash-can"></i>
            </Button>

        </>
    );
}


export default ButtonFormDelete;