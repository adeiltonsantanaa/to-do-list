import './style.css';
import ModalDescricao from '../Modais/ModalDescricao';
import ModalEditar from '../Modais/ModalEditar';
import BtnExcluir from '../Modais/ModalExcluir';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { toDo } from '../../models/toDo';
import ModalErro from '../Modais/ModalErro/index';
import { BASE_URL } from '../../util/url';
import ModalAdicionar from '../Modais/ModalAdicionar';


function ToDoCard() {

    const [toDo, setToDo] = useState<toDo[]>([]);

    useEffect(() => {
        axios.get(`${BASE_URL}/tasks`)
            .then(res => { setToDo(res.data) })
            .catch(err => <ModalErro />);
    }, []);
    console.log(toDo.length);
    return (<div className="to-do-card">
        <div className="to-do-div-title-button">
            <h2 className="to-do-sales-title">Tarefas</h2>
            <ModalAdicionar/>
        </div>
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
                    {toDo.length == 0 ? <ModalErro /> : toDo.map(toDo => {
                        return (
                            <tr key={toDo.id}>
                                <td className='show576'>{toDo.id}</td>
                                <td className="show576">{new Date(toDo.date).toLocaleDateString('pt-BR', { timeZone: 'UTC' })}</td>
                                <td>{toDo.task}</td>
                                <td className="show992">{toDo.descricao == null ? "DADO VAZIO" : toDo.descricao.length > 15 ? toDo.descricao.substring(0, 15) + "..." : toDo.descricao}</td>
                                <td>
                                    <div className="to-do-red-btn-container">
                                        <ModalDescricao Desc={toDo.descricao} Task={toDo.task} />
                                        <ModalEditar Id={toDo.id} Task={toDo.task} Desc={toDo.descricao} />
                                        <BtnExcluir toDoId={toDo.id} />
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