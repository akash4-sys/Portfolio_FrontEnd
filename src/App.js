import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import HomeSection from './components/HomeSection/HomeSection';
import { DarkNavContext } from './components/DarkNavContext';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Projects from './components/MyProjects/Projects';

function App() {
	const [context, setContext] = useState("bg-transparent");

	return (
		<div className="App">
			<DarkNavContext.Provider value={[context, setContext]}>
				<Router>
					<Navbar />
					<Routes>
						<Route path="/" element={<HomeSection />} />
						<Route path="myprojects" element={<Projects />} />
					</Routes>
				</Router>
			</DarkNavContext.Provider>
		</div>
	);
}

export default App;