import React, {useState} from 'react'

import '../styles/slideContent.css';

const SlideContent = ({title, content, state}) => {
    // This component contains the slide snackbar and its contents toggled, the style bears the same name
    let icon =state?'fa-minus': 'fa-plus';
    let defaultStyle =state?'show-description': 'hide-description';
    const [open, setOpen] = useState({
        currentState:state,
        icon: icon,
    })

    const changeState = () =>{
        const myState = !open.currentState
        icon =myState?'fa-minus': 'fa-plus'

        setOpen({
            currentState:myState,
            icon: icon,
        })
    }

    return (
        <div style={{width:'100%', transition: 'all .9s ease-in-out', borderBottom:'1px solid gray'}}>
            <div className="flex" onClick = {changeState} style={{cursor:'pointer'}}>
                <h4 style={{ padding:'2rem 0', margin: 0}}>{title}</h4>
                <div 
                onClick = {changeState} 
                
                className="toggle-slide-icon">
                    <i className={`fa ${open.icon}`}></i>
                </div>
            </div>
            <div className={open.currentState?'show-description':'hide-description'}>
                <div className="product-description">
                    <p>{content}</p>
                </div>
            </div>
        </div>
    )
}

export default SlideContent
