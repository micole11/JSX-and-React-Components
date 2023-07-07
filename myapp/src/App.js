import logo from './logo.svg';
import './App.css';
import ProfilePhoto from './Profile/ProfilePhoto';
import FullName from './Profile/FullName';
import Address from './Profile/Address';

function App() {
  return (
    <div>
    <ProfilePhoto></ProfilePhoto>
    <FullName></FullName>
    <div className='line'>
      <div className='div'></div>
      <div className='div2'></div>
    </div>
    <Address></Address>
    
    </div>

    
  );
}

export default App;
