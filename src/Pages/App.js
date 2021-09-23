import Navbar from './Navbar';
import Projects from './Projects';
import Home from './Home';
import About from './About';
import Experience from './Experience';
import ContactPage from './ContactPage';
import Footer from "./Footer";
import '../CSS/index.css'

function App() {
  return (
<main id="home" >

<Navbar/>
<Home />
<About />
<Projects />
<Experience/>
<ContactPage/>
<Footer/>

</main>


  );
}

export default App;
