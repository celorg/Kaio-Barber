import React from 'react';
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button,Modal} from '@mui/material'
import { Link, usePage } from '@inertiajs/react';


//Components
import EditarServico from './EditarServico';
import DeletarServico from './DeletarServico';

export default function UpadateServico(props){

  console.log(props.servicos);

  function real(preco){
    const real = preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    return real
  }

  const columns = [
    {
      width: '150px',
      label: "Serviços",
      dataKey: "servicos",
    },
    {
      width: '100px',
      label: "Preço",
      dataKey: "preco",
    },
    {
      width: '100px',
      label: "",
      dataKey: "editar"
    },
    {
      width: '100px',
      label: '',
      dataKey: 'apagar'
    }
  ]

  return(
    <div>
      <TableContainer component={Paper} sx={{width: 'auto',padding: "0 2rem"}}>
        <Table  aria-label="a dense table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.dataKey}
                  variant="head"
                  style={{padding: "1rem 2rem"}}
                  align="center"
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {props.servicos && props.servicos.map((servico) => (
              <TableRow key={servico.id}>
                <TableCell scope='row' align='left'>{servico.servico}</TableCell>
                <TableCell align='center'>{real(servico.preco)}</TableCell>
                <TableCell align="center"><EditarServico item={servico} /></TableCell>
                <TableCell align="center"><DeletarServico item={servico.id} /></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

    </div>
  )
}