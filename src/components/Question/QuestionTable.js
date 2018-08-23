import React from 'react';
import { Table, Row, Col } from 'reactstrap';

const questionTable = (props) => (
    <Row>
        <Col sm="12">
            <Table>
                <thead>
                    <tr>
                        <th sm="1">id</th>
                        <th sm="10">Question</th>
                        <th sm="1">Answered</th>
                    </tr>
                </thead>
                <tbody>
                    {props.children}
                </tbody>
            </Table>
        </Col>
    </Row>
);

export default questionTable;