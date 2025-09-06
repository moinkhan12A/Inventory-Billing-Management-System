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
Endpoint	Method	Auth	Body/Params	Description
/auth/register	POST	❌	{ name, email, password }	Register a new user
/auth/login	POST	❌	{ email, password }	Login and get JWT
/products	POST	✅	{ name, quantity, price }	Add product
/products	GET	✅	–	List all products
/products/:id	PUT	✅	{ name?, quantity?, price? }	Update product
/products/:id	DELETE	✅	–	Delete product
/contacts	POST	✅	{ name, type, phone, email }	Add contact (vendor/customer)
/contacts	GET	✅	–	List contacts
/contacts/:id	PUT	✅	{ name?, type?, phone?, email? }	Update contact
/contacts/:id	DELETE	✅	–	Delete contact
/transactions	POST	✅	{ type, contactId, products:[{productId, quantity}] }	Create sale/purchase
/transactions	GET	✅	–	Get all transactions
/reports/history/:contactId	GET	✅	–	Transaction history for a contact

Example Workflow (Quick Test)
Register a new user → /auth/register
Login → copy JWT token
Add Product (e.g., Laptop) → /products
Add Contact (Customer: John Doe / Vendor: TechVendor) → /contacts
Create Sale Transaction (Laptop sold to John Doe) → /transactions
Check Transactions → /transactions
Get Report (John Doe’s history) → /reports/history/:contactId
This covers full flow: Auth → Product → Contact → Transaction → Report

Testing
Import Inventory.postman_collection.json into Postman.
Use Register/Login to get a token, then test protected routes.

Demo Data (Seeder)
Run node seeder.js to insert:
2 Products: Laptop, Phone
2 Contacts: Vendor (TechVendor), Customer (John Doe)

👨‍💻 Author
Made with ❤️ by Moin Khan while mastering backend development.
