'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    // Set dynamic page title
    document.title = "VseProStavby.cz - Stavíme vaše sny";

    // Generate dynamic SVG favicon
    const faviconSvg = `<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#4CAF50" /><stop offset="100%" stop-color="#8BC34A" /></linearGradient></defs><circle cx="50" cy="50" r="50" fill="url(#g)" /></svg>`;
    const faviconUrl = `data:image/svg+xml;base64,${btoa(faviconSvg)}`;

    let faviconLink = document.querySelector('link[rel="icon"]');
    if (!faviconLink) {
      faviconLink = document.createElement('link');
      faviconLink.setAttribute('rel', 'icon');
      document.head.appendChild(faviconLink);
    }
    faviconLink.setAttribute('href', faviconUrl);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      {/* Header */}
      <header className="bg-green-700 text-white p-4 shadow-md sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <a href="#hero" className="text-3xl font-bold tracking-tight text-white">
            VšeProStavby.cz
          </a>
          <nav className="hidden md:flex space-x-6">
            <a href="#services" className="hover:text-green-200 transition-colors">Služby</a>
            <a href="#about" className="hover:text-green-200 transition-colors">O nás</a>
            <a href="#projects" className="hover:text-green-200 transition-colors">Projekty</a>
            <a href="#contact" className="py-2 px-4 bg-green-500 rounded-lg hover:bg-green-600 transition-colors">Kontakt</a>
          </nav>
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="focus:outline-none">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-green-800 bg-opacity-95 z-50 flex flex-col items-center justify-center space-y-8 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out md:hidden`}>
        <button onClick={toggleMenu} className="absolute top-6 right-6 text-white text-4xl focus:outline-none">
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <nav className="flex flex-col space-y-6 text-2xl text-white">
          <a href="#services" onClick={closeMenu} className="hover:text-green-200 transition-colors">Služby</a>
          <a href="#about" onClick={closeMenu} className="hover:text-green-200 transition-colors">O nás</a>
          <a href="#projects" onClick={closeMenu} className="hover:text-green-200 transition-colors">Projekty</a>
          <a href="#contact" onClick={closeMenu} className="py-3 px-6 bg-green-500 rounded-lg hover:bg-green-600 transition-colors">Kontakt</a>
        </nav>
      </div>

      {/* Hero Section */}
      <section id="hero" className="relative bg-gradient-to-r from-green-700 to-green-900 text-white min-h-[500px] flex items-center justify-center text-center p-8">
        <div className="absolute inset-0 opacity-20 bg-center bg-cover" style={{ backgroundImage: 'url("/images/project-pitched-roof-house.jpg")' }}></div>
        <div className="relative z-10 max-w-2xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6 animate-fade-in-up">
            Stavíme vaše sny od základů až po střechu.
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in-up delay-150">
            Komplexní stavební služby pro rodinné domy, rekonstrukce a novostavby.
          </p>
          <a href="#contact" className="inline-block bg-green-500 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-green-600 transition-transform transform hover:scale-105 animate-fade-in-up delay-300">
            Získejte nezávaznou nabídku
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-12 relative flex justify-center items-center group">
            <span className="absolute inset-x-0 bottom-0 h-1 bg-green-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            Naše služby
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Služba 1: Novostavby */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-green-500 flex flex-col items-center">
              <svg className="w-16 h-16 text-green-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Novostavby</h3>
              <p className="text-gray-700 leading-relaxed text-center">Realizujeme stavby rodinných domů na klíč od projektu po kolaudaci. Spolehněte se na kvalitu a dodržení termínů.</p>
            </div>
            {/* Služba 2: Rekonstrukce */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-green-500 flex flex-col items-center">
              <svg className="w-16 h-16 text-green-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
              </svg>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Rekonstrukce</h3>
              <p className="text-gray-700 leading-relaxed text-center">Proměníme vaše staré prostory v moderní a funkční bydlení. Specializujeme se na interiéry i exteriéry.</p>
            </div>
            {/* Služba 3: Zemní práce */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-green-500 flex flex-col items-center">
              <svg className="w-16 h-16 text-green-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2v6a3 3 0 003 3h6a3 3 0 003-3V9a1 1 0 00-1-1h-6.18C14.757 7.242 15 6.502 15 6c0-2.209-2.013-4-4.5-4S6 3.791 6 6c0 .502.243 1.242.82 2H5a1 1 0 00-1 1v6a3 3 0 003 3h6a3 3 0 003-3V9a1 1 0 00-1-1M5 19h14" />
              </svg>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Zemní práce a zakládání</h3>
              <p className="text-gray-700 leading-relaxed text-center">Provádíme veškeré zemní práce, výkopy či zakládání staveb s moderní technikou.</p>
            </div>
            {/* Služba 4: Omítky a fasády */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-green-500 flex flex-col items-center">
              <svg className="w-16 h-16 text-green-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 17H7M17 13H7M7 9h6" />
              </svg>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Omítky a fasády</h3>
              <p className="text-gray-700 leading-relaxed text-center">Zajišťujeme profesionální omítky a zateplení fasád pro úsporu energie a estetický vzhled.</p>
            </div>
            {/* Služba 5: Střechy */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-green-500 flex flex-col items-center">
              <svg className="w-16 h-16 text-green-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m0 0l-7 7m7-7v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Střechy a střešní krytiny</h3>
              <p className="text-gray-700 leading-relaxed text-center">Kompletní realizace a renovace střech včetně výběru a pokládky střešních krytin.</p>
            </div>
            {/* Služba 6: Okna a dveře */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-green-500 flex flex-col items-center">
              <svg className="w-16 h-16 text-green-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Okna a dveře</h3>
              <p className="text-gray-700 leading-relaxed text-center">Dodávka a montáž kvalitních oken a dveří, které zvýší komfort a bezpečnost vašeho domova.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img src="/images/logo-house-outline.png" alt="Logo VšeProStavby" className="rounded-lg shadow-xl w-full max-w-sm mx-auto md:max-w-full" />
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl font-bold text-gray-800 mb-8 relative flex justify-center md:justify-start items-center group">
              <span className="absolute inset-x-0 bottom-0 h-1 bg-green-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              O nás
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Jsme VšeProStavby.cz, tým zkušených profesionálů s dlouholetou praxí ve stavebnictví. Zaměřujeme se na komplexní přístup k stavebním projektům, s důrazem na kvalitu, spolehlivost a spokojenost zákazníka.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Od prvotních plánů až po finální dokončení stavby, jsme vaším spolehlivým partnerem. Věříme, že každý projekt je jedinečný a zaslouží si individuální přístup a precizní provedení.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-12 relative flex justify-center items-center group">
            <span className="absolute inset-x-0 bottom-0 h-1 bg-green-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            Naše projekty
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img src="/images/project-tanvald-house.jpg" alt="Rodinný dům Tanvald" className="w-full h-64 object-cover object-center" />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">Rekonstrukce domu, Tanvald</h3>
                <p className="text-gray-700">Kompletní rekonstrukce rodinného domu zahrnující fasádu, střechu a interiérové úpravy.</p>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img src="/images/project-pitched-roof-house.jpg" alt="Novostavba rodinného domu" className="w-full h-64 object-cover object-center" />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">Novostavba moderního domu</h3>
                <p className="text-gray-700">Výstavba nového rodinného domu včetně zemních prací a dokončovacích řemesel.</p>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img src="/images/logo-house-outline.png" alt="Generický projekt" className="w-full h-64 object-cover object-center p-8 bg-green-100" />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">Různé stavební úpravy</h3>
                <p className="text-gray-700">Široké spektrum menších i větších zakázek, od menších rekonstrukcí po zateplování objektů.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-green-700 py-16 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6">
            Začněte svůj projekt s námi!
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Kontaktujte nás pro nezávaznou konzultaci a cenovou nabídku.
          </p>
          <a href="#contact" className="inline-block bg-white text-green-700 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-200 transition-transform transform hover:scale-105">
            Kontaktujte nás ještě dnes
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-12 relative flex justify-center items-center group">
            <span className="absolute inset-x-0 bottom-0 h-1 bg-green-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            Kontakt
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left max-w-3xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <svg className="w-10 h-10 text-green-600 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-gray-700"><a href="mailto:info@vseprostavby.cz" className="text-green-600 hover:underline">info@vseprostavby.cz</a></p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <svg className="w-10 h-10 text-green-600 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <h3 className="text-xl font-semibold mb-2">Telefon</h3>
              <p className="text-gray-700"><a href="tel:+420777123456" className="text-green-600 hover:underline">+420 777 123 456</a></p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <svg className="w-10 h-10 text-green-600 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.727A8 8 0 016.343 4.273.75.75 0 007.864 3.738A8.001 8.001 0 0119.495 15.112c.005.006.007.012.01.018.81.81.85 2.186-.063 2.943l-3 2.5a.75.75 0 01-1.079-.916l3-2.5a.188.188 0 00.066-.118.75.75 0 00-.066-.316A7.988 7.988 0 0017.657 16.727zM6.343 7.273A8 8 0 0117.657 19.727a.75.75 0 001.527.135A8.001 8.001 0 004.505 8.888c-.005-.006-.007-.012-.01-.018-.81-.81-.85-2.186.063-2.943l3-2.5a.75.75 0 011.079.916l-3 2.5c-.004.004-.006.008-.008.013a.75.75 0 00-.05.143 8.01 8.01 0 00-.114.717.75.75 0 00.066.316z" />
              </svg>
              <h3 className="text-xl font-semibold mb-2">Adresa</h3>
              <p className="text-gray-700">VšeProStavby s.r.o.<br/>Stavební 123<br/>100 00 Praha</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto text-center">
          <p className="text-sm mb-2">&copy; {new Date().getFullYear()} VšeProStavby.cz. Všechna práva vyhrazena.</p>
          <p className="text-sm">Vytvořeno s láskou od <a href="https://digitalfusion.cz" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300">DigitalFusion</a></p>
        </div>
      </footer>
    </div>
  );
}
