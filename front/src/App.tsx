import './App.css';
import UserAvailabilityForm from './components/UserAvailabilityForm';
import SessionForm from './components/SessionForm';

function App() {
  return (
    <div className="App">
      <div>
            <h1>Dynamic Scheduling</h1>
            <UserAvailabilityForm />
            <SessionForm />
        </div>
    </div>
  );
}

export default App;
