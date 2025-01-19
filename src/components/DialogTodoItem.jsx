import { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

const DialogTodoItem = ({ mode, open, setOpen, handleSubmit, taskEdited }) => {
    const [task, setTask] = useState({
        title: '',
        status: false,
        deadline: dayjs('2018-08-18T21:11:54'),
    });
    const [dateOpen, setDateOpen] = useState(false);

    const handleChangeTask = (e) => {
        if (mode === 'edit') {
            setTask({
                ...taskEdited,
                [e.target.name]: e.target.value,
            })
        } else {
            setTask({
                ...task,
                [e.target.name]: e.target.value,
            })
        }
    };

    const handleChangeDateTask = (e) => {
        if (mode === 'edit') {
            setTask({
                ...taskEdited,
                deadline: e
            })
        } else {
            setTask({
                ...task,
                deadline: e
            })
        }
    };

    const submitHandler = () => {
        handleSubmit(task)
        setOpen(false);
        setTask({
            id: "",
            title: "",
            status: false,
            deadline: dayjs('2018-08-18T21:11:54')
        });
    }

    useEffect(() => {
        if (mode === 'edit') {
            setTask({
                ...taskEdited
            })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Dialog open={open} onClose={() => setOpen(false)} fullWidth={true} maxWidth="xs">
            <DialogTitle>{mode === 'add' ? "Adicionar" : "Editar"} Tarefa</DialogTitle>
            <DialogContent className="my-2 ">
                <Box
                    component="form"
                    noValidate
                    autoComplete="off"
                    sx={{
                        '& .MuiTextField-root': { my: 2.5 },
                    }}
                >
                    <TextField
                        name="title"
                        autoFocus
                        label="Título"
                        type="text"
                        fullWidth
                        value={task.title}
                        onChange={handleChangeTask}
                        required
                    />
                    <TextField
                        name="status"
                        select
                        label="Status"
                        defaultValue="Incompleto"
                        fullWidth
                        value={task.status}
                        onChange={handleChangeTask}
                        required
                    >
                        <MenuItem value={false}>Incompleto</MenuItem>
                        <MenuItem value={true}>Completo</MenuItem>
                    </TextField>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DateTimePicker
                            label="Data e Hora"
                            value={task.deadline}
                            open={dateOpen}
                            onOpen={() => setDateOpen(true)}
                            onClose={() => setDateOpen(false)}
                            onChange={handleChangeDateTask}
                            renderInput={(params) => <TextField fullWidth {...params}
                                onClick={() => setDateOpen(true)} />}
                        />
                    </LocalizationProvider>
                </Box>
            </DialogContent>
            <DialogActions>
                <button onClick={() => setOpen(false)}
                    className="bg-gray-300 hover:bg-gray-200 text-gray-600 font-medium rounded-md px-5 py-2">Cancelar</button>
                <button onClick={submitHandler} type="submit"
                    className="bg-indigo-500 hover:bg-indigo-600 text-white font-medium rounded-md px-5 py-2">
                    {mode === 'add' ? "Adicionar" : "Editar"} Tarefa</button>
            </DialogActions>
        </Dialog>
    )
}

export default DialogTodoItem;
