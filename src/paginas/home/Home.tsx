import homeLogo from '../../assets/home.png'
import principal from '../../assets/principal.svg'

function Home() {
    return (
<>
  <div className="container mx-auto px-6 sm:px-12 flex flex-col sm:flex-row items-center relative z-10">
    <div className="sm:w-1/2 xl:w-2/6 flex flex-col items-start py-24 sm:py-0">
      <h1 className="text-6xl xl:text-10xl font-abhaya-libre text-blue-900 font-bold leading-none">
        Farmácia
      </h1>
      <h2 className="text-xl xl:text-3xl font-abhaya-libre text-blue-300 uppercase font-bold leading-none tracking-widest -mt-2 mb-6">
        Saúde
      </h2>
      <p className="xl:text-lg tracking-wider text-gray-700 font-alegraya-sans mb-1">
        Melhores produtos para sua <span className = "text-orange-400"  >saúde</span>
      </p>

      <div className='flex flex-wrap items-center justify-between'>
      <a
        href="#"
        className="font-montserrat text-white sm:font-xl uppercase py-3 px-6 sm:py-4 sm:px-8 rounded-full shadow-lg bg-orange-500 hover:bg-orange-600 mt-8 sm:mt-16"
      >
        Ver Produtos
      </a>
      <a
        href="#"
        className="font-montserrat text-white sm:font-xl uppercase py-3 px-6 sm:py-4 sm:px-8 rounded-full shadow-lg bg-blue-900 hover:bg-indigo-900 mt-8 sm:mt-16"
      >
        Ver Categorias
      </a>
      </div>
    </div>
    <div className="hidden sm:flex items-center justify-center xl:justify-end w-1/2 xl:w-4/6 py-32">
      <img src={principal} alt="" />
        
    </div>
  </div>
   
</>
    );
}

export default Home;