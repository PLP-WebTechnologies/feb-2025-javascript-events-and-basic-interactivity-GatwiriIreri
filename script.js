// Data
const workoutPlans = {
beginner: [
    {
    id: 'b1',
    title: 'Body Weight Basics',
    description: 'A beginner-friendly workout plan focusing on bodyweight exercises.',
    image: 'https://img.freepik.com/premium-photo/fitness-community-promotes-teamwork-diversity-wellness_875825-44399.jpg',
    duration: '20 minutes',
    calories: '150-200',
    details: 'This workout plan is designed for beginners and focuses on bodyweight exercises that can be done anywhere. It includes a warm-up, main workout, and cool-down.',
},

{
    id: 'b2',
    title: 'Walking Challenge',
    description: 'Start your fitness journey with daily walks',
    image: 'https://img.freepik.com/premium-photo/fitness-community-promotes-teamwork-diversity-wellness_875825-44399.jpg',
    duration: '30 min',
    difficulty: 'Easy',
    calories: '100-150',
    details: 'A progressive walking program that increases intensity over time to improve cardiovascular health.'
},
{
    id: 'b3',
    title: 'Flexibility Focus',
    description: 'Improve range of motion and prevent injury',
    image: 'https://img.freepik.com/premium-photo/fitness-community-promotes-teamwork-diversity-wellness_875825-44399.jpg',
    duration: '15 min',
    difficulty: 'Easy',
    calories: '50-100',
    details: 'Gentle stretching routines to improve flexibility, reduce muscle tension, and enhance recovery.'
},
{
    id: 'b4',
    title: 'Beginner Yoga',
    description: 'Learn the basics of yoga practice',
    image: 'https://img.freepik.com/premium-photo/fitness-community-promotes-teamwork-diversity-wellness_875825-44399.jpg',
    duration: '25 min',
    difficulty: 'Easy',
    calories: '100-150',
    details: 'An introduction to fundamental yoga poses and breathing techniques for mind-body wellness.'
}
],

intermediate: [
{
    id: 'i1',
    title: 'HIIT Express',
    description: 'High-intensity interval training for quick results',
    image: 'https://img.freepik.com/premium-photo/fitness-community-promotes-teamwork-diversity-wellness_875825-44399.jpg',
    duration: '25 min',
    difficulty: 'Medium',
    calories: '300-350',
    details: 'Alternating between intense exercise bursts and recovery periods to maximize calorie burn and cardiovascular benefits.'
},
{
    id: 'i2',
    title: 'Strength Foundation',
    description: 'Build muscle with dumbbells and resistance bands',
    image: 'https://img.freepik.com/premium-photo/fitness-community-promotes-teamwork-diversity-wellness_875825-44399.jpg',
    duration: '40 min',
    difficulty: 'Medium',
    calories: '250-300',
    details: 'A comprehensive strength program focusing on all major muscle groups using moderate weights.'
},
{
    id: 'i3',
    title: 'Core Challenge',
    description: 'Strengthen your core for better stability',
    image: 'https://img.freepik.com/premium-photo/fitness-community-promotes-teamwork-diversity-wellness_875825-44399.jpg',
    duration: '20 min',
    difficulty: 'Medium',
    calories: '200-250',
    details: 'Targeted exercises to strengthen abdominals, lower back, and obliques for improved posture and performance.'
},
{
    id: 'i4',
    title: 'Cardio Mix',
    description: 'Varied cardio workout to prevent plateaus',
    image: 'https://img.freepik.com/premium-photo/fitness-community-promotes-teamwork-diversity-wellness_875825-44399.jpg',
    duration: '35 min',
    difficulty: 'Medium',
    calories: '350-400',
    details: 'A combination of running, cycling, and bodyweight exercises to improve endurance and cardiovascular health.'
}
],
advanced: [
{
    id: 'a1',
    title: 'Power Lifting',
    description: ' Medium-intensity functional fitness training',
    image: 'https://img.freepik.com/premium-photo/fitness-community-promotes-teamwork-diversity-wellness_875825-44399.jpg',
    duration: '60 min',
    difficulty: 'Hard',
    calories: '400-450',
    details: 'Focused on the three powerlifting movements: squat, bench press, and deadlift for maximum strength development.'
},
{
    id: 'a2',
    title: 'CrossFit WOD',
    description: 'High-intensity functional fitness training',
    image: 'https://img.freepik.com/premium-photo/fitness-community-promotes-teamwork-diversity-wellness_875825-44399.jpg',
    duration: '45 min',
    difficulty: 'Hard',
    calories: '500-600',
    details: 'Constantly varied functional movements performed at high intensity to improve work capacity across time domains.'
},
{
    id: 'a3',
    title: 'Marathon Prep',
    description: 'Training plan for long-distance running',
    image: 'https://img.freepik.com/premium-photo/fitness-community-promotes-teamwork-diversity-wellness_875825-44399.jpg',
    duration: '90 min',
    difficulty: 'Hard',
    calories: '700-800',
    details: 'Progressive running program with interval training, tempo runs, and long-distance components to prepare for marathon events.'
},
{
    id: 'a4',
    title: 'Advanced Calisthenics',
    description: 'Master bodyweight skills and movements',
    image: 'https://img.freepik.com/premium-photo/fitness-community-promotes-teamwork-diversity-wellness_875825-44399.jpg',
    duration: '50 min',
    difficulty: 'Hard',
    calories: '400-500',
    details: 'Advanced bodyweight exercises focusing on muscle-ups, handstands, front levers, and other gymnastic skills.'
}
]
};

// FAQ DATA
const faqData = [
    {
        question: "How often should I work out?",
        answer: "For beginners, we recommend 3-4 workouts per week with rest days in between. Intermediate users can aim for 4-5 sessions, while advanced athletes might train 5-6 times weekly. Always listen to your body and prioritize recovery."
    },
    {
        question: "Do I need special equipment for these workouts?",
        answer: "Not necessarily! Many of our beginner workouts require minimal or no equipment. For intermediate and advanced plans, basic equipment like dumbbells, resistance bands, or a pull-up bar may enhance your experience, but we offer modifications for all exercises."
    },
    {
        question: "How long until I see results?",
        answer: "Most users report noticeable changes within 4-6 weeks of consistent training. However, many experience improvements in energy and mood within the first 2 weeks. Remember that sustainable fitness is a marathon, not a sprint!"
    },
    {
        question: "Can I switch between different workout plans?",
        answer: "Absolutely! In fact, we encourage trying different workout styles to prevent plateaus and keep your fitness journey interesting. Our app makes it easy to transition between plans while tracking your overall progress."
    },
    {
        question: "Is nutrition guidance included with the app?",
        answer: "Yes! Vibrant Fitness includes basic nutrition tracking and personalized recommendations based on your fitness goals. Premium subscribers receive detailed meal plans and access to registered dietitians for customized advice."
    }
];


// DOM ELEMENTS
document.addEventListener('DOMContentLoaded', function(){
    initWorkoutGallery();
    initFAQAccordion();
            initProgressBars();
            initFormValidation();
            initEventListeners();
            initKeyboardNavigation();

            // Initialize the app with a welcome message
            showHotkeyIndicator('Welcome to Vibrant Fitness! Press "?" for keyboard shortcuts');
});

function initWorkoutGallery() {
    // Set default active plan
    let currentPlan = 'beginner';
    let currentSlide = 0;

     // Get DOM elements
     const galleryContainer = document.querySelector('.workout-gallery');
     const planButtons = document.querySelectorAll('.workout-plan-btn');
     const prevBtn = document.querySelector('.prev-btn');
     const nextBtn = document.querySelector('.next-btn');
     const dotsContainer = document.querySelector('.gallery-dots');

     // Add event listeners to plan buttons
     planButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            planButtons.forEach(btn => btn.classList.remove('active-plan'));
            
            // Add active class to clicked button
            this.classList.add('active-plan');
            
            // Update current plan
            currentPlan = this.dataset.plan;
            currentSlide = 0;
            
            // Load workouts for the selected plan
            loadWorkouts(currentPlan);
            updateDots();
            
            // Change button color on click for visual feedback
            const originalColor = this.style.backgroundColor;
            this.style.backgroundColor = '#00000';
            
            setTimeout(() => {
                this.style.backgroundColor = originalColor;
            }, 300);
        });
    });
    
    // Add event listeners to gallery navigation buttons
    prevBtn.addEventListener('click', () => {
        navigateGallery(-1);
    });
    
    nextBtn.addEventListener('click', () => {
        navigateGallery(1);
    });
    
    // Function to load workouts for a specific plan
    function loadWorkouts(plan) {
        // Clear gallery
        galleryContainer.innerHTML = '';
        
        // Get workouts for the selected plan
        const workouts = workoutPlans[plan];
        
        // Create workout cards
        workouts.forEach(workout => {
            const workoutCard = document.createElement('div');
            workoutCard.className = 'workout-card';
            workoutCard.dataset.id = workout.id;
            
            workoutCard.innerHTML = `
                <div class="workout-image" style="background-image: url('${workout.image}')">
                    <div class="favorite-workout">★</div>
                    <div class="workout-details">
                        <div><strong>Duration:</strong> ${workout.duration}</div>
                        <div><strong>Difficulty:</strong> ${workout.difficulty}</div>
                        <div><strong>Calories:</strong> ${workout.calories}</div>
                        <div><strong>Details:</strong> ${workout.details}</div>
                    </div>
                </div>
                <div class="workout-info">
                    <div class="workout-title">${workout.title}</div>
                    <div class="workout-description">${workout.description}</div>
                </div>
            `;
            
            galleryContainer.appendChild(workoutCard);
        });
        
        // Add event handlers after creating cards
        setupWorkoutCardEvents();
        
        // Create dots for the gallery
        createDots(workouts.length);
    }
    
    // Function to create dots for pagination
    function createDots(count) {
        // Clear existing dots
        dotsContainer.innerHTML = '';
        
        // Create new dots
        for (let i = 0; i < count; i++) {
            const dot = document.createElement('div');
            dot.className = `gallery-dot ${i === 0 ? 'active' : ''}`;
            dot.dataset.index = i;
            
            // Add event listener to dot
            dot.addEventListener('click', function() {
                currentSlide = parseInt(this.dataset.index);
                scrollToSlide(currentSlide);
                updateDots();
            });
            
            dotsContainer.appendChild(dot);
        }
    }
    
    // Function to update active dot
    function updateDots() {
        const dots = document.querySelectorAll('.gallery-dot');
        dots.forEach((dot, index) => {
            if (index === currentSlide) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }
    
    // Function to navigate gallery
    function navigateGallery(direction) {
        const cards = document.querySelectorAll('.workout-card');
        
        // Update current slide
        currentSlide += direction;
        
        // Handle edge cases
        if (currentSlide < 0) {
            currentSlide = cards.length - 1;
        } else if (currentSlide >= cards.length) {
            currentSlide = 0;
        }
        
        // Scroll to the slide
        scrollToSlide(currentSlide);
        
        // Update dots
        updateDots();
    }
    
    // Function to scroll to a specific slide
    function scrollToSlide(index) {
        const cards = document.querySelectorAll('.workout-card');
        
        if (cards[index]) {
            cards[index].scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
                inline: 'center'
            });
        }
    }
    
    // Function to setup event handlers for workout cards
    function setupWorkoutCardEvents() {
        const cards = document.querySelectorAll('.workout-card');
        
        cards.forEach(card => {
            // Double-click to favorite
            card.addEventListener('dblclick', function(e) {
                const favoriteIcon = this.querySelector('.favorite-workout');
                favoriteIcon.classList.toggle('active');
                
                if (favoriteIcon.classList.contains('active')) {
                    showHotkeyIndicator('Added to favorites!');
                } else {
                    showHotkeyIndicator('Removed from favorites');
                }
                
                // Prevent double-click from selecting text
                e.preventDefault();
            });
            
            // Single click to show workout details
            card.addEventListener('click', function() {
                // We don't need this if using hover effect, but keeping for mobile devices
                const details = this.querySelector('.workout-details');
                
                // Only toggle if not already visible due to hover
                if (window.innerWidth <= 768) {
                    if (details.style.transform === 'translateY(0px)') {
                        details.style.transform = 'translateY(100%)';
                    } else {
                        details.style.transform = 'translateY(0px)';
                    }
                }
            });
            
            // Direct favorite icon click (for mobile users)
            const favoriteIcon = card.querySelector('.favorite-workout');
            favoriteIcon.addEventListener('click', function(e) {
                // Prevent card click event
                e.stopPropagation(); 
                this.classList.toggle('active');
                
                if (this.classList.contains('active')) {
                    showHotkeyIndicator('Added to favorites!');
                } else {
                    showHotkeyIndicator('Removed from favorites');
                }
            });
        });
    }
    
    // Load initial workouts
    loadWorkouts(currentPlan);
}

// ===== FAQ ACCORDION =====
function initFAQAccordion() {
    const faqContainer = document.querySelector('.faq-container');
    
    // Create FAQ items
    faqData.forEach((item, index) => {
        const faqItem = document.createElement('div');
        faqItem.className = 'faq-item';
        faqItem.dataset.index = index;
        
        faqItem.innerHTML = `
            <div class="faq-question">
                ${item.question}
                <span class="faq-icon">▼</span>
            </div>
            <div class="faq-answer">
                ${item.answer}
            </div>
        `;
        
        faqContainer.appendChild(faqItem);
    });
    
    // Add event listeners to FAQ questions
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', function() {
            // Toggle active class
            item.classList.toggle('active');
            
            // Close other items (accordion behavior)
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
        });
    });
}

// ===== PROGRESS BARS =====
function initProgressBars() {
    // Get all progress bars
    const progressBars = document.querySelectorAll('.progress-bar');
    
    // Function to animate progress bars
    function animateProgressBars() {
        progressBars.forEach(bar => {
            const progress = bar.dataset.progress;
            bar.style.width = progress + '%';
        });
    }
    
    // Create an Intersection Observer to trigger animation when visible
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateProgressBars();
                // Unobserve after animation has been triggered
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });
    
    // Observe the stats section
    const statsSection = document.querySelector('.stats-section');
    observer.observe(statsSection);
}

// ===== FORM VALIDATION =====
function initFormValidation() {
    // Get form elements
    const form = document.getElementById('signup-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const passwordError = document.getElementById('password-error');
    const passwordStrengthBar = document.querySelector('.password-strength-bar');
    const formSuccess = document.querySelector('.form-success');
    
    // Function to validate name
    function validateName() {
        // Check if name is empty
        if (nameInput.value.trim() === '') {
            nameInput.classList.add('error');
            nameInput.classList.remove('valid');
            nameError.style.display = 'block';
            return false;
        } else {
            nameInput.classList.remove('error');
            nameInput.classList.add('valid');
            nameError.style.display = 'none';
            return true;
        }
    }
    
    // Function to validate email
    function validateEmail() {
        // Simple email validation regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        // Check if email is valid
        if (!emailRegex.test(emailInput.value)) {
            emailInput.classList.add('error');
            emailInput.classList.remove('valid');
            emailError.style.display = 'block';
            return false;
        } else {
            emailInput.classList.remove('error');
            emailInput.classList.add('valid');
            emailError.style.display = 'none';
            return true;
        }
    }
    
    // Function to validate password
    function validatePassword() {
        const password = passwordInput.value;
        let strength = 0;
        
        // Check password strength
        if (password.length >= 8) strength += 25;
        if (password.match(/[a-z]+/)) strength += 25;
        if (password.match(/[A-Z]+/)) strength += 25;
        if (password.match(/[0-9]+/)) strength += 25;
        
        // Update password strength bar
        passwordStrengthBar.style.width = strength + '%';
        
        // Update password strength bar color
        if (strength < 50) {
            passwordStrengthBar.style.backgroundColor = '#f44336'; // Red
        } else if (strength < 75) {
            passwordStrengthBar.style.backgroundColor = '#ff9800'; // Orange
        } else {
            passwordStrengthBar.style.backgroundColor = '#4CAF50'; // Green
        }
        
        // Check if password meets minimum requirements
        if (password.length < 8 || !password.match(/[a-zA-Z]/) || !password.match(/[0-9]/)) {
            passwordInput.classList.add('error');
            passwordInput.classList.remove('valid');
            passwordError.style.display = 'block';
            return false;
        } else {
            passwordInput.classList.remove('error');
            passwordInput.classList.add('valid');
            passwordError.style.display = 'none';
            return true;
        }
    }
    
    // Add event listeners for real-time validation
    nameInput.addEventListener('input', validateName);
    emailInput.addEventListener('input', validateEmail);
    passwordInput.addEventListener('input', validatePassword);
    
    // Add event listener for form submission
    form.addEventListener('submit', function(e) {
        // Prevent actual form submission
        e.preventDefault(); 
        
        // Validate all fields
        const isNameValid = validateName();
        const isEmailValid = validateEmail();
        const isPasswordValid = validatePassword();
        
        // If all fields are valid, show success message
        if (isNameValid && isEmailValid && isPasswordValid) {
            form.style.display = 'none';
            formSuccess.style.display = 'block';
            
            // Show notification
            showHotkeyIndicator('Registration successful!');
        } else {
            // Show error message
            showHotkeyIndicator('Please fix the errors in the form');
        }
    });
    
    // Add event listeners for blur events
    nameInput.addEventListener('blur', validateName);
    emailInput.addEventListener('blur', validateEmail);
    passwordInput.addEventListener('blur', validatePassword);
}

// ===== EVENT LISTENERS =====
function initEventListeners() {
    // Get CTA button
    const ctaButton = document.querySelector('.btn-cta');
    
    // Add event listener for CTA button
    ctaButton.addEventListener('mouseover', function() {
        // Change button color on hover
        this.style.backgroundColor = '#C76E00'; // Change to secondary color
    });
    
    ctaButton.addEventListener('mouseout', function() {
        // Reset button color
        this.style.backgroundColor = '#FF4B33'; // Reset to primary color
    });
    
    // Add event listener for CTA button click
    ctaButton.addEventListener('click', function() {
        // Scroll to signup section
        document.getElementById('signup').scrollIntoView({
            behavior: 'smooth'
        });
        
        // Show notification
        showHotkeyIndicator('Let\'s get started!');
    });
    
    // Add event listeners for feature cards
    const featureCards = document.querySelectorAll('.feature-card');
    
    featureCards.forEach(card => {
        card.addEventListener('mouseover', function() {
            // Add shadow effect
            this.style.boxShadow = '0 15px 30px rgba(0,0,0,0.1)';
        });
        
        card.addEventListener('mouseout', function() {
            // Reset shadow effect
            this.style.boxShadow = '0 5px 15px rgba(0,0,0,0.05)';
        });
        
        card.addEventListener('click', function() {
            // Show feature details
            const feature = this.dataset.feature;
            let message = '';
            
            switch (feature) {
                case 'tracking':
                    message = 'Track your workouts, calories, and progress!';
                    break;
                case 'workouts':
                    message = 'Hundreds of personalized workout plans!';
                    break;
                case 'nutrition':
                    message = 'Get customized nutrition advice!';
                    break;
                default:
                    message = 'Explore our amazing features!';
            }
            
            showHotkeyIndicator(message);
        });
    });
}

// ===== KEYBOARD NAVIGATION =====
function initKeyboardNavigation() {
    // Add event listener for keydown events
    document.addEventListener('keydown', function(e) {
        // Get current active workout plan
        const activePlan = document.querySelector('.workout-plan-btn.active-plan');
        const currentPlan = activePlan ? activePlan.dataset.plan : 'beginner';
        
        // Handle keyboard shortcuts
        switch (e.key) {
            case '1':
                // Switch to beginner plan
                document.querySelector('[data-plan="beginner"]').click();
                showHotkeyIndicator('Switched to Beginner Plan');
                break;
            case '2':
                // Switch to intermediate plan
                document.querySelector('[data-plan="intermediate"]').click();
                showHotkeyIndicator('Switched to Intermediate Plan');
                break;
            case '3':
                // Switch to advanced plan
                document.querySelector('[data-plan="advanced"]').click();
                showHotkeyIndicator('Switched to Advanced Plan');
                break;
            case 'ArrowLeft':
                // Previous workout
                document.querySelector('.prev-btn').click();
                break;
            case 'ArrowRight':
                // Next workout
                document.querySelector('.next-btn').click();
                break;
            case 'f':
                // Scroll to features section
                document.getElementById('features').scrollIntoView({
                    behavior: 'smooth'
                });
                showHotkeyIndicator('Navigated to Features');
                break;
            case 'w':
                // Scroll to workouts section
                document.getElementById('workouts').scrollIntoView({
                    behavior: 'smooth'
                });
                showHotkeyIndicator('Navigated to Workouts');
                break;
            case 's':
                // Scroll to stats section
                document.getElementById('stats').scrollIntoView({
                    behavior: 'smooth'
                });
                showHotkeyIndicator('Navigated to Stats');
                break;
            case 'q':
                // Scroll to FAQ section
                document.getElementById('faq').scrollIntoView({
                    behavior: 'smooth'
                });
                showHotkeyIndicator('Navigated to FAQ');
                break;
            case 'r':
                // Scroll to signup section
                document.getElementById('signup').scrollIntoView({
                    behavior: 'smooth'
                });
                showHotkeyIndicator('Navigated to Sign Up');
                break;
            case '?':
                // Show keyboard shortcuts
                showHotkeyIndicator(`
                    Keyboard Shortcuts:
                    1, 2, 3 - Switch workout plans
                    ← → - Navigate workouts
                    F - Features
                    W - Workouts
                    S - Stats
                    Q - FAQ
                    R - Sign Up
                `);
                break;
            case 'Escape':
                // Hide hotkey indicator
                hideHotkeyIndicator();
                break;
        }
    });
}

// ===== UTILITY FUNCTIONS =====
// Function to show hotkey indicator
function showHotkeyIndicator(message) {
    const indicator = document.getElementById('hotkey-display');
    indicator.textContent = message;
    indicator.style.opacity = '1';
    
    // Hide indicator after 3 seconds
    setTimeout(() => {
        hideHotkeyIndicator();
    }, 3000);
}

// Function to hide hotkey indicator
function hideHotkeyIndicator() {
    const indicator = document.getElementById('hotkey-display');
    indicator.style.opacity = '0';
}