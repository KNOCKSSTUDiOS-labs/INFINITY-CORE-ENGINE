/**
 * INFINITY CORE ENGINE - LANDING PAGE
 * Cinematic animations & interactions
 * By KNOCKSSTUDiOS
 */

class InfinityLanding {
    constructor() {
        this.canvas = document.getElementById('heroCanvas');
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.animationFrameId = null;
        
        this.init();
    }

    init() {
        this.setupCanvas();
        this.setupEventListeners();
        this.animate();
    }

    setupCanvas() {
        const rect = this.canvas.parentElement.getBoundingClientRect();
        this.canvas.width = rect.width;
        this.canvas.height = rect.height;
        
        // Initialize particles
        this.createParticles(100);
    }

    createParticles(count) {
        for (let i = 0; i < count; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                vx: (Math.random() - 0.5) * 1,
                vy: (Math.random() - 0.5) * 1,
                radius: Math.random() * 1.5,
                opacity: Math.random() * 0.5 + 0.2,
                color: Math.random() > 0.5 ? '#FF0080' : '#00D9FF'
            });
        }
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Update and draw particles
        this.particles.forEach((p, index) => {
            p.x += p.vx;
            p.y += p.vy;
            
            // Wrap around
            if (p.x < 0) p.x = this.canvas.width;
            if (p.x > this.canvas.width) p.x = 0;
            if (p.y < 0) p.y = this.canvas.height;
            if (p.y > this.canvas.height) p.y = 0;
            
            // Draw particle
            this.ctx.fillStyle = p.color;
            this.ctx.globalAlpha = p.opacity;
            this.ctx.beginPath();
            this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            this.ctx.fill();
            
            // Draw connections
            this.particles.forEach((p2, i2) => {
                if (i2 <= index) return;
                const dx = p.x - p2.x;
                const dy = p.y - p2.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < 150) {
                    this.ctx.strokeStyle = p.color;
                    this.ctx.globalAlpha = (1 - distance / 150) * 0.3;
                    this.ctx.lineWidth = 1;
                    this.ctx.beginPath();
                    this.ctx.moveTo(p.x, p.y);
                    this.ctx.lineTo(p2.x, p2.y);
                    this.ctx.stroke();
                }
            });
        });
        
        this.ctx.globalAlpha = 1;
        this.animationFrameId = requestAnimationFrame(() => this.animate());
    }

    setupEventListeners() {
        // Scroll animations
        this.observeElements();
        
        // Button interactions
        this.setupButtonInteractions();
        
        // Smooth scroll to sections
        this.setupSmoothScroll();
        
        // Resize canvas on window resize
        window.addEventListener('resize', () => this.setupCanvas());
    }

    observeElements() {
        const options = {
            threshold: 0.2,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animation = 'fadeIn 0.8s ease-out forwards';
                    observer.unobserve(entry.target);
                }
            });
        }, options);

        // Observe all cards and feature elements
        document.querySelectorAll('.feature-card, .showcase-item, .pricing-card').forEach(el => {
            observer.observe(el);
        });
    }

    setupButtonInteractions() {
        const buttons = document.querySelectorAll('.btn');
        
        buttons.forEach(button => {
            button.addEventListener('mouseenter', (e) => {
                this.createRipple(e, button);
            });
            
            button.addEventListener('click', (e) => {
                this.handleButtonClick(e, button);
            });
        });
    }

    createRipple(e, button) {
        const ripple = document.createElement('span');
        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}px;
            top: ${y}px;
            background: rgba(255, 255, 255, 0.5);
            border-radius: 50%;
            animation: ripple 0.6s ease-out;
            pointer-events: none;
        `;

        button.style.position = 'relative';
        button.style.overflow = 'hidden';
        button.appendChild(ripple);

        setTimeout(() => ripple.remove(), 600);
    }

    handleButtonClick(e, button) {
        const text = button.textContent.toLowerCase();
        
        if (text.includes('launch')) {
            this.navigateTo('#');
        } else if (text.includes('documentation')) {
            this.navigateTo('https://github.com/KNOCKSSTUDiOS-labs/INFINITY-CORE-ENGINE');
        } else if (text.includes('start')) {
            this.navigateTo('#pricing');
        }
    }

    setupSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(link => {
            link.addEventListener('click', (e) => {
                const href = link.getAttribute('href');
                if (href === '#') return;
                
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });
    }

    navigateTo(url) {
        if (url.startsWith('http')) {
            window.open(url, '_blank');
        } else {
            window.location.href = url;
        }
    }

    destroy() {
        if (this.animationFrameId) {
            cancelAnimationFrame(this.animationFrameId);
        }
    }
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
    const landing = new InfinityLanding();
    
    // Cleanup on page unload
    window.addEventListener('beforeunload', () => landing.destroy());
});

// Add ripple animation keyframe
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

/**
 * Utility: Scroll-triggered animations
 */
const ScrollAnimations = (() => {
    const observeOptions = {
        threshold: [0, 0.5, 1],
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const ratio = entry.intersectionRatio;
                const element = entry.target;
                
                // Parallax effect on hero
                if (element.classList.contains('hero')) {
                    element.style.transform = `translateY(${ratio * 20}px)`;
                }
            }
        });
    }, observeOptions);

    return {
        init: () => {
            document.querySelectorAll('section').forEach(section => {
                observer.observe(section);
            });
        }
    };
})();

ScrollAnimations.init();

/**
 * Performance: Lazy load sections
 */
const LazyLoad = (() => {
    const loadOptions = {
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.dataset.loaded) {
                entry.target.dataset.loaded = 'true';
                entry.target.style.opacity = '1';
                observer.unobserve(entry.target);
            }
        });
    }, loadOptions);

    return {
        init: () => {
            document.querySelectorAll('section').forEach(section => {
                section.style.opacity = '0.95';
                observer.observe(section);
            });
        }
    };
})();

LazyLoad.init();

/**
 * Analytics: Track user interactions
 */
const Analytics = (() => {
    return {
        trackClick: (element, action) => {
            const data = {
                action,
                timestamp: new Date().toISOString(),
                element: element.className,
                pageUrl: window.location.href
            };
            console.log('Analytics:', data);
        },
        trackView: () => {
            const data = {
                action: 'page_view',
                timestamp: new Date().toISOString(),
                pageUrl: window.location.href
            };
            console.log('Analytics:', data);
        }
    };
})();

// Track initial page view
Analytics.trackView();

// Track button clicks
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', () => {
        Analytics.trackClick(btn, 'button_click');
    });
});
