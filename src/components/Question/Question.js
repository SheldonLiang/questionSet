import React from 'react';

const question = (props) => (
    <tr sm="12" onClick={props.clicked}>
        <th sm="1">{props.id}</th>
        <td sm="10">{props.question}</td>
        <td sm="1">1</td>
    </tr>
);

export default question;