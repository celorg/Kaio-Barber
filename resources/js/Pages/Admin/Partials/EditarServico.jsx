import { useForm } from "@inertiajs/react";
import { Button, Modal, Box, Typography } from "@mui/material";
import { useRef, useState } from "react";
//icons
import { FaPencilAlt } from 'react-icons/Fa';
//Components
import TextInput from '../../../Components/TextInput';
import InputError from '../../../Components/InputError';
import NumberInput from '../../../Components/NumberInput';
import DangerButton from '../../../Components/DangerButton';
import SuccessButton from '../../../Components/SuccessButton';

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    Width: 380,
    maxWidth: 900,
    bgcolor: 'background.paper',
    borderRadius: '15px',
    boxShadow: 24,
    p: 3,
}

export default function EditarServico(props){

    const [openModal,setOpenModal] = useState(false);
    const { clearErrors, errors, put, data, setData, processing, reset} = useForm({
        id: props.item.id,
        servico: props.item.servico,
        preco: props.item.preco,
        categoria: props.item.categoria,
    })

    const handleOpen = () => setOpenModal(true);
    const handleClose = () => {
        setOpenModal(false);
        reset();
    }
    const ServicoInput = useRef();
    const PrecoInput = useRef();
    const CategoriaInput = useRef();


    const handleSubmit = (e) => {
        e.preventDefault();
        clearErrors();
        const id = props.item.id
        put(`/admin/servicos/${id}`, {
            preserveScroll: true,
            onSuccess: () => {
                handleClose();
            },
            onError: () => {
                if (errors.servico) {
                    ServicoInput.current.focus();
                }
                if (errors.preco) {
                    PrecoInput.current.focus();
                }
                if (errors.categoria) {
                    CategoriaInput.current.focus();
                }
            }
            
        })
    }

    return (

        <>
            <Button onClick={handleOpen}><FaPencilAlt /></Button>
            <Modal
                open={openModal}
                onClose={handleClose}
                aria-labelledby="modal-edit-title"
            >
                <Box sx={style}>
                    <Typography
                        id="modal-title" variant="h6" component="h2"
                    >
                        Editar Serviço
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <div className='mt-6'>
                            <span>Serviço</span>
                            <TextInput
                                id="servico"
                                type="text"
                                ref={ServicoInput}
                                name="servico" 
                                disabled={true}
                                value={data.servico}
                                onChange={(e) => setData('servico', e.target.value)}
                                className="mt-1 block w-3/4"
                                isFocused
                                placeholder="EX: Corte de cabelo"
                            />
                            <InputError message={errors.servico} className="mt-2" />
                        </div>
                        <div className='mt-6'>
                            <label htmlFor="preco" >Preço</label>
                            <NumberInput
                                id="preco"
                                type="number"
                                name="preco"
                                ref={PrecoInput}  
                                value={data.preco}
                                onChange={(e) => setData('preco', e.target.value)}
                                className="mt-1 block w-3/4"
                                isFocused
                                placeholder="EX: 30,00"
                                pattern="[0-9]+([,\.][0-9]+)?"
                                min="0" step="any"
                            />
                            <InputError message={errors.preco} className="mt-2" />
                        </div>
                        <div className='mt-6 mb-3'>
                            <label htmlFor="categoria">Categoria</label>
                            <TextInput
                                id="categoria"
                                type="text"
                                name="categoria"  
                                ref={CategoriaInput}
                                value={data.categoria}
                                onChange={(e) => setData('categoria', e.target.value)}
                                className="mt-1 block w-3/4"
                                isFocused
                                placeholder="EX: Barba e Bigode"
                            />
                            <InputError message={errors.categoria} className="mt-2 mb-2" />
                        </div>
                        <div className="mt-6 flex justify-center">
                            <DangerButton className="ml-3" disabled={processing} onClick={handleClose}>
                                Cancelar
                            </DangerButton>
                            <SuccessButton type="submit" className="ml-3" disabled={processing}>
                                Editar
                            </SuccessButton>
                        </div>
                    </form>
                </Box>
            </Modal>
        </>

    )
}