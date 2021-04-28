import {
    BrowserRouter,
    Route,
    Redirect
} from 'react-router-dom';

import LoginPage from '../../pages/loginPage';

export default function Router() {
    return (
        <div>
            <BrowserRouter>
                <Route path="/login" component={LoginPage} />
                <Redirect exact path="/" to="/login" />
            </BrowserRouter>
        </div>
    );
}