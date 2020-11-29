import React, {useState} from 'react';
import {Switch, Route, useRouteMatch} from 'react-router-dom';
import {Nav} from 'reactstrap';

// Components
import Header from '../components/layout/Header';
import NavTab from '../components/layout/NavTab';
import Appearance from "../components/settings/Appearance";
import Periods from "../components/settings/Periods";
import Localization from "../components/settings/Localization.js";
import About from "../components/settings/About";
import PageNotFound from "./404";


const Settings = (props) => {
    let match = useRouteMatch();

    return (
        <Header
            heading="Settings"
            nav={
                <Nav fill tabs>
                    <NavTab to={match.url} name="Appearance" exact/>
                    <NavTab to={`${match.url}/periods`} name="Periods" />
                    <NavTab to={`${match.url}/localization`} name="Localization" />
                    <NavTab to={`${match.url}/about`} name="About" />
                </Nav>
            }
        >
            <Switch>
                <Route exact path={match.url} component={Appearance}/>
                <Route path={`${match.url}/periods`} component={Periods}/>
                <Route path={`${match.url}/localization`} component={Localization}/>
                <Route path={`${match.url}/about`} component={About}/>
                <Route component={PageNotFound}/>
            </Switch>
        </Header>
    );
}

export default Settings;