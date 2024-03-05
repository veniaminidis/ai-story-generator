import Home from '../components/Home';
import Footer from '../components/Footer';
import HomeInfo from '../components/HomeInfo';
import CardContainer from '../components/CardContainer';
import GetStarted from '../components/GetStarted';
import FeaturedStories from '../components/FeaturedStories';
import HowItWorks from '../components/HowItWorks';
import HeroSection from './HeroSection';
import Login from '../components/Login';


function HomePage() {
    return (
        <div className="homePage">
            {/* <Header />
            <Navigation /> */}
            <main>
                <HeroSection />
                <Login />
                {/* <Home /> */}                
                <HomeInfo title='Create Imaginative Stories' content='Unleash creativity with our AI-powered story generator. Input your preferences or prompts, and watch as captivating stories come to life.' name='right' url='/imgs/info1.png' />
                <HomeInfo title='Engage Young Minds' content='Spark the curiosity of young readers. Our stories cater to kids aged 6 to 16, offering a range of themes and adventures to captivate their minds.'  name='left' url='/imgs/info2.png' />
                <HomeInfo title='Personalized Experience' content="Tailored to your preferences. Choose from dropdown menus and input text to guide the AI in creating stories that match your child's interests."  name='right' url='/imgs/info1.png' />
                <HomeInfo title='Community of Creators' content="Join a vibrant community of creators. Share your stories, like others' creations, and be part of a platform that celebrates young storytellers." name='left' url='/imgs/info4.png' />   
                <HowItWorks />        
                <FeaturedStories />     
                <GetStarted />
            </main>
            <Footer />
        </div>
    );
}

export default HomePage;