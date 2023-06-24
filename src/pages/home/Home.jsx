import Blog from '../../components/blog/Blog';
import './home.scss';

const Home = () => {
  return (
    <div className='home'>
        <div className='blogs'>
            <Blog/>
            <Blog/>
            <Blog/>
            <Blog/>
            <Blog/>
            <Blog/>
        </div>
    </div>
  )
}

export default Home