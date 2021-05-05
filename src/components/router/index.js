import {
    BrowserRouter,
    Route,
    Redirect,
} from 'react-router-dom';

import LoginPage from '../../pages/loginPage/loginPage';
import RegisterPage from '../../pages/registerPage/registerPage';
import uConnect from '../../pages/uConnectPage/uConnectPage';

/*const user = "Hugoes80"
const uConnectUser = "/user/" + user;*/

export default function Router() {
    return (
        <div>
            <BrowserRouter>
                <Route path="/login" component={LoginPage} />
                <Route path="/register" component={RegisterPage} />
                <Route path="/user" component={uConnect} />
                <Redirect exact path="/" to="/user" />
            </BrowserRouter>
        </div>
    );
}