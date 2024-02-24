import 'react-native-gesture-handler';
import Navigation from './Navigation/Navigation';
import { Provider } from 'react-redux';
import { store } from './redux/store';


export default function App() {

  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}
