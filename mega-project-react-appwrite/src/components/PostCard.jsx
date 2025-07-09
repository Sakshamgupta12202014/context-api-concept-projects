import React from "react";
import appwriteService from "../services/config";
import { Link } from "react-router-dom";

// id from appwrite service comes as $id , do not get confused why $id and not just id
function PostCard({ $id, title, content, image }) {
  return (
    <Link to={`/posts/${$id}`} className="post-card-link">
      <div className="post-card">
        <div className="post-card-image">
          <img src={appwriteService.getFilePreview(image)} alt={title} />
        </div>
        <h2 className="post-card-title">{title}</h2>
        <p className="post-card-content">{content}</p>
      </div>
    </Link>
  );
}

export default PostCard;
