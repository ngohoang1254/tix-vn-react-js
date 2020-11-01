import React, { Component } from 'react'
import { Switch,Route } from 'react-router-dom'
import Template from "./component/Template";
import HomePage from './HomePage';
export default class Home extends Component {
    render() {
        return (
            <Template>
                <Switch>
                    <Route exact path = "/" component = {HomePage}/>
                </Switch>
            </Template>
        )
    }
}
