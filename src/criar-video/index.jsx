import conexao from '../api/conexao';
import './criar-video.css'


function CriarVideo(props) {
    var criarVideo = async (evento) => {
        evento.preventDefault();

        var obj = {};
        obj.id_categoria = document.querySelector("#id_categoria").value;
        obj.imagem = document.querySelector("#imagem").value;
        obj.url = document.querySelector("#url").value;
        obj.titulo = document.querySelector("#titulo").value;
        obj.descricao = document.querySelector("#descricao").value;

        var resultado = conexao.postCategoria(obj);
        window.location.href = "/";
    }

    return (
        <>
      <div className="criarVideo">
        <h2>NOVO VÍDEO</h2>
        <h5>COMPLETE O FORMULÁRIO PARA CRIAR UM NOVO CARD DE VÍDEO.</h5>
        <form className="formCriarVideo" onSubmit={criarVideo}>
            <div>
              <label>Nome</label>
              <div>
                  <input type="text" id="titulo" placeholder="título" required />
              </div>
            </div>
            <div>
              <label>Categoria</label>
              <div>
                  <select id="id_categoria" required>
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
                  <input type="text" id="imagem" placeholder="Imagem" required />
              </div>
            </div>
            <div>
                <label>Video</label>
                <div>
                    <input type="text" id="url" placeholder="link do vídeo" required />
                </div>
            </div>
            <div>
                <label>Descrição</label>
                <div>
                    <textarea id="descricao" placeholder="sobre o que é esse vídeo?" required></textarea>
                </div>
            </div>
            <div className="formButtons">
              <button type="submit" className="btnGuardar">GUARDAR</button>
              <button type="reset" className="btnLimpar">LIMPAR</button>
            </div>
        </form>
       
      </div>
     
           
    </>
    )
}

export default CriarVideo