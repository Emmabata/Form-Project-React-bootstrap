 import Container from 'react-bootstrap/Container';
import './App.css';
import MyForm from './component/form';
import 'bootstrap/dist/css/bootstrap.css'
import MyBack from './watch.jpeg'


function App() {
  return (
      <div className='Nice'>
        <img src={MyBack} alt="" srcset="" />
        <h1>Sign up Now </h1>
        <Container className='MyCon'>
        <MyForm className='OurForm'/>
      </Container>
      </div>
     
  );
}

export default App;
