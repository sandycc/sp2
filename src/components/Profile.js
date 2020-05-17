
import React  from 'react';
 
const RenderProfile =({data}) => {
    const {name, email,password, gender,address,state} = data;
 return (
    <div>

    <p>Nama :{name}</p>
    <p>Password :{password}</p>
    <p>Email :{email}</p>
    <p>Gender :{gender}</p>
    <p>Address :{address}</p>
    <p>State :{state}</p>
    </div>
 )
  
}
export default RenderProfile