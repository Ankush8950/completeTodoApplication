import AddTitle from './AddTitle';
// import { Routes, Route, Link } from 'react-router-dom';
import AddTasks from './AddTasks';
import Navbar from './Navbar';

function Home() {
  return (
    <div className="flex w-full h-screen">
    <div className=''>
    <Navbar />
    </div>
    <div className='ml-[23rem] w-full'>
    <AddTitle />
    <AddTasks />
     </div>
    </div>
  );
}

export default Home;
