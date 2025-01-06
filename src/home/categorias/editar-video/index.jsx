import './editar-video.css'
import conexao from '../../../api/conexao.js';

function EditarVideo(props) {
    const categoriaForm = props.data;

    var editeVideo = (evento) => {
        evento.preventDefault();

        var obj = {};
        obj.id = categoriaForm.id;
        obj.id_categoria = document.querySelector("#id_categoria").value;
        obj.imagem = document.querySelector("#imagem").value;
        obj.url = document.querySelector("#url").value;
        obj.titulo = document.querySelector("#titulo").value;
        obj.descricao = document.querySelector("#descricao").value;

        var resultado = conexao.updateCategoria(obj);
        window.location.href = "/";
    }

    return (
        <>
            <form className="formEditarVideo" onSubmit={editeVideo}>
                <div>
                    <label>Titulo</label>
                    <div>
                        <input type="text" id="titulo" defaultValue={categoriaForm.titulo} required />
                    </div>
                </div>
                <div>
                    <label>Categoria</label>
                    <div>
                        <select id="id_categoria" defaultValue={categoriaForm.id_categoria} required>
                        <option value="">Selecione</option>
                        <option value="1">Frontend</option>
                        <option value="2">Backend</option>
                        <option value="3">Inovação</option>
                        </select>
                    </div>
                </div>
                <div>
                    <label>Imagem</label>
                    <div>
                        <input id="imagem" type="text" defaultValue={categoriaForm.imagem} required/>
                    </div>
                </div>
                <div>
                    <label>Video</label>
                    <div>
                        <input id="url" type="text" defaultValue={categoriaForm.url} required/>
                    </div>
                </div>
                <div>
                    <label>Descrição</label>
                    <div>
                        <textarea id="descricao" required>{categoriaForm.descricao}</textarea>
                    </div>
                </div>
                <footer className="formButtons">
                    <button className='btnGuardar' type="submit">GUARDAR</button>
                </footer>
            </form>
        </>
    )
}

export default EditarVideo