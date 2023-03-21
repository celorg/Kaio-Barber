import React, { useState } from "react"
import {Box,Modal,Button, Typography} from '@mui/material';
import SecondaryButton from '@/Components/SecondaryButton';
import DangerButton from "@/Components/DangerButton";
import { useForm } from "@inertiajs/react";

//icons
import {FaTrashAlt} from 'react-icons/Fa';

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    Width: 350,
    maxWidth: 900,
    bgcolor: 'background.paper',
    borderRadius: '15px',
    boxShadow: 24,
    p: 3,
}

export default function DeletarServico(props){

    const [open,setOpen] = useState(false);

    const handleOpen = () => setOpen(true);

    const handleClose = () => setOpen(false);

    const id_item = props.item

    const {
        processing,
        delete: destroy,
    } = useForm({
        id: id_item,
    });

    const handleDelete = (e) => {
        e.preventDefault();

        destroy(route('servicos.destroy'),{
            preserveScroll: true,
            onSuccess: () => handleClose(),
        })
    }

    return(
        <>
            <Button onClick={handleOpen}><FaTrashAlt /> </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-title"
            >
                <Box sx={style}>
                    <Typography
                        id="modal-title" variant="h6" component="h2"
                    >
                        Deletar Serviço
                    </Typography>
                    <Typography
                        id="modal-discription" sx={{mt: 2}}
                    >
                        Depois que o serviço for excluído, não tem mais voltar. Por favor,
                        Aperte o botão "apagar" para confirmar!!
                    </Typography>
                    
                    <div className="mt-4 flex justify-end">
                        <SecondaryButton onClick={handleClose}>Cancelar</SecondaryButton>

                        <DangerButton className="ml-3" disabled={processing} onClick={handleDelete}>
                            Deletar Serviço
                        </DangerButton>
                    </div>
                </Box>   
            </Modal>
        </>
    )
}