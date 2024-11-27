# VistarWebx Task
Project Link : https://vistarwebx-task.onrender.com
This project is a Node.js application with EJS for template rendering, built to manage data and display it dynamically. The backend is powered by Express.js and MongoDB.

---

## **Table of Contents**
1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Setup and Installation](#setup-and-installation)
4. [Environment Variables](#environment-variables)
5. [Usage](#usage)
6. [API Documentation](#api-documentation)
7. [Schema Design](#schema-design)

---

## **Project Overview**
The application includes:
- Backend services for CRUD operations.
- Dynamic rendering of pages with EJS templates.
- Integration with MongoDB for data persistence.

---

## **Features**
- Category and Product Management APIs.
- EJS-based templating for frontend views.
- API documentation included for testing.

---

## **Setup and Installation**
### **1. Clone the Repository**
```bash
git clone https://github.com/Devraj23som/VistarWebx_task.git
cd VistarWebx_task
2. Install Dependencies
npm install and npm i mongoose cors body-parser
3. Set Up Environment Variables
Create a .env file in the root of the project and include the following:

env
Copy code
MONGO_URI=your_mongodb_connection_string
PORT=3000
4. Start the Server
npm start or npx nodemon
5. Test APIs
Use Postman or a browser to test the endpoints.
The default server runs on http://localhost:3000.
Environment Variables
Ensure the following environment variables are set for proper operation:

MONGO_URI: MongoDB connection string.
PORT: Port number for the application (default is 3000).
Usage
Start the server using npm start.
Access the app in your browser or through Postman.
Use the following API endpoints for CRUD operations.
API Documentation
Category APIs
HTTP Method	Endpoint	Description
GET	/categories	Get all categories.
POST	/categories	Create a new category.
GET	/categories/:id	Get a specific category by ID.
PUT	/categories/:id	Update a specific category by ID.
DELETE	/categories/:id	Delete a specific category by ID.
Product APIs
HTTP Method	Endpoint	Description
GET	/products	Get all products.
POST	/products	Create a new product.
GET	/products/:id	Get a specific product by ID.
PUT	/products/:id	Update a specific product by ID.
DELETE	/products/:id	Delete a specific product by ID.
Schema Design
Category Schema

{
  _id: ObjectId,
  name: String (required, unique),
  description: String
}
Product Schema
{
  _id: ObjectId,
  name: String (required),
  price: Number (required, positive),
  stock: Number (required, default: 0),
  categoryId: ObjectId (reference to Category)
}
