import React, { useState } from 'react';
import Registrasi from './Registrasi';
import { Tab, Tabs } from 'react-bootstrap';
import Profile from './Profile'; 
import Login from './Login';
const Home =(props) => {
    const [data, setData] = useState({})

    console.log(data,'ini data')
    return (
        <Tabs defaultActiveKey="Registrasi" id="uncontrolled-tab-example">
        <Tab eventKey="Registrasi" title="Registrasi">
        <Registrasi dataRegistrasi={(data) => setData(data)}
        />
        </Tab>
        <Tab eventKey="login" title="login" >
        <Login data={data}/>
        </Tab>
        <Tab eventKey="profile" title="profile" >
        <Profile data={data}/>
        </Tab>
        </Tabs>
    
    )
}

export default Home