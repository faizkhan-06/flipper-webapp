import { Client, Storage } from "appwrite";

const endPoint = import.meta.env.VITE_APPWRITE_END_POINT;
const projectId = import.meta.env.VITE_APPWRITE_PROJECT_ID;
// const imagesBucket = import.meta.env.VITE_STORAGE_IMAGES_BUCKET;
// const videoBucket = import.meta.env.VITE_STORAGE_VIDEOS_BUCKET;

const client = new Client();
client
  .setEndpoint(endPoint) // Your Appwrite endpoint
  .setProject(projectId); // Your Appwrite project ID

const storage = new Storage(client);

export { client, storage };
