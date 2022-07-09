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
               <Route path="/add-post" component={<CreatePost />} />
               <Route path="/edit-post/:id" component={<EditPost />} />
               <Route path="/post-details/:id" component={<PostDetails />} />
            </Routes>
         </div>
      </BrowserRouter>
   );
};

export default App;
