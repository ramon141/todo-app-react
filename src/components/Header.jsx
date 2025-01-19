import { useState } from 'react';
import DialogTodoItem from './DialogTodoItem';

const Header = ({ handleSubmit, sortHandler }) => {
    const [open, setOpen] = useState(false);

    return(
        <div className="flex justify-between w-2/4">
            <button onClick={() => setOpen(true)}
             className="bg-indigo-500 hover:bg-indigo-600 text-white font-medium rounded-md px-5 py-2">Adicionar Tarefa</button>
            <select onChange={(e) => sortHandler(e.target.value)}
             className="bg-gray-300 rounded-lg font-medium text-gray-600 px-4 py-2" >
                <option value="Tudo">Todas</option>
                <option value="Incompleto">Incompleto</option>
                <option value="Completo">Completo</option>
            </select>

            { open && <DialogTodoItem mode="add" open={open} setOpen={setOpen} handleSubmit={handleSubmit}/> }

        </div>
    )
}

export default Header;

