import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    render() {
        return (
            <div>
                <Button>React Button</Button>
            </div>
        );
    }
}

class Button extends React.Component {
    constructor() {
        super();
        this.state = {val: 0};
        this.update = this.update.bind(this)
    }

    update() {
        this.setState({val: this.state.val + 1})
    }

    componentWillMount() {
        console.log('will')
    }

    componentDidMount() {
        console.log('did')
    }

    componentWillUnmount() {
        console.log('bye')
    }

    render() {
        console.log('rendering')
        return (
            <div>
                <button onClick={this.update}>{this.state.val}</button>
                <div > {this.props.state}</div>
            </div>
        );
    }
}

export default class Wrapper extends React.Component {
    constructor() {
        super();
    }

    mount() {
        ReactDOM.render(<App/>, document.getElementById('a'))
    }

    unmount() {
        ReactDOM.unmountComponentAtNode(document.getElementById('a'))
    }

    render() {
        return (
            <div>
                <button onClick={this.mount.bind(this)}>Mount</button>
                <button onClick={this.unmount.bind(this)}>Unmount</button>
                <div id='a'></div>
            </div>
        )
    }
}