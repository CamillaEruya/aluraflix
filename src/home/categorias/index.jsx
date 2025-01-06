import './categorias.css';
import EditarVideo from './editar-video';
import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import conexao from '../../api/conexao.js';

function HomeCategorias(props) {
  const [categorias, setCategoria] = useState([]); // Estado para armazenar os dados
  const [loading, setLoading] = useState(false); // Estado para controlar o carregamento
  
  const [formData, setFormData] = useState({});
  
  const [isOpen, setIsOpen] = useState(false);
  const modalEditarVideo = () => setIsOpen(!isOpen);

  useEffect(() => {
   
    conexao.getCategoria(props.id_categoria,(data) => {
      setCategoria(data);
    }, (load) => {
      setLoading(load);
    });

  });

  if (!loading) {
    return <p>Carregando...</p>; // Placeholder enquanto os dados carregam
  }

  const estiloCorTitulo = {
    backgroundColor: props.cor
  };
  
  const estiloCorChamada = {
    border: `${props.cor} solid 5px`
  };

  return (
    <>
      <div className="categoria">
        <div className="titulo" style={estiloCorTitulo}>{props.titulo}</div>
          {categorias.map((categoria) => (
            <section className="corpo">
              <div  className="chamada" style={estiloCorChamada}>
                <a href={categoria.url} target="_blank">
                  <div className="container-imagem">
                  
                    <img src={categoria.imagem} />
                  
                  </div>
                </a>
                <div className="btn">
                  <button onClick={() => {
                    conexao.deleteCategoria(categoria.id);
                  }}> <i className="fa fa-trash"></i> Deletar</button>
                  <button onClick={() => {
                    setFormData(categoria);
                    modalEditarVideo()
                  }}> <i className="fa fa-edit"></i> Editar</button>
                </div>
              </div>
            </section>
          ))}
      </div>
      
      <Modal
        isOpen={isOpen}
        onRequestClose={modalEditarVideo}
        style={{
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            background: '#257be5'
          },
        }}
      >
        <div className='modal'>
          <h2>Editar Video</h2>
          <button className='btnFechar' onClick={modalEditarVideo}><i className='fa fa-close'></i></button>
          <EditarVideo data={formData}/>
        </div>
      </Modal>
    </>
  )
}

export default HomeCategorias