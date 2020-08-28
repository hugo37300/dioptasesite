import React, {Component} from 'react';
import { NavbarMenu } from '../sidebars/index';

type Props = {
    children:Component,
}
/**
 * Rend le layouts principal
 *
 * @method MainLayout
 * @param props Props du composant
 */
export default function MainLayout(props: Props) {
    const { children } = props;
    return (
            <div>
                <div className="wrapper">
                    <div className="menu-header">
                        <NavbarMenu />
                    </div>
                    <section className="container-fluid">{children}</section>
                </div>
            </div>
    );
}