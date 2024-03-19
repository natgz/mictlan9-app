import { Form } from 'react-bootstrap';
import './designFormElements.css';

export default function DesignsForm(props) {
  const { traits, handleInputChange, values } = props;

  const dtraits = {
      "backgrounds": [1,2,3,4,5,6,7],
      "weapons": [0,1,2,3,4,5,6,7,8,9,10,11,12],
      "bodies": [1],
      "armors": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
      "heads": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
      "hands": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18],
  };

  return (
    <div className='CalFormContainer'>
      <h1>¡Crea tu Calavera!</h1>
      <p>Selecciona los elementos <br /> que deseas para tu calavera.</p>
      <Form className='formCal'>
        {Object.keys(dtraits).map((trait, index) => (
          <Form.Group controlId={`select-${index}`} key={index}>
            <Form.Label>{trait}</Form.Label>
            <Form.Select name={trait} value={values[trait] ?? ""} onChange={handleInputChange}>
              {dtraits[trait].map((option, key) => {
                return (<option key={key} value={option}>{option}</option>)
              })}
            </Form.Select>
          </Form.Group>
        ))}
      </Form>
    </div>  
  );
}