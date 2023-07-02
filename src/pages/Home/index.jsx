import { useRef, useState } from "react"
import { v4 } from 'uuid'
import { AddBotao, Container, Produtos , TrashBotao } from './style'

function Home() {
  const [produtos, setProdutos] = useState([])
  const inptRef = useRef()


  function cliqueiNoBotao() {
    setProdutos([{ id: v4(), nome: inptRef.current.value}, ...produtos]) 
    inptRef.current.value = ''  
  }

  function deletarProduto(id){
    setProdutos(produtos.filter(produtos => produtos.id !== id))
  }

  return(
    <Container>
    <h1>Lista de Compras</h1>
    <input placeholder="produtos..." ref={inptRef}/>
    <AddBotao onClick={cliqueiNoBotao}>Adicionar</AddBotao>

    {produtos.map ((produto) =>(
      <Produtos key={produto.id}> 
        <p>{produto.nome}</p>
        <TrashBotao onClick={() => deletarProduto(produto.id)}>🗑️</TrashBotao>
      </Produtos>
    ))}
    
   </Container>
  )
}

export default Home
