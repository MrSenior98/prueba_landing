import { useAppContext } from "@/contexts/AppContext";
import { useForm } from 'react-hook-form';
import { Button,TextField } from '@mui/material';

interface FormInputs {
    name: string;
    email: string;
}
function Form(){
    const { register, handleSubmit } = useForm<FormInputs>();
    const { setData } = useAppContext();

    const onSubmit = (data: FormInputs) => {
        setData(JSON.stringify(data));
        console.log(data);
    };
    return(
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField fullWidth margin="normal" variant="outlined" label="Nombre" {...register('name')} />
          <TextField fullWidth margin="normal" variant="outlined" label="Correo" type="email" {...register('email')} />
          <Button variant="contained" color="primary" type="submit">
            Enviar
          </Button>
        </form>
    )
}
export default Form;