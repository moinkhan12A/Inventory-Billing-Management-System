# Inventory & Sales Management API

A backend project built with **Node.js, Express, MongoDB** for managing authentication, products, contacts, transactions, and reports.

---

## Features
- User Authentication (Register/Login with JWT & bcrypt)
- CRUD for Products & Contacts
- Transactions:
  - **Sale** → decrease stock
  - **Purchase** → increase stock
- Reports by Contact (Transaction History)

---

## Setup
```bash
git clone <repo-url>
cd project-folder
npm install


Create .env:

PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/inventoryDB
JWT_SECRET=yourSecretKey


Run:

npm run dev


API Endpoints

Auth → POST /auth/register, POST /auth/login

Products → POST /products, GET /products, PUT /products/:id, DELETE /products/:id

Contacts → POST /contacts, GET /contacts, PUT /contacts/:id, DELETE /contacts/:id

Transactions → POST /transactions, GET /transactions

Reports → GET /reports/history/:contactId


Testing

Use Postman & import Inventory.postman_collection.json.

For transactions → use customerId (sale) or vendorId (purchase).


Author

Made with by Moin Khan while mastering backend development.