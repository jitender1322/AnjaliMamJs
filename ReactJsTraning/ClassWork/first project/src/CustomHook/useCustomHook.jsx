import React from 'react'
import { useState } from 'react'

export default function useCustomHook() {
    const [count, setCount] = useState(0);
    function addCount() {
        setCount(count + 1)
    }
    function removeCount() {
        setCount(count - 1)
    }
    return [count, addCount, removeCount]
}