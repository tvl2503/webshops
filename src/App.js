
import Layout from './components/Layout';
import GlobalStyles from './components/GlobalStyles'
import {useSelector} from 'react-redux'
function App() {
  const product = useSelector(state => state.productModal.product)

  return (
    <GlobalStyles>
      <Layout /> 
    </GlobalStyles>
  );
}

export default App;
