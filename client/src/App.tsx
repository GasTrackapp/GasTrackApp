import './App.css';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './redux/store/store';
import { getGasTrackUsers } from './redux/reducers/gasTrackReducer/thunks';

function App() {

  const dispatch = useAppDispatch();

  const gasTrackUsers = useAppSelector(state => state.gasTrack.gasTrack);

  useEffect(() => {
    dispatch(getGasTrackUsers());
  }, [dispatch]);

  return (
    <div className="App">
      {gasTrackUsers.map((user) => {
        return (
          <div key={user.id}>
            <h1>{user.name}</h1>
            <h2>{user.email}</h2>
          </div>
        )
      }
      )}
    </div>
  );
}

export default App;
