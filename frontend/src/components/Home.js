import AddTitle from './AddTitle';
// import { Routes, Route, Link } from 'react-router-dom';
import AddTasks from './AddTasks';
import Navbar from './Navbar';

function Home() {
  return (
    <div className="flex w-full">
    <Navbar />
    <div>
    <AddTitle />
    <AddTasks />


     {/* <Routes>
      <Route path='/' element={<AddTitle />} />
      <Route path='/userlist' element={<AddTasks />} />
     </Routes> */}
     </div>
    </div>
  );
}

export default Home;
