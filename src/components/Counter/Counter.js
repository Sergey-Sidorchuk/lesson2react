import React from "react";
import Controls from './Controls';
import './Counter.css';


class Counter extends React.Component {
    static defaultProps = {
        initialValue: 0,
    };
   

    // static propTypes = {

    // };
   

    state = {
        value: this.props.initialValue,
    };


    handleIncrement = () => {
        this.setState(prevstate=>({
            value: prevstate.value +1,
        }));
    };

    handleDecrement = () => {
        this.setState(prevstate=>({
            value: prevstate.value -1,
        }));

    }

    render() {
        return (
            <div className='Counter'>
                <span className='Counter__value'>{this.state.value}</span>

                <Controls onIncrement={this.handleIncrement }
                    onDecrement={this.handleDecrement }/>

                {/* <div className='Counter__controls'>
                    <button type='button'
                        onClick={this.handleIncrement}
                    >
                        Увеличить на 1
                    </button>

                    <button type='button'
                        onClick={this.handleDecrement}
                    >
                        Уменьшить на 1
                    </button>
                </div> */}
            </div>
        );
    }
}

export default Counter;
