import { useState, useEffect } from 'react'

export default function useCounter(initialValue, start) {

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

    return count
}