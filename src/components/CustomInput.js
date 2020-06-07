import React, { useEffect,useState } from 'react';

    
const CustomInput = ({
    title,
    value,
    onChange,
    type,
    matchData,
}) => {
    const [warning,setWarning] = useState(false);
    useEffect(() => { 
        if (type && type === 'password') {
            const pass  = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/g;
            if(pass.test(value)) setWarning(false);
            else setWarning(true);
        } else if(type && type ==='match'){
            if(value  !== matchData) setWarning(true)
        }
        if (value.length >8 && value.length <20) setWarning(false);
        else setWarning(true);
    },    [matchData, type, value]);

    return (
        <div>
        <div>{title}</div>
        <input
        value={value}
        onChange={opt => onChange(opt.target.value)}
        />
        
            
                <div className="alert-warning">
                {type === 'match' ? 'Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters': warning}
                
                </div>
            
        
        <div>status warning</div>
        </div>
        

        
    );

}

export default CustomInput;