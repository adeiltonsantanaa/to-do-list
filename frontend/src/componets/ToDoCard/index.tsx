import './style.css';
import ModalDescricao from '../Modais/ModalDescricao';
import ModalEditar from '../Modais/ModalEditar';
import BtnExcluir from '../Modais/ModalExcluir';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { toDo } from '../../models/toDo';

function ToDoCard() {

    const [toDo, setToDo] = useState<toDo[]>([]);

    useEffect(() => {
        axios.get('http://localhost:8080/to-do/tasks')
            .then(res => { setToDo(res.data) })
            .catch(err => console.log(err));
    }, []);

    return (<div className="to-do-card">
        <h2 className="to-do-sales-title">Tarefas</h2>
        <div>
        </div>
        <div>
            <table className="to-do-sales-table">
                <thead>
                    <tr>
                        <th className="show992">ID</th>
                        <th className="show576">Data</th>
                        <th>Task</th>
                        <th>Descrição</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {toDo.map(toDo => {
                        return (
                            <tr key={toDo.id}>
                                <td className="show992">{toDo.id}</td>
                                <td className="show576">{toDo.date}</td>
                                <td>{toDo.task}</td>
                                <td className="show992">{toDo.descricao}</td>
                                <td>
                                    <div className="to-do-red-btn-container">
                                        <ModalDescricao />
                                        <ModalEditar />
                                        <BtnExcluir />
                                    </div>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>

            </table>
        </div>
    </div>
    )

}

export default ToDoCard;