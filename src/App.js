import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Footer from './components/Footer';
import HomeInfo from './components/HomeInfo';
import CardContainer from './components/CardContainer';
import GetStarted from './components/GetStarted';
import FeaturedStories from './components/FeaturedStories';
import HomePage from './pages/HomePage';
import { Routing } from './Routing';
// import info1 from 'src\imgs\info1.png';
import firebaseApp from './firebase';

function App() {
    return (
        <Routing></Routing>  
        // <div className="app">
        //     {/* <Header />
        //     <Navigation /> */}
        //     <main>
        //         <Home />
        //         <HomeInfo title='Create Imaginative Stories' content='Unleash creativity with our AI-powered story generator. Input your preferences or prompts, and watch as captivating stories come to life.' name='right' url='/imgs/info1.png' />
        //         <HomeInfo title='Engage Young Minds' content='Spark the curiosity of young readers. Our stories cater to kids aged 6 to 16, offering a range of themes and adventures to captivate their minds.'  name='left' url='/imgs/info2.png' />
        //         <HomeInfo title='Personalized Experience' content="Tailored to your preferences. Choose from dropdown menus and input text to guide the AI in creating stories that match your child's interests."  name='right' url='/imgs/info1.png' />
        //         <HomeInfo title='Community of Creators' content="Join a vibrant community of creators. Share your stories, like others' creations, and be part of a platform that celebrates young storytellers." name='left' url='/imgs/info4.png' />           
        //         <FeaturedStories />     
        //         <CardContainer />
        //         <GetStarted />
        //     </main>
        //     <Footer />
        // </div>
    );
}

export default App;
