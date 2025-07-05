// we write code like this to avoid failures when we have to remove any functionality from App

import config from "../conf/config";
import { Client, Databases, ID, Storage } from "appwrite";

export class DatabaseService {
  client = new Client();
  databases;
  storage;

  constructor() {
    this.client
      .setEndpoint(config.appwriteUrl)
      .setProject(config.appwriteProjectId);

    // Initialize Appwrite services
    // Databases and Storage are used for managing data and files
    this.databases = new Databases(this.client);
    this.storage = new Storage(this.client);
  }
  async createPost({ title, slug, content, image, status, userId }) {
    try {
      return await this.databases.createDocument(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        ID.unique(),
        {
          title,
          slug,
          content,
          image,
          status,
          userId,
        }
      );
    } catch (error) {
      console.log("Error creating post: ", error);
    }
  }

  async updatePost(Id, { title, content, image, status }) {
    try {
      await this.databases.updateDocument(
        config.datidabaseId,
        config.appwriteCollectionId,
        Id,
        { title, content, image, status }
      );
    } catch (error) {
      console.log("Error updating post: ", error);
    }
  }

  async deletePost(Id) {
    try {
      await this.databases.deleteDocument(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        Id
      );
      return true;
    } catch (error) {
      console.log("Error deleting post: ", error);
      return false;
    }
  }

  async getPost(Id) {
    try {
      const post = this.databases.getDocument(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        Id
      );
      return post;
    } catch (error) {
      console.log("Error getting post: ", error);
      return false;
    }
  }

  async getPosts() {
    try {
      const posts = await this.databases.listDocuments(
        config.appwriteDatabaseId,
        config.appwriteCollectionId
      );
      return posts;
    } catch (error) {
      console.log("Error getting posts: ", error);
      return false;
    }
  }
  async uploadFile(file) {
    try {
      const fileId =  await this.storage.createFile(
        config.appwriteBucketId,
        ID.unique(),
        file
      );
      return fileId;
    } catch (error) {
      console.log("Error uploading file: ", error);
      return false;
    }
  }
  async deleteFile(fileId){
    try {
         await this.storage.deleteFile(
            config.appwriteBucketId,
            fileId
        )
        return true
    } catch (error) {
        console.log("Error deleting file: ", error);
        return false;
    }
  }
  getFilePreview(fileId){
    try {
        return this.storage.getFilePreview(
            config.appwriteBucketId,
            fileId
        )
    } catch (error) {
        console.log("Error getting file preview: ", error);
        return false;
    }
  }
  downloadFile(fileId){
    try {
        const result = this.storage.getFileDownload(
            config.appwriteBucketId,
            fileId
        )
        return result
    } catch (error) {
      console.log("Error downloading file: ", error);
      return false;
    }
  }

}

const databaseService = new DatabaseService();

export default databaseService;
