# 🎮 React Game Hub

A modern, responsive frontend web application for discovering and exploring video games. Built with React and TypeScript, it leverages the RAWG Video Games Database API to provide a rich catalog of games, complete with searching, filtering, and detailed game data.

🔗 **Live Demo:** [Open App (Vercel)](https://react-game-hub-eight-tau.vercel.app/)

## 🛠 Tech Stack

**Frontend:**
- **React 19** (UI Library)
- **TypeScript** (Static typing)
- **Vite** (Build tool & development server)
- **Chakra UI** (Component library & styling)
- **React Query** (Data fetching, caching, and infinite scrolling)
- **Zustand** (Global state management)
- **React Router** (Routing and navigation)

**Third-Party Services:**
- **RAWG API** (Video game database backend)

---

## 🚀 Getting Started

Since this is a standalone frontend application, setting it up locally is quick and straightforward. 

### 🛠️ Local Development Setup

1. **Clone the repository:**
```bash
git clone [https://github.com/oleksandrivanyshyn/react-game-hub.git](https://github.com/oleksandrivanyshyn/react-game-hub.git)
cd react-game-hub

```

2. **Install dependencies:**

```bash
npm install

```

3. **Set up environment variables:**
Create a `.env` file in the root of your project and add your RAWG API key:

```env
VITE_RAWG_API_KEY=your_rawg_api_key_here

```

*(You can get a free API key at [RAWG.io](https://rawg.io/apidocs))*

4. **Run the development server:**

```bash
npm run dev

```

5. **Access the App:**

* Open [http://localhost:5173](https://www.google.com/search?q=http://localhost:5173) in your browser.

---

## 📂 Project Highlights

### ✅ Architecture & Quality

* **Modular Design:** Clean separation of API client logic, global state (`store.ts`), custom hooks, and discrete UI components.
* **Type Safety:** Comprehensive TypeScript interfaces for all API entities (Games, Genres, Platforms, Trailers, Screenshots).
* **Modern Tooling:** Fast Hot Module Replacement (HMR) and highly optimized production builds via Vite.

### 🖼 Features

* **Advanced Filtering & Sorting:** Filter games by platform and genre, and sort by relevance, date, or rating using Zustand for seamless state management.
* **Optimized Data Fetching:** Smooth infinite scrolling and request caching powered by TanStack React Query to minimize unnecessary API calls.
* **Rich Media & Details:** Dynamic rendering of game trailers, screenshot galleries, metacritic scores, and expandable text descriptions.
* **Responsive Theme:** Built-in Dark/Light mode toggle powered by Chakra UI.
