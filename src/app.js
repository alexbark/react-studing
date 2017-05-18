import React from 'react';
import {render} from 'react-dom';
import Header from '../src/components/header/Header';
import Dashboard from '../src/components/dashboard/Dashboard';

const App = () => {
    const cards = [{
        id: 1,
        title: 'Do Something',
        description: 'Some long description',
        status: 'TODO'
        },
        {
        id: 1.1,
        title: 'Do1 Something1',
        description: 'Some1 long1 description1',
        status: 'TODO'
        },
        {
        id: 2,
        title: 'Don\'t do Something',
        description: 'Blabla bla blaed blaing blaish',
        status: 'INPROGRESS'
        },
        {
        id: 3,
        title: 'Forget everything you know',
        description: 'See the title, dude',
        status: 'INTESTING'
        },
        {
        id: 4,
        title: 'Haha Hoho Hihi',
        description: 'Ahah ohoh ihih',
        status: 'DONE'
        }]
    return(
        <div>
          <Header />
          <Dashboard dshbCards={cards}/>
        </div>
    )
}

render(<App></App>, document.getElementById('app'));
