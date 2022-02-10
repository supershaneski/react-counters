import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

function Counter2({ initialValue, start }) {

    const [count, setCount] = useState(initialValue)
    const [mode, setMode] = useState(start)
    
    useEffect(() => {

        if(mode === 0 && start === 1) {

            setCount(initialValue)

        }

        setMode(start)

    }, [start, mode, initialValue])

    useEffect(() => {

        let timer

        if(mode === 1) {

            timer = setTimeout(() => {

                setCount(prev => prev + 1)

            }, 1000)

        }
        
        return () => {
            clearTimeout(timer)
        }

    }, [count, mode])

    return <span>{ count }</span>

}

Counter2.defaultProps = {
    initialValue: 0,
    start: 0,
}

Counter2.propTypes = {
    initialValue: PropTypes.number,
    start: PropTypes.number,
}

export default Counter2