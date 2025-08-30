import { useState } from 'react';
import { Globe, Users, TrendingUp, MapPin, Mail, Phone, Menu, X, CheckCircle, ArrowRight, Building2, Target, Handshake, Zap, Instagram } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
            <Globe className="h-8 w-8 text-amber-600 mr-2" />
            <span className="text-2xl font-bold text-slate-800">Asonikibe Ltd</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#home" className="text-slate-700 hover:text-amber-600 px-3 py-2 text-sm font-medium transition-colors">Home</a>
                <a href="#about" className="text-slate-700 hover:text-amber-600 px-3 py-2 text-sm font-medium transition-colors">About</a>
                <a href="#services" className="text-slate-700 hover:text-amber-600 px-3 py-2 text-sm font-medium transition-colors">Services</a>
                <a href="#partnerships" className="text-slate-700 hover:text-amber-600 px-3 py-2 text-sm font-medium transition-colors">Partnerships</a>
                <a href="#locations" className="text-slate-700 hover:text-amber-600 px-3 py-2 text-sm font-medium transition-colors">Locations</a>
                <a href="#contact" className="bg-amber-600 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-amber-700 transition-colors">Contact</a>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button onClick={toggleMenu} className="text-slate-700 hover:text-amber-600">
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <a href="#home" className="text-slate-700 hover:text-amber-600 block px-3 py-2 text-base font-medium">Home</a>
              <a href="#about" className="text-slate-700 hover:text-amber-600 block px-3 py-2 text-base font-medium">About</a>
              <a href="#services" className="text-slate-700 hover:text-amber-600 block px-3 py-2 text-base font-medium">Services</a>
              <a href="#partnerships" className="text-slate-700 hover:text-amber-600 block px-3 py-2 text-base font-medium">Partnerships</a>
              <a href="#locations" className="text-slate-700 hover:text-amber-600 block px-3 py-2 text-base font-medium">Locations</a>
              <a href="#contact" className="bg-amber-600 text-white block px-3 py-2 text-base font-medium rounded-lg mx-3">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Empowering <span className="text-amber-400">African Trade</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Your Gateway to Global Trade & Business Enablement
            </p>
            <p className="text-lg mb-10 text-slate-200 max-w-4xl mx-auto">
              At Asonikibe Ltd, we specialize in trade consulting, trade enablement, and trade facilitation, 
              empowering businesses across Africa to confidently engage in global markets.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-amber-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-amber-700 transition-all duration-300 transform hover:scale-105">
                Get Started Today
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">About Asonikibe Ltd</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              A premier African trade consulting and facilitation company, positioned at the nexus of 
              deep local expertise and strategic global partnerships.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Our Mission</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                We bridge the gap between Africa and the world by providing comprehensive enablement services 
                that unlock opportunities for producers, exporters, SMEs, and corporations across diverse industries.
              </p>
              <p className="text-slate-600 mb-8 leading-relaxed">
                We operate on the fundamental belief that Africa's progress lies not in aid, but in access and enablement. 
                Through our robust partnerships, we provide end-to-end support across the entire export value chain.
              </p>
              <div className="flex items-center text-emerald-600 font-semibold">
                <Target className="h-5 w-5 mr-2" />
                Strategically located in Port Harcourt and Abuja, Nigeria
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h4 className="text-xl font-bold text-slate-800 mb-6">Key Highlights</h4>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-emerald-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-slate-600">Joint venture partner for multiple global firms</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-emerald-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-slate-600">Managing African operations for international companies</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-emerald-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-slate-600">End-to-end export value chain support</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-emerald-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-slate-600">Deep local expertise with global reach</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">Our Services</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Comprehensive solutions designed to drive growth and facilitate international commerce
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 group">
              <div className="bg-amber-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-amber-200 transition-colors">
                <TrendingUp className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Trade Consulting</h3>
              <p className="text-slate-600 leading-relaxed">
                Strategic advisory services including market analysis, regulatory frameworks, 
                and competitive intelligence for effective market entry and expansion.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 group">
              <div className="bg-emerald-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-200 transition-colors">
                <Zap className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Trade Facilitation</h3>
              <p className="text-slate-600 leading-relaxed">
                Hands-on operational support including documentation assistance, customs compliance, 
                logistics coordination, and cross-border finance navigation.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 group">
              <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors">
                <Building2 className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Trade Enablement</h3>
              <p className="text-slate-600 leading-relaxed">
                Foundational infrastructure, partnerships, and operational support for scaling 
                operations within Africa and internationally.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 group">
              <div className="bg-purple-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-purple-200 transition-colors">
                <Target className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Market Access Solutions</h3>
              <p className="text-slate-600 leading-relaxed">
                Direct connections between African producers and verified buyers in North America, 
                Europe, Asia, and the Caribbean markets.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 group">
              <div className="bg-rose-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-rose-200 transition-colors">
                <Users className="h-8 w-8 text-rose-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Capacity Building</h3>
              <p className="text-slate-600 leading-relaxed">
                Structured programs equipping entrepreneurs, SMEs, and cooperatives with practical 
                knowledge and certifications for global trade navigation.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 group">
              <div className="bg-indigo-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-indigo-200 transition-colors">
                <Handshake className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Corporate & SME Support</h3>
              <p className="text-slate-600 leading-relaxed">
                Tailored support for international companies establishing African presence and 
                helping African SMEs scale globally.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partnerships Section */}
      <section id="partnerships" className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Role in Global Partnerships</h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              A trusted partner and operational leader for global firms looking to succeed in Africa
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-amber-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Handshake className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Joint Venture Partner</h3>
              <p className="text-slate-300">
                Strategic partner for multiple international ventures, including the 9QC Trade Platform
              </p>
            </div>

            <div className="text-center">
              <div className="bg-emerald-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Building2 className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">African Operations Lead</h3>
              <p className="text-slate-300">
                Managing full scope of African operations for international firms like 9QC Inc
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Strategic Bridge</h3>
              <p className="text-slate-300">
                Reliable link between global companies and unique opportunities in African markets
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Enablement Partner</h3>
              <p className="text-slate-300">
                Essential regulatory, logistical, and operational support for successful market entry
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Partner Section */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">Why Partner with Asonikibe Ltd?</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Your trusted gateway to African markets with proven expertise and global connections
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-slate-800 mb-4">Strong Local Footprint</h3>
              <p className="text-slate-600 leading-relaxed">
                Robust presence in Nigeria's key commercial hubs—Port Harcourt and Abuja—providing 
                unparalleled access to vital trade networks and government relations.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-slate-800 mb-4">Trusted Global Partner</h3>
              <p className="text-slate-600 leading-relaxed">
                Proven joint venture partner for multiple international companies, demonstrating 
                our reliability and expertise in cross-border operations.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-slate-800 mb-4">End-to-End Expertise</h3>
              <p className="text-slate-600 leading-relaxed">
                True end-to-end partnership guiding you from strategic planning to flawless execution 
                across trade, finance, logistics, and market access.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-slate-800 mb-4">Access to Global Networks</h3>
              <p className="text-slate-600 leading-relaxed">
                While rooted in local realities, our partnerships provide access to vast networks of 
                global connections and opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section id="locations" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">Our Locations</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Strategically positioned across Nigeria's key commercial and governmental hubs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="text-center">
              <div className="bg-amber-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="h-10 w-10 text-amber-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Port Harcourt Office</h3>
              <p className="text-slate-600 leading-relaxed">
                Federal Site Estate Rumuodomaya by Obio-Akpo local government council headquarters
              </p>
            </div>

            <div className="text-center">
              <div className="bg-emerald-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Building2 className="h-10 w-10 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Abuja Office</h3>
              <p className="text-slate-600 leading-relaxed">
                32 Awka Crescent, War College Gwarinpa Abuja
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Scale Your Business?</h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto mb-8">
              Looking to scale your business into or out of Africa? Partner with Asonikibe Ltd, 
              your trusted joint venture and enablement partner.
            </p>
            <p className="text-xl text-amber-400 font-semibold">
              Let us help you build a bridge between African opportunities and global markets.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="bg-amber-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Email Us</h3>
              <p className="text-slate-300">info@asonikibe.com</p>
              <p className="text-slate-300">asonikibeltd@gmail.com</p>
            </div>

            <div className="text-center">
              <div className="bg-emerald-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Call Us</h3>
              <p className="text-slate-300">Nigeria:+234 811 808 8072</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Visit Us</h3>
              <p className="text-slate-300">Abuja: 32 Awka Crescent, War College Gwarinpa Abuja</p>
              <p className="text-slate-300">P/H: Federal Site Estate Rumuodomaya by Obio-Akpo local government council headquarters</p>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold mb-6">Follow Us</h3>
            <div className="flex justify-center space-x-6">
              <a 
                href="https://www.instagram.com/asonikibe_5?igsh=dmVoYXo3djhiODhs" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-purple-500 to-pink-500 w-12 h-12 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
              >
                <Instagram className="h-6 w-6 text-white" />
              </a>
              <a 
                href="https://www.linkedin.com/company/9qcinc/?viewAsMember=true" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
              >
                <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a 
                href="https://www.tiktok.com/@asonikibe5?_t=ZS-8zI2XyrxGuA&_r=1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-black w-12 h-12 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
              >
                <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="text-center">
            <button className="bg-amber-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-amber-700 transition-all duration-300 transform hover:scale-105 inline-flex items-center">
              Contact Us Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
            <Globe className="h-8 w-8 text-amber-600 mr-2" />
            <span className="text-2xl font-bold text-slate-800">Asonikibe Ltd</span>
            <span className="text-2xl font-bold">Asonikibe Ltd</span>
            </div>
            <p className="text-slate-300 mb-6">
              Empowering African Trade • Your Gateway to Global Markets
            </p>
            <p className="text-slate-400 text-sm">
              © 2025 Asonikibe Ltd. All rights reserved. | Joint Venture Partner for Global Trade Enablement
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;