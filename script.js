// Real Estate App JavaScript

// Sample property data
const propertiesData = [
    {
        id: 1,
        title: "Modern Downtown Apartment",
        location: "New York, NY",
        price: 750000,
        type: "apartment",
        bedrooms: 2,
        bathrooms: 2,
        area: 1200,
        year: 2020,
        description: "Beautiful modern apartment in the heart of downtown with stunning city views and premium amenities.",
        features: ["Balcony", "Gym", "Pool", "Parking"],
        image: "https://m.economictimes.com/thumb/height-450,width-600,imgsize-22382,msid-111780228/which-mansion-tops-the-list-of-the-worlds-most-expensive-houses.jpg",
        agent: "John Smith",
        phone: "+1 (555) 123-4567"
    },
    {
        id: 2,
        title: "Luxury Family House",
        location: "Los Angeles, CA",
        price: 1200000,
        type: "house",
        bedrooms: 4,
        bathrooms: 3,
        area: 2500,
        year: 2018,
        description: "Spacious family home with a beautiful garden, perfect for families looking for comfort and space.",
        features: ["Garden", "Garage", "Fireplace", "Pool"],
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500&h=300&fit=crop",
        agent: "Sarah Johnson",
        phone: "+1 (555) 234-5678"
    },
    {
        id: 3,
        title: "Elegant Condo with Ocean View",
        location: "Miami, FL",
        price: 950000,
        type: "condo",
        bedrooms: 3,
        bathrooms: 2,
        area: 1800,
        year: 2021,
        description: "Stunning oceanfront condo with panoramic views and luxury finishes throughout.",
        features: ["Ocean View", "Balcony", "Concierge", "Beach Access"],
        image: "https://images.squarespace-cdn.com/content/v1/534c8a1fe4b0259491342174/84573bb5-5512-4176-b28a-ef520eb35ba6/1001-203+Catherine+Street-18.jpg",
        agent: "Mike Davis",
        phone: "+1 (555) 345-6789"
    },
    {
        id: 4,
        title: "Charming Villa in the Hills",
        location: "San Francisco, CA",
        price: 1800000,
        type: "villa",
        bedrooms: 5,
        bathrooms: 4,
        area: 3200,
        year: 2015,
        description: "Exclusive villa nestled in the hills with breathtaking views and private amenities.",
        features: ["Mountain View", "Private Pool", "Wine Cellar", "Garden"],
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=500&h=300&fit=crop",
        agent: "Emily Wilson",
        phone: "+1 (555) 456-7890"
    },
    {
        id: 5,
        title: "Cozy Studio Apartment",
        location: "Seattle, WA",
        price: 450000,
        type: "apartment",
        bedrooms: 1,
        bathrooms: 1,
        area: 600,
        year: 2022,
        description: "Perfect starter home or investment property in a great neighborhood with modern amenities.",
        features: ["Modern Kitchen", "Hardwood Floors", "In-unit Laundry", "Pet Friendly"],
        image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=500&h=300&fit=crop",
        agent: "David Brown",
        phone: "+1 (555) 567-8901"
    },
    {
        id: 6,
        title: "Historic Townhouse",
        location: "Boston, MA",
        price: 850000,
        type: "house",
        bedrooms: 3,
        bathrooms: 2,
        area: 1600,
        year: 1920,
        description: "Beautifully restored historic townhouse with original character and modern updates.",
        features: ["Historic Details", "Fireplace", "Private Patio", "Near Subway"],
        image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=500&h=300&fit=crop",
        agent: "Lisa Anderson",
        phone: "+1 (555) 678-9012"
    },
    {
        id: 7,
        title: "Penthouse with City Views",
        location: "Chicago, IL",
        price: 1500000,
        type: "apartment",
        bedrooms: 3,
        bathrooms: 3,
        area: 2200,
        year: 2023,
        description: "Luxurious penthouse with panoramic city views and premium finishes throughout.",
        features: ["City Views", "Private Elevator", "Rooftop Access", "Smart Home"],
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvQXxy57XNQbWupHJoqRNJIIJe8KavgGJyAQ&s",
        agent: "Robert Taylor",
        phone: "+1 (555) 789-0123"
    },
    {
        id: 8,
        title: "Beachfront Villa",
        location: "Malibu, CA",
        price: 2500000,
        type: "villa",
        bedrooms: 6,
        bathrooms: 5,
        area: 4000,
        year: 2019,
        description: "Stunning beachfront villa with direct beach access and luxury amenities.",
        features: ["Beach Access", "Infinity Pool", "Home Theater", "Chef's Kitchen"],
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfU505P6hB1nnnvzv--eZr-6ZHnckkxSByug&s",
        agent: "Jennifer Martinez",
        phone: "+1 (555) 890-1234"
    },
    {
        id: 9,
        title: "Urban Loft with Industrial Style",
        location: "Brooklyn, NY",
        price: 650000,
        type: "apartment",
        bedrooms: 2,
        bathrooms: 2,
        area: 1400,
        year: 2022,
        description: "Modern industrial loft featuring exposed brick walls, high ceilings, and contemporary finishes in the heart of Brooklyn.",
        features: ["Exposed Brick", "High Ceilings", "Rooftop Access", "Modern Kitchen"],
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJbnghz637tRTvZfX-y6rV4jCx9Xt5etdJ6w&s",
        agent: "Michael Chen",
        phone: "+1 (555) 901-2345"
    },
    {
        id: 10,
        title: "Mountain Retreat Cabin",
        location: "Aspen, CO",
        price: 850000,
        type: "house",
        bedrooms: 3,
        bathrooms: 2,
        area: 1800,
        year: 2017,
        description: "Cozy mountain cabin with stunning mountain views, perfect for year-round living or vacation rental.",
        features: ["Mountain Views", "Fireplace", "Deck", "Near Ski Slopes"],
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLPCfnPUxmifsmB272nhZMveUFKz15zRMSLg&s",
        agent: "Sarah Thompson",
        phone: "+1 (555) 012-3456"
    },
    {
        id: 11,
        title: "Luxury Penthouse Suite",
        location: "Las Vegas, NV",
        price: 1200000,
        type: "condo",
        bedrooms: 4,
        bathrooms: 3,
        area: 2800,
        year: 2023,
        description: "Ultra-modern penthouse with panoramic city views, premium finishes, and access to world-class amenities.",
        features: ["City Views", "Private Elevator", "Rooftop Pool", "Smart Home"],
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdi_28NdNLRKlntNF2QDqmDnueUl9FARO8lw&s",
        agent: "David Rodriguez",
        phone: "+1 (555) 123-4567"
    },
    {
        id: 12,
        title: "Victorian Mansion",
        location: "San Francisco, CA",
        price: 2200000,
        type: "house",
        bedrooms: 6,
        bathrooms: 4,
        area: 3500,
        year: 1895,
        description: "Magnificent Victorian mansion with original architectural details, recently restored with modern amenities.",
        features: ["Historic Architecture", "Garden", "Wine Cellar", "Bay Views"],
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8QUW8sDnnMVJPRjvhT3iszAzVYWSUpMRfkw&s",
        agent: "Elizabeth Foster",
        phone: "+1 (555) 234-5678"
    },
    {
        id: 13,
        title: "Modern Studio with City Views",
        location: "Austin, TX",
        price: 380000,
        type: "apartment",
        bedrooms: 1,
        bathrooms: 1,
        area: 750,
        year: 2021,
        description: "Contemporary studio apartment with floor-to-ceiling windows offering stunning downtown views.",
        features: ["City Views", "Modern Kitchen", "In-unit Laundry", "Gym Access"],
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiYsDtOMChy3duEJGkCJ_dCZctKYH_hwRWjw&s",
        agent: "James Wilson",
        phone: "+1 (555) 345-6789"
    },
    {
        id: 14,
        title: "Waterfront Estate",
        location: "Seattle, WA",
        price: 1800000,
        type: "villa",
        bedrooms: 5,
        bathrooms: 4,
        area: 3200,
        year: 2018,
        description: "Stunning waterfront estate with private dock, perfect for boating enthusiasts and nature lovers.",
        features: ["Waterfront", "Private Dock", "Garden", "Mountain Views"],
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9r5Xgt-r1lplHot2YpZ9r_AI_u2nTQJbv9Q&s",
        agent: "Amanda Lee",
        phone: "+1 (555) 456-7890"
    },
    {
        id: 15,
        title: "Chic Downtown Condo",
        location: "Portland, OR",
        price: 520000,
        type: "condo",
        bedrooms: 2,
        bathrooms: 2,
        area: 1100,
        year: 2020,
        description: "Stylish downtown condo with modern amenities and easy access to restaurants, shops, and entertainment.",
        features: ["Downtown Location", "Balcony", "Concierge", "Pet Friendly"],
        image: "https://media.gettyimages.com/id/147205632/photo/modern-home-with-swimming-pool.jpg?s=612x612&w=gi&k=20&c=KziR75bRl6md69oB-cEvNv_0ak-I-f6kmkUpKVQBH-E=",
        agent: "Robert Kim",
        phone: "+1 (555) 567-8901"
    },
    {
        id: 16,
        title: "Ranch-Style Family Home",
        location: "Dallas, TX",
        price: 750000,
        type: "house",
        bedrooms: 4,
        bathrooms: 3,
        area: 2200,
        year: 2016,
        description: "Spacious ranch-style home with open floor plan, perfect for families with children and pets.",
        features: ["Open Floor Plan", "Large Yard", "Garage", "Near Schools"],
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpU_8L1h1AC9SuerumGAO1JZXHVrUNQJtoPA&s",
        agent: "Maria Garcia",
        phone: "+1 (555) 678-9012"
    }
];

// Global variables
let currentFilter = 'all';
let displayedProperties = 6;
let allProperties = [...propertiesData];

// DOM elements
const propertiesGrid = document.getElementById('propertiesGrid');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const filterButtons = document.querySelectorAll('.filter-btn');
const loadMoreBtn = document.getElementById('loadMoreBtn');
const propertyModal = document.getElementById('propertyModal');
const modalContent = document.getElementById('modalContent');
const closeModal = document.querySelector('.close');
const contactForm = document.getElementById('contactForm');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    renderProperties();
    setupEventListeners();
    setupMobileMenu();
    setupSmoothScrolling();
}

// Event Listeners
function setupEventListeners() {
    // Search functionality
    searchBtn.addEventListener('click', handleSearch);
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            handleSearch();
        }
    });

    // Filter buttons
    filterButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            setActiveFilter(filter);
            filterProperties(filter);
        });
    });

    // Load more button
    loadMoreBtn.addEventListener('click', loadMoreProperties);

    // Modal functionality
    closeModal.addEventListener('click', closePropertyModal);
    window.addEventListener('click', function(e) {
        if (e.target === propertyModal) {
            closePropertyModal();
        }
    });

    // Contact form
    contactForm.addEventListener('submit', handleContactForm);

    // Navbar scroll effect
    window.addEventListener('scroll', handleNavbarScroll);
}

// Mobile menu functionality
function setupMobileMenu() {
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

// Smooth scrolling for navigation links
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Navbar scroll effect
function handleNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
    } else {
        navbar.style.background = '#fff';
        navbar.style.backdropFilter = 'none';
    }
}

// Search functionality
function handleSearch() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    
    if (searchTerm === '') {
        allProperties = [...propertiesData];
    } else {
        allProperties = propertiesData.filter(property => 
            property.title.toLowerCase().includes(searchTerm) ||
            property.location.toLowerCase().includes(searchTerm) ||
            property.type.toLowerCase().includes(searchTerm) ||
            property.description.toLowerCase().includes(searchTerm)
        );
    }
    
    displayedProperties = 6;
    renderProperties();
    showSearchResults(searchTerm);
}

function showSearchResults(searchTerm) {
    const resultsCount = allProperties.length;
    const resultsText = searchTerm ? `Found ${resultsCount} properties for "${searchTerm}"` : 'All Properties';
    
    // Update the properties section title
    const propertiesTitle = document.querySelector('#properties h2');
    propertiesTitle.textContent = resultsText;
}

// Filter functionality
function setActiveFilter(filter) {
    filterButtons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-filter') === filter) {
            btn.classList.add('active');
        }
    });
    currentFilter = filter;
}

function filterProperties(filter) {
    if (filter === 'all') {
        allProperties = [...propertiesData];
    } else {
        allProperties = propertiesData.filter(property => property.type === filter);
    }
    
    displayedProperties = 6;
    renderProperties();
}

// Render properties
function renderProperties() {
    const propertiesToShow = allProperties.slice(0, displayedProperties);
    
    if (propertiesToShow.length === 0) {
        propertiesGrid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 50px;">
                <i class="fas fa-search" style="font-size: 3rem; color: #ccc; margin-bottom: 20px;"></i>
                <h3 style="color: #7f8c8d; margin-bottom: 10px;">No Properties Found</h3>
                <p style="color: #bdc3c7;">Try adjusting your search criteria or filters.</p>
            </div>
        `;
        loadMoreBtn.style.display = 'none';
        return;
    }
    
    propertiesGrid.innerHTML = propertiesToShow.map(property => createPropertyCard(property)).join('');
    
    // Show/hide load more button
    loadMoreBtn.style.display = allProperties.length > displayedProperties ? 'block' : 'none';
}

// Create property card HTML
function createPropertyCard(property) {
    const price = formatPrice(property.price);
    const features = property.features.slice(0, 3).join(', ');
    
    return `
        <div class="property-card" onclick="openPropertyModal(${property.id})">
            <div class="property-image">
                <img src="${property.image}" alt="${property.title}" onerror="this.style.display='none'">
                <div class="property-badge">${property.type.charAt(0).toUpperCase() + property.type.slice(1)}</div>
            </div>
            <div class="property-info">
                <div class="property-price">${price}</div>
                <div class="property-title">${property.title}</div>
                <div class="property-location">
                    <i class="fas fa-map-marker-alt"></i>
                    ${property.location}
                </div>
                <div class="property-features">
                    <div class="feature">
                        <i class="fas fa-bed"></i>
                        ${property.bedrooms} bed
                    </div>
                    <div class="feature">
                        <i class="fas fa-bath"></i>
                        ${property.bathrooms} bath
                    </div>
                    <div class="feature">
                        <i class="fas fa-ruler-combined"></i>
                        ${property.area} sqft
                    </div>
                </div>
                <div class="property-description">${property.description}</div>
                <div class="property-actions">
                    <button class="btn-primary" onclick="event.stopPropagation(); openPropertyModal(${property.id})">
                        View Details
                    </button>
                    <button class="btn-secondary" onclick="event.stopPropagation(); contactAgent('${property.agent}', '${property.phone}')">
                        Contact Agent
                    </button>
                </div>
            </div>
        </div>
    `;
}

// Format price
function formatPrice(price) {
    if (price >= 1000000) {
        return `$${(price / 1000000).toFixed(1)}M`;
    } else if (price >= 1000) {
        return `$${(price / 1000).toFixed(0)}K`;
    }
    return `$${price.toLocaleString()}`;
}

// Load more properties
function loadMoreProperties() {
    displayedProperties += 6;
    renderProperties();
}

// Open property modal
function openPropertyModal(propertyId) {
    const property = propertiesData.find(p => p.id === propertyId);
    if (!property) return;
    
    modalContent.innerHTML = createPropertyModalContent(property);
    propertyModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Create property modal content
function createPropertyModalContent(property) {
    const price = formatPrice(property.price);
    const features = property.features.map(feature => `<li>${feature}</li>`).join('');
    
    return `
        <div class="property-modal-content">
            <div class="property-modal-image">
                <img src="${property.image}" alt="${property.title}" onerror="this.style.display='none'">
                <div class="property-badge">${property.type.charAt(0).toUpperCase() + property.type.slice(1)}</div>
            </div>
            <div class="property-modal-info">
                <div class="property-modal-header">
                    <h2>${property.title}</h2>
                    <div class="property-price">${price}</div>
                </div>
                <div class="property-location">
                    <i class="fas fa-map-marker-alt"></i>
                    ${property.location}
                </div>
                <div class="property-details">
                    <div class="detail-item">
                        <i class="fas fa-bed"></i>
                        <span>${property.bedrooms} Bedrooms</span>
                    </div>
                    <div class="detail-item">
                        <i class="fas fa-bath"></i>
                        <span>${property.bathrooms} Bathrooms</span>
                    </div>
                    <div class="detail-item">
                        <i class="fas fa-ruler-combined"></i>
                        <span>${property.area} sqft</span>
                    </div>
                    <div class="detail-item">
                        <i class="fas fa-calendar"></i>
                        <span>Built in ${property.year}</span>
                    </div>
                </div>
                <div class="property-description">
                    <h3>Description</h3>
                    <p>${property.description}</p>
                </div>
                <div class="property-features-list">
                    <h3>Features</h3>
                    <ul>${features}</ul>
                </div>
                <div class="agent-info">
                    <h3>Agent Information</h3>
                    <div class="agent-details">
                        <div class="agent-name">${property.agent}</div>
                        <div class="agent-phone">${property.phone}</div>
                    </div>
                </div>
                <div class="property-modal-actions">
                    <button class="btn-primary" onclick="contactAgent('${property.agent}', '${property.phone}')">
                        <i class="fas fa-phone"></i> Contact Agent
                    </button>
                    <button class="btn-secondary" onclick="scheduleViewing(${property.id})">
                        <i class="fas fa-calendar"></i> Schedule Viewing
                    </button>
                </div>
            </div>
        </div>
    `;
}

// Close property modal
function closePropertyModal() {
    propertyModal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Contact agent
function contactAgent(agentName, phone) {
    const message = `Hi ${agentName}, I'm interested in learning more about this property. Please contact me at your earliest convenience.`;
    const whatsappUrl = `https://wa.me/${phone.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

// Schedule viewing
function scheduleViewing(propertyId) {
    const property = propertiesData.find(p => p.id === propertyId);
    if (!property) return;
    
    alert(`Viewing scheduled for ${property.title}!\n\nOur agent will contact you within 24 hours to confirm the appointment.\n\nThank you for your interest!`);
}

// Handle contact form
function handleContactForm(e) {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const name = contactForm.querySelector('input[type="text"]').value;
    const email = contactForm.querySelector('input[type="email"]').value;
    const subject = contactForm.querySelectorAll('input[type="text"]')[1].value;
    const message = contactForm.querySelector('textarea').value;
    
    // Simulate form submission
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    
    submitBtn.innerHTML = '<span class="loading"></span> Sending...';
    submitBtn.disabled = true;
    
    setTimeout(() => {
        alert(`Thank you for your message, ${name}!\n\nWe'll get back to you within 24 hours.`);
        contactForm.reset();
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }, 2000);
}

// Add CSS for modal content
const modalStyles = `
    <style>
        .property-modal-content {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 40px;
            padding: 40px;
        }
        
        .property-modal-image {
            position: relative;
            border-radius: 15px;
            overflow: hidden;
        }
        
        .property-modal-image img {
            width: 100%;
            height: 400px;
            object-fit: cover;
        }
        
        .property-modal-info h2 {
            color: #2c3e50;
            margin-bottom: 10px;
        }
        
        .property-modal-header {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            margin-bottom: 20px;
        }
        
        .property-details {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 15px;
            margin: 20px 0;
        }
        
        .detail-item {
            display: flex;
            align-items: center;
            color: #7f8c8d;
        }
        
        .detail-item i {
            margin-right: 10px;
            color: #e74c3c;
            width: 20px;
        }
        
        .property-description,
        .property-features-list,
        .agent-info {
            margin: 20px 0;
        }
        
        .property-description h3,
        .property-features-list h3,
        .agent-info h3 {
            color: #2c3e50;
            margin-bottom: 10px;
        }
        
        .property-features-list ul {
            list-style: none;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 10px;
        }
        
        .property-features-list li {
            color: #7f8c8d;
            position: relative;
            padding-left: 20px;
        }
        
        .property-features-list li::before {
            content: '✓';
            position: absolute;
            left: 0;
            color: #27ae60;
            font-weight: bold;
        }
        
        .agent-details {
            background: #f8f9fa;
            padding: 20px;
            border-radius: 10px;
        }
        
        .agent-name {
            font-weight: bold;
            color: #2c3e50;
            margin-bottom: 5px;
        }
        
        .agent-phone {
            color: #e74c3c;
            font-weight: 500;
        }
        
        .property-modal-actions {
            display: flex;
            gap: 15px;
            margin-top: 30px;
        }
        
        .property-modal-actions .btn-primary,
        .property-modal-actions .btn-secondary {
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
        }
        
        @media (max-width: 768px) {
            .property-modal-content {
                grid-template-columns: 1fr;
                padding: 20px;
            }
            
            .property-modal-header {
                flex-direction: column;
                align-items: flex-start;
            }
            
            .property-details {
                grid-template-columns: 1fr;
            }
            
            .property-features-list ul {
                grid-template-columns: 1fr;
            }
            
            .property-modal-actions {
                flex-direction: column;
            }
        }
    </style>
`;

// Add modal styles to head
document.head.insertAdjacentHTML('beforeend', modalStyles);

// Add some interactive features
function addInteractiveFeatures() {
    // Add hover effects to property cards
    document.addEventListener('mouseover', function(e) {
        if (e.target.closest('.property-card')) {
            e.target.closest('.property-card').style.transform = 'translateY(-5px)';
        }
    });
    
    document.addEventListener('mouseout', function(e) {
        if (e.target.closest('.property-card')) {
            e.target.closest('.property-card').style.transform = 'translateY(0)';
        }
    });
    
    // Add click animation to buttons
    document.addEventListener('click', function(e) {
        if (e.target.matches('.btn-primary, .btn-secondary, .filter-btn')) {
            e.target.style.transform = 'scale(0.95)';
            setTimeout(() => {
                e.target.style.transform = 'scale(1)';
            }, 150);
        }
    });
}

// Initialize interactive features
addInteractiveFeatures();

// Add loading states and animations
function showLoadingState(element) {
    element.innerHTML = '<div class="loading"></div>';
}

function hideLoadingState(element, content) {
    element.innerHTML = content;
}

// Add scroll animations
function addScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    document.querySelectorAll('.property-card, .about-text, .contact-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Initialize scroll animations
addScrollAnimations();

// Add keyboard navigation support
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && propertyModal.style.display === 'block') {
        closePropertyModal();
    }
});

// Add touch support for mobile
if ('ontouchstart' in window) {
    document.addEventListener('touchstart', function() {}, {passive: true});
}

// Performance optimization: Debounce search
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounced search
const debouncedSearch = debounce(handleSearch, 300);
searchInput.addEventListener('input', debouncedSearch);

console.log('RealEstateApp initialized successfully!');
