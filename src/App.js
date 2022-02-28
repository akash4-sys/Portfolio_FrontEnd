import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import HomeSection from './components/HomeSection/HomeSection';
import { DarkNavContext } from './components/DarkNavContext';

function App() {
	const [context, setContext] = useState("bg-transparent");

	return (
		<div className="App">
			<DarkNavContext.Provider value={[context, setContext]}>
				<Navbar />
				<HomeSection />
			</DarkNavContext.Provider>
		</div>
	);
}

export default App;