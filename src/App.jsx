import React from 'react'
import Header from './sections/Header'
import Hero from './sections/Hero'
import Test from './components/Test'
import Work from './sections/Work'
import Features from './sections/Features'
import FeatureManagement from './sections/FeatureManagement'
import FeaturesWorkflow from './sections/FeaturesWorkflow'
import GrowthOriented from './sections/GrowthOriented'
import Pricing from './sections/Pricing'
import FAQ from './sections/FAQ'
import Testimonials from './sections/Testimonials'
import Streamline from './sections/Streamline'
import Footer from './sections/Footer'

const App = () => {

 
  
  return (
    <>

  {/* ===================== Our Main Page ==================== */}
    <main className="main">


    {/* ============================== 
    Our Header section 
    ================== */}
    <Header />

        {/* ============================== 
    Our Hero section 
    ================== */}
    
    <Hero mainTitle={`The Way You`} breakTitle={`Present Your`} desc={"Welcome to Volcano, where innovation meets simplicity. We are dedicated to providing best solutions for your business"} />
    
       {/* ============================== 
    Our Work section 
    ================== */}
    <Work />

      {/* ============================== 
    Our Features section 
    ================== */}
    <Features  />
    <FeatureManagement />
    <FeaturesWorkflow />

       {/* ============================== 
    Our Growth-Oriented section 
    ================== */}
    <GrowthOriented />

      {/* ============================== 
    Our pricing section 
    ================== */}
    <Pricing />

       {/* ============================== 
    Our Testimonials section 
    ================== */}
    <Testimonials />

  {/* ============================== 
    Our FAQ section 
    ================== */}
    <FAQ />

      {/* ============================== 
    Our Streamline section 
    ================== */}
    <Streamline />

 {/* ============================== 
    Our Footer section 
    ================== */}
    <Footer />

  
    
      
    </main>
    
    </>
  )
}

export default App
