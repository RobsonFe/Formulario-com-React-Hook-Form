import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form } from './components/Form';

function App() {
  return (
    <div className='container-fluid'>
    <h1 className='h1 text-center mt-5' style={{fontWeight:"bold"}}>Formulario com React Form</h1>
    <Form/>
    </div>
  );
}

export default App;
