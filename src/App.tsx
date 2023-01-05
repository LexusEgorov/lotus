import { Provider } from 'react-redux/es/exports';
import Table from './components/table/table';
import { store } from './store/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Table />
      </div>
    </Provider>
  );
}

export default App;
