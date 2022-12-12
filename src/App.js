import './App.css';
import Layout from './configs/Layout';
import Provider from "react-redux/es/components/Provider";
import store from './store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Layout />
      </Provider>
    </div>
  );
}

export default App;
