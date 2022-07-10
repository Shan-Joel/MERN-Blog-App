import React, { Component } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

class PostDetails extends Component {
   constructor(props) {
      super(props);

      this.state = {
         post: {},
      };
   }

   //    componentDidMount() {
   //       const id = this.props.match.params.id;

   //       axios.get(`/post-details/${id}`).then((res) => {
   //          if (res.data.success) {
   //             this.setState({
   //                post: res.data.post,
   //             });
   //             console.log(this.state.post);
   //          }
   //       });
   //    }

   render() {
      const { topic, description, postCategory } = this.state.post;

      return (
         <div className="container">
            <h4>{topic}</h4>
            <hr />

            <dl className="row">
               <dt className="col-sm-3">Description</dt>
               <dd className="col-sm-3">{description}</dd>
               <dt className="col-sm-3">Post Category</dt>
               <dd className="col-sm-3">{postCategory}</dd>
            </dl>
         </div>
      );
   }
}

export default PostDetails;
