import './loginPage.css';
import Login from '../../components/login';
import { Provider } from 'react-redux';
import GenerateStore from '../../redux/store';

export default function LoginPage() {

  const store = GenerateStore();

  return (
    <Provider store={store}>
      <Login />
    </Provider>
  );
}