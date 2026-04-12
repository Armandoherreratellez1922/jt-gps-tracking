import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const whatsappLink =
    "https://wa.me/527641031130?text=Hola%2C%20quiero%20cotizar%20un%20GPS%20para%20mi%20veh%C3%ADculo";

const [showTopbar, setShowTopbar] = useState(true);
const [scrolled, setScrolled] = useState(false);
const [showSmartBar, setShowSmartBar] = useState(false);
const [scroll, setScroll] = useState(0);
const [activeGlow, setActiveGlow] = useState("blue");
const [hoverGlow, setHoverGlow] = useState("")

useEffect(() => {
  const animatedElements = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
        }
      });
    },
    {
      threshold: 0.12,
    }
  );

  animatedElements.forEach((el) => observer.observe(el));

  const sectionGlowMap = [
    { id: "servicios", glow: "blue" },
    { id: "vehiculos", glow: "teal" },
    { id: "tecnologia", glow: "violet" },
    { id: "productos", glow: "orange" },
    { id: "precios", glow: "orange" },
    { id: "porque-elegirnos", glow: "teal" },
    { id: "testimonios", glow: "violet" },
    { id: "faq", glow: "blue" },
    { id: "contacto", glow: "orange" },
    { id: "privacidad", glow: "teal" },
    { id: "terminos", glow: "violet" },
  ];

  const handleMouseMove = (e) => {
    document.documentElement.style.setProperty("--mouse-x", `${e.clientX}px`);
    document.documentElement.style.setProperty("--mouse-y", `${e.clientY}px`);
  };

  let lastScrollY = window.scrollY;

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    setScrolled(currentScrollY > 24);
    setShowSmartBar(currentScrollY > 520);

    const total =
      document.documentElement.scrollHeight - window.innerHeight;
    const progress = total > 0 ? (currentScrollY / total) * 100 : 0;
    setScroll(progress);

    if (currentScrollY <= 20) {
      setShowTopbar(true);
    } else if (currentScrollY > lastScrollY) {
      setShowTopbar(false);
    } else {
      setShowTopbar(true);
    }

    const triggerLine = window.innerHeight * 0.35;
    let currentGlow = "blue";

    for (const section of sectionGlowMap) {
      const el = document.getElementById(section.id);
      if (!el) continue;

      const rect = el.getBoundingClientRect();
      if (rect.top <= triggerLine && rect.bottom >= triggerLine) {
        currentGlow = section.glow;
        break;
      }
    }

    setActiveGlow(currentGlow);
    lastScrollY = currentScrollY;
  };

  window.addEventListener("scroll", handleScroll, { passive: true });
  window.addEventListener("mousemove", handleMouseMove);

  handleScroll();

  return () => {
    observer.disconnect();
    window.removeEventListener("scroll", handleScroll);
    window.removeEventListener("mousemove", handleMouseMove);
  };
}, []);

 return (
    <>
      <div className="scroll-progress" style={{ width: `${scroll}%` }} />

  <div className={`site glow-${hoverGlow || activeGlow}`}>
      <a
        className="whatsapp-float"
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
      >
        Cotiza ahora
      </a>

      <header
        className={`topbar ${showTopbar ? "topbar-visible" : "topbar-hidden"} ${
          scrolled ? "topbar-scrolled topbar-compact" : ""
        }`}
      >
        <div className="brand brand-row">
          <img
            src="/logo-jt-gps.png"
            alt="JT GPS Tracking"
            className="brand-logo"
          />
          <div>
            <span className="brand-name">JT GPS Tracking</span>
            <span className="brand-subtitle">
              Rastreo y seguridad vehicular
            </span>
          </div>
        </div>

        <nav className="nav">
          <a href="#servicios">Servicios</a>
          <a href="#vehiculos">Vehículos</a>
          <a href="#tecnologia">Tecnología</a>
          <a href="#productos">Productos</a>
          <a href="#precios">Planes</a>
          <a href="#porque-elegirnos">Confianza</a>
          <a href="#testimonios">Testimonios</a>
          <a href="#faq">Preguntas</a>
          <a href="#contacto">Contacto</a>
        </nav>
      </header>

      <section className="hero">
        <video className="hero-video" autoPlay muted loop playsInline>
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>

        <div className="hero-overlay"></div>

        <div className="hero-content">
          <div className="hero-text reveal reveal-up">
            <span className="pill">
              Soluciones GPS profesionales para vehículos y flotillas
            </span>

            <h1>
              Seguridad, control y visibilidad total
              <br />
              para tu vehículo o tu operación
            </h1>

            <p className="hero-description">
              En JT GPS Tracking implementamos soluciones GPS avanzadas para
              clientes particulares, negocios y flotillas que necesitan
              monitoreo en tiempo real, instalación confiable y control total
              desde cualquier lugar.
            </p>

            <p className="hero-hook">
              Diseñado para quienes no pueden perder el control de su vehículo,
              su carga o su operación.
            </p>

            <div className="hero-actions">
              <a
                className="btn btn-primary"
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
              >
                Cotizar por WhatsApp
              </a>

              <a className="btn btn-secondary" href="#productos">
                Ver soluciones
              </a>
            </div>

            <div className="hero-trust-row">
              <span>Instalación profesional</span>
              <span>Atención directa</span>
              <span>Monitoreo en tiempo real</span>
              <span>Soluciones para particulares y flotillas</span>
            </div>

            <div className="hero-features">
              <div className="feature-card">
                <strong>GPS en tiempo real</strong>
                <span>Ubicación precisa y visibilidad total</span>
              </div>

              <div className="feature-card">
                <strong>Alertas y control</strong>
                <span>Eventos, velocidad, geocercas y más</span>
              </div>

              <div className="feature-card">
                <strong>Soluciones avanzadas</strong>
                <span>IA, OBD, temperatura y remolques</span>
              </div>

              <div className="feature-card">
                <strong>Atención personalizada</strong>
                <span>Configuración según tu necesidad real</span>
              </div>
            </div>
          </div>

          <div className="hero-panel reveal reveal-up delay-1">
            <div className="panel-box glow-box ultra-panel">
              <span className="panel-label">JT GPS Tracking</span>
              <h2>Una solución completa, no solo un dispositivo</h2>
              <p>
                Te ayudamos a proteger, supervisar y optimizar tu vehículo o
                flotilla con una implementación profesional y funciones
                adaptadas a tu operación.
              </p>

              <div className="panel-grid">
                <div>
                  <small>Ideal para</small>
                  <strong>Particulares, negocios y flotillas</strong>
                </div>

                <div>
                  <small>Especialidades</small>
                  <strong>IA, OBD, geocercas y temperatura</strong>
                </div>
              </div>

              <div className="hero-proof-mini">
                <div>
                  <strong>Control</strong>
                  <span>desde tu celular</span>
                </div>
                <div>
                  <strong>Monitoreo</strong>
                  <span>en tiempo real</span>
                </div>
                <div>
                  <strong>Atención</strong>
                  <span>directa y rápida</span>
                </div>
              </div>

              <a
                className="btn btn-primary btn-block"
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
              >
                Solicitar información
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="stats-expert">
        <div className="stat-box reveal reveal-up delay-1">
          <h3>+1000</h3>
          <p>Vehículos protegidos</p>
        </div>

        <div className="stat-box reveal reveal-up delay-2">
          <h3>24/7</h3>
          <p>Monitoreo en tiempo real</p>
        </div>

        <div className="stat-box reveal reveal-up delay-3">
          <h3>Rápido</h3>
          <p>Instalación profesional</p>
        </div>

        <div className="stat-box reveal reveal-up delay-4">
          <h3>Directo</h3>
          <p>Atención por WhatsApp</p>
        </div>
      </section>

      <section className="section" id="servicios">
        <div className="section-heading reveal reveal-up">
          <span>Servicios</span>
          <h2>Tecnología que te da control real</h2>
          <p>
            No se trata solo de rastrear. Se trata de tomar decisiones con
            información precisa, mejorar la seguridad y optimizar cada
            movimiento de tu vehículo o flotilla.
          </p>
        </div>

        <div className="services-grid">
          <article className="service-card reveal reveal-up delay-1" onMouseEnter={() => setHoverGlow("blue")}
  onMouseLeave={() => setHoverGlow("")}
>
            <div className="service-icon">📍</div>
            <h3>Monitoreo en tiempo real</h3>
            <p>
              Visualiza la ubicación exacta de tu vehículo en todo momento y
              mantén el control desde cualquier lugar.
            </p>
          </article>

          <article className="service-card reveal reveal-up delay-2" onMouseEnter={() => setHoverGlow("blue")}
  onMouseLeave={() => setHoverGlow("")}
>
            <div className="service-icon">🛣️</div>
            <h3>Historial de recorridos</h3>
            <p>
              Consulta rutas, paradas y movimientos para mejorar la supervisión
              y la toma de decisiones.
            </p>
          </article>

          <article className="service-card reveal reveal-up delay-3" onMouseEnter={() => setHoverGlow("blue")}
  onMouseLeave={() => setHoverGlow("")}
>
            <div className="service-icon">🔒</div>
            <h3>Apagado remoto</h3>
            <p>
              Actúa de inmediato ante situaciones de riesgo y protege tu unidad
              con control remoto.
            </p>
          </article>

          <article className="service-card reveal reveal-up delay-4" onMouseEnter={() => setHoverGlow("blue")}
  onMouseLeave={() => setHoverGlow("")}
>
            <div className="service-icon">🔔</div>
            <h3>Alertas inteligentes</h3>
            <p>
              Recibe notificaciones personalizadas por movimiento, velocidad,
              encendido o eventos clave.
            </p>
          </article>
        </div>
      </section>

      <section className="trust-bar">
        <div className="reveal reveal-up delay-1">
          ✅ Instalación profesional
        </div>
        <div className="reveal reveal-up delay-2">
          ✅ Atención directa por WhatsApp
        </div>
        <div className="reveal reveal-up delay-3">
          ✅ Compatible con cualquier vehículo
        </div>
        <div className="reveal reveal-up delay-4">
          ✅ Solución para uso personal y empresarial
        </div>
      </section>

      <section className="section" id="vehiculos">
        <div className="section-heading reveal reveal-up">
          <span>Aplicaciones</span>
          <h2>Soluciones para cada tipo de cliente</h2>
          <p>
            Nuestros sistemas se adaptan a distintas necesidades, desde uso
            personal hasta operaciones empresariales y transporte especializado.
          </p>
        </div>

        <div className="vehicle-types-grid">
          <article className="vehicle-type-card reveal reveal-up delay-1" onMouseEnter={() => setHoverGlow("teal")}
  onMouseLeave={() => setHoverGlow("")}
>
            <img src="/autos-nature.png" alt="Uso particular" />
            <div className="vehicle-type-content">
              <h3>Uso particular</h3>
              <p>
                Mayor seguridad, ubicación en tiempo real y control total desde
                tu celular.
              </p>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="vehicle-type-link"
              >
                Cotizar solución
              </a>
            </div>
          </article>

          <article className="vehicle-type-card reveal reveal-up delay-2" onMouseEnter={() => setHoverGlow("teal")}
  onMouseLeave={() => setHoverGlow("")}
>
            <img src="/motos.png" alt="Negocios y reparto" />
            <div className="vehicle-type-content">
              <h3>Negocios y reparto</h3>
              <p>
                Supervisa rutas, tiempos y movimientos para mejorar tu operación
                diaria.
              </p>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="vehicle-type-link"
              >
                Cotizar solución
              </a>
            </div>
          </article>

          <article className="vehicle-type-card reveal reveal-up delay-3" onMouseEnter={() => setHoverGlow("teal")}
  onMouseLeave={() => setHoverGlow("")}
>
            <img src="/camionetas-nature.png" alt="Flotillas empresariales" />
            <div className="vehicle-type-content">
              <h3>Flotillas empresariales</h3>
              <p>
                Control centralizado, eficiencia operativa y mayor visibilidad
                sobre tus unidades.
              </p>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="vehicle-type-link"
              >
                Cotizar solución
              </a>
            </div>
          </article>

          <article className="vehicle-type-card reveal reveal-up delay-4" onMouseEnter={() => setHoverGlow("teal")}
  onMouseLeave={() => setHoverGlow("")}
>
            <img src="/flotilla.png" alt="Transporte especializado" />
            <div className="vehicle-type-content">
              <h3>Transporte especializado</h3>
              <p>
                Monitoreo de remolques, temperatura, rutas y condiciones
                críticas para proteger carga y operación.
              </p>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="vehicle-type-link"
              >
                Cotizar solución
              </a>
            </div>
          </article>
        </div>
      </section>

      <section className="technology-premium" id="tecnologia">
        <div className="technology-layout">
          <div className="technology-text reveal reveal-up">
            <span className="technology-tag">Tecnología avanzada</span>
            <h2>Tecnología avanzada para monitoreo inteligente</h2>
            <p>
              Integramos herramientas de última generación para ofrecer
              precisión, control y visibilidad en tiempo real, adaptadas a
              distintos tipos de operación.
            </p>

            <div className="technology-benefits">
              <div className="technology-benefit">
                <strong>Ubicación precisa</strong>
                <span>
                  Visualiza la posición del vehículo con actualización constante
                  y mejor control de movimientos.
                </span>
              </div>

              <div className="technology-benefit">
                <strong>Plataforma intuitiva</strong>
                <span>
                  Accede a información clara y útil desde cualquier dispositivo.
                </span>
              </div>

              <div className="technology-benefit">
                <strong>Monitoreo 24/7</strong>
                <span>
                  Supervisa unidades, recorridos y eventos importantes en todo
                  momento.
                </span>
              </div>
            </div>
          </div>

          <div className="technology-dashboard reveal reveal-up delay-1">
            <div className="dashboard-glow"></div>

            <div className="dashboard-card dashboard-map">
              <img
                src="/map-bg.png"
                alt="Mapa de fondo"
                className="dashboard-map-bg"
              />

              <div className="dashboard-map-overlay"></div>

              <div className="dashboard-header">
                <span>Seguimiento en vivo</span>
                <span className="dashboard-status">Activo</span>
              </div>

              <div className="dashboard-grid"></div>
              <div className="dashboard-radar radar-one"></div>
              <div className="dashboard-radar radar-two"></div>

              <svg
                className="dashboard-svg-route"
                viewBox="0 0 1000 420"
                preserveAspectRatio="none"
              >
                <path
                  id="vehicleRoute"
                  d="M90 320
                     C 140 315, 170 290, 205 260
                     S 285 220, 330 214
                     S 410 210, 455 235
                     S 520 270, 585 250
                     S 670 205, 715 180
                     S 780 150, 835 128"
                  className="dashboard-route-base"
                />
                <path
                  d="M90 320
                     C 140 315, 170 290, 205 260
                     S 285 220, 330 214
                     S 410 210, 455 235
                     S 520 270, 585 250
                     S 670 205, 715 180
                     S 780 150, 835 128"
                  className="dashboard-route-glow"
                />

                <circle cx="90" cy="320" r="9" className="svg-point" />
                <circle cx="310" cy="214" r="9" className="svg-point" />
                <circle cx="560" cy="255" r="9" className="svg-point" />
                <circle cx="835" cy="128" r="9" className="svg-point" />

                <g className="svg-car-group">
                  <animateMotion
                    dur="9s"
                    repeatCount="indefinite"
                    rotate="auto"
                    keyPoints="0;1"
                    keyTimes="0;1"
                    calcMode="linear"
                  >
                    <mpath href="#vehicleRoute" />
                  </animateMotion>

                  <ellipse
                    cx="-14"
                    cy="0"
                    rx="16"
                    ry="4"
                    className="svg-car-trail"
                  />

                  <g className="svg-car-icon-v2" transform="translate(-20,-9)">
                    <path
                      d="M6 14
                         L8 9
                         C9 7, 11 6, 14 6
                         H24
                         C27 6, 29 7, 30 9
                         L32 14
                         C33 14, 34 15, 34 16
                         V18
                         C34 19, 33 20, 32 20
                         H30
                         C29.5 22, 28 23, 26 23
                         C24 23, 22.5 22, 22 20
                         H14
                         C13.5 22, 12 23, 10 23
                         C8 23, 6.5 22, 6 20
                         H4
                         C3 20, 2 19, 2 18
                         V16
                         C2 15, 3 14, 4 14
                         Z"
                      className="car-v2-body"
                    />

                    <path
                      d="M11 9
                         C12 8, 13 8, 15 8
                         H23
                         C25 8, 26 8, 27 9
                         L29 13
                         H9
                         Z"
                      className="car-v2-cabin"
                    />

                    <rect
                      x="13"
                      y="9.5"
                      width="4.5"
                      height="2.6"
                      rx="0.8"
                      className="car-v2-window"
                    />
                    <rect
                      x="18.5"
                      y="9.5"
                      width="6"
                      height="2.6"
                      rx="0.8"
                      className="car-v2-window"
                    />

                    <circle
                      cx="10"
                      cy="20"
                      r="2.8"
                      className="car-v2-wheel"
                    />
                    <circle
                      cx="26"
                      cy="20"
                      r="2.8"
                      className="car-v2-wheel"
                    />

                    <circle
                      cx="31.2"
                      cy="15.5"
                      r="1.3"
                      className="car-v2-front-light"
                    />
                    <circle
                      cx="4.8"
                      cy="15.5"
                      r="1.2"
                      className="car-v2-back-light"
                    />
                  </g>
                </g>
              </svg>
            </div>

            <div className="dashboard-map-bottom">
              <div className="map-bottom-header">
                <span>Vista inferior del mapa</span>
                <span>Ruta precisa</span>
              </div>

              <div className="mini-map">
                <div className="mini-map-grid"></div>
                <div className="mini-map-road road-a"></div>
                <div className="mini-map-road road-b"></div>
                <div className="mini-map-road road-c"></div>

                <div className="mini-point mini-point-a"></div>
                <div className="mini-point mini-point-b"></div>
                <div className="mini-point mini-point-c"></div>

                <div className="mini-car"></div>
              </div>
            </div>

            <div className="dashboard-stats">
              <div className="dashboard-mini-card">
                <small>Estado</small>
                <strong>Vehículo en movimiento</strong>
              </div>

              <div className="dashboard-mini-card">
                <small>Ubicación</small>
                <strong>Monitoreo en tiempo real</strong>
              </div>

              <div className="dashboard-mini-card">
                <small>Control</small>
                <strong>Acceso inmediato</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="app-preview">
        <div className="app-text reveal reveal-up">
          <span>Experiencia móvil</span>
          <h2>Tu vehículo, siempre bajo control desde tu celular</h2>
          <p>
            Accede a una experiencia clara, moderna y rápida para monitorear
            recorridos, verificar ubicación y mantener el control de tu unidad
            desde cualquier lugar.
          </p>

          <div className="app-benefits">
            <div className="app-benefit-card">
              <strong>Ubicación inmediata</strong>
              <span>Consulta la posición del vehículo en segundos.</span>
            </div>

            <div className="app-benefit-card">
              <strong>Interfaz intuitiva</strong>
              <span>Información clara para uso diario y profesional.</span>
            </div>

            <div className="app-benefit-card">
              <strong>Control total</strong>
              <span>Mayor seguridad con acceso rápido a funciones clave.</span>
            </div>
          </div>
        </div>

        <div className="phone-mockup reveal reveal-up delay-1">
          <div className="phone-frame">
            <div className="phone-notch"></div>

            <div className="phone-screen">
              <div className="phone-topbar">
                <span>JT GPS Tracking</span>
                <span className="phone-live">En vivo</span>
              </div>

              <div className="phone-map-area">
                <img
                  src="/map-bg.png"
                  alt="Mapa móvil"
                  className="phone-map-image"
                />
                <div className="phone-map-overlay"></div>
                <div className="phone-route-line"></div>
                <div className="phone-point phone-point-a"></div>
                <div className="phone-point phone-point-b"></div>
                <div className="phone-mini-car"></div>
              </div>

              <div className="phone-info-grid">
                <div className="phone-info-card">
                  <small>Vehículo</small>
                  <strong>Activo</strong>
                </div>

                <div className="phone-info-card">
                  <small>Estado</small>
                  <strong>En movimiento</strong>
                </div>

                <div className="phone-info-card full">
                  <small>Ubicación</small>
                  <strong>Monitoreo en tiempo real</strong>
                </div>
              </div>

              <div className="phone-action-bar">
                <div className="phone-action-dot active"></div>
                <div className="phone-action-dot"></div>
                <div className="phone-action-dot"></div>
                <div className="phone-action-dot"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="productos">
        <div className="section-heading reveal reveal-up">
          <span>Productos y soluciones</span>
          <h2>Soluciones diseñadas para cada necesidad</h2>
          <p>
            Contamos con distintos tipos de dispositivos y configuraciones para
            ofrecerte la mejor solución según tu uso, operación o tipo de
            unidad.
          </p>
        </div>

        <div className="products-grid">
          <article className="product-card reveal reveal-up delay-1">
            <div className="product-icon">📷</div>
            <h3>GPS con IA y cámara integrada</h3>
            <p>
              Supervisa lo que sucede dentro y fuera del vehículo, mejorando la
              seguridad y el control operativo.
            </p>
          </article>

          <article className="product-card reveal reveal-up delay-2">
            <div className="product-icon">🎙️</div>
            <h3>GPS con voz en cabina</h3>
            <p>
              Escucha lo que ocurre durante el trayecto y obtén mayor
              visibilidad en situaciones críticas.
            </p>
          </article>

          <article className="product-card reveal reveal-up delay-3">
            <div className="product-icon">🔌</div>
            <h3>GPS con datos OBD</h3>
            <p>
              Accede a información del vehículo para mejorar el control, el
              mantenimiento y el rendimiento operativo.
            </p>
          </article>

          <article className="product-card reveal reveal-up delay-4">
            <div className="product-icon">🚛</div>
            <h3>GPS para remolques</h3>
            <p>
              Rastreo especializado para unidades sin conexión constante, ideal
              para logística y transporte.
            </p>
          </article>

          <article className="product-card reveal reveal-up delay-1">
            <div className="product-icon">🌡️</div>
            <h3>Sensores de temperatura</h3>
            <p>
              Monitorea la cadena de frío en tiempo real y protege mercancía
              sensible o congelada.
            </p>
          </article>

          <article className="product-card reveal reveal-up delay-2">
            <div className="product-icon">⚡</div>
            <h3>Control de velocidad y alertas</h3>
            <p>
              Detecta excesos de velocidad y recibe alertas en tiempo real para
              una operación más segura.
            </p>
          </article>

          <article className="product-card reveal reveal-up delay-3">
            <div className="product-icon">🔔</div>
            <h3>Alertas personalizadas</h3>
            <p>
              Configura notificaciones según eventos, movimientos, horarios o
              necesidades específicas de tu operación.
            </p>
          </article>

          <article className="product-card reveal reveal-up delay-4">
            <div className="product-icon">📍</div>
            <h3>Geocercas inteligentes</h3>
            <p>
              Define zonas seguras y recibe alertas cuando la unidad entra o
              sale de puntos clave.
            </p>
          </article>
        </div>
      </section>

      <section className="section pricing-premium-section" id="precios">
        <div className="section-heading reveal reveal-up">
          <span>Planes y soluciones</span>
          <h2>Elige la solución ideal para tu tipo de operación</h2>
          <p>
            Desde uso particular hasta flotillas empresariales y proyectos para
            el sector público, en JT GPS Tracking diseñamos soluciones adaptadas
            a cada necesidad.
          </p>
        </div>

        <div className="pricing-intro-bar reveal reveal-up">
          <div className="pricing-intro-item">
            <strong>Particular</strong>
            <span>Protección y control diario</span>
          </div>
          <div className="pricing-intro-item">
            <strong>Negocio</strong>
            <span>Supervisión y operación</span>
          </div>
          <div className="pricing-intro-item">
            <strong>Empresarial</strong>
            <span>Flotillas y logística</span>
          </div>
          <div className="pricing-intro-item pricing-intro-public">
            <strong>Sector público</strong>
            <span>Unidades, supervisión y control institucional</span>
          </div>
        </div>

        <div className="pricing-grid premium-pricing-grid premium-pricing-saas">
          <article className="pricing-card premium-plan reveal reveal-up delay-1">
            <div className="pricing-top">
              <div>
                <span className="plan-tag">Particular</span>
                <h3>Plan Esencial</h3>
              </div>
            </div>

            <div className="price-block">
              <div className="price">Cotización personalizada</div>
              <p className="price-note">
                Ideal para quienes buscan proteger su vehículo y tener control
                diario.
              </p>
            </div>

            <div className="plan-highlight">
              <strong>Ideal para:</strong>
              <span>Autos, motos y uso personal</span>
            </div>

            <ul className="pricing-list">
              <li>Ubicación en tiempo real</li>
              <li>Historial de recorridos</li>
              <li>Monitoreo desde celular</li>
              <li>Instalación profesional</li>
            </ul>

            <div className="plan-footer-note">
              Una opción sólida para comenzar con una solución confiable,
              práctica y orientada a seguridad personal.
            </div>

            <a
              className="btn btn-primary btn-block"
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
            >
              Solicitar cotización
            </a>
          </article>

          <article className="pricing-card premium-plan featured-plan reveal reveal-up delay-2">
            <div className="pricing-badge">Más recomendado</div>

            <div className="pricing-top">
              <div>
                <span className="plan-tag featured-tag">Negocio</span>
                <h3>Plan Intermedio</h3>
              </div>
            </div>

            <div className="price-block">
              <div className="price">Cotización personalizada</div>
              <p className="price-note">
                Perfecto para negocios que necesitan supervisión, alertas y
                control operativo.
              </p>
            </div>

            <div className="plan-highlight">
              <strong>Ideal para:</strong>
              <span>Reparto, negocios y unidades de trabajo</span>
            </div>

            <ul className="pricing-list">
              <li>Todo lo del plan esencial</li>
              <li>Apagado remoto del motor</li>
              <li>Alertas inteligentes</li>
              <li>Atención directa por WhatsApp</li>
            </ul>

            <div className="plan-footer-note">
              El mejor equilibrio entre seguridad, control operativo y respuesta
              rápida para el día a día.
            </div>

            <a
              className="btn btn-primary btn-block"
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
            >
              Solicitar cotización
            </a>
          </article>

          <article className="pricing-card premium-plan reveal reveal-up delay-3">
            <div className="pricing-top">
              <div>
                <span className="plan-tag">Empresarial</span>
                <h3>Plan Premium</h3>
              </div>
            </div>

            <div className="price-block">
              <div className="price">Cotización personalizada</div>
              <p className="price-note">
                Diseñado para control centralizado, monitoreo avanzado y
                operación empresarial.
              </p>
            </div>

            <div className="plan-highlight">
              <strong>Ideal para:</strong>
              <span>Flotillas, logística y transporte especializado</span>
            </div>

            <ul className="pricing-list">
              <li>Control centralizado de unidades</li>
              <li>Monitoreo operativo avanzado</li>
              <li>Configuración personalizada</li>
              <li>Solución profesional para empresa</li>
            </ul>

            <div className="plan-footer-note">
              La solución más completa para empresas que necesitan visibilidad,
              control y una implementación más robusta.
            </div>

            <a
              className="btn btn-primary btn-block"
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
            >
              Solicitar cotización
            </a>
          </article>
        </div>

        <div className="pricing-comparison reveal reveal-up">
          <div className="comparison-header">
            <h3>Comparación rápida de soluciones</h3>
            <p>
              Te ayudamos a elegir la opción adecuada según tu nivel de control,
              supervisión y tipo de operación.
            </p>
          </div>

          <div className="comparison-table">
            <div className="comparison-row comparison-row-head">
              <div>Funciones</div>
              <div>Esencial</div>
              <div>Intermedio</div>
              <div>Premium</div>
            </div>

            <div className="comparison-row">
              <div>Ubicación en tiempo real</div>
              <div>●</div>
              <div>●</div>
              <div>●</div>
            </div>

            <div className="comparison-row">
              <div>Historial de recorridos</div>
              <div>●</div>
              <div>●</div>
              <div>●</div>
            </div>

            <div className="comparison-row">
              <div>Apagado remoto</div>
              <div>—</div>
              <div>●</div>
              <div>●</div>
            </div>

            <div className="comparison-row">
              <div>Alertas inteligentes</div>
              <div>—</div>
              <div>●</div>
              <div>●</div>
            </div>

            <div className="comparison-row">
              <div>Monitoreo centralizado</div>
              <div>—</div>
              <div>—</div>
              <div>●</div>
            </div>

            <div className="comparison-row">
              <div>Configuración personalizada</div>
              <div>—</div>
              <div>Parcial</div>
              <div>●</div>
            </div>
          </div>
        </div>

        <div className="public-sector-box reveal reveal-up">
          <div className="public-sector-head">
            <span className="public-sector-tag">Sector público</span>
            <h3>Soluciones para instituciones y operación gubernamental</h3>
          </div>

          <p>
            También desarrollamos propuestas para dependencias, ayuntamientos,
            servicios municipales, unidades operativas y proyectos que
            requieren mayor control, supervisión y trazabilidad.
          </p>

          <div className="public-sector-grid">
            <div className="public-sector-item">
              <strong>Unidades oficiales</strong>
              <span>Monitoreo y control de vehículos institucionales</span>
            </div>

            <div className="public-sector-item">
              <strong>Servicios municipales</strong>
              <span>Supervisión de rutas, tiempos y operación</span>
            </div>

            <div className="public-sector-item">
              <strong>Activos y remolques</strong>
              <span>Seguimiento de unidades y equipo estratégico</span>
            </div>

            <div className="public-sector-item">
              <strong>Proyectos personalizados</strong>
              <span>Configuración según requerimientos operativos</span>
            </div>
          </div>

          <a
            className="btn btn-secondary public-sector-btn"
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
          >
            Solicitar propuesta institucional
          </a>
        </div>
      </section>

      <section className="section" id="porque-elegirnos">
        <div className="section-heading reveal reveal-up">
          <span>Confianza y respaldo</span>
          <h2>
            Una solución confiable para clientes particulares, empresas y
            sector público
          </h2>
          <p>
            En JT GPS Tracking no solo instalamos dispositivos. Desarrollamos
            soluciones de monitoreo y control adaptadas al tipo de vehículo,
            operación o necesidad institucional.
          </p>
        </div>

        <div className="why-choose-intro reveal reveal-up">
          <div className="why-choose-intro-box">
            <strong>Más que un equipo</strong>
            <span>
              Implementamos una solución funcional, configurada para dar
              visibilidad, seguridad y control real.
            </span>
          </div>

          <div className="why-choose-intro-box">
            <strong>Adaptado a tu operación</strong>
            <span>
              Desde uso personal hasta flotillas empresariales, logística o
              unidades institucionales.
            </span>
          </div>

          <div className="why-choose-intro-box">
            <strong>Atención directa</strong>
            <span>
              Acompañamiento claro, instalación profesional y respuesta rápida
              por WhatsApp.
            </span>
          </div>
        </div>

        <div className="services-grid why-choose-grid">
          <article className="service-card reveal reveal-up delay-1" onMouseEnter={() => setHoverGlow("blue")}
  onMouseLeave={() => setHoverGlow("")}
>
            <div className="service-icon">🛠️</div>
            <h3>Instalación profesional</h3>
            <p>
              Cada sistema se instala de forma confiable para asegurar buen
              funcionamiento, mejor desempeño y una implementación limpia.
            </p>
          </article>

          <article className="service-card reveal reveal-up delay-2" onMouseEnter={() => setHoverGlow("blue")}
  onMouseLeave={() => setHoverGlow("")}
>
            <div className="service-icon">⚙️</div>
            <h3>Configuración según necesidad real</h3>
            <p>
              Adaptamos alertas, monitoreo y funciones según el tipo de unidad,
              negocio, flotilla o proyecto institucional.
            </p>
          </article>

          <article className="service-card reveal reveal-up delay-3" onMouseEnter={() => setHoverGlow("blue")}
  onMouseLeave={() => setHoverGlow("")}
>
            <div className="service-icon">📡</div>
            <h3>Visibilidad operativa</h3>
            <p>
              Ayudamos a tener mayor control sobre recorridos, movimientos,
              tiempos y eventos relevantes dentro de la operación.
            </p>
          </article>

          <article className="service-card reveal reveal-up delay-4" onMouseEnter={() => setHoverGlow("blue")}
  onMouseLeave={() => setHoverGlow("")}
>
            <div className="service-icon">🤝</div>
            <h3>Atención personalizada</h3>
            <p>
              Te orientamos para elegir la solución adecuada, sin complicaciones
              y con acompañamiento directo durante el proceso.
            </p>
          </article>
        </div>

        <div className="why-choose-proof reveal reveal-up">
          <div className="why-proof-card">
            <strong>Particulares</strong>
            <span>Mayor seguridad y control desde el celular</span>
          </div>

          <div className="why-proof-card">
            <strong>Negocios</strong>
            <span>Supervisión más clara y mejor control operativo</span>
          </div>

          <div className="why-proof-card">
            <strong>Flotillas</strong>
            <span>Monitoreo centralizado y solución escalable</span>
          </div>

          <div className="why-proof-card">
            <strong>Sector público</strong>
            <span>
              Propuestas adaptadas a supervisión y operación institucional
            </span>
          </div>
        </div>
      </section>

      <section className="section" id="testimonios">
        <div className="section-heading reveal reveal-up">
          <span>Testimonios</span>
          <h2>
            Clientes que ya mejoraron el control y la seguridad de sus unidades
          </h2>
          <p>
            Cada instalación busca resolver una necesidad real: más seguridad,
            mejor monitoreo y mayor tranquilidad para el cliente.
          </p>
        </div>

        <div className="testimonials-grid premium-testimonials-grid">
          <article className="testimonial-card premium-testimonial reveal reveal-up delay-1">
            <div className="testimonial-top">
              <div className="testimonial-avatar">CP</div>
              <div>
                <strong>Cliente particular</strong>
                <span>Uso personal</span>
              </div>
            </div>

            <p>
              “La atención fue rápida y la instalación quedó muy profesional.
              Ahora puedo monitorear mi vehículo desde mi celular y me siento
              mucho más tranquilo al dejarlo estacionado o salir a carretera.”
            </p>

            <div className="testimonial-result">
              <span>Resultado:</span>
              <strong>Más seguridad y control diario</strong>
            </div>
          </article>

          <article className="testimonial-card premium-testimonial reveal reveal-up delay-2">
            <div className="testimonial-top">
              <div className="testimonial-avatar">NL</div>
              <div>
                <strong>Negocio local</strong>
                <span>Operación y supervisión</span>
              </div>
            </div>

            <p>
              “Nos ayudó a tener mayor control de nuestras unidades y a saber
              mejor cómo se movían durante el día. Ahora tenemos más visibilidad
              de la operación y reaccionamos más rápido ante cualquier
              situación.”
            </p>

            <div className="testimonial-result">
              <span>Resultado:</span>
              <strong>Mejor supervisión operativa</strong>
            </div>
          </article>

          <article className="testimonial-card premium-testimonial reveal reveal-up delay-3">
            <div className="testimonial-top">
              <div className="testimonial-avatar">SR</div>
              <div>
                <strong>Servicio de reparto</strong>
                <span>Monitoreo en ruta</span>
              </div>
            </div>

            <p>
              “Muy recomendable. La explicación fue clara, la atención por
              WhatsApp fue rápida y el sistema nos permitió tener mejor
              seguimiento de los recorridos y más control en las entregas.”
            </p>

            <div className="testimonial-result">
              <span>Resultado:</span>
              <strong>Más control en recorridos y entregas</strong>
            </div>
          </article>
        </div>
      </section>

      <section className="section" id="faq">
        <div className="section-heading reveal reveal-up">
          <h2>Preguntas frecuentes</h2>
        </div>

        <div className="faq-list">
          <div className="faq-item reveal reveal-up delay-1">
            <h3>¿Funciona para cualquier vehículo?</h3>
            <p>
              Sí. Podemos trabajar con autos, motos, camionetas, camiones y
              otras unidades, sin importar año o modelo.
            </p>
          </div>

          <div className="faq-item reveal reveal-up delay-2">
            <h3>¿Puedo ver mi vehículo desde el celular?</h3>
            <p>
              Sí. Tendrás acceso al monitoreo en tiempo real y al historial de
              recorridos desde tu celular.
            </p>
          </div>

          <div className="faq-item reveal reveal-up delay-3">
            <h3>¿También sirve para negocio o flotilla?</h3>
            <p>
              Sí. Es una buena solución para clientes particulares, negocios y
              flotillas que requieren más control.
            </p>
          </div>

          <div className="faq-item reveal reveal-up delay-4">
            <h3>¿Qué tipo de productos manejan?</h3>
            <p>
              Manejamos soluciones desde GPS básico hasta equipos con IA,
              cámaras, voz en cabina, OBD, temperatura y monitoreo para
              remolques.
            </p>
          </div>
        </div>
      </section>

      <section className="section cta-strip cta-ultra reveal reveal-up" id="contacto">
        <div className="cta-box ultra-cta-box">
          <div className="cta-left">
            <span className="cta-pill">Atención inmediata</span>

            <h2>
              Dinos qué necesitas monitorear y te damos una solución clara y
              directa
            </h2>

            <p className="cta-description">
              Ya sea un vehículo personal, una unidad de trabajo, una flotilla o
              un proyecto institucional, te ayudamos a implementar una solución
              GPS confiable, funcional y adaptada a tu operación.
            </p>

            <div className="cta-benefits">
              <span>✔ Instalación profesional</span>
              <span>✔ Atención directa por WhatsApp</span>
              <span>✔ Configuración según tu necesidad</span>
              <span>
                ✔ Soluciones para particulares, empresas y sector público
              </span>
            </div>
          </div>

          <div className="cta-right">
            <div className="cta-card">
              <div className="cta-card-header">
                <strong>Solicita tu cotización</strong>
                <span>Respuesta rápida</span>
              </div>

              <div className="cta-card-content">
                <p>
                  Escríbenos ahora y cuéntanos qué tipo de vehículo o proyecto
                  deseas monitorear. Te orientamos y te damos una propuesta
                  clara.
                </p>

                <a
                  className="btn btn-primary btn-block cta-main-btn"
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  Enviar mensaje por WhatsApp
                </a>

                <div className="cta-extra">
                  <span>📲 Respuesta directa</span>
                  <span>⚡ Atención rápida</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section legal-section reveal reveal-up" id="privacidad">
        <div className="section-heading">
          <span>Legal</span>
          <h2>Política de privacidad</h2>
          <p>
            En JT GPS Tracking nos comprometemos a proteger la privacidad de
            nuestros clientes y usuarios.
          </p>
        </div>

        <div className="faq-list">
          <div className="faq-item">
            <h3>Información que recopilamos</h3>
            <p>
              Podemos recopilar información como nombre, número telefónico,
              datos de contacto y datos relacionados con el uso de nuestros
              servicios.
            </p>
          </div>

          <div className="faq-item">
            <h3>Uso de la información</h3>
            <p>
              La información recopilada se utiliza para brindar nuestros
              servicios, atención al cliente, seguimiento de solicitudes y
              mejora de la experiencia del usuario.
            </p>
          </div>

          <div className="faq-item">
            <h3>Protección de datos</h3>
            <p>
              Implementamos medidas de seguridad para proteger la información
              contra accesos no autorizados.
            </p>
          </div>

          <div className="faq-item">
            <h3>Compartición de información</h3>
            <p>
              No compartimos información personal con terceros, excepto cuando
              sea necesario para la prestación del servicio o por requerimiento
              legal.
            </p>
          </div>
        </div>
      </section>

      <section className="section legal-section reveal reveal-up" id="terminos">
        <div className="section-heading">
          <span>Legal</span>
          <h2>Términos y condiciones</h2>
          <p>
            Los servicios ofrecidos por JT GPS Tracking están sujetos a
            disponibilidad, instalación técnica y condiciones específicas del
            vehículo o unidad.
          </p>
        </div>

        <div className="faq-list">
          <div className="faq-item">
            <h3>Instalación</h3>
            <p>
              La instalación será realizada bajo condiciones técnicas adecuadas
              y puede variar dependiendo del tipo de vehículo.
            </p>
          </div>

          <div className="faq-item">
            <h3>Responsabilidad</h3>
            <p>
              JT GPS Tracking no se hace responsable por el uso indebido del
              sistema por parte del usuario.
            </p>
          </div>

          <div className="faq-item">
            <h3>Servicio</h3>
            <p>
              El funcionamiento del sistema puede depender de factores externos
              como señal, cobertura y condiciones del entorno.
            </p>
          </div>

          <div className="faq-item">
            <h3>Modificaciones</h3>
            <p>
              Nos reservamos el derecho de actualizar estos términos en
              cualquier momento.
            </p>
          </div>
        </div>
      </section>

      <div className={`smart-cta-bar ${showSmartBar ? "smart-cta-visible" : ""}`}>
        <div className="smart-cta-content">
          <div className="smart-cta-text">
            <strong>¿Listo para cotizar tu solución GPS?</strong>
            <span>
              Atención directa para vehículos particulares, flotillas y
              proyectos institucionales
            </span>
          </div>

          <a
            className="btn btn-primary smart-cta-button"
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
          >
            Cotizar por WhatsApp
          </a>
        </div>
      </div>

      <footer className="footer reveal reveal-up">
        <div className="footer-brand">
          <img
            src="/logo-jt-gps.png"
            alt="JT GPS Tracking"
            className="footer-logo"
          />
          <div>
            <h3>JT GPS Tracking</h3>
            <p>
              Soluciones GPS profesionales para vehículos, flotillas y
              proyectos institucionales.
            </p>
          </div>
        </div>

        <div className="footer-links">
          <div>
            <h4>Servicios</h4>
            <a href="#servicios">Rastreo GPS</a>
            <a href="#tecnologia">Monitoreo</a>
            <a href="#precios">Planes</a>
            <a href="#productos">Productos</a>
          </div>

          <div>
            <h4>Vehículos</h4>
            <a href="#vehiculos">Autos</a>
            <a href="#vehiculos">Motos</a>
            <a href="#vehiculos">Camionetas</a>
            <a href="#vehiculos">Camiones</a>
          </div>

          <div>
            <h4>Legal</h4>
            <a href="#privacidad">Política de privacidad</a>
            <a href="#terminos">Términos y condiciones</a>
            <a href="#porque-elegirnos">Confianza</a>
          </div>

          <div>
            <h4>Contacto</h4>
            <a href={whatsappLink} target="_blank" rel="noreferrer">
              WhatsApp
            </a>
            <a href="#contacto">Cotizar</a>
          </div>
        </div>
      </footer>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} JT GPS Tracking. Todos los derechos
          reservados.
        </p>
        <p className="footer-note">
          Tecnología GPS para vehículos, flotillas y soluciones institucionales
          en México.
        </p>
      </div>
    </div>
    </>
  );
}

export default App;
