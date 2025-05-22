# Laohaldus Fullstack Projekt

## Projekti ülevaade

See on täislahendus laohaldussüsteemiks, mis võimaldab klientidel broneerida laoruumi, korraldada transporti, hallata tellimusi ning saada arveid e-posti teel PDF-kujul.

Projekti eesmärk oli luua kaasaegne ja automatiseeritud veebirakendus, mis hõlmab nii frontendi kui ka backendi.

---

##  Kasutatud tehnoloogiad

### Backend
- Node.js + Express.js
- PostgreSQL + Sequelize ORM
- JWT autentimine
- PDFKit (arvete genereerimine)
- Nodemailer + Mailtrap (e-posti saatmine)
- Swagger dokumentatsioon

### Frontend
- React + Vite
- Tailwind CSS
- Redux Toolkit
- Axios

---

##  Funktsionaalsus

-  Kasutajate registreerimine ja sisselogimine (sh ettevõtete andmed)
-  Broneeringu vorm (kalender, hind päevas, minimaalne periood)
-  Lao saadavuse kontroll ja ruumi broneerimine
-  Transporttellimuste loomine ja kinnitamine (sissetulev/väljaminev)
-  PDF-arvete genereerimine ja saatmine (ettemaksuarve + lõpparve)
-  Tellimuste pikendamine ja jälgimine
-  Rollipõhine ligipääs (admin, order specialist, transport specialist, klient)
-  Kliendi ja spetsialistide dashboard’id
-  Swagger dokumentatsioon (`/api-docs`)

---

##  Projektistruktuur
Warehouse/
│
├── warehouse-backend/
│ ├── config/
│ ├── controllers/
│ ├── invoices/ ← Lõpparved (PDF)
│ ├── preinvoices/ ← Ettemaksuarved (PDF)
│ ├── middleware/
│ ├── models/
│ ├── routes/
│ ├── utils/
│ ├── app.js, server.js, swagger.js
│
├── warehouse-frontend/
│ ├── public/
│ ├── src/ ← React komponendid, Redux
│ ├── tailwind.config.js, vite.config.js

##  Käivitamine

### Backend
```bash
cd warehouse-backend
npm install
npm run dev

### Frontend
cd warehouse-frontend
npm install
npm run dev

Autorid
Kirill Zahharov
Dmitri Suhodol
