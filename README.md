# Menu Management - Frontend Client App

[![Netlify Status](https://api.netlify.com/api/v1/badges/5fd65824-6676-4a63-9c01-3f796145f145/deploy-status)](https://menufy-frontend-client.netlify.app/)

Welcome to the **Menu Management Frontend Client App**, part of the **ThemenufyEspritPITwin2025** project. This app serves as the frontend interface for managing menus, categories, and products in a user-friendly and efficient way. 

### 🌐 Demo
Experience the live demo of the application here:  
👉 [https://menufy-frontend-client.netlify.app/](https://menufy-frontend-client.netlify.app/)

---

## 🚀 Features
- **Menu QR Code Generator**: Generate and scan QR codes for menus.
- **Category Management**: View, organize, and manage menu categories easily.
- **PDF Export**: Export menus and categories into a PDF for sharing or offline use.
- **Responsive Design**: Optimized for desktop and mobile devices.

---

## 🛠️ Technology Stack
- **Frontend**: React.js, TailwindCSS, Vite
- **State Management**: React Hooks  
- **Styling**: TailwindCSS  
- **Animations**: Framer Motion  
- **PDF Generation**: html2pdf.js  
- **QR Code**: qrcode.react  

---

## ⚙️ Installation and Setup
### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Steps
1. Clone this repository:
   ```bash
   git clone https://github.com/The-Menufy/ThemenufyEspritPITwin2025-Menu-Managment-frontend-Client-app.git
   cd ThemenufyEspritPITwin2025-Menu-Managment-frontend-Client-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:5175
   ```

---

## 📁 Folder Structure
```
src/
├── components/           # Reusable UI components
├── pages/                # Application pages
├── config/               # Configuration files
├── styles/               # Styling and TailwindCSS configurations
├── assets/               # Static assets (images, icons, etc.)
└── utils/                # Utility functions
```

---

## 📖 Environment Variables
This app uses environment variables loaded via Vite. Add a `.env` file to the root of your project with the following variables:

```env
VITE_FRONTEND_URL=http://localhost:5175
VITE_BACKEND_URL=http://localhost:5000
```

---

## 🖼️ Preview
![App Screenshot](https://via.placeholder.com/1200x600?text=Insert+Screenshot+Here)

---

## 🤝 Contributing
We welcome contributions! Please follow these steps to contribute:
1. Fork the repository.
2. Create a feature branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add some feature"
   ```
4. Push to the branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a pull request.

---

## 📝 License
This project is currently not licensed. Please contact the repository owner for more details.

---

## 📧 Contact
For any inquiries or support, reach out to the [project owner](https://github.com/The-Menufy).
