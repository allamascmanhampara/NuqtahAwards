// Competition Data
const participants = [
    {
        id: 'B', name: 'Thasleema', total: 46, scores: [9, 10, 9, 9, 9], rank: 1,
        award: 'I PLACE', image: 'B.png', certificate: 'certificates/B.pdf',
        juryNote: 'Exceptional circular composition with intricate floral-calligraphic integration. The symmetry is masterful, with each petal containing beautifully formed script. The aged parchment effect and border detailing show superior craftsmanship. This piece demonstrates the highest level of technical skill and artistic vision. Your work stands as a testament to dedicated practice and deep understanding of classical Islamic calligraphic traditions.'
    },
    {
        id: 'C', name: 'Fathimath Shuhaiba Falila', total: 42, scores: [9, 9, 8, 8, 8], rank: 2,
        award: 'II PLACE', image: 'C.png', certificate: 'certificates/C.pdf',
        juryNote: 'Stunning circular mandala design with perfect radial symmetry. The integration of multiple calligraphic phrases into a cohesive geometric pattern is remarkable. The balance between density and readability is expertly handled, creating a mesmerizing visual flow. Your ability to merge complex geometric principles with elegant script work showcases both mathematical precision and artistic sensibility.'
    },
    {
        id: 'A', name: 'Sauda', total: 42, scores: [9, 8, 8, 8, 9], rank: 2,
        award: 'II Place', image: 'A.png', certificate: 'certificates/A.pdf',
        juryNote: 'Beautiful decorative border framing with elegant central calligraphy. The ornate frame shows intricate detail work, and the contrast between the decorated border and the clear central text creates excellent visual hierarchy. Your dedication to traditional ornamentation is commendable, and the balance achieved between embellishment and clarity demonstrates mature artistic judgment.'
    },
    {
        id: 'E', name: 'Sayyedath Ayshath Noufabi', total: 40, scores: [8, 8, 8, 8, 8], rank: 3,
        award: 'III Place', image: 'E.png', certificate: 'certificates/E.pdf',
        juryNote: 'Bold vertical composition with strong visual impact. The elongated letterforms create dramatic presence and excellent use of negative space. Your modern aesthetic while maintaining traditional calligraphic integrity is impressive. The confidence in your strokes and the commanding presence of this piece demonstrate a unique contemporary voice that respects classical foundations while pushing boundaries.'
    },
    {
        id: 'H', name: 'Fathimath Raihana', total: 40, scores: [8, 8, 7, 9, 8], rank: 3,
        award: 'Third Place', image: 'H.png', certificate: 'certificates/H.pdf',
        juryNote: 'Striking use of red ink creates unique visual distinction. The circular seal-style composition is beautifully balanced, and the color choice adds cultural and artistic depth to the piece. Your bold decision to use color demonstrates creative confidence, and the execution maintains the dignity and gravitas appropriate to the sacred text. This piece stands out for its aesthetic courage.'
    },
    {
        id: 'K', name: 'Ayishath Shamna', total: 38, scores: [8, 8, 8, 7, 7], rank: 6, 
        image: 'K.png', certificate: 'certificates/K.pdf',
        juryNote: 'Excellent technical execution with clear, readable script. Your attention to detail and consistency across letterforms is noteworthy. The composition is well-balanced and shows mature understanding of spatial relationships. Work on adding more creative expression and exploring dynamic variations while maintaining your strong technical foundation. Your disciplined approach is evident and admirable.'
    },
    {
        id: 'J', name: 'Mohammed Mahroof', total: 37, scores: [8, 7, 7, 8, 7], rank: 7, 
        image: 'J.png', certificate: 'certificates/J.pdf',
        juryNote: 'Strong composition with good understanding of classical proportions. Your letterforms are well-executed and the piece has a dignified, traditional feel. The spacing and alignment demonstrate careful planning. Continue to refine your stroke confidence and explore subtle variations in thickness to add more dynamism to your work while preserving its classical elegance.'
    },
    {
        id: 'I', name: 'Fathimath Jafna', total: 33, scores: [7, 6, 6, 7, 7], rank: 11, 
        image: 'I.png', certificate: 'certificates/I.pdf',
        juryNote: 'Your work displays good technical competence and thoughtful composition. The letterforms show careful construction and the overall presentation is clean and professional. Continue to develop your unique stylistic voice by studying diverse calligraphic traditions. Focus on building greater expressiveness while maintaining your evident technical discipline.'
    },
    {
        id: 'M', name: 'Fidha Fathima', total: 36, scores: [7, 7, 7, 8, 7], rank: 8, 
        image: 'M.png', certificate: 'certificates/M.pdf',
        juryNote: 'Good foundational work with clear potential for growth. Your composition shows logical structure and the letterforms are carefully rendered. Focus on developing more fluid stroke transitions and exploring greater contrast in your work. Your methodical approach will serve you well as you continue to develop both technical skills and artistic confidence.'
    },
    {
        id: 'N', name: 'Ayishath Husna', total: 34, scores: [7, 7, 6, 7, 7], rank: 10, 
        image: 'N.png', certificate: 'certificates/N.pdf',
        juryNote: 'A sincere effort showing understanding of basic calligraphic principles. Your work demonstrates careful attention and neat presentation. Continue to practice regularly, focusing on building confidence in your strokes and exploring different compositional arrangements. Every master calligrapher began with dedication to fundamentals, and your commitment to learning is the most important foundation for future excellence.'
    },
    {
        id: 'F', name: 'Muhammed Ajeer', total: 33, scores: [7, 7, 6, 7, 6], rank: 11, 
        image: 'F.png', certificate: 'certificates/F.pdf',
        juryNote: 'Your work shows promising technical foundation and good spatial awareness. The letterforms are carefully crafted, and there is clear effort in achieving harmonious composition. Focus on developing more confidence in your stroke work and experiment with varying weights to add more visual interest. Your attention to detail will serve you well as you continue to develop your calligraphic voice.'
    },
    {
        id: 'G', name: 'Rashid', total: 33, scores: [6, 7, 6, 7, 7], rank: 11, 
        image: 'G.png', certificate: 'certificates/G.pdf',
        juryNote: 'A commendable effort showing good grasp of basic principles. Your composition demonstrates thoughtful planning and the overall finish is neat. Continue practicing fundamental stroke techniques to build greater fluency and consistency. Pay attention to the rhythm and flow between letters. With persistent practice, your natural abilities will flourish.'
    },
    {
        id: 'D', name: 'Fathima', total: 36, scores: [7, 7, 7, 8, 7], rank: 8, 
        image: 'D.png', certificate: 'certificates/D.pdf',
        juryNote: 'A solid composition showing good understanding of fundamental calligraphic principles. Your letterforms demonstrate careful attention and the overall layout is well-considered. Continue to work on refining stroke consistency and exploring more dynamic spacing arrangements. With continued practice, your natural sense of balance will develop into even more compelling compositions.'
    },
    {
        id: 'L', name: 'Jasmina', total: 33, scores: [7, 6, 7, 7, 6], rank: 11, 
        image: 'L.png', certificate: 'certificates/L.pdf',
        juryNote: 'Your work demonstrates earnest effort and developing skill. The composition is organized and shows awareness of fundamental principles. Continue practicing stroke control and letter proportions. Study master calligraphers\' works closely to understand the subtle nuances that create visual harmony. Your dedication is apparent, and with continued practice, you will see significant growth.'
    }
];

const criteriaNames = [
    'Letter Formation',
    'Composition & Balance',
    'Readability',
    'Creativity & Expression',
    'Overall Finish'
];

// Sort participants by rank and total score
participants.sort((a, b) => {
    if (a.rank !== b.rank) return a.rank - b.rank;
    return b.total - a.total;
});

// Current section tracking
let currentSection = 'overview';

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
    initializeLandingPage();
    initializeResultsPage();
    
    // Show landing page by default
    const landingPage = document.getElementById('landingPage');
    const resultsPage = document.getElementById('resultsPage');
    
    if (landingPage && resultsPage) {
        landingPage.classList.add('active');
        resultsPage.classList.remove('active');
    }
});

// Landing Page Initialization
function initializeLandingPage() {
    const viewResultsBtn = document.getElementById('viewResultsBtn');
    
    if (viewResultsBtn) {
        viewResultsBtn.addEventListener('click', function(e) {
            e.preventDefault();
            showResults();
        });
    }
}

// Show results page
function showResults() {
    const landingPage = document.getElementById('landingPage');
    const resultsPage = document.getElementById('resultsPage');
    
    if (landingPage && resultsPage) {
        landingPage.classList.remove('active');
        resultsPage.classList.add('active');
        
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// Results Page Initialization
function initializeResultsPage() {
    // Render all entries
    renderEntries('firstGrid', participants.filter(p => p.rank === 1));
    renderEntries('secondGrid', participants.filter(p => p.rank === 2));
    renderEntries('thirdGrid', participants.filter(p => p.rank === 3));
    renderEntries('certificatesGrid', participants.filter(p => p.rank > 3));
    
    // Render certificate download cards
    renderCertificateCards();
    
    // Setup award navigation cards
    setupAwardNavigation();
    
    // Setup navigation buttons
    setupNavigationButtons();
    
    // Setup progress indicator
    setupProgressIndicator();
}

// Render certificate download cards
function renderCertificateCards() {
    const certificateGrid = document.getElementById('certificateGrid');
    if (!certificateGrid) return;
    
    certificateGrid.innerHTML = participants.map(participant => `
        <div class="certificate-card" onclick="downloadCertificate('${participant.certificate}', '${participant.name}')">
            <div class="certificate-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V8L14 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M14 2V8H20M16 13H8M16 17H8M10 9H8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
            <div class="certificate-name">${participant.name}</div>
            <div class="certificate-label">Participant ${participant.id}</div>
            <div class="download-indicator">
                <span>Download PDF</span>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 15V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V15M7 10L12 15M12 15L17 10M12 15V3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
        </div>
    `).join('');
}

// Download certificate function
function downloadCertificate(certificatePath, participantName) {
    // Create a temporary anchor element
    const link = document.createElement('a');
    link.href = certificatePath;
    link.download = `Certificate_${participantName.replace(/\s+/g, '_')}.pdf`;
    link.target = '_blank';
    
    // Trigger download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Optional: Show feedback
    showDownloadFeedback(participantName);
}

// Show download feedback
function showDownloadFeedback(name) {
    // You can add a toast notification here if desired
    console.log(`Downloading certificate for ${name}`);
}

// Setup award navigation cards
function setupAwardNavigation() {
    const awardCards = document.querySelectorAll('.award-nav-card');
    
    awardCards.forEach(card => {
        card.addEventListener('click', function() {
            const category = this.dataset.category;
            navigateToSection(category);
        });
    });
}

// Setup navigation buttons
function setupNavigationButtons() {
    const navButtons = document.querySelectorAll('.nav-btn');
    
    navButtons.forEach(button => {
        button.addEventListener('click', function() {
            const target = this.dataset.nav;
            if (target) {
                navigateToSection(target);
            }
        });
    });
}

// Setup progress indicator
function setupProgressIndicator() {
    const progressSteps = document.querySelectorAll('.progress-step');
    
    progressSteps.forEach(step => {
        step.addEventListener('click', function() {
            const target = this.dataset.step;
            navigateToSection(target);
        });
    });
}

// Navigate to section
function navigateToSection(sectionName) {
    // Hide all sections
    const sections = document.querySelectorAll('.overview-section, .category-section, .closing-section');
    sections.forEach(section => section.classList.remove('active'));
    
    // Update progress indicator
    const progressSteps = document.querySelectorAll('.progress-step');
    progressSteps.forEach(step => step.classList.remove('active'));
    
    // Show target section
    let targetSection;
    let progressStep;
    
    switch(sectionName) {
        case 'overview':
            targetSection = document.getElementById('overviewSection');
            progressStep = document.querySelector('.progress-step[data-step="overview"]');
            break;
        case 'first':
            targetSection = document.getElementById('firstSection');
            progressStep = document.querySelector('.progress-step[data-step="first"]');
            break;
        case 'second':
            targetSection = document.getElementById('secondSection');
            progressStep = document.querySelector('.progress-step[data-step="second"]');
            break;
        case 'third':
            targetSection = document.getElementById('thirdSection');
            progressStep = document.querySelector('.progress-step[data-step="third"]');
            break;
        case 'certificates':
            targetSection = document.getElementById('certificatesSection');
            progressStep = document.querySelector('.progress-step[data-step="certificates"]');
            break;
        case 'jury':
            targetSection = document.getElementById('jurySection');
            // No progress step for jury section
            break;
    }
    
    if (targetSection) {
        targetSection.classList.add('active');
    }
    
    if (progressStep) {
        progressStep.classList.add('active');
    }
    
    // Update current section
    currentSection = sectionName;
    
    // Scroll to top smoothly
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Render entries
function renderEntries(gridId, entries) {
    const grid = document.getElementById(gridId);
    if (!grid) return;
    
    grid.innerHTML = entries.map(participant => `
        <div class="entry-card">
            <div class="entry-image-container">
                <img src="${participant.image}" alt="${participant.name}" class="entry-image" loading="lazy">
            </div>
            <div class="entry-info">
                <div class="entry-name">${participant.name}</div>
                <div class="entry-score">${participant.total}/50</div>
                <button class="view-details-btn" onclick="toggleDetails('${participant.id}')">
                    <span id="btn-${participant.id}">View Detailed Scorecard</span>
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 9L12 16L5 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
            </div>
            <div class="entry-details" id="details-${participant.id}">
                <h4>Detailed Scoring</h4>
                <div class="detailed-scores">
                    ${participant.scores.map((score, index) => `
                        <div class="score-item">
                            <div class="score-category">${criteriaNames[index]}</div>
                            <div class="score-value">${score}/10</div>
                        </div>
                    `).join('')}
                </div>
                <div class="jury-note">
                    <h4>Jury's Assessment</h4>
                    <p>${participant.juryNote}</p>
                </div>
            </div>
        </div>
    `).join('');
}

// Toggle details
function toggleDetails(id) {
    const detailsElement = document.getElementById(`details-${id}`);
    const btnElement = document.getElementById(`btn-${id}`);
    
    if (detailsElement.classList.contains('active')) {
        detailsElement.classList.remove('active');
        btnElement.textContent = 'View Detailed Scorecard';
    } else {
        detailsElement.classList.add('active');
        btnElement.textContent = 'Hide Detailed Scorecard';
    }
}

// Smooth scroll for navigation
function smoothScrollTo(element) {
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Add keyboard navigation
document.addEventListener('keydown', function(e) {
    // Arrow keys for navigation
    if (e.key === 'ArrowRight') {
        navigateNext();
    } else if (e.key === 'ArrowLeft') {
        navigatePrevious();
    } else if (e.key === 'Escape') {
        // Close any open details
        const activeDetails = document.querySelectorAll('.entry-details.active');
        activeDetails.forEach(detail => {
            const id = detail.id.replace('details-', '');
            toggleDetails(id);
        });
    }
});

// Navigate to next section
function navigateNext() {
    const sequence = ['overview', 'first', 'second', 'third', 'certificates', 'jury'];
    const currentIndex = sequence.indexOf(currentSection);
    if (currentIndex < sequence.length - 1) {
        navigateToSection(sequence[currentIndex + 1]);
    }
}

// Navigate to previous section
function navigatePrevious() {
    const sequence = ['overview', 'first', 'second', 'third', 'certificates', 'jury'];
    const currentIndex = sequence.indexOf(currentSection);
    if (currentIndex > 0) {
        navigateToSection(sequence[currentIndex - 1]);
    }
}

// Add loading state for images
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.entry-image, .jury-image, .landing-logo, .header-logo, .thanks-logo');
    
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
        
        img.addEventListener('error', function() {
            this.style.opacity = '0.3';
            this.alt = 'Image not available';
        });
    });
});

// Add intersection observer for animations
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

// Observe entry cards for scroll animations
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.entry-card, .award-nav-card, .glass-card');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(card);
    });
});

// Export functions for global access
window.toggleDetails = toggleDetails;
window.navigateToSection = navigateToSection;
window.downloadCertificate = downloadCertificate;