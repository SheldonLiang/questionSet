import React from 'react';
import { Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';

import QuestionTable from './QuestionTable';

const questionTab = (props) => (
    <div>
        <Nav tabs>
            <NavItem>
                <NavLink active={props.activeTab === 'html'} onClick={() => props.clicked('html')}>HTML</NavLink>
            </NavItem>
            <NavItem>
                <NavLink active={props.activeTab === 'css'} onClick={() => props.clicked('css')}>CSS</NavLink>
            </NavItem>
            <NavItem>
                <NavLink active={props.activeTab === 'javascript'} onClick={() => props.clicked('javascript')}>JavaScript</NavLink>
            </NavItem>
            <NavItem>
                <NavLink active={props.activeTab === 'react'} onClick={() => props.clicked('react')}>React</NavLink>
            </NavItem>
        </Nav>
        <TabContent activeTab={props.activeTab}>
            <TabPane tabId="html">
                <QuestionTable>{props.children}</QuestionTable>
            </TabPane>
            <TabPane tabId="css">
                <QuestionTable>{props.children}</QuestionTable>
            </TabPane>
            <TabPane tabId="javascript">
                <QuestionTable>{props.children}</QuestionTable>
            </TabPane>
            <TabPane tabId="react">
                <QuestionTable>{props.children}</QuestionTable>
            </TabPane>
        </TabContent>
    </div >
)

export default questionTab;