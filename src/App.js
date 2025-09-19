import React, { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin, Star, Heart, Smile } from 'lucide-react';

const SpeechTherapyWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('inicio');

  const exerciseCategories = [
    { name: "Ejercicios de Articulación", id: "articulacion" },
    { name: "Fortalecimiento Oral", id: "fortalecimiento" },
    { name: "Respiración y Fluidez", id: "respiracion" },
    { name: "Desarrollo del Vocabulario", id: "vocabulario" },
    { name: "Comprensión Auditiva", id: "comprension" }
  ];

  const handleNavigation = (page) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
  };

  const services = [
    {
      title: "Evaluación Inicial Completa",
      description: "Evaluación integral de las habilidades del habla, lenguaje y comunicación para crear un plan personalizado",
      icon: "📋",
      color: "bg-blue-100"
    },
    {
      title: "Terapia de Articulación",
      description: "Corrección de sonidos específicos y mejora de la claridad del habla mediante técnicas especializadas",
      icon: "🗣️",
      color: "bg-purple-100"
    },
    {
      title: "Desarrollo del Lenguaje Expresivo",
      description: "Fortalecimiento del vocabulario, estructura gramatical y habilidades narrativas",
      icon: "💬",
      color: "bg-green-100"
    },
    {
      title: "Comprensión del Lenguaje Receptivo",
      description: "Mejora de la capacidad de entender y seguir instrucciones verbales complejas",
      icon: "👂",
      color: "bg-yellow-100"
    },
    {
      title: "Terapia de Fluidez (Tartamudez)",
      description: "Técnicas especializadas para mejorar el ritmo y la fluidez del habla",
      icon: "🌊",
      color: "bg-pink-100"
    },
    {
      title: "Habilidades Pragmáticas Sociales",
      description: "Desarrollo de la comunicación social apropiada para diferentes contextos",
      icon: "👥",
      color: "bg-orange-100"
    },
    {
      title: "Terapia Orofacial y Motora",
      description: "Fortalecimiento de músculos orales y mejora de la coordinación motora del habla",
      icon: "💪",
      color: "bg-teal-100"
    },
    {
      title: "Apoyo y Orientación Familiar",
      description: "Capacitación a padres y cuidadores con estrategias para continuar el progreso en casa",
      icon: "👨‍👩‍👧‍👦",
      color: "bg-indigo-100"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-blue-100 shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                T
              </div>
              <span className="text-xl font-bold text-gray-800">Pequeñas Voces</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => handleNavigation('inicio')} 
                className={`transition-colors ${currentPage === 'inicio' ? 'text-blue-600 font-medium' : 'text-gray-700 hover:text-blue-600'}`}
              >
                Inicio
              </button>
              <button 
                onClick={() => handleNavigation('servicios')} 
                className={`transition-colors ${currentPage === 'servicios' ? 'text-blue-600 font-medium' : 'text-gray-700 hover:text-blue-600'}`}
              >
                Servicios
              </button>
              <button 
                onClick={() => handleNavigation('nosotros')} 
                className={`transition-colors ${currentPage === 'nosotros' ? 'text-blue-600 font-medium' : 'text-gray-700 hover:text-blue-600'}`}
              >
                Sobre Nosotros
              </button>
              
              {/* Dropdown for Exercises */}
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
                >
                  Ejercicios para Casa
                  <svg className={`ml-1 w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {isDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border z-50">
                    <div className="py-2">
                      {exerciseCategories.map((category, index) => (
                        <button
                          key={index}
                          onClick={() => handleNavigation(`ejercicios-${category.id}`)}
                          className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                        >
                          {category.name}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              
              <button 
                onClick={() => handleNavigation('contacto')} 
                className={`transition-colors ${currentPage === 'contacto' ? 'text-blue-600 font-medium' : 'text-gray-700 hover:text-blue-600'}`}
              >
                Contáctanos
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <div className="flex flex-col space-y-4">
                <button onClick={() => handleNavigation('inicio')} className="text-left text-gray-700 hover:text-blue-600">Inicio</button>
                <button onClick={() => handleNavigation('servicios')} className="text-left text-gray-700 hover:text-blue-600">Servicios</button>
                <button onClick={() => handleNavigation('nosotros')} className="text-left text-gray-700 hover:text-blue-600">Sobre Nosotros</button>
                
                <div className="pl-4">
                  <div className="text-gray-600 font-medium mb-2">Ejercicios para Casa:</div>
                  {exerciseCategories.map((category, index) => (
                    <button
                      key={index}
                      onClick={() => handleNavigation(`ejercicios-${category.id}`)}
                      className="block text-left text-sm text-gray-600 hover:text-blue-600 py-1"
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
                
                <button onClick={() => handleNavigation('contacto')} className="text-left text-gray-700 hover:text-blue-600">Contáctanos</button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <div className="min-h-screen">
        {currentPage === 'inicio' && (
          <>
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-20">
              <div className="max-w-6xl mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                      Ayudamos a tu hijo a 
                      <span className="text-blue-500"> comunicarse mejor</span>
                    </h1>
                    <p className="text-xl text-gray-600 mb-8">
                      Terapia del habla especializada para niños con métodos divertidos y efectivos. 
                      Cada pequeño paso cuenta en su desarrollo.
                    </p>
                  </div>
                  
                  {/* Therapist Image Placeholder */}
                  <div className="relative">
                    <div className="bg-gradient-to-br from-white to-purple-50 rounded-3xl p-8 shadow-xl">
                      <div className="w-full h-80 bg-gray-100 rounded-2xl flex items-center justify-center text-gray-400 text-lg font-medium border-2 border-dashed border-gray-300">
                        AQUI VAS TUUUUU
                        <br />
                        (400x320px recomendado)
                      </div>
                    </div>
                    
                    {/* Floating Characters */}
                    <div className="absolute -top-4 -left-4 w-20 h-20 bg-yellow-200 rounded-full flex items-center justify-center text-3xl">
                      👩‍⚕️
                    </div>
                    <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-green-200 rounded-full flex items-center justify-center text-3xl">
                      👨‍👩‍👧‍👦
                    </div>
                    <div className="absolute top-1/2 -left-8 w-16 h-16 bg-pink-200 rounded-full flex items-center justify-center text-2xl">
                      👶
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </>
        )}

        {currentPage === 'servicios' && (
          <section className="py-20 bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50 min-h-screen">
            <div className="max-w-6xl mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                  Nuestros Servicios
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Ofrecemos una amplia gama de servicios especializados en terapia del habla 
                  para ayudar a cada niño a alcanzar su máximo potencial comunicativo.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {services.map((service, index) => (
                  <div key={index} className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                    <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center text-2xl mb-6`}>
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {currentPage === 'nosotros' && (
          <section className="py-20 bg-gradient-to-br from-green-50 via-teal-50 to-cyan-50 min-h-screen">
            <div className="max-w-6xl mx-auto px-4">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                    Sobre Nosotros
                  </h2>
                  
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Educación</h3>
                    <div className="bg-white rounded-xl p-6 shadow-md mb-6">
                      <div className="flex items-center mb-3">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                          🎓
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800">Bachillerato en Terapia del Habla y Lenguaje</h4>
                          <p className="text-blue-600 font-medium">Albizu University</p>
                        </div>
                      </div>
                      <p className="text-gray-600">
                        Graduada con honores de la Albizu University con especialización 
                        en trastornos del habla y lenguaje infantil.
                      </p>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Experiencia</h3>
                    <div className="bg-white rounded-xl p-6 shadow-md">
                      <div className="flex items-center mb-3">
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                          ⭐
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800">Meses de experiencia</h4>
                          <p className="text-green-600 font-medium">Especialista en Terapia Pediátrica</p>
                        </div>
                      </div>
                      <p className="text-gray-600">
                        Amplia experiencia trabajando con niños de todas las edades en diversas 
                        condiciones del habla y lenguaje, siempre con un enfoque centrado en el desarrollo del niño.
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                        ✅
                      </div>
                      <span className="text-gray-700">Licencia provisional activa</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                        ✅
                      </div>
                      <span className="text-gray-700">Certificación en terapia del habla infantil</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
                        ✅
                      </div>
                      <span className="text-gray-700">Formación continua en técnicas innovadoras</span>
                    </div>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="bg-gradient-to-br from-white to-teal-50 rounded-3xl p-8 shadow-xl">
                    <div className="text-center">
                      <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-4xl">
                        👩‍⚕️
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">Terapista Karlanahomi Ramos Vega</h3>
                      <p className="text-blue-500 font-medium mb-4">Terapeuta del Habla Certificada</p>
                      <p className="text-gray-600">
                        "Mi pasión es ver cómo cada niño descubre su voz y desarrolla 
                        la confianza para comunicarse con el mundo."
                      </p>
                    </div>
                  </div>
                  
                  {/* Floating elements */}
                  <div className="absolute -top-6 -left-6 w-14 h-14 bg-yellow-300 rounded-full flex items-center justify-center text-xl">
                    👩‍🏫
                  </div>
                  <div className="absolute -bottom-6 -right-6 w-14 h-14 bg-green-300 rounded-full flex items-center justify-center text-xl">
                    👨‍👩‍👧
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {currentPage === 'contacto' && (
          <section className="py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 min-h-screen">
            <div className="max-w-6xl mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                  Contáctanos
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  ¿Listo para comenzar el viaje de comunicación de tu hijo? 
                  Estamos aquí para ayudarte en cada paso del camino.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-8">Información de Contacto</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <Phone className="text-blue-500" size={20} />
                      </div>
                      <div>
                        <p className="font-medium text-gray-800">Teléfono</p>
                        <p className="text-gray-600">+1 (939) 253-7376</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                        <Mail className="text-green-500" size={20} />
                      </div>
                      <div>
                        <p className="font-medium text-gray-800">Email</p>
                        <p className="text-gray-600">info@PequeñasVoces.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                        <MapPin className="text-purple-500" size={20} />
                      </div>
                      <div>
                        <p className="font-medium text-gray-800">Dirección</p>
                        <p className="text-gray-600">Calle Principal 123<br />Ciudad, Estado 12345</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 p-6 bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl">
                    <h4 className="font-bold text-gray-800 mb-2">Horarios de Atención</h4>
                    <div className="space-y-1 text-gray-600">
                      <p>Lunes - Viernes: 9:00 AM - 6:00 PM</p>
                      <p>Sábados: 9:00 AM - 2:00 PM</p>
                      <p>Domingos: Cerrado</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">!Contactanos!</h3>
                  
                  <div className="space-y-6">
                    
                    <div className="text-center p-6 border-2 border-green-100 rounded-2xl hover:border-green-300 transition-colors">
                      <div className="text-4xl mb-4">💬</div>
                      <h5 className="font-bold text-gray-800 mb-2">WhatsApp</h5>
                      <p className="text-gray-600 mb-4">Envíanos un mensaje para agendar tu cita o resolver dudas rápidamente</p>
                      <a href="https://web.whatsapp.com/send?phone=19392537376" target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition-colors inline-block">
                        Escribir por WhatsApp
                      </a>
                    </div>
                  </div>

                  <div className="mt-8 bg-purple-50 border-l-4 border-purple-400 p-6 rounded-r-2xl">
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                          <span className="text-purple-600 font-bold text-sm">✨</span>
                        </div>
                      </div>
                      <div className="ml-3">
                        <h5 className="font-semibold text-purple-800">Consulta Inicial Gratuita</h5>
                        <p className="text-purple-700 text-sm">Ofrecemos una primera consulta de 15 minutos sin costo para conocer las necesidades de tu hijo.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {currentPage.startsWith('ejercicios-') && (
          <section className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 min-h-screen">
            <div className="max-w-6xl mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                  Ejercicios para Casa
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Actividades y ejercicios que puedes realizar con tu hijo en casa para complementar la terapia.
                </p>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-xl mb-8">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-3xl">
                    🏠
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    {exerciseCategories.find(cat => `ejercicios-${cat.id}` === currentPage)?.name || 'Ejercicios'}
                  </h3>
                  <p className="text-gray-600 text-lg">
                    Próximamente encontrarás aquí una colección de ejercicios específicos para practicar en casa. 
                    Cada categoría incluirá instrucciones detalladas, videos demostrativos y consejos para padres.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6">
                  <h4 className="font-bold text-gray-800 mb-3">📝 Instrucciones Paso a Paso</h4>
                  <p className="text-gray-600">Guías detalladas para cada ejercicio</p>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6">
                  <h4 className="font-bold text-gray-800 mb-3">🎥 Videos Demostrativos</h4>
                  <p className="text-gray-600">Ejemplos visuales para mejor comprensión</p>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6">
                  <h4 className="font-bold text-gray-800 mb-3">💡 Consejos para Padres</h4>
                  <p className="text-gray-600">Recomendaciones de expertos</p>
                </div>
              </div>
            </div>
          </section>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                T
              </div>
              <span className="text-xl font-bold">Pequeñas Voces</span>
            </div>
            <p className="text-gray-400 mb-4">
              Ayudando a los niños a encontrar su voz, una palabra a la vez.
            </p>
            <div className="flex justify-center space-x-6 text-2xl">
              <span>👩‍⚕️</span>
              <span>👨‍👩‍👧‍👦</span>
              <span>👶</span>
              <span>🎓</span>
              <span>💙</span>
            </div>
            <p className="text-gray-500 text-sm mt-6">
              © 2024 Pequeñas Voces. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SpeechTherapyWebsite;