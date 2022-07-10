import React, { Component } from 'react';
import axios from 'axios';
// import './App.css';

class Home extends Component {
   constructor(props) {
      super(props);

      this.state = {
         posts: [],
      };
   }

   componentDidMount() {
      this.retrievePosts();
   }

   retrievePosts() {
      axios.get('/posts').then((res) => {
         if (res.data.success) {
            this.setState({
               posts: res.data.existingPosts,
            });

            console.log(this.state.posts);
         }
      });
   }

   onDelete = (id) => {
      axios.delete(`/post/delete/${id}`).then((res) => {
         alert('Post deleted successfully');

         this.retrievePosts();
      });
   };

   filterData = (posts, searchKey) => {
      const result = posts.filter((post) => post.topic.toLowerCase().includes(searchKey) || post.description.toLowerCase().includes(searchKey) || post.postCategory.toLowerCase().includes(searchKey));
      this.setState({ posts: result });
   };

   handleSearchArea = (e) => {
      const searchKey = e.currentTarget.value;
      axios.get('/posts').then((res) => {
         if (res.data.success) {
            this.filterData(res.data.existingPosts, searchKey);
         }
      });
   };

   render() {
      return (
         <div className="container-md mt-4">
            <h3 className="mb-3 text-primary fw-bold">All Posts</h3>
            <div className="col-lg-4 mt-2 mb-4 mx-auto">
               <input type="search" className="form-control" placeholder="Search..." name="searchQuery" onChange={this.handleSearchArea} />
            </div>
            <table className="table">
               <thead>
                  <tr>
                     <th scope="col">#</th>
                     <th scope="col">Topic</th>
                     <th scope="col">Description</th>
                     <th scope="col">Post Category</th>
                     <th scope="col">Action</th>
                  </tr>
               </thead>
               <tbody>
                  {this.state.posts.map((posts, index) => (
                     <tr key={index}>
                        <td scope="row">{index + 1}</td>
                        <td scope="row">
                           <a href={`/post-details/${posts._id}`} style={{ textDecoration: 'none' }}>
                              {posts.topic}
                           </a>
                        </td>
                        <td scope="row">{posts.description}</td>
                        <td scope="row">{posts.postCategory}</td>
                        <td scope="row">
                           <a className="btn btn-warning" href={`/edit-post/${posts._id}`}>
                              <i className="fas fa-edit"></i>&nbsp;Edit
                           </a>
                           &nbsp;
                           <a className="btn btn-danger" onClick={() => this.onDelete(posts._id)}>
                              <i className="fas fa-trash-alt"></i>&nbsp;Delete
                           </a>
                        </td>
                     </tr>
                  ))}
               </tbody>
            </table>

            <button className="btn btn-success">
               <a href="/add-post" style={{ textDecoration: 'none', color: '#fff' }}>
                  Create New Post
               </a>
            </button>
         </div>
      );
   }
}

export default Home;
