import React from "react";
import { Route } from 'react-router-dom';

interface IDefaultProps {
    component: any;
    layout: any;
    path?: string;
    exact?: boolean;
    authAccepted?: Array<String>;
}

export const PublicRoute: React.FunctionComponent<IDefaultProps> = ({
                                                                        component: Component,
                                                                        layout: Layout,
                                                                        ...rest
                                                                    }) => (
    <Route
        {...rest}
        render={props => (
            <Layout>
                <Component {...props} />
            </Layout>
        )}
    />
);
