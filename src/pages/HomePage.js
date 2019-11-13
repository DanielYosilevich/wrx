import React from 'react'
import ReactAutocomplete from "react-autocomplete";

class Home extends React.Component {

    state = {
        value: '',
        children: []
    }

    appendChild(val){
        var c = this.state.children;
        this.setState({
            children: [
                ...c,
                <button>{val}</button>
            ]
        });
    }

    render() {
        return (
            <React.Fragment>
                <ReactAutocomplete
                    items={[
                        { id: 'foo', label: 'foo' },
                        { id: 'bar', label: 'bar' },
                        { id: 'baz', label: 'baz' },
                    ]}
                    shouldItemRender={(item, value) => item.label.toLowerCase().indexOf(value.toLowerCase()) > -1}
                    getItemValue={item => item.label}
                    renderItem={(item, highlighted) =>
                        <div
                            key={item.id}
                            style={{ backgroundColor: highlighted ? '#eee' : 'transparent' }}
                        >
                            {item.label}
                        </div>
                    }
                    value={this.state.value}
                    onChange={e => this.setState({ value: e.target.value })}
                    onSelect={value => {
                        this.setState({ value: value, toShow: true });
                        this.appendChild(value);
                    }
                    }
                />

                <div className="box-container">
                    {this.state.children.map((child,index) => <span key = {index}> {child}</span>)}
                </div>
            </React.Fragment>
        )
    }

}

export default Home