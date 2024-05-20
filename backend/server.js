// import dotenv from "dotenv";
// import app from "./app.js";
// import cloudinary from "cloudinary";


// dotenv.config();

// cloudinary.v2.config({
//   cloud_name: process.env.CLOUDINARY_CLIENT_NAME,
//   api_key: process.env.CLOUDINARY_CLIENT_API,
//   api_secret: process.env.CLOUDINARY_CLIENT_SECRET,
// });

// app.listen(process.env.PORT, () => {
//   console.log(`Server running at port ${process.env.PORT}`);
// });




import dotenv from "dotenv";
import app from "./app.js";

dotenv.config();

app.listen(process.env.PORT, () => {
  console.log(`Server running at port ${process.env.PORT}`);
});




// import dotenv from 'dotenv';
// import path from 'path';
// import { fileURLToPath } from 'url';
// import { dirname } from 'path';
// import app from "./app.js";
// import cloudinary from "cloudinary";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// // Load environment variables from config.env file
// dotenv.config({ path: path.resolve(__dirname, './config/config.env') });

// // Debugging code to verify environment variables
// console.log("Cloudinary Configuration:");
// console.log("cloud_name:", process.env.CLOUDINARY_CLIENT_NAME);
// console.log("api_key:", process.env.CLOUDINARY_CLIENT_API);
// console.log("api_secret:", process.env.CLOUDINARY_CLIENT_SECRET);

// // Configure Cloudinary
// cloudinary.v2.config({
//   cloud_name: process.env.CLOUDINARY_CLIENT_NAME,
//   api_key: process.env.CLOUDINARY_CLIENT_API,
//   api_secret: process.env.CLOUDINARY_CLIENT_SECRET,
// });

// // Start the server
// app.listen(process.env.PORT, () => {
//   console.log(`Server running at port ${process.env.PORT}`);
// });

// import dotenv from 'dotenv';
// import { fileURLToPath } from 'url';
// import { dirname } from 'path';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// // Load environment variables from config.env file
// dotenv.config({ path: `${__dirname}/config/config.env` });

// // Import other modules and set up the server as needed
// // For example, you can configure Cloudinary here
// import cloudinary from 'cloudinary';

// // Configure Cloudinary
// cloudinary.v2.config({
//   cloud_name: process.env.CLOUDINARY_CLIENT_NAME,
//   api_key: process.env.CLOUDINARY_CLIENT_API,
//   api_secret: process.env.CLOUDINARY_CLIENT_SECRET
// });

// // Debugging code to verify environment variables
// console.log("Cloudinary Configuration:");
// console.log("cloud_name:", process.env.CLOUDINARY_CLIENT_NAME);
// console.log("api_key:", process.env.CLOUDINARY_CLIENT_API);
// console.log("api_secret:", process.env.CLOUDINARY_CLIENT_SECRET);

// // Continue with setting up your server, routes, etc.






// import dotenv from 'dotenv';
// import { fileURLToPath } from 'url';
// import { dirname } from 'path';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// // Load environment variables from config.env file
// dotenv.config({ path: `${__dirname}/config/config.env` });

// // Import other modules and set up the server as needed
// // For example, you can configure Cloudinary here
// import cloudinary from 'cloudinary';

// // Configure Cloudinary
// cloudinary.v2.config({
//   cloud_name: process.env.CLOUDIANRY_CLIENT_NAME,
//   api_key: process.env.CLOUDIANRY_CLIENT_API,
//   api_secret: process.env.CLOUDIANRY_CLIENT_SECRET,
// });

// // Debugging code to verify environment variables and config file path
// console.log("Cloudinary Configuration:");
// console.log("cloud_name:", process.env.CLOUDINARY_CLIENT_NAME);
// console.log("api_key:", process.env.CLOUDINARY_CLIENT_API);
// console.log("api_secret:", process.env.CLOUDINARY_CLIENT_SECRET);
// console.log("Config File Path:", `${__dirname}/config/config.env`);
