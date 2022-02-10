import React from 'react'
import PropTypes from 'prop-types'

class Counter extends React.Component {

    constructor(props) {
        
        super(props)
        
        this.state = {
            count: this.props.initialValue,
            mode: this.props.start,
        }
        
        this.timer = null

        this.startTimer = this.startTimer.bind(this)

    }

    componentDidUpdate(prevProps) {

        if(this.props.start !== prevProps.start) {

            clearInterval(this.timer)

            if(this.props.start === 0) {
                
                this.setState({
                    mode: 0,
                })

            } else if(this.props.start === 1) {

                if(this.state.mode > 0) {

                    this.setState({
                        mode: 1,
                    })

                    this.startTimer()

                } else {

                    this.setState({
                        count: this.props.initialValue,
                        mode: 1,
                    })
    
                    this.startTimer()

                }

            } else {

                this.setState({
                    mode: 2,
                })

            }

        }

    }

    startTimer() {

        this.timer = setInterval(() => {
    
            this.setState(prev => ({
                count: prev.count + 1,
            }))

        }, 1000)

    }

    componentWillUnmount() {
        clearInterval(this.timer)
    }
    
    render() {
        return (
            <span>{ this.state.count }</span>
        )
    }

}

Counter.defaultProps = {
    initialValue: 0,
    start: 0,
}

Counter.propTypes = {
    initialValue: PropTypes.number,
    start: PropTypes.number,
}

export default Counter