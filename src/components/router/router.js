import {
    BrowserRouter,
    Route,
    Redirect,
} from 'react-router-dom';

import LoginPage from '../../pages/loginPage/loginPage';
import RegisterPage from '../../pages/registerPage/registerPage';

export default function Router() {
    return (
        <div>
            <BrowserRouter>
                <Route path="/login" component={LoginPage} />
                <Route path="/register" component={RegisterPage} />
                <Redirect exact path="/" to="/login" />
            </BrowserRouter>
        </div>
    );
}