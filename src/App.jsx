import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HomeCards from './components/HomeCards'
import JobListings from './components/JobListings'
import ViewAllJobs from './components/ViewAllJobs'
const App = () => {
  return (
    <div>
      <Navbar />
      <Hero title="Become a React Dev!!" subtitle="Find the React job that fits your skills and needs" />
      <HomeCards />
      <JobListings />
      <ViewAllJobs />
    </div>
  )
}

export default App
