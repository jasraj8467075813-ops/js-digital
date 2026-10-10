
"use client";

import { useEffect } from "react";

const WHATSAPP =
  "https://wa.me/918467075813?text=" +
  encodeURIComponent(
    "Hi JS DIGITAL! I would like to discuss a website project."
  );

const services = [
  {
    number: "01",
    title: "Business websites",
    description:
      "Build trust with a professional website that explains what your business does, what makes it different, and how customers can contact you.",
    tags: ["Company profiles", "Local businesses", "Service providers"],
  },
  {
    number: "02",
    title: "Portfolio websites",
    description:
      "Present your work, experience, achievements, and personality in a polished online space designed to make a memorable impression.",
    tags: ["Freelancers", "Creators", "Professionals"],
  },
  {
    number: "03",
    title: "E-commerce experiences",
    description:
      "Give your products a home online with organised product pages, clear navigation, and a shopping experience designed around customers.",
    tags: ["Product displays", "Online stores", "Brand experiences"],
  },
  {
    number: "04",
    title: "Landing pages",
    description:
      "Focus attention on one clear goal, whether that means generating enquiries, introducing a service, or promoting a new offer.",
    tags: ["Campaigns", "Lead generation", "Product launches"],
  },
];

const process = [
  {
    number: "01",
    title: "Discover",
    description:
      "We understand your business, your audience, your goals, and the problem your website needs to solve.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "We shape the visual direction, page structure, content hierarchy, and overall experience before moving towards the finished site.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "We turn the approved direction into a responsive website with clear navigation and carefully considered details.",
  },
  {
    number: "04",
    title: "Launch",
    description:
      "We check the experience across screen sizes, review the content and links, and help prepare the website for launch.",
  },
];

export default function Home() {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -45px 0px",
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <main id="home" className="jd-home">
      {/* NAVIGATION */}
      <header className="jd-header">
        <div className="jd-header-inner">
          <a className="jd-brand" href="#home" aria-label="JS DIGITAL home">
            <span className="jd-brand-mark">JS</span>
            <span>
              digital<span className="jd-brand-period">.</span>
            </span>
          </a>

          <nav className="jd-nav" aria-label="Main navigation">
            <a href="#work">Work</a>
            <a href="#services">Services</a>
            <a href="#approach">Our approach</a>
            <a href="/templates">Templates</a>
          </nav>

          <a className="jd-nav-cta" href="#contact">
            Let&apos;s talk <span>↗</span>
          </a>
        </div>
      </header>

      {/* SCENE 01 — THE OPENING */}
      <section className="jd-hero" id="opening">
        <div className="jd-hero-glow" aria-hidden="true" />
        <div className="jd-hero-grid" aria-hidden="true" />

        <div className="jd-hero-inner">
          <div className="jd-hero-copy">
            <div className="jd-eyebrow">
              <span className="jd-status-dot" />
              INDEPENDENT DIGITAL STUDIO
            </div>

            <h1>
              Good ideas
              <br />
              deserve a
              <br />
              <span className="jd-blue-text">better</span> internet.
            </h1>

            <p className="jd-hero-description">
              We design and build thoughtful websites that help businesses
              communicate clearly, earn trust, and make a stronger impression
              online.
            </p>

            <div className="jd-hero-actions">
              <a className="jd-button jd-button-primary" href="#work">
                Explore our work <span>↗</span>
              </a>
              <a className="jd-button jd-button-quiet" href="#approach">
                Discover our approach <span>↓</span>
              </a>
            </div>

            <div className="jd-hero-footnote">
              DESIGN <span>·</span> DEVELOPMENT <span>·</span> DIGITAL
            </div>
          </div>

          <div
            className="jd-hero-visual"
            aria-label="Three-dimensional illustration of a website interface"
          >
            <div className="jd-orbit jd-orbit-one" />
            <div className="jd-orbit jd-orbit-two" />

            <div className="jd-floating-note jd-note-top">
              <span className="jd-note-icon">✳</span>
              <span>
                <strong>Made with purpose</strong>
                <small>Thoughtful by design</small>
              </span>
            </div>

            <div className="jd-browser jd-browser-main">
              <div className="jd-browser-bar">
                <div className="jd-browser-dots">
                  <i />
                  <i />
                  <i />
                </div>
                <span>yourbrand.com</span>
                <span className="jd-browser-menu">•••</span>
              </div>

              <div className="jd-browser-content">
                <div className="jd-mini-nav">
                  <span className="jd-mini-logo">STUDIO.</span>
                  <span>About&nbsp;&nbsp; Work&nbsp;&nbsp; Contact</span>
                </div>

                <div className="jd-mini-layout">
                  <div className="jd-mini-copy">
                    <span className="jd-mini-label">A NEW PERSPECTIVE</span>
                    <div className="jd-mini-heading">
                      Make your
                      <br />
                      next move.
                    </div>
                    <div className="jd-mini-line jd-mini-line-long" />
                    <div className="jd-mini-line" />
                    <div className="jd-mini-button" />
                  </div>

                  <div className="jd-mini-art">
                    <div className="jd-mini-sphere" />
                    <div className="jd-mini-card" />
                    <div className="jd-mini-ring" />
                  </div>
                </div>

                <div className="jd-mini-bottom">
                  <span>DESIGN THAT MOVES YOU</span>
                  <span>EST. 2026</span>
                </div>
              </div>
            </div>

            <div className="jd-floating-note jd-note-bottom">
              <span className="jd-note-check">✓</span>
              <span>
                <strong>Responsive by design</strong>
                <small>Desktop, tablet and mobile</small>
              </span>
            </div>

            <div className="jd-visual-caption">
              <span>01 / THE FIRST IMPRESSION</span>
              <span>SCROLL TO EXPLORE ↓</span>
            </div>
          </div>
        </div>

        <a className="jd-scroll-cue" href="#story">
          <span />
          SCROLL TO BEGIN
        </a>
      </section>

      {/* SCENE 02 — WHY A WEBSITE MATTERS */}
      <section className="jd-story-section" id="story">
        <div className="jd-section-container jd-story-layout">
          <div className="jd-story-copy reveal">
            <div className="jd-eyebrow">02 — THE OPPORTUNITY</div>
            <h2>
              Your first impression
              <br />
              happens <span className="jd-blue-text">online.</span>
            </h2>
            <p>
              Before someone calls, visits your shop, or asks for a quote,
              they may search for you online. What they find can influence
              whether they decide to take the next step.
            </p>
            <p>
              A confusing website can leave people with unanswered questions.
              A thoughtful one makes your business easier to understand,
              easier to trust, and easier to contact.
            </p>
            <a className="jd-text-link" href="#services">
              See how we can help <span>↗</span>
            </a>
          </div>

          <div className="jd-story-visual reveal">
            <div className="jd-story-number">01</div>
            <div className="jd-story-orb" />
            <div className="jd-glass-panel jd-glass-panel-back">
              <span>THE IDEA</span>
              <div className="jd-panel-lines">
                <i />
                <i />
                <i />
              </div>
            </div>
            <div className="jd-glass-panel jd-glass-panel-front">
              <span className="jd-panel-check">✓</span>
              <strong>Clear message.</strong>
              <strong>Confident brand.</strong>
              <strong>Better experience.</strong>
              <small>Every detail has a purpose.</small>
            </div>
            <div className="jd-story-caption">
              GOOD DESIGN MAKES THINGS CLEARER.
            </div>
          </div>
        </div>
      </section>

      {/* SCENE 03 — THE TRANSFORMATION */}
      <section className="jd-work-section" id="work">
        <div className="jd-section-container">
          <div className="jd-section-heading-row reveal">
            <div>
              <div className="jd-eyebrow">03 — POSSIBILITIES</div>
              <h2>
                Different businesses.
                <br />
                <span className="jd-blue-text">Different experiences.</span>
              </h2>
            </div>
            <p>
              Your website should fit your business, not force your business
              into somebody else&apos;s template.
            </p>
          </div>

          <div className="jd-showcase">
            <a
              className="jd-showcase-card jd-showcase-business reveal"
              href="/templates/business"
            >
              <div className="jd-showcase-art jd-business-art">
                <div className="jd-showcase-window">
                  <div className="jd-showcase-topbar">
                    <span>STUDIO NORTH</span>
                    <span>MENU +</span>
                  </div>
                  <div className="jd-business-inner">
                    <span>GOOD WORK. BUILT TO LAST.</span>
                    <strong>
                      A better way
                      <br />
                      to do business.
                    </strong>
                    <i />
                    <div className="jd-business-shape" />
                  </div>
                </div>
                <span className="jd-art-number">01</span>
              </div>
              <div className="jd-showcase-info">
                <div>
                  <h3>Business websites</h3>
                  <p>Professional, clear, and built around trust.</p>
                </div>
                <span className="jd-round-arrow">↗</span>
              </div>
            </a>

            <a
              className="jd-showcase-card jd-showcase-shop reveal"
              href="/templates/shop"
            >
              <div className="jd-showcase-art jd-shop-art">
                <div className="jd-shop-window">
                  <div className="jd-shop-topbar">OBJECTS / 001</div>
                  <div className="jd-shop-product">
                    <div className="jd-product-shape" />
                  </div>
                  <div className="jd-shop-details">
                    <strong>Everyday objects.</strong>
                    <span>Considered essentials</span>
                    <i>DISCOVER COLLECTION ↗</i>
                  </div>
                </div>
                <span className="jd-art-number">02</span>
              </div>
              <div className="jd-showcase-info">
                <div>
                  <h3>Online stores</h3>
                  <p>Product experiences that feel considered.</p>
                </div>
                <span className="jd-round-arrow">↗</span>
              </div>
            </a>

            <a
              className="jd-showcase-card jd-showcase-portfolio reveal"
              href="/templates/portfolio"
            >
              <div className="jd-showcase-art jd-portfolio-art">
                <div className="jd-portfolio-window">
                  <span>SELECTED WORK — 2026</span>
                  <strong>
                    Ideas into
                    <br />
                    visual form.
                  </strong>
                  <div className="jd-portfolio-shapes">
                    <i />
                    <i />
                    <i />
                  </div>
                </div>
                <span className="jd-art-number">03</span>
              </div>
              <div className="jd-showcase-info">
                <div>
                  <h3>Portfolio websites</h3>
                  <p>A distinct place for your work and ideas.</p>
                </div>
                <span className="jd-round-arrow">↗</span>
              </div>
            </a>

            <a
              className="jd-showcase-card jd-showcase-restaurant reveal"
              href="/templates/restaurant"
            >
              <div className="jd-showcase-art jd-restaurant-art">
                <div className="jd-restaurant-window">
                  <span>THE GATHERING PLACE</span>
                  <strong>
                    Made to be
                    <br />
                    remembered.
                  </strong>
                  <div className="jd-restaurant-dish">
                    <i />
                  </div>
                </div>
                <span className="jd-art-number">04</span>
              </div>
              <div className="jd-showcase-info">
                <div>
                  <h3>Restaurant websites</h3>
                  <p>Bring your menu, atmosphere, and story online.</p>
                </div>
                <span className="jd-round-arrow">↗</span>
              </div>
            </a>
          </div>

          <div className="jd-work-bottom reveal">
            <span>HAVE SOMETHING DIFFERENT IN MIND?</span>
            <a className="jd-text-link" href="#contact">
              Let&apos;s shape your idea <span>↗</span>
            </a>
          </div>
        </div>
      </section>

      {/* SCENE 04 — SERVICES */}
      <section className="jd-services-section" id="services">
        <div className="jd-section-container">
          <div className="jd-services-intro reveal">
            <div className="jd-eyebrow">04 — WHAT WE DO</div>
            <h2>
              More than
              <br />
              <span className="jd-blue-text">just a website.</span>
            </h2>
            <p>
              We bring design, development, and practical thinking together
              to create a website that supports the way your business works.
            </p>
          </div>

          <div className="jd-services-list">
            {services.map((service) => (
              <article className="jd-service-row reveal" key={service.number}>
                <span className="jd-service-number">{service.number}</span>
                <div className="jd-service-main">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <div className="jd-service-tags">
                    {service.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
                <span className="jd-service-arrow">↗</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SCENE 05 — WHY JS DIGITAL */}
      <section className="jd-difference-section" id="difference">
        <div className="jd-section-container jd-difference-layout">
          <div className="jd-difference-copy reveal">
            <div className="jd-eyebrow">05 — OUR PRINCIPLES</div>
            <h2>
              Thoughtful work.
              <br />
              <span className="jd-blue-text">No unnecessary noise.</span>
            </h2>
            <p>
              A website does not need to be complicated to be effective.
              It needs a clear purpose, a considered design, and an experience
              that makes sense to the people using it.
            </p>
          </div>

          <div className="jd-principles">
            <article className="jd-principle reveal">
              <span>01</span>
              <div>
                <h3>Designed for your goals</h3>
                <p>
                  We start with what you want to achieve, not with effects
                  or features you do not need.
                </p>
              </div>
            </article>

            <article className="jd-principle reveal">
              <span>02</span>
              <div>
                <h3>Made for every screen</h3>
                <p>
                  Your site should feel considered on phones, tablets,
                  laptops, and larger displays.
                </p>
              </div>
            </article>

            <article className="jd-principle reveal">
              <span>03</span>
              <div>
                <h3>Clear communication</h3>
                <p>
                  You should understand what is being built, what is included,
                  and what happens next.
                </p>
              </div>
            </article>

            <article className="jd-principle reveal">
              <span>04</span>
              <div>
                <h3>Practical, not overcomplicated</h3>
                <p>
                  We focus on useful pages, working links, readable content,
                  and a straightforward visitor journey.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* SCENE 06 — HOW WE WORK */}
      <section className="jd-process-section" id="approach">
        <div className="jd-section-container">
          <div className="jd-process-heading reveal">
            <div className="jd-eyebrow">06 — FROM IDEA TO LAUNCH</div>
            <h2>
              A clear process.
              <br />
              <span className="jd-blue-text">A considered result.</span>
            </h2>
            <p>
              You do not need to know how to build a website. We can work
              through the important decisions together, one step at a time.
            </p>
          </div>

          <div className="jd-process-grid">
            {process.map((step) => (
              <article className="jd-process-card reveal" key={step.number}>
                <span className="jd-process-number">{step.number}</span>
                <div className="jd-process-line" />
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>

          <div className="jd-process-note reveal">
            <span className="jd-process-note-icon">i</span>
            <p>
              Before work begins, we discuss the scope, timeline, pricing,
              hosting requirements, and any ongoing support you may need.
              The exact plan depends on your project.
            </p>
          </div>
        </div>
      </section>

      {/* SCENE 07 — FAQ */}
      <section className="jd-faq-section" id="faq">
        <div className="jd-section-container jd-faq-layout">
          <div className="jd-faq-heading reveal">
            <div className="jd-eyebrow">07 — GOOD TO KNOW</div>
            <h2>
              A few things
              <br />
              worth <span className="jd-blue-text">knowing.</span>
            </h2>
            <p>
              Every project is different. Here are some useful starting points
              before we begin.
            </p>
          </div>

          <div className="jd-faq-list">
            <details className="jd-faq-item reveal">
              <summary>
                How much does a website cost?
                <span>+</span>
              </summary>
              <p>
                Pricing depends on the number of pages, the features required,
                the design complexity, and the project scope. Contact us with
                your idea to discuss a suitable plan before committing.
              </p>
            </details>

            <details className="jd-faq-item reveal">
              <summary>
                How long does it take to build?
                <span>+</span>
              </summary>
              <p>
                A smaller website generally takes less time than a complex
                website with custom functionality. The timeline also depends
                on content, feedback, revisions, and the agreed scope.
              </p>
            </details>

            <details className="jd-faq-item reveal">
              <summary>
                Will my website work on mobile?
                <span>+</span>
              </summary>
              <p>
                Responsive design is part of our approach. Layouts, text,
                navigation, and interactive elements should adapt to different
                screen sizes and be tested before launch.
              </p>
            </details>

            <details className="jd-faq-item reveal">
              <summary>
                Can you help with hosting and domain setup?
                <span>+</span>
              </summary>
              <p>
                We can discuss deployment options, domain configuration,
                and the practical requirements for getting your website
                online. Domain purchases and some hosting services may
                involve separate costs.
              </p>
            </details>

            <details className="jd-faq-item reveal">
              <summary>
                Will my website automatically rank on Google?
                <span>+</span>
              </summary>
              <p>
                No website can guarantee a particular search ranking. We can
                consider clear page structure, useful content, metadata,
                performance, and other SEO foundations that help search
                engines understand your website.
              </p>
            </details>

            <details className="jd-faq-item reveal">
              <summary>
                Can I request changes after launch?
                <span>+</span>
              </summary>
              <p>
                We can discuss updates and ongoing support before the project
                begins. The included revisions, future changes, and any
                maintenance fees should be agreed upon clearly.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* SCENE 08 — FINAL INVITATION */}
      <section className="jd-contact-section" id="contact">
        <div className="jd-contact-glow" aria-hidden="true" />

        <div className="jd-section-container jd-contact-inner reveal">
          <div className="jd-eyebrow">08 — YOUR NEXT CHAPTER</div>

          <h2>
            Your idea deserves
            <br />
            <span className="jd-blue-text">a place online.</span>
          </h2>

          <p>
            Tell us what you are building, who you want to reach, and what
            you want your website to achieve. We can start with a conversation
            and work out the next steps together.
          </p>

          <div className="jd-contact-actions">
            <a
              className="jd-button jd-button-primary"
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
            >
              Start a conversation <span>↗</span>
            </a>
            <a className="jd-button jd-button-quiet" href="/templates">
              Explore templates <span>→</span>
            </a>
          </div>

          <div className="jd-contact-art" aria-hidden="true">
            <div className="jd-contact-ring jd-contact-ring-one" />
            <div className="jd-contact-ring jd-contact-ring-two" />
            <div className="jd-contact-sphere" />
            <div className="jd-contact-glass" />
          </div>

          <div className="jd-contact-bottom">
            <span>JS DIGITAL — INDEPENDENT DIGITAL STUDIO</span>
            <span>BUILT AROUND YOUR IDEA.</span>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="jd-footer">
        <div className="jd-footer-inner">
          <a className="jd-brand" href="#home">
            <span className="jd-brand-mark">JS</span>
            <span>
              digital<span className="jd-brand-period">.</span>
            </span>
          </a>

          <p>
            Thoughtful websites for businesses ready to move forward.
          </p>

          <div className="jd-footer-links">
            <a href="#work">Work</a>
            <a href="#services">Services</a>
            <a href="/templates">Templates</a>
            <a href={WHATSAPP} target="_blank" rel="noreferrer">
              WhatsApp ↗
            </a>
          </div>

          <span className="jd-copyright">
          © 2026 JS DIGITAL
          </span>
        </div>
      </footer>
    </main>
  );
}
