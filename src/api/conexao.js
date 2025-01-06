const conexao = {
    getCategoria: async function (idCate, func, load) {
        try{
            const response  = await fetch(`http://localhost:3000/categoria?id_categoria=${idCate}`)
            if (!response.ok) {
                throw new Error('Erro na requisição getCategoria');
            }
            const data = await response.json();
            func(data);
        } catch (error) {
            console.log('error:', error);
        } finally {
            load(true); // Finaliza o estado de carregamento
        }
    },
    postCategoria: async function (data) {
        const conexao = await fetch("http://localhost:3000/categoria", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(data)
        }).then(response => {
            if (!response.ok) {
                console.error("Não foi possível criar o vídeo")
            }else{
                console.log('Criado com sucesso')
            }
        }).catch(error => {
            console.error("Erro de rede:", error)
        });
    },
    updateCategoria: async function (data) {
        const conexao = await fetch(`http://localhost:3000/categoria/${data.id}`, {
            method: "PUT",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(data)
        }).then(response => {
            if (!response.ok) {
                console.error("Não foi possível alterar o vídeo")
            }else{
                console.log('Video alterado com sucesso')
            }
        }).catch(error => {
            console.error("Erro de rede:", error)
        });
    },
    deleteCategoria: async function (id) {
        fetch(`http://localhost:3000/categoria/${id}`, {
            method: "DELETE",
        }).then(response => {
            if (!response.ok) {
                console.error("Não foi possível deletar o vídeo")
            }else{
                console.log('Deletado com sucesso')
            }
        }).catch(error => {
            console.error("Erro de rede:", error)
        });
    }
}

export default  conexao;