import React from "react";


import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';

function StateList({ isDone }) {
  return (
    <Stack direction="horizontal" gap={2}>
      {/*{isDone ? (*/}
      {/*  <Badge bg="success">done</Badge>*/}
      {/*) : (*/}
      {/*  <Badge bg="secondary">unfinished</Badge>*/}
      {/*)}*/}
      <Badge
        // className={isDone ? "text-success" : "text-danger"}
        bg={isDone ? 'success' : 'secondary'}
      >
        {isDone ? 'done' : 'unfinished'}
      </Badge>
    </Stack>
  );
}



export default StateList;