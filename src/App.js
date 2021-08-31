import './App.css';
import { Provider } from 'react-redux'
import store from './reduxStore'
import Table from './table'
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Table></Table>
      </div>
    </Provider>
  );
}

export default App;
