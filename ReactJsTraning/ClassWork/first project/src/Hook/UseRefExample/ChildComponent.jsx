import React from 'react'


const ChildComponent = React.forwardRef((props, ref) => {
    return (
        <div>
            <input type="text" placeholder='enter name in child' ref={ref} />
        </div>
    )
})

export default ChildComponent;