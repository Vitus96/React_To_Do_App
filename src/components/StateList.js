import React from "react";


import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';

function StateList() {
  return (
    <Stack direction="horizontal" gap={2}>
            <Badge bg="secondary">unfinished</Badge>
      <Badge bg="success">done</Badge>
    </Stack>
  );
}


export default StateList;