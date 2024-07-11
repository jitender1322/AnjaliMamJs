import React, { memo } from 'react'

function Component1() {
    console.log('hello')
    return (
        <div>Component1</div>
    )
}

export default memo(Component1)
