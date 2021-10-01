import React from 'react';
import ReactDOM from 'react-dom';
import { CopyCat } from '../components/CopyCat';

export class CopyCatContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            copying: true,
            input: '',
        };

        this.toggleTape = this.toggleTape.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({
            ...this.state,
            input: e.target.value,
        });
    }

    toggleTape() {
        this.setState({
            ...this.state,
            copying: !this.state.copying,
        });
    }

    render() {
        const { copying, input } = this.state;
        const toggleTape = this.toggleTape;
        const onChange = this.handleChange;

        return (
            <CopyCat
                copying={copying}
                toggleTape={toggleTape}
                value={input}
                onChange={onChange}
            />
        );
    }
}


ReactDOM.render(<CopyCatContainer />, document.getElementById('app'));