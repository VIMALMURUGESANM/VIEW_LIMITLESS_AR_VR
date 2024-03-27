import { Link } from "react-router-dom";
import {motion} from 'framer-motion'
import Videobg from '../assets/bg-video2.mp4'
import './Dashboard.css';
import Your_Models from "./Your_Models";


const Dashboard = () => (
  <div>
    <div className="video-container">
        <video autoPlay loop muted>
          <source src={Videobg} type="video/mp4" />
        </video>
      </div>
      <motion.div className="home-page" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
    <h1>HOLA! you have arrived Home</h1>
    <div className="button-container">
      <Link to="/Existmodel">
        <motion.button  className="large-button" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
         EXISTING MODELS
        </motion.button>
      </Link>
      <Link to="/Your_Models">
        <motion.button className="large-button" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          YOUR MODELS
        </motion.button>
      </Link>
      <Link to="/FeedbackForm">
        <motion.button className="large-button" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          FEEDBACK / QUERIES
        </motion.button>
      </Link>
    </div>
  </motion.div>
  </div>
  
);

export default Dashboard;