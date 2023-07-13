import './App.css';
import Banner from './components/Banner';
import Header from './components/Header';
import ProductFeed from './components/ProductFeed';

function App() {
  return (
    <div className="bg-gray-100">
      <Header/>
      <div className='max-w-screen-2xl mx-auto'>
        <Banner/>
        <ProductFeed/>
      </div>

    </div>
  );
}

export default App;
