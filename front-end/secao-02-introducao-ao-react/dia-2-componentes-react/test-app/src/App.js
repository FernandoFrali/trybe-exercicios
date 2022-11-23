import './App.css';
import Content from './Content';

const gastosMensais = [
  {
    segunda: '100R$',
    terca: '40R$',
    quarta: '10R$',
    quinta: '120R$',
    sexta: '200R$',
    sabado: '500R$',
  },
  {
    segunda: '23R$',
    terca: '430R$',
    quarta: '102R$',
    quinta: '340R$',
    sexta: '22R$',
    sabado: '10R$',
  },
];
function App() {
  return <Content object={gastosMensais} />;
}

export default App;
