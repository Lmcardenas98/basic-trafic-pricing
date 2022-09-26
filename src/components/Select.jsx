import { useState } from "react"
import image from '../images/icon-slider.svg'

export default function Select(props) {
    
    const [value, setValue] = useState(0); 
    const MAX = 100; 

    const getBackgroundSize = () => { 
        return { backgroundSize: `${(props.values.discount * 100) / MAX}% 100%` }; }; 

    return (
        <div className="range-container">
            <input type="range" 
                    min="0" 
                    max={MAX} 
                    onChange={(e) => props.values.setDiscount(e.target.value)} 
                    style={getBackgroundSize()} value={props.values.discount} 
                    />
        </div>
    )
}