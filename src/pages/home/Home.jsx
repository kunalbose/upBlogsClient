import Navbar from '../../components/navbar/Navbar';
import Blog from '../../components/blog/Blog';
import './home.scss';

const Home = () => {
  return (
    <div className='home'>
        <Navbar/>
        <div className='blogs'>
            <Blog/>
        </div>
    </div>
  )
}

export default Home