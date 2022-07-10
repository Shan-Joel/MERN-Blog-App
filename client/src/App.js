import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import CreatePost from './components/CreatePost';
import EditPost from './components/EditPost';
import PostDetails from './components/PostDetails';
import Navbar from './components/Navbar';

const App = () => {
   return (
      <BrowserRouter>
         <Navbar />
         <div className="container">
            <Routes>
               <Route path="/" exact element={<Home />} />
               <Route path="/add-post" element={<CreatePost />} />
               <Route path="/edit-post/:id" element={<EditPost />} />
               <Route path="/post-details/:id" element={<PostDetails />} />
            </Routes>
         </div>
      </BrowserRouter>
   );
};

export default App;
