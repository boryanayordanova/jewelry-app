import './App.css';

import Header from './components/Header';
import Nav from './components/Nav';
import Article from './components/Article';
import Footer from './components/Footer';
//import FirebaseFetchData from './components/FirebaseFetchData'
import { JewelryList } from './components/JewelryList';

function App() {
  return (
    <div className="App">

    <Header />
    <Nav />
    {/* <Article />  */}
    {/* <JewelryList /> */}
    <Footer />


{/* <FirebaseConnection /> */}
{/* <FirebaseFetchData /> */}

    </div>
  );
}

export default App;
