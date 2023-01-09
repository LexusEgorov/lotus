import { Provider } from 'react-redux/es/exports';
import Board from './components/board/board';
import { store } from './store/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Board />
      </div>
    </Provider>
  );
}

export default App;
