import React from 'react';
import {Switch, Route} from 'react-router-dom';

import beranda from './beranda';
import tentangsaya from './belanja';

const utama = () => (
    <Switch>
        <Route exact path="/" component={beranda} />
        <Route path="/belanja" component={belanja} />
        
    </Switch>
)

export default utama; 