import React from 'react'
import PropTypes from 'prop-types'
import useCounter from './useCounter'

function Counter3({ initialValue, start }) {

    const count = useCounter(initialValue, start)

    return <span>{ count }</span>
    
}

Counter3.defaultProps = {
    initialValue: 0,
    start: 0,
}

Counter3.propTypes = {
    initialValue: PropTypes.number,
    start: PropTypes.number,
}

export default Counter3