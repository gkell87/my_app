import './App.css';
import About from './About';

function App() {
  return (
    <div className="app-container">
      <div className={`landing-page`}>
        <div className="content">
         <div className="landing_content">
         <h1>Welcome To Paradise Nursery</h1>
          <div className="divider"></div>
          <p>Where Green Meets Serenity</p>
         
          <button className="get-started-button">
            Get Started
          </button>
         </div>
          <div className="aboutus_container">
          <AboutUs/>
          </div>
          </div>

      </div>
    </div>
  );
}

export default App;
