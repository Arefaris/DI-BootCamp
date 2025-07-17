import './App.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import honkong from './assets/honkong.jpg';
import macao from './assets/macao.webp';
import japan from './assets/japan.webp';
import lasVegas from './assets/las-vegas.webp';

function App() {


  return (
    <>
             <Carousel>
                <div>
                    <img src={honkong} />
                    <p className="legend">Hong Kong</p>
                </div>
                <div>
                    <img src={macao} />
                    <p className="legend">Macao</p>
                </div>
                <div>
                    <img src={japan} />
                    <p className="legend">Japan</p>
                </div>
                 <div>
                    <img src={lasVegas} />
                    <p className="legend">LasVegas</p>
                </div>
            </Carousel>
    </>
  )
}

export default App
