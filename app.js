// ============================
// 1. NAVBAR STICKY
// ============================
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 80) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// ============================
// 2. MENÚ HAMBURGUESA
// ============================
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
  const isOpen = navMenu.classList.toggle('active');
  hamburger.setAttribute('aria-expanded', isOpen);
  hamburger.innerHTML = isOpen ? '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
});

// Cerrar menú al hacer clic en un enlace
document.querySelectorAll('.nav-menu a').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
    hamburger.setAttribute('aria-expanded', 'false');
    hamburger.innerHTML = '<i class="fas fa-bars"></i>';
  });
});

// ============================
// 3. BOTÓN VOLVER ARRIBA
// ============================
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 400) {
    backToTop.classList.add('visible');
  } else {
    backToTop.classList.remove('visible');
  }
});

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ============================
// 4. PRODUCTOS DESTACADOS (8 productos)
// ============================
const productsData = [
  {
    id: 1,
    name: 'Camisa Blanca',
    price: 45.00,
    oldPrice: 65.00,
    tag: '-30%',
    tagType: 'discount',
    image: 'https://images.unsplash.com/photo-1622445275576-2b7b4e75f8a8?w=400&h=500&fit=crop&crop=center',
  },
  {
    id: 2,
    name: 'Vestido Floral',
    price: 89.00,
    oldPrice: null,
    tag: 'Nuevo',
    tagType: 'new',
    image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400&h=500&fit=crop&crop=center',
  },
  {
    id: 3,
    name: 'Zapatos Deportivos',
    price: 120.00,
    oldPrice: 160.00,
    tag: '-25%',
    tagType: 'discount',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=500&fit=crop&crop=center',
  },
  {
    id: 4,
    name: 'Bolso de Mano',
    price: 75.00,
    oldPrice: null,
    tag: 'Nuevo',
    tagType: 'new',
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=500&fit=crop&crop=center',
  },
  {
    id: 5,
    name: 'Chaqueta de Cuero',
    price: 199.00,
    oldPrice: 280.00,
    tag: '-30%',
    tagType: 'discount',
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=500&fit=crop&crop=center',
  },
  {
    id: 6,
    name: 'Gafas de Sol',
    price: 55.00,
    oldPrice: null,
    tag: 'Nuevo',
    tagType: 'new',
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=500&fit=crop&crop=center',
  },
  {
    id: 7,
    name: 'Reloj Clásico',
    price: 150.00,
    oldPrice: 200.00,
    tag: '-25%',
    tagType: 'discount',
    image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400&h=500&fit=crop&crop=center',
  },
  {
    id: 8,
    name: 'Pantalón Casual',
    price: 65.00,
    oldPrice: null,
    tag: 'Nuevo',
    tagType: 'new',
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=500&fit=crop&crop=center',
  },
];

const productsGrid = document.getElementById('productsGrid');

productsData.forEach(product => {
  const card = document.createElement('div');
  card.className = 'product-card';

  let tagHTML = '';
  if (product.tag) {
    const tagClass = product.tagType === 'discount' ? 'discount' : '';
    tagHTML = `<span class="product-tag ${tagClass}">${product.tag}</span>`;
  }

  let oldPriceHTML = '';
  if (product.oldPrice) {
    oldPriceHTML = `<span class="price-old">$${product.oldPrice.toFixed(2)}</span>`;
  }

  card.innerHTML = `
    <div class="product-image">
      <img src="${product.image}" alt="${product.name}" loading="lazy" />
      ${tagHTML}
    </div>
    <div class="product-info">
      <h4>${product.name}</h4>
      <div class="product-prices">
        <span class="price-current">$${product.price.toFixed(2)}</span>
        ${oldPriceHTML}
      </div>
      <button class="btn-add" data-id="${product.id}">Agregar al carrito</button>
    </div>
  `;

  productsGrid.appendChild(card);
});

// ============================
// 5. CARRUSEL DE TESTIMONIOS (Automático)
// ============================
const testimonialsData = [
  {
    name: 'María González',
    role: 'Cliente frecuente',
    text: 'La calidad de la ropa es excelente. He comprado varias veces y siempre supera mis expectativas.',
    stars: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=center',
  },
  {
    name: 'Carlos Ruiz',
    role: 'Comprador online',
    text: 'El envío fue rápido y la atención al cliente de primera. Recomiendo 100% esta tienda.',
    stars: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=center',
  },
  {
    name: 'Laura Méndez',
    role: 'Fan de la moda',
    text: 'Me encanta la variedad de productos y las ofertas. Siempre encuentro algo único.',
    stars: 4,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=center',
  },
];

const track = document.getElementById('carouselTrack');
let currentIndex = 0;
let autoSlideInterval;

function buildTestimonials() {
  testimonialsData.forEach(t => {
    const card = document.createElement('div');
    card.className = 'testimonial-card';
    const starsHTML = '★'.repeat(t.stars) + '☆'.repeat(5 - t.stars);
    card.innerHTML = `
      <img src="${t.image}" alt="${t.name}" loading="lazy" />
      <h4>${t.name}</h4>
      <p class="role">${t.role}</p>
      <div class="stars">${starsHTML}</div>
      <blockquote>“${t.text}”</blockquote>
    `;
    track.appendChild(card);
  });
}

buildTestimonials();

function moveCarousel(index) {
  const total = testimonialsData.length;
  if (index < 0) index = total - 1;
  if (index >= total) index = 0;
  currentIndex = index;
  track.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextSlide() {
  moveCarousel(currentIndex + 1);
}

function prevSlide() {
  moveCarousel(currentIndex - 1);
}

document.getElementById('nextBtn').addEventListener('click', () => {
  nextSlide();
  resetAutoSlide();
});

document.getElementById('prevBtn').addEventListener('click', () => {
  prevSlide();
  resetAutoSlide();
});

function resetAutoSlide() {
  clearInterval(autoSlideInterval);
  autoSlideInterval = setInterval(nextSlide, 5000);
}

// Iniciar carrusel automático
autoSlideInterval = setInterval(nextSlide, 5000);

// ============================
// 6. VALIDACIÓN NEWSLETTER
// ============================
const form = document.getElementById('newsletterForm');
const emailInput = document.getElementById('emailInput');
const formMessage = document.getElementById('formMessage');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = emailInput.value.trim();

  // Validación simple de email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!email) {
    formMessage.textContent = 'Por favor, ingresa tu correo electrónico.';
    formMessage.className = 'form-message error';
    return;
  }

  if (!emailRegex.test(email)) {
    formMessage.textContent = 'Ingresa un correo electrónico válido.';
    formMessage.className = 'form-message error';
    return;
  }

  // Éxito
  formMessage.textContent = '¡Te has suscrito correctamente! 🎉';
  formMessage.className = 'form-message success';
  emailInput.value = '';
});

// ============================
// 7. INTERSECTION OBSERVER (Animaciones al hacer scroll)
// ============================
const observerElements = document.querySelectorAll('.category-card, .product-card, .benefit-card');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      // Añadir clase para animación con delay escalonado
      entry.target.style.opacity = '0';
      entry.target.style.transform = 'translateY(30px)';
      entry.target.style.transition = `opacity 0.6s ease ${index * 0.05}s, transform 0.6s ease ${index * 0.05}s`;

      // Forzar reflow para que la transición se aplique
      void entry.target.offsetHeight;

      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

observerElements.forEach(el => observer.observe(el));

// ============================
// 8. CONTADOR ANIMADO (Estadísticas - opcional)
// ============================
// Se puede implementar un contador simple para mostrar estadísticas
// Ejemplo: número de clientes, productos, etc.
// Por simplicidad, se omite pero se deja la estructura

// ============================
// 9. SCROLL SUAVE (ya está en CSS con scroll-behavior: smooth)
// ============================
// También se puede agregar un polyfill para navegadores antiguos, pero no es necesario.

console.log('🚀 Eleganza - Landing page cargada correctamente.');