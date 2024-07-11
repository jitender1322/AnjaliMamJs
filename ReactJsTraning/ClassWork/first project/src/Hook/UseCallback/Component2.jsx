import React, { memo } from 'react'

function Component2({ addRecord, myList }) {
    console.log('component2 is calling');
    return (
        <div>
            {myList.map((e, i) => {
                return <h4 key={i} >{e}</h4>
            })}
            <button onClick={addRecord} > add</button>
        </div>
    )
}

export default memo(Component2)
