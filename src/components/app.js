import React from 'react';
import ReactDOM from 'react-dom';

export default class App extends React.Component {
    constructor() {
        super();
        this.update = this.update.bind(this);
    }

    update() {
        ReactDOM.render(
            <App val={this.props.val + 1}/>, document.getElementById('app'))
    }

    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps');
        console.log('nextProps', nextProps);
        console.log('this.props.val', this.props.val);
        console.log('-');
        this.setState({increasing: nextProps.val > this.props.val})
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.val % 5 === 0
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate');
        console.log('prevProps', prevProps);
        console.log('prevState', prevState);
        console.log('---')
    }


    render() {
        console.log('render');
        console.log('this.state', this.state);
        console.log('this.state', this.props);
        console.log('--');
        return (
            <div>
                <button onClick={this.update}>
                    {this.props.val}
                </button>
            </div>
        );
    }
}

App.defaultProps = {val: 0}