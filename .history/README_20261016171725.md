# Bagtas GuideMap

A simple React + Tailwind CSS prototype for an offline barangay mapping and locator app.  
Made for our HCI project to show basic navigation and design principles.

---

## Requirements
- Node.js (LTS version recommended)
- npm (comes with Node.js)

---

## How to Run Locally
1. Extract the project folder.
2. Open a terminal inside `bagtas-guidemap`.
3. Install dependencies:

   npm install

4. Start the development server:

   npm run dev

5. Open the local URL shown in the terminal.

---

## Build for Deployment
To create a production build:

   npm run build

- The build will be inside the `dist` folder.  
- For Vercel:  
  - Framework preset → Vite  
  - Build command → `npm run build`  
  - Output directory → `dist`

---

## Screens
- Home  
- Search  
- Map / Route  
- Location Details  
- Emergency Directory  
- Confirmation  

---

## HCI Principles
- Consistency → same layout, buttons, and cards  
- Visibility → big category buttons for quick access  
- Feedback → messages after search and a confirmation screen  
- User control → Back and Home buttons always visible  
- Error prevention → stops empty searches with a message  
- Clear navigation → header shows current screen, routes handled by React Router  
- Visual hierarchy → blue for main actions, grouped cards, good spacing  

---

## Limitations
- Map and route are static images, not real GPS.  
- Distances and times are sample data only.  
- External photos need internet. For offline use, put images in `public/images`.  
- Emergency numbers are placeholders — replace with real contacts.  
- App does not actually call emergency services or start real navigation.  
