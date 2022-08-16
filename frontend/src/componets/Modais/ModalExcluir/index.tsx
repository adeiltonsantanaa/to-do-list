import axios from 'axios';
import Button from 'react-bootstrap/Button';



type Props = {
  toDoId: number;
}


function BtnExcluir({ toDoId }: Props) {

  function deletaTask(toDoId:number) {
    axios.delete(`http://localhost:8080/to-do/deletar/${toDoId}`)
      .then(res => { console.log(res) })
      .catch(err => console.log(err));
      window.location.reload();
  }
  
  return (
    <>
      <Button variant="danger" size="sm" onClick={() => deletaTask(toDoId)}>
      <img src="https://img.icons8.com/ios-glyphs/30/000000/filled-trash.png"/>
      </Button>

    </>
  );
}
export default BtnExcluir;