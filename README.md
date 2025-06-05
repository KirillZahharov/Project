# Laohaldus Fullstack Projekt

## Projekti ülevaade

See on täislahendus laohaldussüsteemiks, mis võimaldab klientidel broneerida laoruumi, korraldada transporti, hallata tellimusi ning saada arveid e-posti teel PDF-kujul.  
Projekti eesmärk oli luua kaasaegne ja automatiseeritud veebirakendus, mis hõlmab nii frontendi kui ka backendi.

---

## Kasutatud tehnoloogiad

**Backend**  
• Node.js + Express.js  
• PostgreSQL + Sequelize ORM  
• JWT autentimine  
• PDFKit (arvete genereerimine)  
• Nodemailer + Mailtrap (e-posti saatmine)  
• Swagger dokumentatsioon  

**Frontend**  
• React + Vite  
• Tailwind CSS  
• Redux Toolkit  
• Axios

---

## Funktsionaalsus

• Kasutajate registreerimine ja sisselogimine (sh ettevõtete andmed)  
• Broneeringu vorm (kalender, hind päevas, minimaalne periood)  
• Lao saadavuse kontroll ja ruumi broneerimine  
• Transporttellimuste loomine ja kinnitamine (sissetulev / väljaminev)  
• PDF-arvete genereerimine ja saatmine (ettemaksuarve + lõpparve)  
• Tellimuste pikendamine ja jälgimine  
• Rollipõhine ligipääs (admin, order specialist, transport specialist, klient)  
• Kliendi ja spetsialistide dashboard’id  
• Swagger dokumentatsioon (`/api-docs`)

---

## Projektistruktuur

```
Warehouse/
├── warehouse-backend/
│   ├── config/
│   ├── controllers/
│   ├── invoices/           # Lõpparved (PDF)
│   ├── preinvoices/        # Ettemaksuarved (PDF)
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── app.js
│   ├── server.js
│   └── swagger.js
├── warehouse-frontend/
│   ├── public/
│   ├── src/                # React komponendid, Redux
│   ├── tailwind.config.js
│   └── vite.config.js
```

---

## Käivitamine
git clone https://github.com/KirillZahharov/Project.git
cd Project

### Backend

```bash
cd warehouse-backend
npm install
node server.js
```

### Frontend

```bash
cd warehouse-frontend
npm install
npm run dev
```

---

## Autorid

- Kirill Zahharov  
- Dmitri Suhodol

---

## Märkused

- Arved salvestatakse eraldi kaustadesse: `invoices/` ja `preinvoices/`
- E-kirjade testimiseks on kasutusel Mailtrap.io
- Transporttellimused tuleb kinnitada spetsialisti vaates
- Klient saab tellimusi pikendada ja jälgida enda vaates


## Users:
JSON formaadis:
### Klient
{
  "username": "klient1",
  "email": "klient1@test.ee",
  "password": "test123",
  "role": "user"
}

### Tellimuse spetsialist
{
  "username": "tellimusspets",node
  "email": "tellimus@test.ee",
  "password": "spets123",
  "role": "orderSpecialist"
}

### Transpordi Spetsialist
{
  "username": "transportspets",
  "email": "transport@test.ee",
  "password": "spets123",
  "role": "transportSpecialist"
}

