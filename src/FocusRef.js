import React, {useState , useEffect ,useRef} from 'react'

function FocusRef() {
    const inputRef = useRef(null)
    
    useEffect(() => {
        inputRef.current.focus()
    }, [])
    return (
        <div>
            <input type="text" ref={inputRef} />
        </div>
    )
}

export default FocusRef
