import React from 'react';
import { Router, Switch } from 'react-router-dom';
import { PublicRoute } from '../app/Route'
import { MainLayout } from '../layouts'
import { HomePage } from '../component'
import { history } from '../_helpers';
import { connect } from 'react-redux';

interface Props {
    dispatch:Function,
}

/**
 * Classe principale, se charge du routing
 *
 * @class App
 * @extends Component
 */
class App extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
        history.listen((location, action) => {
            window.scrollTo(0, 0);
        });
    }
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <PublicRoute exact path="/" layout={MainLayout} component={HomePage} />
                    <PublicRoute exact path="/logiciels" layout={MainLayout} component={HomePage} />
                    <PublicRoute exact path="/applications" layout={MainLayout} component={HomePage} />
                    <PublicRoute exact path="/produits" layout={MainLayout} component={HomePage} />
                    <PublicRoute exact path="/materiels" layout={MainLayout} component={HomePage} />
                    <PublicRoute exact path="/comptabilité" layout={MainLayout} component={HomePage} />
                    <PublicRoute exact path="/support" layout={MainLayout} component={HomePage} />
                    <PublicRoute exact path="/contact" layout={MainLayout} component={HomePage} />
                </Switch>
            </Router>
        );
    }
}

function mapStateToProps(state: any) {
    return {};
}

const connectedApp = connect(mapStateToProps)(App);
export default connectedApp;
