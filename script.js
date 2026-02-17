// Assignment Data
const assignmentsData = {
    1: {
        id: 1,
        title: "Database Design Project",
        description: "Create a complete database design for library management system with ER diagrams, normalization, and SQL implementation",
        subject: "DBMS101",
        semester: 5,
        dept: "CSE",
        maxMarks: 100,
        dueDate: "Feb 15, 2024",
        createdDate: "Jan 15, 2024",
        tasks: [
            "Design ER diagram for library system including books, members, loans, and staff",
            "Normalize the database to 3NF form",
            "Create SQL schema with appropriate constraints",
            "Implement 10+ complex queries (joins, subqueries, aggregations)",
            "Add triggers for automatic fine calculation",
            "Create stored procedures for common operations"
        ],
        submissions: [
            { name: "Jahn", reg: "351CSE001", status: "graded", marks: "95/100", date: "Feb 10, 2024" },
            { name: "Kuty", reg: "353CSE003", status: "graded", marks: "88/100", date: "Feb 11, 2024" },
            { name: "Anju", reg: "355CSE005", status: "graded", marks: "92/100", date: "Feb 12, 2024" },
            { name: "Jyo", reg: "356CSE006", status: "graded", marks: "85/100", date: "Feb 13, 2024" },
            { name: "Meera", reg: "365CSE008", status: "submitted", marks: "Pending", date: "Feb 14, 2024" },
            { name: "Adi", reg: "357CSE007", status: "submitted", marks: "Pending", date: "Feb 14, 2024" },
            { name: "Appus", reg: "354CSE004", status: "submitted", marks: "Pending", date: "Feb 14, 2024" }
        ]
    },
    2: {
        id: 2,
        title: "Sorting Algorithms Implementation",
        description: "Implement and compare QuickSort, MergeSort, and HeapSort algorithms with time complexity analysis",
        subject: "DSA201",
        semester: 3,
        dept: "CSE",
        maxMarks: 50,
        dueDate: "Feb 20, 2024",
        createdDate: "Jan 20, 2024",
        tasks: [
            "Implement QuickSort with different pivot strategies",
            "Implement MergeSort with optimization",
            "Implement HeapSort algorithm",
            "Compare time complexity on datasets of varying sizes (100, 1000, 10000 elements)",
            "Generate graphs showing performance comparison",
            "Write detailed report on findings"
        ],
        submissions: [
            { name: "Dumku", reg: "352CSE002", status: "submitted", marks: "Pending", date: "Feb 12, 2024" },
            { name: "Jahn", reg: "351CSE001", status: "submitted", marks: "Pending", date: "Feb 15, 2024" },
            { name: "Kuty", reg: "353CSE003", status: "submitted", marks: "Pending", date: "Feb 16, 2024" },
            { name: "Meera", reg: "365CSE008", status: "submitted", marks: "Pending", date: "Feb 17, 2024" },
            { name: "Jyo", reg: "356CSE006", status: "submitted", marks: "Pending", date: "Feb 18, 2024" }
        ]
    },
    3: {
        id: 3,
        title: "Responsive Website Development",
        description: "Create a responsive e-commerce website using HTML5, CSS3, JavaScript with modern design",
        subject: "WEB301",
        semester: 6,
        dept: "CSE",
        maxMarks: 75,
        dueDate: "Feb 25, 2024",
        createdDate: "Jan 25, 2024",
        tasks: [
            "Design homepage with product showcase",
            "Implement product listing with search and filter",
            "Create shopping cart functionality",
            "Add responsive navigation and mobile menu",
            "Implement form validation for checkout",
            "Use CSS Grid and Flexbox for layouts",
            "Add smooth animations and transitions",
            "Ensure mobile-first responsive design"
        ],
        submissions: [
            { name: "Jahn", reg: "351CSE001", status: "graded", marks: "70/75", date: "Feb 10, 2024" },
            { name: "Kuty", reg: "353CSE003", status: "graded", marks: "68/75", date: "Feb 11, 2024" },
            { name: "Anju", reg: "355CSE005", status: "graded", marks: "72/75", date: "Feb 12, 2024" },
            { name: "Jyo", reg: "356CSE006", status: "graded", marks: "65/75", date: "Feb 13, 2024" },
            { name: "Meera", reg: "365CSE008", status: "graded", marks: "71/75", date: "Feb 14, 2024" },
            { name: "Dumku", reg: "352CSE002", status: "submitted", marks: "Pending", date: "Feb 15, 2024" },
            { name: "Adi", reg: "357CSE007", status: "submitted", marks: "Pending", date: "Feb 16, 2024" },
            { name: "Appus", reg: "354CSE004", status: "submitted", marks: "Pending", date: "Feb 17, 2024" },
            { name: "Ravi", reg: "358ECE001", status: "submitted", marks: "Pending", date: "Feb 18, 2024" }
        ]
    },
    4: {
        id: 4,
        title: "Calculus Problem Set",
        description: "Solve 20 integration and differentiation problems covering various techniques",
        subject: "MATH101",
        semester: 1,
        dept: "CSE",
        maxMarks: 60,
        dueDate: "Feb 18, 2024",
        createdDate: "Feb 1, 2024",
        tasks: [
            "Solve 10 integration problems (substitution, parts, partial fractions)",
            "Solve 10 differentiation problems (chain rule, product rule, implicit)",
            "Show all working steps clearly",
            "Verify answers using differentiation/integration",
            "Submit handwritten or typed solutions"
        ],
        submissions: [
            { name: "Jahn", reg: "351CSE001", status: "graded", marks: "55/60", date: "Feb 15, 2024" },
            { name: "Dumku", reg: "352CSE002", status: "graded", marks: "52/60", date: "Feb 15, 2024" },
            { name: "Kuty", reg: "353CSE003", status: "graded", marks: "58/60", date: "Feb 16, 2024" },
            { name: "Appus", reg: "354CSE004", status: "graded", marks: "48/60", date: "Feb 16, 2024" },
            { name: "Anju", reg: "355CSE005", status: "submitted", marks: "Pending", date: "Feb 17, 2024" },
            { name: "Jyo", reg: "356CSE006", status: "graded", marks: "57/60", date: "Feb 17, 2024" },
            { name: "Adi", reg: "357CSE007", status: "graded", marks: "50/60", date: "Feb 17, 2024" },
            { name: "Meera", reg: "365CSE008", status: "graded", marks: "56/60", date: "Feb 17, 2024" },
            { name: "Priya", reg: "359ECE002", status: "graded", marks: "54/60", date: "Feb 17, 2024" },
            { name: "Arjun", reg: "360ME001", status: "graded", marks: "49/60", date: "Feb 17, 2024" },
            { name: "Sneha", reg: "361ME002", status: "graded", marks: "53/60", date: "Feb 17, 2024" },
            { name: "Kavya", reg: "363IT001", status: "graded", marks: "55/60", date: "Feb 17, 2024" }
        ]
    },
    5: {
        id: 5,
        title: "Signal Processing Lab Report",
        description: "Analyze time and frequency domain signals with MATLAB simulations",
        subject: "SIGNALS",
        semester: 4,
        dept: "ECE",
        maxMarks: 80,
        dueDate: "Feb 22, 2024",
        createdDate: "Feb 5, 2024",
        tasks: [
            "Generate and plot sine, cosine, and square waves",
            "Perform FFT analysis on signals",
            "Implement and compare FIR and IIR filters",
            "Analyze frequency response of filters",
            "Document all MATLAB code and outputs",
            "Write comprehensive report with theory and results"
        ],
        submissions: [
            { name: "Ravi", reg: "358ECE001", status: "graded", marks: "75/80", date: "Feb 20, 2024" },
            { name: "Priya", reg: "359ECE002", status: "submitted", marks: "Pending", date: "Feb 21, 2024" }
        ]
    },
    6: {
        id: 6,
        title: "Thermodynamics Case Study",
        description: "Analyze heat transfer in automotive engines with calculations",
        subject: "THERMO201",
        semester: 4,
        dept: "ME",
        maxMarks: 70,
        dueDate: "Feb 28, 2024",
        createdDate: "Feb 8, 2024",
        tasks: [
            "Study heat transfer mechanisms in IC engines",
            "Calculate thermal efficiency for given parameters",
            "Analyze heat losses through different components",
            "Compare Otto and Diesel cycle performance",
            "Suggest improvements for efficiency",
            "Create detailed report with diagrams"
        ],
        submissions: [
            { name: "Arjun", reg: "360ME001", status: "submitted", marks: "Pending", date: "Feb 25, 2024" },
            { name: "Sneha", reg: "361ME002", status: "submitted", marks: "Pending", date: "Feb 26, 2024" }
        ]
    },
    7: {
        id: 7,
        title: "Cloud Computing Project",
        description: "Deploy a web application on AWS with auto-scaling setup",
        subject: "CLOUD301",
        semester: 6,
        dept: "IT",
        maxMarks: 90,
        dueDate: "Mar 05, 2024",
        createdDate: "Feb 10, 2024",
        tasks: [
            "Create EC2 instances for web application",
            "Set up load balancer and auto-scaling group",
            "Configure RDS database",
            "Implement S3 for static file storage",
            "Set up CloudWatch for monitoring",
            "Document architecture and deployment steps",
            "Perform load testing and optimization"
        ],
        submissions: [
            { name: "Kavya", reg: "363IT001", status: "submitted", marks: "Pending", date: "Mar 3, 2024" }
        ]
    },
    8: {
        id: 8,
        title: "Python Programming Lab",
        description: "Complete 10 programs on OOP concepts, file handling, and exceptions",
        subject: "PYTHON201",
        semester: 3,
        dept: "CSE",
        maxMarks: 40,
        dueDate: "Feb 16, 2024",
        createdDate: "Feb 1, 2024",
        tasks: [
            "Program 1: Create classes for Bank Account with inheritance",
            "Program 2: Implement polymorphism with shapes",
            "Program 3: File handling - read/write CSV files",
            "Program 4: Exception handling for user input",
            "Program 5: Create a simple student management system",
            "Program 6: Implement list comprehensions and generators",
            "Program 7: Work with JSON files",
            "Program 8: Create decorators and use them",
            "Program 9: Implement multi-threading example",
            "Program 10: Build a simple web scraper"
        ],
        submissions: [
            { name: "Jahn", reg: "351CSE001", status: "graded", marks: "38/40", date: "Feb 14, 2024" },
            { name: "Dumku", reg: "352CSE002", status: "graded", marks: "35/40", date: "Feb 14, 2024" },
            { name: "Kuty", reg: "353CSE003", status: "graded", marks: "40/40", date: "Feb 15, 2024" },
            { name: "Appus", reg: "354CSE004", status: "graded", marks: "32/40", date: "Feb 15, 2024" },
            { name: "Anju", reg: "355CSE005", status: "graded", marks: "37/40", date: "Feb 15, 2024" },
            { name: "Jyo", reg: "356CSE006", status: "graded", marks: "38/40", date: "Feb 15, 2024" },
            { name: "Adi", reg: "357CSE007", status: "graded", marks: "34/40", date: "Feb 15, 2024" },
            { name: "Meera", reg: "365CSE008", status: "graded", marks: "39/40", date: "Feb 15, 2024" },
            { name: "Ravi", reg: "358ECE001", status: "submitted", marks: "Pending", date: "Feb 16, 2024" },
            { name: "Priya", reg: "359ECE002", status: "submitted", marks: "Pending", date: "Feb 16, 2024" }
        ]
    }
};

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            
            // Update active nav link
            document.querySelectorAll('.nav-links a').forEach(link => {
                link.classList.remove('active');
            });
            this.classList.add('active');
        }
    });
});

// Modal Functionality
const loginBtn = document.getElementById('loginBtn');
const loginModal = document.getElementById('loginModal');
const assignmentModal = document.getElementById('assignmentModal');
const closeButtons = document.querySelectorAll('.close');
const loginForm = document.getElementById('loginForm');

// Open Login Modal
loginBtn.addEventListener('click', () => {
    loginModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
});

// Close Modals
closeButtons.forEach(btn => {
    btn.addEventListener('click', function() {
        this.closest('.modal').style.display = 'none';
        document.body.style.overflow = 'auto';
    });
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        e.target.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Handle Login Form Submission
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const userType = document.getElementById('userType').value;
    
    if (username && password) {
        showNotification(`Welcome! Logging in as ${userType}...`, 'success');
        
        setTimeout(() => {
            loginModal.style.display = 'none';
            document.body.style.overflow = 'auto';
            loginForm.reset();
        }, 1500);
    } else {
        showNotification('Please fill in all fields', 'error');
    }
});

// Open Assignment Details Modal
function openAssignmentDetails(assignmentId) {
    const assignment = assignmentsData[assignmentId];
    if (!assignment) return;
    
    const modalContent = `
        <div class="assignment-detail-header">
            <h2>${assignment.title}</h2>
            <p style="color: var(--text-secondary); margin-bottom: 1rem;">${assignment.description}</p>
        </div>
        
        <div class="assignment-info-grid">
            <div class="info-box">
                <label>Subject</label>
                <div class="value">${assignment.subject}</div>
            </div>
            <div class="info-box">
                <label>Department</label>
                <div class="value">${assignment.dept}</div>
            </div>
            <div class="info-box">
                <label>Semester</label>
                <div class="value">${assignment.semester}</div>
            </div>
            <div class="info-box">
                <label>Max Marks</label>
                <div class="value">${assignment.maxMarks}</div>
            </div>
            <div class="info-box">
                <label>Created Date</label>
                <div class="value">${assignment.createdDate}</div>
            </div>
            <div class="info-box">
                <label>Due Date</label>
                <div class="value" style="color: var(--accent-pink);">${assignment.dueDate}</div>
            </div>
        </div>
        
        <div class="assignment-tasks">
            <h3>📝 Tasks & Requirements:</h3>
            <ul>
                ${assignment.tasks.map(task => `<li>✓ ${task}</li>`).join('')}
            </ul>
        </div>
        
        <div class="submission-list">
            <h3>📊 Student Submissions (${assignment.submissions.length} students)</h3>
            ${assignment.submissions.map(sub => `
                <div class="submission-item">
                    <div class="submission-student">
                        <div class="name">${sub.name}</div>
                        <div class="reg">${sub.reg}</div>
                    </div>
                    <div>
                        <span class="status-pill ${sub.status}">${sub.status === 'graded' ? 'Graded' : 'Submitted'}</span>
                    </div>
                    <div style="min-width: 100px; text-align: center;">
                        <strong>${sub.marks}</strong>
                    </div>
                    <div style="min-width: 120px; text-align: right; color: var(--text-secondary);">
                        ${sub.date}
                    </div>
                </div>
            `).join('')}
        </div>
        
        <div style="margin-top: 2rem; text-align: center;">
            <button class="btn btn-primary" onclick="showNotification('Download feature coming soon!', 'info')">
                📥 Download All Submissions
            </button>
            <button class="btn btn-secondary" onclick="showNotification('Email notification sent!', 'success')" style="margin-left: 1rem;">
                📧 Send Reminder
            </button>
        </div>
    `;
    
    document.getElementById('assignmentDetails').innerHTML = modalContent;
    assignmentModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeAssignmentModal() {
    assignmentModal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Filter Assignments
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        // Remove active class from all buttons
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        // Add active class to clicked button
        this.classList.add('active');
        
        const filter = this.getAttribute('data-filter');
        const cards = document.querySelectorAll('.assignment-card');
        
        cards.forEach(card => {
            if (filter === 'all') {
                card.classList.remove('hidden');
                setTimeout(() => {
                    card.style.animation = 'fadeInUp 0.5s ease';
                }, 10);
            } else {
                if (card.getAttribute('data-dept') === filter) {
                    card.classList.remove('hidden');
                    setTimeout(() => {
                        card.style.animation = 'fadeInUp 0.5s ease';
                    }, 10);
                } else {
                    card.classList.add('hidden');
                }
            }
        });
        
        showNotification(`Showing ${filter === 'all' ? 'All' : filter} assignments`, 'info');
    });
});

// View Assignments Button
document.getElementById('viewAssignments').addEventListener('click', () => {
    document.getElementById('assignments').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
});

// Submit Work Button
document.getElementById('submitWork').addEventListener('click', () => {
    showNotification('Please login to submit your work', 'info');
    setTimeout(() => {
        loginModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }, 1000);
});

// Action Buttons in Submissions Table
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('view-btn')) {
        showNotification('Loading submission details...', 'info');
        setTimeout(() => {
            showNotification('Submission viewed successfully!', 'success');
        }, 1000);
    }
    
    if (e.target.classList.contains('grade-btn')) {
        showNotification('Opening grading interface...', 'info');
        setTimeout(() => {
            const marks = prompt('Enter marks for this submission:');
            if (marks) {
                showNotification(`Marks ${marks} assigned successfully!`, 'success');
            }
        }, 500);
    }
});

// Notification System
function showNotification(message, type = 'info') {
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? 'rgba(76, 175, 80, 0.9)' : 
                     type === 'error' ? 'rgba(244, 67, 54, 0.9)' : 
                     'rgba(33, 150, 243, 0.9)'};
        color: white;
        padding: 1rem 2rem;
        border-radius: 10px;
        box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
        z-index: 3000;
        animation: slideInRight 0.3s ease;
        font-weight: 600;
        backdrop-filter: blur(10px);
        max-width: 300px;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// Add notification animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Scroll Animation Observer
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.assignment-card, .student-card, .stat-card').forEach(card => {
    observer.observe(card);
});

// Active Navigation on Scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.section, .hero');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Parallax Effect for Background Circles
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const circles = document.querySelectorAll('.circle');
    
    circles.forEach((circle, index) => {
        const speed = (index + 1) * 0.1;
        circle.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Counter Animation for Stats
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start);
        }
    }, 16);
}

// Animate stats when they come into view
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumber = entry.target.querySelector('.stat-number');
            const target = parseInt(statNumber.textContent);
            animateCounter(statNumber, target);
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-card').forEach(card => {
    statsObserver.observe(card);
});

// Student Card Click Effect
document.querySelectorAll('.student-card').forEach(card => {
    card.addEventListener('click', function() {
        const studentName = this.querySelector('h4').textContent;
        const regNo = this.querySelector('p').textContent;
        const stats = this.querySelector('.student-stats').textContent;
        showNotification(`${studentName} (${regNo})\n${stats}`, 'info');
    });
});

// Keyboard Shortcuts
document.addEventListener('keydown', (e) => {
    // ESC to close modal
    if (e.key === 'Escape') {
        document.querySelectorAll('.modal').forEach(modal => {
            if (modal.style.display === 'block') {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
    }
    
    // Ctrl/Cmd + L to open login
    if ((e.ctrlKey || e.metaKey) && e.key === 'l') {
        e.preventDefault();
        loginModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
});

// Loading Screen
window.addEventListener('load', () => {
    document.body.style.overflow = 'auto';
    showNotification('Welcome to JKUAD Assignment Portal!', 'success');
});

// Ripple effect for buttons
document.querySelectorAll('button, .card-btn').forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.className = 'ripple';
        
        ripple.style.cssText += `
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.5);
            transform: scale(0);
            animation: ripple-animation 0.6s ease-out;
            pointer-events: none;
        `;
        
        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
});

const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(rippleStyle);

// Console Easter Egg
console.log('%c🎓 JKUAD Assignment Portal', 'color: #e91e63; font-size: 24px; font-weight: bold;');
console.log('%cCode: 0910 6140', 'color: #2196f3; font-size: 16px;');
console.log('%cCreated by Jahnavi', 'color: #e91e63; font-size: 14px; font-style: italic;');
console.log('%c\n💡 Tip: Press Ctrl/Cmd + L to quickly open login!', 'color: #4caf50; font-size: 12px;');
console.log('%c📋 Click on any assignment card to see detailed submission status!', 'color: #2196f3; font-size: 12px;');
