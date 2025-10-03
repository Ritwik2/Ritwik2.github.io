// Resume Website JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initializeNavigation();
    initializePDFViewer();
    initializeScrollEffects();
    initializeMobileMenu();
});

// Navigation functionality
function initializeNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('main section');
    
    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Update active navigation link based on scroll position
    window.addEventListener('scroll', function() {
        let current = '';
        const headerHeight = document.querySelector('.header').offsetHeight;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - headerHeight - 100;
            const sectionHeight = section.offsetHeight;
            
            if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });
}

// PDF Viewer functionality
function initializePDFViewer() {
    const pdfViewer = document.getElementById('pdf-viewer');
    const loadingElement = document.querySelector('.pdf-loading');
    const fullscreenBtn = document.getElementById('fullscreen-btn');
    const zoomInBtn = document.getElementById('zoom-in-btn');
    const zoomOutBtn = document.getElementById('zoom-out-btn');
    
    let currentZoom = 1;
    let isFullscreen = false;
    
    // Handle PDF loading
    if (pdfViewer) {
        pdfViewer.addEventListener('load', function() {
            setTimeout(() => {
                if (loadingElement) {
                    loadingElement.style.display = 'none';
                }
            }, 1000);
        });
        
        // Handle PDF load error
        pdfViewer.addEventListener('error', function() {
            console.log('PDF failed to load, showing fallback content');
            if (loadingElement) {
                loadingElement.innerHTML = `
                    <div class="pdf-fallback">
                        <h3>PDF Viewer Not Supported</h3>
                        <p>Your browser doesn't support PDF viewing. Please download the resume instead.</p>
                        <a href="Ritwik_Verma.pdf" download class="btn btn-primary">
                            <i class="fas fa-download"></i> Download Resume PDF
                        </a>
                    </div>
                `;
            }
        });
    }
    
    // Fullscreen functionality
    if (fullscreenBtn) {
        fullscreenBtn.addEventListener('click', function() {
            const pdfContainer = document.querySelector('.pdf-container');
            
            if (!isFullscreen) {
                enterFullscreen(pdfContainer);
            } else {
                exitFullscreen();
            }
        });
    }
    
    // Zoom functionality
    if (zoomInBtn) {
        zoomInBtn.addEventListener('click', function() {
            currentZoom = Math.min(currentZoom + 0.25, 3);
            applyZoom();
        });
    }
    
    if (zoomOutBtn) {
        zoomOutBtn.addEventListener('click', function() {
            currentZoom = Math.max(currentZoom - 0.25, 0.5);
            applyZoom();
        });
    }
    
    // Fullscreen functions
    function enterFullscreen(element) {
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        }
        
        element.classList.add('fullscreen');
        fullscreenBtn.innerHTML = '<i class="fas fa-compress"></i>';
        fullscreenBtn.title = 'Exit Fullscreen';
        isFullscreen = true;
    }
    
    function exitFullscreen() {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
        
        document.querySelector('.pdf-container').classList.remove('fullscreen');
        fullscreenBtn.innerHTML = '<i class="fas fa-expand"></i>';
        fullscreenBtn.title = 'Fullscreen';
        isFullscreen = false;
    }
    
    // Listen for fullscreen change events
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    document.addEventListener('mozfullscreenchange', handleFullscreenChange);
    document.addEventListener('MSFullscreenChange', handleFullscreenChange);
    
    function handleFullscreenChange() {
        if (!document.fullscreenElement && !document.webkitFullscreenElement && 
            !document.mozFullScreenElement && !document.msFullscreenElement) {
            isFullscreen = false;
            document.querySelector('.pdf-container').classList.remove('fullscreen');
            fullscreenBtn.innerHTML = '<i class="fas fa-expand"></i>';
            fullscreenBtn.title = 'Fullscreen';
        }
    }
    
    function applyZoom() {
        if (pdfViewer) {
            pdfViewer.style.transform = `scale(${currentZoom})`;
            pdfViewer.style.transformOrigin = 'top left';
            
            // Update container height to accommodate zoom
            const pdfContainer = document.querySelector('.pdf-container');
            if (pdfContainer) {
                pdfContainer.style.overflow = currentZoom > 1 ? 'auto' : 'hidden';
            }
        }
    }
}

// Scroll effects
function initializeScrollEffects() {
    // Add scroll-based animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const elementsToAnimate = document.querySelectorAll('.section-title, .hero-content, .about-text, .contact-content');
    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });
    
    // Header background on scroll
    const header = document.querySelector('.header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// Mobile menu functionality
function initializeMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navLinksItems = document.querySelectorAll('.nav-link');
    
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
            document.body.classList.toggle('menu-open');
        });
        
        // Close menu when clicking on a link
        navLinksItems.forEach(link => {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
                document.body.classList.remove('menu-open');
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
                document.body.classList.remove('menu-open');
            }
        });
    }
}

// Keyboard navigation
document.addEventListener('keydown', function(e) {
    // ESC key to exit fullscreen
    if (e.key === 'Escape') {
        const fullscreenElement = document.querySelector('.fullscreen');
        if (fullscreenElement) {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            }
        }
    }
    
    // Ctrl/Cmd + D to download PDF
    if ((e.ctrlKey || e.metaKey) && e.key === 'd') {
        e.preventDefault();
        const downloadLink = document.querySelector('a[download]');
        if (downloadLink) {
            downloadLink.click();
        }
    }
});

// Print functionality
window.addEventListener('beforeprint', function() {
    // Hide loading animation before printing
    const loadingElement = document.querySelector('.pdf-loading');
    if (loadingElement) {
        loadingElement.style.display = 'none';
    }
});

// Analytics and tracking (placeholder)
function trackEvent(action, category = 'Resume Website') {
    // Add your analytics tracking here
    console.log(`Event tracked: ${action} in ${category}`);
}

// Track important interactions
document.addEventListener('click', function(e) {
    if (e.target.matches('a[download]')) {
        trackEvent('PDF Downloaded');
    } else if (e.target.matches('a[href*="pdf"][target="_blank"]')) {
        trackEvent('PDF Opened in New Tab');
    } else if (e.target.closest('#fullscreen-btn')) {
        trackEvent('Fullscreen Toggled');
    } else if (e.target.matches('.contact-link')) {
        trackEvent('Contact Link Clicked', 'Contact');
    }
});

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    .fade-in {
        animation: fadeInUp 0.8s ease-out forwards;
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .header.scrolled {
        background: rgba(255, 255, 255, 0.98);
        box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
    }
    
    .hamburger.active span:nth-child(1) {
        transform: rotate(-45deg) translate(-5px, 6px);
    }
    
    .hamburger.active span:nth-child(2) {
        opacity: 0;
    }
    
    .hamburger.active span:nth-child(3) {
        transform: rotate(45deg) translate(-5px, -6px);
    }
    
    @media (max-width: 768px) {
        .nav-links.active {
            display: flex;
            flex-direction: column;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: white;
            padding: 1rem;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
            border-top: 1px solid #e5e7eb;
        }
        
        .nav-links.active li {
            margin: 0.5rem 0;
        }
        
        .nav-links.active .nav-link {
            padding: 0.5rem;
            text-align: center;
            border-radius: 4px;
        }
        
        .nav-links.active .nav-link:hover {
            background: #f3f4f6;
        }
        
        body.menu-open {
            overflow: hidden;
        }
    }
`;
document.head.appendChild(style);

// Error handling for PDF loading
window.addEventListener('error', function(e) {
    if (e.target.tagName === 'IFRAME') {
        console.log('PDF iframe failed to load');
        const loadingElement = document.querySelector('.pdf-loading');
        if (loadingElement) {
            loadingElement.innerHTML = `
                <div class="pdf-fallback">
                    <i class="fas fa-exclamation-triangle" style="font-size: 3rem; color: #f59e0b; margin-bottom: 1rem;"></i>
                    <h3>Unable to Display PDF</h3>
                    <p>There was an issue loading the PDF viewer. Please try downloading the file instead.</p>
                    <a href="Ritwik_Verma.pdf" download class="btn btn-primary">
                        <i class="fas fa-download"></i> Download Resume PDF
                    </a>
                </div>
            `;
        }
    }
}, true);

// PWA functionality (optional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        // Uncomment if you want to add PWA functionality
        // navigator.serviceWorker.register('/sw.js');
    });
}
