# Ticket Management System

This is a backend application for a Ticket Management System built with Node.js and Express.js. The system allows users to generate random tickets and save them to a MongoDB database. It also provides an admin interface to retrieve and paginate through the saved tickets.

## Features

- Generate random tickets with unique numbers
- Save generated tickets to a MongoDB database
- Admin interface to retrieve and paginate through saved tickets

## Installation

1. Clone the repository:

`git clone https://github.com/Priyank384/Tambola-Ticket-Generator`


2. Install dependencies:
   
   `npm install`
   
4. Set up environment variables:

Create a `.env` file in the root directory and define the following environment variables:

PORT=3000
MONGODB_URI=<your_mongodb_uri>

Replace `<your_mongodb_uri>` with your MongoDB connection string.

4. Start the server:

npm start

The server will start running on port 3000 by default.

## API Endpoints

### Generate Random Ticket

GET /user/ticket/:num

Generates `num` random tickets and saves them to the database. `num` should be a positive integer representing the number of tickets to generate.

Example: `GET /user/ticket/5`

### Retrieve Paginated Tickets

GET /admin/tickets/:page

Retrieves a page of saved tickets from the database. `page` should be a positive integer representing the page number.

Example: `GET /admin/tickets/1`

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or create a pull request.



