import PrimaryButton from '@/Components/PrimaryButton';
import Modal from '@/Components/Modal';
import { useRef, useState } from 'react';
import { useForm } from '@inertiajs/react';
// import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import NumberInput from '@/Components/NumberInput';
import DangerButton from '@/Components/DangerButton';
import SuccessButton from '@/Components/SuccessButton';
import InputError from '@/Components/InputError';

export default function AdicionarServico({className}){

    const [adicionarServico, setAdicionarServico] = useState(false);

    //Ref
    const ServicoInput = useRef();
    const PrecoInput = useRef();
    const CategoriaInput = useRef();

    const {data,setData,post,reset,processing,errors,clearErrors } = useForm({
        servico: '',
        preco: '',
        categoria: '',
    })
    // console.log(message);
    const AdicionarProduto = () => {
        setAdicionarServico(true);
    }

    const closeModal = () => {
        setAdicionarServico(false);
        reset();
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        clearErrors();

        post(route('servicos.store'),{
            preserveScroll: true,
            onSuccess: () => {
                closeModal()
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
            
        });
    }

    return (

        <section className={` ${className}`}>

            <PrimaryButton onClick={AdicionarProduto}>Adicionar Produto</PrimaryButton>

            <Modal show={adicionarServico} onClose={closeModal} className="mx-auto">
                <form onSubmit={handleSubmit} className='p-6'>
                    <h1 className='text-lg font-medium text-gray-900'>Adicionar Serviço</h1>
                    <div className='mt-6'>
                        <span>Serviço</span>
                        <TextInput
                            id="servico"
                            type="text"
                            ref={ServicoInput}
                            name="servico"  
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
                        <DangerButton className="ml-3" disabled={processing}>
                            Cancelar
                        </DangerButton>
                        <SuccessButton type="submit" className="ml-3" disabled={processing}>
                            Adicionar Serviço
                        </SuccessButton>
                    </div>
                </form>
            </Modal>    
            
        </section>
        
    )

}