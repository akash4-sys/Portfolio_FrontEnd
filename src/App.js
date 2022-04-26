import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import HomeSection from './components/HomeSection/HomeSection';
import { DarkNavContext } from './components/DarkNavContext';
import Projects from './components/MyProjects/Projects';
import Archive from './components/MyProjects/Archive';
import Resume from './components/Resume/Resume';
import Certificates from './components/Resume/Certificates';
import ContactMe from './components/Contact/ContactMe';
import NotFound from './components/NotFound';

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
						<Route path="resume" element={<Resume />} />
						<Route path="mycertificates" element={<Certificates />} />
						<Route path="archive" element={<Archive />} />
						<Route path="contactme" element={<ContactMe />} />
						<Route path="*" element={<NotFound />} />
					</Routes>
				</Router>
			</DarkNavContext.Provider>
		</div>
	);
}

export default App;