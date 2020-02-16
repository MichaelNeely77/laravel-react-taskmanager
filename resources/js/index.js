import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import TaskEdit from './components/TaskEdit';

const Topics = () => (
    <div>
        <h2>Topics</h2>
    </div>
);

const About = () => (
    <div>
        <h2>About</h2>
    </div>
);
    




if (document.getElementById('root')) {
    ReactDOM.render(
        <BrowserRouter>
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/topics">Topics</Link></li>
                </ul>
                <Switch>
                    <Route exact path ="/:id/edit" component={TaskEdit} />
                    <Route exact path ="/about" component={About} />
                    <Route exact path ="/topics" component={Topics} />
                    <Route exact path ="/" component={App} />
                </Switch>
            </div>
        </BrowserRouter>
    
    , document.getElementById('root'));
}
