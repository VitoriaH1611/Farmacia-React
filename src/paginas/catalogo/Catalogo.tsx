import produto from '../../assets/produto.svg'
import ListaProdutos from '../../components/produtos/listaprodutos/ListaProdutos';
import ModalProduto from '../../components/produtos/modalproduto/ModalProduto';

function Catalogo() {
    return (
        <>
        <div className="bg-orange-400 flex justify-center">
          <div className='container grid grid-cols-2 text-white'>
            <div className="flex flex-col gap-4 items-center justify-center py-4">
              <h2 className='text-5xl font-bold'> Nossos Produtos</h2>
              <p className='text-xl'>Busque pelo seu produto ou medicamentoss com descontos!</p>

              <div className="flex justify-around gap-4">
              <ModalProduto/>
              <button className='rounded bg-blue-600 text-white py-2 px-4'> Promoções</button>
            </div>
            </div>
  
            <div className="flex justify-center ">
              <img src={produto} alt="" className='w-2/3' />
      
            </div>
          </div>
        </div>
        <ListaProdutos/>
      </>
    );
}

export default Catalogo;