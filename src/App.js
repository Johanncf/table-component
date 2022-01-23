import './App.css';
import Table from './Table';

function App() {
  return (
    <Table 
      title='Componente de tabela'
      description='Tabela de produtos'
      columns={['produto', 'id_do_produto', 'custo', 'comentario']}
      data={[
        {
          produto: 'MacBook',
          id_do_produto: '10',
          custo: 5,
          comentario: 'Algum comentario'
        },
        {
          produto: 'MacBook',
          id_do_produto: '10',
          custo: 5,
          comentario: 'Algum comentario'
        },
        {
          produto: 'MacBook',
          id_do_produto: '10',
          custo: 5,
          comentario: 'Algum comentario'
        },
        {
          produto: 'MacBook',
          id_do_produto: '10',
          custo: 5,
          comentario: 'Algum comentario'
        },
        {
          produto: 'MacBook',
          id_do_produto: '10',
          custo: 5,
          comentario: 'Algum comentario'
        },
        {
          produto: 'MacBook',
          id_do_produto: '10',
          custo: 5,
          comentario: 'Algum comentario'
        },
      ]}
    />
  );
}

export default App;
