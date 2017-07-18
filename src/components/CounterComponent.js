import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from '../actions/counter';
import { Button, FormControl } from 'react-bootstrap';
import PropTypes from 'prop-types';

class CounterComponent extends Component 
{
    static propTypes = {
        counter: PropTypes.number.isRequired,
        increment: PropTypes.func.isRequired,
        decrement: PropTypes.func.isRequired,
    }

    render() 
    {
        const wellStyles = { maxWidth: 400, margin: '0 auto 10px' };
        const { counter, increment, decrement } = this.props;

        return (
            <div>
                <h1 className = "text-center text-muted">Counter con React + Redux</h1>
                <div className="well" style={wellStyles}>
                    <Button 
                        bsStyle="primary"
                        bsSize="large"
                        block
                        onClick={increment}
                    >
                        Increment
                    </Button>
                    <br/>
                    <FormControl
                        type="text"
                        value={counter}
                        disable
                    />
                    <br/>
                    <Button
                        bsSize="large"
                        block
                        onClick={decrement}
                    >
                        Decrement
                    </Button>
                </div>
            </div>
        );

    }
}

const mapStateToProps = state => ({
    counter: state.counter.count
})

const mapDispatchToProps = (dispatch) => {
    return {
        increment: () => {
            dispatch(increment());
        },
        decrement: () => {
            dispatch(decrement());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterComponent)