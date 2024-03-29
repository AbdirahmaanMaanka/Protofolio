import React from 'react';
import './styles.css';
import AfoogLogo_3D from '../public/AfoogLogo_3D.png';
const App = () => {
  return (
    <div>
      <header>
        <h1>Design with Abdirahmaan</h1>
        <nav>
          <a href="#">Home</a>
          <a href="#">About Me</a>
          <a href="#">FAQ</a>
          <a href="#">Contact Me</a>
        </nav>
      </header>
      <main className="container">
        
        <section className="hero-section">
          <h2>
            
           <img src="./public/AfoogLogo_3D.png" alt="" />
            
            <br />
           
            Hi, I'm Abdirahmaan,
            <br />
            A Digital Designer
          </h2>
          <p>
            Transforming Your Digital Vision into Reality: Innovative Web Designs
            by a Professional Web Designer!
          </p>
          <button >Start Project</button>
        </section>

        <nav>
          <ul>
         <li> <a href="#">Html</a></li>
          <li><a href="#">Csharp</a></li>
          <li><a href="#">Graphic Des</a></li>
          <li><a href="#">Web deve</a></li>
          </ul>
        </nav>

        
        {/* Add more sections here */}
      </main>
      <footer>
        <p>© Abdirahmaan - Web Designer</p>
      </footer>
    </div>
  );
};

export default App;
