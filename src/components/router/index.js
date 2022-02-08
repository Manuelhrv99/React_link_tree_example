import {
    BrowserRouter,
    Route,
    Redirect,
} from 'react-router-dom';

import LoginPage from '../../pages/loginPage/loginPage';
import uConnect from '../../pages/uConnectPage/uConnectPage';

export default function Router() {
    return (
        <div>
            <BrowserRouter>
                <Route path="/login" component={LoginPage} />
                <Route path="/user" component={uConnect} />
                <Redirect exact path="/" to="/login" />
            </BrowserRouter>
        </div>
    );
}