import {
    BrowserRouter,
    Route,
    Redirect,
    Switch
} from 'react-router-dom';

import LoginPage from '../../pages/loginPage/loginPage';
import RegisterPage from '../../pages/registerPage/registerPage';

export default function Router() {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route path="/login" component={LoginPage} />
                    <Route path="/register" component={RegisterPage} />
                    <Redirect exact path="/" to="/login" />
                </Switch>
            </BrowserRouter>
        </div>
    );
}