Invoice App - Project Management & Billing System
📌 Overview
The Invoice App is a robust project management and billing system designed to automate invoice generation, track payments, and manage clients efficiently. It is built using React (frontend) and Node.js with Express (backend), integrated with a MongoDB database. The app supports authentication, CRUD operations, invoice PDF generation, and payment tracking.

⚙️ Tech Stack
Frontend:
React.js (Functional Components & Hooks)
Redux Toolkit (State Management)
Tailwind CSS (UI Styling)
Axios (API Requests)
React Router (Navigation)
Backend:
Node.js & Express.js (REST API)
MongoDB & Mongoose (Database & ORM)
JWT Authentication (Secure API Access)
Nodemailer (Email Invoice)
PDFKit (Generate Invoices in PDF Format)
DevOps & Deployment:
Docker (Containerization)
CI/CD (GitHub Actions) (Automated Deployments)
AWS (EC2, S3, RDS) (Scalable Deployment)
Nginx & PM2 (Load Balancing & Process Management)
Features
✅ User Authentication & Roles
Secure JWT-based Authentication
Role-based access for Admins, Clients, and Employees
Password reset with Nodemailer
✅ Invoice Management
Create, Read, Update, Delete (CRUD) Invoices
Generate PDF invoices dynamically
Track paid/unpaid invoices
Send invoices via email
✅ Client & Project Management
Store client details securely
Manage multiple projects per client
Assign tasks and deadlines
✅ Payment Integration
Integrated with Stripe & PayPal
Payment webhooks for real-time updates
Automatic email receipts
✅ Dashboard & Reports
Interactive dashboard with charts & graphs
Generate custom reports (monthly, yearly revenue)
Export reports as CSV/PDF