import React from 'react';

type Props = any;
type State = {
    hasError: boolean;
};

/**
 * @class ErrorBoundary
 * @extends Component
 */
export default class ErrorBoundary extends React.Component<Props, State> {
    /**
     * @constructor
     * @param {Props} props Props du composant
     */
    constructor(props: Props) {
        super(props);
        this.state = { hasError: false };
    }

    /**
     * Méthode gérant les erreurs remontées
     *
     * @method componentDidCatch
     * @param {any} error Erreur
     * @param {any} info Info
     */
    componentDidCatch(error: any, info: any) {
        // Display fallback UI
        this.setState({ hasError: true });
        console.log(error);
        console.log(info);
    }

    /**
     * Rend le composant
     *
     * @method render
     */
    render() {
        const { hasError } = this.state;
        const { children } = this.props;

        if (hasError) {
            return <h1> {"Oups c'est cassé"}</h1>;
        }

        return children;
    }
}
