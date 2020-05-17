import React from 'react';
import'../assets/signup.scss';

const Greetings =(props) => {
  const {name, age } = props;
  return (
      <div className="Greeting">
      <h1>hello</h1>
      <h3>Nama: { name === '' ? <i>isi nama</i> :name}</h3>
      <h3>umur: { age === 0 ? <i>isi umur</i> :age}</h3>
      </div>
  ) 
  }
  
export default Greetings;