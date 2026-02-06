
import { Clock, PlayCircle, ShieldCheck, Monitor, Layout, FileCheck, MessageCircle, CreditCard, Landmark, HandCoins, BookOpen, ClipboardList, BadgeCheck, Archive, Globe, Megaphone, Smartphone, Database, Trophy } from 'lucide-react';

export const schoolFeatures = [
    {
        title: "Automated Schedules",
        description:
            "Precision timing for classes, breaks, and exams. Set it and forget it with our reliable automation system.",
        link: "/features/automated-schedules",
    },
    {
        title: "Custom Alerts",
        description:
            "Easily configure emergency notifications, regular announcements, and special event chimes.",
        link: "/features/custom-alerts",
    },
    {
        title: "Music Integration",
        description:
            "Replace harsh bells with pleasant chimes or custom music tracks to create a better campus atmosphere.",
        link: "/features/music-integration",
    },
    {
        title: "Zone Control",
        description:
            "Manage bells for different buildings or wings separately. ideal for large campuses with multiple blocks.",
        link: "/features/zone-control",
    },
    {
        title: "Web Dashboard",
        description:
            "Access and manage your school's bell schedule from anywhere, on any device, with our intuitive cloud interface.",
        link: "/features/web-dashboard",
    },
    {
        title: "Smart Integration",
        description:
            "Seamlessly connects with your existing PA systems and speakers. No need for expensive hardware overhauls.",
        link: "/features/smart-integration",
    },
];

export const moduleCategories = [
    {
        title: "STUDENT MODULES",
        description: "Specialized tools designed to enhance learning, track academic performance, and enrich the overall student campus experience.",
        serviceIds: [
            "online-exam",
            "homework-diary",
            "games-pet",
            "library-management",
        ]
    },
    {
        title: "PARENT MODULES",
        description: "Intuitive tools that keep parents informed, connected, and engaged in their child’s academic journey through real-time insights and communication.",
        serviceIds: [
            "parent-student-portal",
            "communication",
            "whatsapp-communication",
            "mobile-app",
            "concerns",
            "vehicle-tracking",
        ]
    },
    {
        title: "SCHOOL MANAGEMENT MODULES",
        description: "Powerful administrative tools built to streamline operations, optimize resources, and ensure effective institutional governance.",
        serviceIds: [
            "administration-operations",
            "academic-management",
            "inventory-assets",
            "staff-hr-management",
            "approval-system",
            "smart-attendance",
            "finance-management",
            "accounts",
            "payment-gateway-integration",
            "payroll-management",
            "student-lifecycle-management",
            "student-performance-analytics",
            "document-record-management",
            "certificates",
            "id-cards",
            "data-migration",
            "lesson-planning",
            "timetable-scheduling",
            "website-integration",
            "digital-marketing",
            "hostel-management",
            "security-access-control",
            "help-desk"
        ]
    }
];

export const services = [
    {
        id: "student-lifecycle-management",
        title: "Student Lifecycle Management ",
        desc: "Manages the student journey from admission to graduation/transfer.",
        image: "/schoolBells/StudentLifecycleMgmt.webp",
        icon: Clock,
        fullDesc: "Take complete control of the student journey from the first enquiry to the final graduation. The Student Lifecycle Management module digitizes the entire administrative path, including online admissions, profile creation, document archiving, and class allocation. It ensures that every record, from transfer certificates to alumni data, is stored securely and accessible in seconds, eliminating manual filing and administrative bottlenecks.",
        features: [
            "Online Admission & Enquiry",
            "Student Registration & Profiles",
            "Document Management",
            "Class & Section Allocation",
            "Student Transfer / TC Management",
            "Alumni Records"
        ],
        benefits: [
            "Online Admissions & Enrollment",
            "Student Records & Transfer Management",
            "Attendance Tracking",
            "Academic Performance Monitoring",
            "Progress Reports & Report Cards"
        ],
        otherModules: [
            { id: "parent-student-portal", title: "Parent & Student Portal" },
            { id: "smart-attendance", title: "Smart Attendance" },
            { id: "certificates", title: "Certificates" },
            { id: "id-cards", title: "ID Cards" }
        ],
    },
    {
        id: "academic-management",
        title: "Academic Management",
        desc: "Handles classroom learning and academic structure.",
        image: "/schoolBells/AcademicManagement.webp",
        icon: PlayCircle,
        fullDesc: "Standardize and streamline your institution's academic operations. The Academic Management module empowers teachers with tools for lesson planning, timetable scheduling, and curriculum tracking. It automates the generation of report cards and progress sheets, ensuring that assessments are recorded accurately and shared transparently. By digitizing the grade book and subject setup, it lets educators focus more on teaching and less on paperwork.",
        features: [
            "Class & Subject Setup",
            "Timetable Scheduling",
            "Lesson Planning",
            "Homework & Assignments",
            "Exam & Assessment Management",
            "Report Cards & Progress Cards",
            "Grade Book"
        ],
        benefits: [
            "Easy curriculum and syllabus planning",
            "Digital attendance tracking for students and staff",
            "Examination planning and result management",
            "Assignment and homework management",
            "Seamless communication between teachers, students, and parents"
        ],
        otherModules: [
            { id: "timetable-scheduling", title: "Timetable & Scheduling" },
            { id: "online-exam", title: "Online Exam" },
            { id: "lesson-planning", title: "Lesson Planning" },
            { id: "homework-diary", title: "Homework & Diary" }
        ],
    },
    {
        id: "student-performance-analytics",
        title: "Student Performance & Analytics",
        desc: "Tracks and analyzes academic growth.",
        image: "/schoolBells/StudentData.webp",
        icon: PlayCircle,
        fullDesc: "Unlock deep insights into every student's academic journey. Our Student Performance & Analytics module provides administrators and teachers with powerful data visualization tools to track subject-wise progress, term-wise growth, and overall grade trends. By identifying learning gaps and performance dips early through automated warnings, the system ensures that no student is left behind. It correlates attendance with results to give a 360-degree view of institutional success.",
        features: [
            "Performance Dashboards",
            "Subject-wise Analysis",
            "Term-wise Progress Tracking",
            "Teacher Remarks",
            "Early Warning for Weak Performance"
        ],
        benefits: [
            "Comprehensive tracking of student academic performance",
            "Subject-wise and class-wise performance analysis",
            "Exam, test, and assessment analytics",
            "Individual student progress reports",
            "Identification of learning gaps and strengths",
            "Attendance vs performance insights"
        ],
        otherModules: [
            { id: "academic-management", title: "Academic" },
            { id: "online-exam", title: "Online Exam" },
            { id: "reports-dashboards", title: "Reports" },
            { id: "personalised-dashboards", title: "Dashboards" }
        ],
    },
    {
        id: "parent-student-portal",
        title: "Parent & Student Portal",
        desc: "Keeps families connected with school activities.",
        image: "/schoolBells/Parent&StudentPortal.webp",
        icon: PlayCircle,
        fullDesc: "Bridging the gap between the classroom and home. The Parent & Student Portal offers a dedicated, real-time window into school life. Parents can instantly track their child's attendance, review homework assignments, download report cards, and monitor fee payments—all from their smartphone. This transparency fosters a stronger partnership between educators and families, ensuring parents are always informed and students stay on top of their academic responsibilities.",
        features: [
            "Attendance Updates",
            "Homework & Exam Schedules",
            "Report Cards Access",
            "Fee Status & Payments",
            "Announcements & Notifications",
            "Messaging with Teachers"
        ],
        benefits: [
            "Dedicated portal for parents and students",
            "Easy access to academic information",
            "Attendance, timetable, and exam details",
            "Student performance and progress reports",
            "Homework and assignment updates",
            "School announcements and notifications",
        ],
        otherModules: [
            { id: "homework-diary", title: "Homework & Diary" },
            { id: "communication", title: "Communication" },
            { id: "finance-management", title: "Finance" },
            { id: "mobile-app", title: "MobileApp" }
        ],
    },
    {
        id: "finance-management",
        title: "Finance Management",
        desc: "Simplifies school financial operations.",
        image: "/schoolBells/financialmanagement.webp",
        icon: PlayCircle,
        fullDesc: "Simplify and secure your institution's financial ecosystem. The Fee & Finance Management module automates the entire collection process, from defining complex fee structures and scholarship concessions to generating professional digital receipts. Supporting both online and offline payments, it provides real-time tracking of outstanding dues and automated reminders for parents. Comprehensive financial reporting gives management total clarity on cash flow and institutional revenue.",
        features: [
            "Fee Structure Setup",
            "Online Fee Payments",
            "Installment & Concession Management",
            "Receipt Generation",
            "Outstanding Fee Tracking",
            "Financial Reports"
        ],
        benefits: [
            "Complete school fee and finance management",
            "Fee collection and payment tracking",
            "Online and offline payment support",
            "Automatic fee receipts and invoices",
            "Outstanding dues and balance tracking",
            "Discounts, concessions, and refunds management"
        ],
        otherModules: [
            { id: "payment-gateway-integration", title: "Payment Gateway" },
            { id: "account", title: "Account" },
            { id: "payroll-management", title: "Payroll" },
            { id: "inventory-assets", title: "Inventory & Assets" }
        ],
    },
    {
        id: "vehicle-tracking",
        title: "Vehicle Tracking",
        desc: "Ensures safe and organized student transport.",
        image: "/schoolBells/transportation.webp",
        icon: PlayCircle,
        fullDesc: "Putting student safety and operational efficiency first. Our Transport Management module provides end-to-end control over your school's fleet and route logistics. From optimizing routes to save time and fuel to real-time tracking of vehicle location and student pickups/drops, the system ensures a secure commute. It integrates seamlessly with fee management for transport billing and maintains digital records of all vehicles and drivers for complete compliance and peace of mind.",
        features: [
            "Route Planning & Optimization",
            "Student Tracking",
            "Vehicle & Driver Records",
            "Student Route Allocation",
            "Pickup/Drop Tracking",
            "Transport Fee Integration"
        ],
        benefits: [
            "Complete school transport management",
            "Route planning and optimization",
            "Student tracking and monitoring",
            "Vehicle and driver management",
            "Student route allocation",
            "Pickup/drop tracking",
            "Transport fee integration"
        ],
        otherModules: [
            { id: "smart-attendance", title: "Attendance" },
            { id: "communication", title: "Communication" },
            { id: "finance-management", title: "Finance" },
            { id: "security-access-control", title: "Security" }
        ],
    },
    {
        id: "staff-hr-management",
        title: "Staff & HR Management",
        desc: "Manages teachers and non-teaching staff.",
        image: "/image/products/schoolBells/hr.webp",
        icon: PlayCircle,
        fullDesc: "Empower your faculty and streamline administrative HR tasks. The Staff & HR Management module serves as a centralized hub for all employee-related data. Manage teacher profiles, track attendance, and handle leave applications with ease. The system simplifies payroll processing by integrating workload and attendance data, ensuring accurate and timely salary disbursement. From recruitment to performance reviews, it organizes your institutional backbone for maximum productivity.",
        features: [
            "Staff Directory & Profiles",
            "Leave Management",
            "Payroll Integration",
            "Performance Tracking",
            "Recruitment Management",
        ],
        benefits: [
            "Centralized staff and HR management system",
            "Employee profiles and records management",
            "Staff attendance and leave management",
            "Payroll and salary structure support",
            "Role and responsibility assignment",
            "Teacher workload and scheduling management"
        ],
        otherModules: [
            { id: "payroll-management", title: "Payroll" },
            { id: "timetable-scheduling", title: "Staff Schedule" },
            { id: "approval-system", title: "Approval System" },
            { id: "security-access-control", title: "Security" }
        ],
    },
    {
        id: "communication",
        title: "Communication",
        desc: "Centralized communication system.",
        image: "/schoolBells/Communication.webp",
        icon: ShieldCheck,
        fullDesc: "Unify your campus with an instant, multi-channel communication engine. This module ensures that every critical update—from daily circulars and event reminders to emergency alerts—reaches parents and staff immediately via SMS, email, and app notifications. It bridges the gap between home and school, enhancing parent engagement and ensuring that the entire school community is always informed, safe, and synchronized.",
        features: [
            "SMS / Email / App Notifications",
            "Circulars & Announcements",
            "Event Reminders",
            "Emergency Alerts",
            "SMS/App Alerts to Parents & Staff",
        ],
        benefits: [
            "Instant communication between school, teachers, parents, and students",
            "Real-time notifications for announcements and updates",
            "Two-way communication for queries and responses",
            "Attendance and leave notifications",
            "mproved parent engagement and transparency"
        ],
        otherModules: [
            { id: "whatsapp-communication", title: "Whatsapp" },
            { id: "mobile-app", title: "Mobile App" },
            { id: "personalised-dashboards", title: "Dashboards" },
            { id: "digital-marketing", title: "Digital Marketing" }
        ],
    },
    {
        id: "timetable-scheduling",
        title: "Timetable & Scheduling",
        desc: "Organizes daily academic flow.",
        image: "/schoolBells/Timetable.webp",
        icon: ShieldCheck,
        fullDesc: "Master the complexity of school scheduling with our intelligent Timetable module. It automates class allocations, balances teacher workloads, and manages exam schedules with ease. The system also handles real-time substitution management, allowing administrators to fill gaps instantly when a teacher is absent. Smooth transitions and optimized resource use ensure that the academic flow remains uninterrupted and efficient.",
        features: [
            "Class Timetables",
            "Teacher Workload Allocation",
            "Substitution Management",
            "Exam Schedules",
        ],
        benefits: [
            "Smart and automated timetable creation",
            "Easy class, subject, and teacher scheduling",
            "Flexible rescheduling with instant updates",
            "Teacher workload and availability management",
            "Time-saving academic planning"
        ],
        otherModules: [
            { id: "academic-management", title: "Academics" },
            { id: "lesson-planning", title: "Lesson Plan" },
            { id: "staff-hr-management", title: "Staff & HR" },
            { id: "online-exam", title: "Online Exam" }
        ],
    },
    {
        id: "smart-attendance",
        title: "Smart Attendance",
        desc: "Automates daily attendance tracking.",
        image: "/schoolBells/smart.webp",
        icon: ShieldCheck,
        fullDesc: "Modernize your daily roll call with precision and speed. The Attendance Management module provides multiple ways to track student and staff presence, from digital registers to biometric/RFID integration. Parents receive instant absence alerts, and teachers gain access to comprehensive weekly and monthly reports. By automating this core task, the school reduces errors and ensures complete visibility into student and staff reliability.",
        features: [
            "Student Attendance",
            "Staff Attendance",
            "Biometric/RFID Integration (Optional)",
            "Leave Management",
            "Attendance Reports",
        ],
        benefits: [
            "Digital student and staff attendance tracking",
            "Daily, period-wise, and subject-wise attendance",
            "Quick and easy attendance marking",
            "Real-time attendance updates",
            "Automatic attendance reports and summaries",
            "Leave and absence management"
        ],
        otherModules: [
            { id: "whatsapp-communication", title: "Whatsapp" },
            { id: "student-lifecycle-management", title: "Student Data" },
            { id: "staff-hr-management", title: "Staff & HR" },
            { id: "reports-dashboards", title: "Reports & Dashboards" }
        ],
    },
    {
        id: "document-record-management",
        title: "Document & Record Management",
        desc: "Digitizes all school records.",
        image: "/schoolBells/RecordManagement.webp",
        icon: ShieldCheck,
        fullDesc: "Eliminate the clutter and risks of physical paperwork. Our Document & Record Management module creates a secure digital vault for every student and staff member. From admission forms and ID proofs to certificates and letters, everything is stored in one searchable archive. This ensures high-speed retrieval for audits or transfers and maintains a permanent, tamper-proof history of all institutional records while significantly reducing storage costs.",
        features: [
            "Student Documents",
            "Staff Documents",
            "Certificates & Letters",
            "Digital Archive",
        ],
        benefits: [
            "Reduced paperwork and physical storage",
            "Secure digital management of student and staff records",
            "Easy upload, access, and retrieval of documents",
            "Admission, academic, and administrative record management",
            "Certificates, ID proofs, and report storage",
        ],
        otherModules: [
            { id: "student-lifecycle-management", title: "Student Data" },
            { id: "staff-hr-management", title: "Staff & HR" },
            { id: "security-access-control", title: "Security" },
            { id: "data-migration", title: "Data Migration" }
        ],
    },
    {
        id: "administration-operations",
        title: "Administration & Operations",
        desc: "Supports school management functions.",
        image: "/schoolBells/Admin.webp",
        icon: ShieldCheck,
        fullDesc: "The Administration & Operations module is the central nervous system of your school's daily activities. It orchestrates everything from inventory and assets to library resources and event management. By providing a unified platform for compliance records and operational tracking, it reduces administrative overhead and ensures that all school resources are used effectively to support the learning mission.",
        features: [
            "Inventory Management",
            "Library Management",
            "Hostel Management (Optional)",
            "Event Management",
            "Compliance Records",
        ],
        benefits: [
            "Centralized school administration management",
            "Streamlined day-to-day school operations",
            "Student admissions and enrollment management",
            "Staff and faculty administration",
            "Fee structure and operational tracking support",
        ],
        otherModules: [
            { id: "inventory-assets", title: "Inventory" },
            { id: "approval-system", title: "Approval System" },
            { id: "reports-dashboards", title: "Dashboard" },
            { id: "website-integration", title: "Website" }
        ],
    },
    {
        id: "reports-dashboards",
        title: "Reports & Dashboards",
        desc: "Data-driven insights for decision makers.",
        image: "/schoolBells/dashboard.webp",
        icon: ShieldCheck,
        fullDesc: "Turn raw data into actionable intelligence with our Reports & Dashboards module. Administrators gain real-time visibility into every aspect of the institution, from financial health and fee collection to staff performance and student outcomes. Custom MIS reports and intuitive data visualizations help leadership make informed strategic decisions based on accurate, up-to-the-minute information.",
        features: [
            "Attendance Reports",
            "Fee Collection Reports",
            "Academic Performance Reports",
            "Staff Reports",
            "Custom MIS Reports"
        ],
        benefits: [
            "Real-time academic and administrative dashboards",
            "Student performance and progress reports",
            "Attendance and leave analytics",
            "Examination and result reports",
            "Teacher performance and workload insights"
        ],
        otherModules: [
            { id: "personalised-dashboards", title: "Personalized Dashboards" },
            { id: "student-performance-analytics", title: "Student Analytics" },
            { id: "finance-management", title: "Finance" },
            { id: "academic-management", title: "academic" }
        ],
    },
    {
        id: "security-access-control",
        title: "Security & Access Control",
        desc: "Ensures safe data management.",
        image: "/schoolBells/Security&AccessControl.webp",
        icon: ShieldCheck,
        fullDesc: "Protect your institution's most sensitive data with bank-grade security and precision access control. This module manages user roles and permissions, ensuring that teachers, parents, and administrators see only the information they need. With automated data backups, comprehensive activity logs, and strict privacy controls, we ensure that your school's digital assets remain safe, compliant, and always available.",
        features: [
            "Role-Based Access",
            "Data Backup",
            "Activity Logs",
            "Privacy Controls"
        ],
        benefits: [
            "Secure data protection for school information",
            "Role-based access for administrators, teachers, parents, and students",
            "Controlled permissions for sensitive data",
            "User authentication and login security",
            "Student and staff data privacy management",
            "Activity logs and access tracking"
        ],
        otherModules: [
            { id: "document-record-management", title: "Document & Record Management" },
            { id: "administration-operations", title: "Admin & Operations" },
            { id: "reports-dashboards", title: "Reports & Dashboards" },
            { id: "staff-hr-management", title: "Staff & HR" }
        ],
    },
    {
        id: "online-exam",
        title: "Online Exam",
        desc: "Conduct secure and scalable online assessments.",
        image: "/schoolBells/OnlineExam.webp",
        icon: Monitor,
        fullDesc: "Modernize your examination process with our robust Online Exam module. It allows schools to conduct objective and subjective tests remotely or in computer labs. With features like question bank management, automatic grading for objective questions, and timed sessions, it simplifies the entire assessment lifecycle while preventing malpractice.",
        features: [
            "Question Bank Management",
            "Automatic Grading",
            "Timed Test Sessions",
            "Result Analysis & Reports",
            "Proctoring Support"
        ],
        benefits: [
            "Instant result generation",
            "Paperless and eco-friendly exams",
            "Detailed performance analytics",
            "Reduced manual grading effort",
            "Secure and proctored testing environment"
        ],

        otherModules: [
            { id: "student-performance-analytics", title: "Student Performance Reports" },
            { id: "academic-management", title: "Academic" },
            { id: "personalised-dashboards", title: "Personalized Dashboards" },
            { id: "whatsapp-communication", title: "WhatsApp Communication" }
        ],
    },
    {
        id: "personalised-dashboards",
        title: "Personalised Dashboards",
        desc: "Role-specific insights at a glance.",
        image: "/schoolBells/Personaldashboard.webp",
        icon: Layout,
        fullDesc: "Empower every stakeholder with data that matters to them. Our Personalised Dashboards provide a custom view for Principals, Teachers, Parents, and Students. Principals see school health metrics, teachers see class performance, parents see their child's progress, and students see upcoming tasks—all in an intuitive, visual interface.",
        features: [
            "Role-Based Views",
            "Real-time Metrics",
            "Widget Customization",
            "Graphical Visualizations",
            "Task & Todo Lists"
        ],
        benefits: [
            "Improved decision making",
            "Quick access to relevant info",
            "Better user experience",
            "Data transparency",
            "Personalized efficient workflow"
        ],
        otherModules: [
            { id: "reports-dashboards", title: "reports & dashboards" },
            { id: "whatsapp-communication", title: "whatsapp communication" },
            { id: "parent-student-portal", title: "parent & student portal" },
            { id: "communication", title: "communication" }
        ],
    },
    {
        id: "approval-system",
        title: "Approval System",
        desc: "Streamlined workflow for administrative approvals.",
        image: "/schoolBells/documentapprovalsystem.webp",
        icon: FileCheck,
        fullDesc: "Remove bottlenecks in school administration with a digital Approval System. From leave requests and purchase orders to fee concessions and event plannings, route every request to the right authority automatically. Track status in real-time and maintain a digital audit trail of all decisions.",
        features: [
            "Multi-level Workflow",
            "Leave & Purchase Approvals",
            "Status Tracking",
            "Digital Audit Trail",
            "Notification Alerts"
        ],
        benefits: [
            "Faster decision making",
            "Enhanced accountability",
            "Reduced paperwork",
            "Transparent processes",
            "Automated routing of requests"
        ],
        otherModules: [
            { id: "administration-operations", title: "admin & operations" },
            { id: "payroll-management", title: "payroll auth" },
            { id: "finance-management", title: "finance app" },
            { id: "whatsapp-communication", title: "WhatsApp Communication" }
        ],
    },
    {
        id: "whatsapp-communication",
        title: "Whatsapp Communication",
        desc: "Instant updates on the platform parents use most.",
        image: "/schoolBells/whatsappcommunication.jpg",
        icon: MessageCircle,
        fullDesc: "Connect with parents where they are. This module integrates the ERP with WhatsApp Business API to send automated notifications for attendance, fee receipts, homework, and emergency alerts. It ensures high read rates and instant delivery of critical information.",
        features: [
            "Automated Alerts",
            "Fee Reminders",
            "Attendance Status",
            "Event Circulars",
            "Two-way Communication"
        ],
        benefits: [
            "High engagement rates",
            "Instant delivery of updates",
            "Convenience for parents",
            "Reduced call volume",
            "Efficient broadcast system"
        ],

        otherModules: [
            { id: "communication", title: "communication" },
            { id: "mobile-app", title: "mobile app" },
            { id: "smart-attendance", title: "smart attendance" },
            { id: "online-exam", title: "online exam" }
        ],
    },
    {
        id: "payment-gateway-integration",
        title: "Payment Gateway Integration",
        desc: "Secure and seamless online fee collection.",
        image: "/schoolBells/PaymentGateway.webp",
        icon: CreditCard,
        fullDesc: "Simplify fee collection by integrating with leading payment gateways. Parents can pay school fees, transport charges, and other dues securely via Credit Card, Debit Card, Net Banking, or UPI from both the web portal and mobile app. Automatic reconciliation ensures finance teams save hours of manual entry.",
        features: [
            "Multiple Payment Modes (UPI/Card/NetBanking)",
            "Auto-Reconciliation",
            "Digital Receipt Generation",
            "Secure Transactions",
            "Payment History Tracking"
        ],
        benefits: [
            "Faster fee collection",
            "24/7 payment convenience",
            "Reduced cash handling risk",
            "Automated financial records",
            "Seamless experience for parents"
        ],

        otherModules: [
            { id: "finance-management", title: "finance management" },
            { id: "accounts", title: "accounts" },
            { id: "mobile-app", title: "mobile app" },
            { id: "parent-student-portal", title: "parent student portal" }
        ],
    },
    {
        id: "accounts",
        title: "Accounts",
        desc: "Comprehensive financial accounting for schools.",
        image: "/schoolBells/Accounts.webp",
        icon: Landmark,
        fullDesc: "Go beyond just fees with a full-fledged Accounting module. Manage income, expenses, ledgers, and trial balances specific to school operations. It integrates with fee and payroll modules to provide a holistic view of the institution's financial health and ensures compliance with accounting standards.",
        features: [
            "General Ledger",
            "Income & Expense Tracking",
            "Balance Sheet Generation",
            "Bank Reconciliation",
            "Vendor Management"
        ],
        benefits: [
            "Accurate financial reporting",
            "Audit readiness",
            "Better expense control",
            "Integrated financial view",
            "Simplified tax compliance"
        ],
        otherModules: [
            { id: "finance-management", title: "finance management" },
            { id: "payment-gateway-integration", title: "payment gateway integration" },
            { id: "payroll-management", title: "payroll management" },
            { id: "inventory-assets", title: "inventory assets" }
        ],
    },
    {
        id: "payroll-management",
        title: "Payroll Management",
        desc: "Automated salary processing and compliance.",
        image: "/schoolBells/payroll.webp",
        icon: HandCoins,
        fullDesc: "Simplify the complex task of monthly payroll. This module integrates with the attendance system to calculate salaries based on working days, leaves, and overtime. It handles allowances, deductions, taxes (TDS/PF), and generates payslips instantly, ensuring happy staff and compliant operations.",
        features: [
            "Automatic Salary Calculation",
            "Tax & PF Handling",
            "Payslip Generation",
            "Attendance Integration",
            "Salary Structure Configuration"
        ],
        benefits: [
            "Timely salary disbursement",
            "Statutory compliance",
            "Error-free calculations",
            "Employee self-service access",
            "Efficient payroll administration"
        ],
        otherModules: [
            { id: "staff-hr-management", title: "staff hr management" },
            { id: "accounts", title: "accounts" },
            { id: "approval-system", title: "approval system" },
            { id: "reports-dashboards", title: "reports dashboards" }
        ],
    },
    {
        id: "homework-diary",
        title: "Homework & Diary",
        desc: "Digital daily planner for students.",
        image: "/schoolBells/Homework.webp",
        icon: BookOpen,
        fullDesc: "Replace the physical school diary with a smart digital version. Teachers can post daily homework, classwork, and important notes directly to the app. Parents and students receive instant notifications, ensuring no task is missed and keeping parents in the loop about daily classroom activities.",
        features: [
            "Homework Uploads",
            "Attachment Support (Images/PDF)",
            "Submission Tracking",
            "Teacher Feedback",
            "Daily Class Notes"
        ],
        benefits: [
            "No more lost physical diaries",
            "Better parent awareness",
            "Digital submission options",
            "Organized student routine",
            "Seamless teacher-parent communication"
        ],
        otherModules: [
            { id: "lesson-planning", title: "lesson planning" },
            { id: "academic-management", title: "academic management" },
            { id: "parent-student-portal", title: "parent student portal" },
            { id: "communication", title: "communication" }
        ],
    },
    {
        id: "lesson-planning",
        title: "Lesson Planning",
        desc: "Structured curriculum delivery tools for teachers.",
        image: "/schoolBells/lessonplanning.webp",
        icon: ClipboardList,
        fullDesc: "Empower teachers to plan their academic year effectively. The Lesson Planning module allows educators to map out chapters, topics, and learning objectives day-by-day. It helps admin track syllabus coverage in real-time and ensures uniformity in teaching standards across different sections.",
        features: [
            "Yearly/Monthly Plans",
            "Syllabus Tracking",
            "Resource Mapping",
            "Daily Progress Logs",
            "Coverage Reporting"
        ],
        benefits: [
            "Timely syllabus completion",
            "Standardized teaching quality",
            "Easy substitution management",
            "Better academic oversight",
            "Structured learning path"
        ],
        otherModules: [
            { id: "homework-diary", title: "homework diary" },
            { id: "academic-management", title: "academic management" },
            { id: "timetable-scheduling", title: "timetable scheduling" },
            { id: "student-performance-analytics", title: "student performance analytics" }
        ],
    },
    {
        id: "certificates",
        title: "Certificates",
        desc: "Automated generation of student certificates.",
        image: "/schoolBells/Certificates.webp",
        icon: BadgeCheck,
        fullDesc: "Streamline the issuance of official school documents. This module automates the generation of Transfer Certificates (TC), Bona-fide certificates, Character certificates, and Merit awards. It pulls student data directly from the system to ensure accuracy, allows for custom template designs, and maintains a secure digital log of all issued certificates.",
        features: [
            "Automated TC Generation",
            "Template Customization",
            "Bulk Certificate Printing",
            "Digital Issue Register",
            "Merit & Character Certs"
        ],
        benefits: [
            "Instant document issuance",
            "Error-free data population",
            "Professional & consistent formatting",
            "Secure history tracking",
            "Reduced administrative workload"
        ],
        otherModules: [
            { id: "student-lifecycle-management", title: "student lifecycle management" },
            { id: "document-record-management", title: "document record management" },
            { id: "id-cards", title: "id cards" },
            { id: "reports-dashboards", title: "reports dashboards" }
        ],
    },
    {
        id: "id-cards",
        title: "ID Cards",
        desc: "Quick generation of student and staff ID cards.",
        image: "/schoolBells/Id Cards.webp",
        icon: BadgeCheck,
        fullDesc: "Eliminate the hassle of external vendors for ID card printing. This module allows schools to design, manage, and print professional student and staff ID cards directly from the ERP data. It supports barcodes and QR codes for integration with library and attendance systems.",
        features: [
            "Custom Templates",
            "Bulk Generation",
            "QR/Barcode Support",
            "Digital ID Options",
            "Reprint Management"
        ],
        benefits: [
            "Instant issuance",
            "Cost savings",
            "Accurate data syncing",
            "Integrated security features",
            "Professional card designs"
        ],
        isAddon: true,
        otherModules: [
            { id: "certificates", title: "Certificates" },
            { id: "student-lifecycle-management", title: "student lifecycle management" },
            { id: "security-access-control", title: "security access control" },
            { id: "smart-attendance", title: "smart attendance" }
        ],
    },
    {
        id: "inventory-assets",
        title: "Inventory & Assets",
        desc: "Track school resources and consumables.",
        image: "/schoolBells/Inventory&Asset.webp",
        icon: Archive,
        fullDesc: "Manage the school's physical assets efficiently. From library books and science lab equipment to sports gear and furniture, track location, condition, and depreciation. The module also handles stock management for stationery, uniforms, and cafeteria supplies.",
        features: [
            "Stock Tracking",
            "Purchase Orders",
            "Vendor Management",
            "Asset Depreciation",
            "Issue & Return Tracking"
        ],
        benefits: [
            "Loss prevention",
            "Optimal utilization of resources",
            "Cost control",
            "Maintenance scheduling",
            "Real-time inventory visibility"
        ],
        otherModules: [
            { id: "administration-operations", title: "administration operations" },
            { id: "accounts", title: "accounts" },
            { id: "approval-system", title: "approval system" },
            { id: "reports-dashboards", title: "reports dashboards" }
        ],
    },
    {
        id: "website-integration",
        title: "Own Website Integration",
        desc: "Seamless data flow to your school website.",
        image: "/schoolBells/Website Integration.webp",
        icon: Globe,
        fullDesc: "Make your school website dynamic. This integration allows the ERP to push news, circulars, admission forms, and event galleries directly to your public-facing website. It keeps your online presence fresh and updated without requiring a web developer for every small change.",
        features: [
            "News Feed Sync",
            "Event Calendar Updates",
            "Admission Inquiry Form",
            "Results Publishing",
            "Photo Gallery Management"
        ],
        benefits: [
            "Always up-to-date website",
            "Reduced maintenance cost",
            "Unified brand image",
            "Better SEO with fresh content",
            "Streamlined content updates"
        ],
        otherModules: [
            { id: "digital-marketing", title: "Digital Marketing" },
            { id: "student-lifecycle-management", title: "Student Lifecycle Management" },
            { id: "communication", title: "Communication" },
            { id: "online-exam", title: "Online Exam" }
        ],
    },
    {
        id: "digital-marketing",
        title: "Digital Marketing",
        desc: "Tools to boost admissions and brand visibility.",
        image: "/schoolBells/DigitalMaketing.webp",
        icon: Megaphone,
        fullDesc: "Grow your institution with integrated marketing tools. Manage lead generation from social media and campaigns directly within the ERP. Track enquiry sources, conversion rates, and run SMS or Email campaigns to prospective parents to increase admission follow-ups.",
        features: [
            "Lead Management",
            "Campaign Tracking",
            "SMS/Email Blasts",
            "Enquiry Analytics",
            "CRM Integration"
        ],
        benefits: [
            "Higher admission conversion",
            "ROI tracking for ads",
            "Targeted communication",
            "Brand visibility growth",
            "Centralized lead database"
        ],
        otherModules: [
            { id: "website-integration", title: "Website Integration" },
            { id: "communication", title: "Communication" },
            { id: "student-lifecycle-management", title: "Student Lifecycle Management" },
            { id: "reports-dashboards", title: "Reports Dashboards" }
        ],
    },
    {
        id: "mobile-app",
        title: "Mobile App",
        desc: "School ERP in your pocket.",
        image: "/schoolBells/Mobile App.webp",
        icon: Smartphone,
        fullDesc: "Provide a seamless mobile experience for the modern parent and teacher. The branded school mobile app offers all core ERP features—attendance, fees, homework, results, and messages—in a native, easy-to-use interface available on Android and iOS.",
        features: [
            "Push Notifications",
            "Fee Payment Integration",
            "GPS Bus Tracking",
            "Homework & Result View",
            "Real-time Messaging"
        ],
        benefits: [
            "Anytime access to data",
            "Superior engagement",
            "Paperless communication",
            "Convenience for all users",
            "Branded school presence on phones"
        ],
        isAddon: true,
        otherModules: [
            { id: "parent-student-portal", title: "Parent Student Portal" },
            { id: "communication", title: "Communication" },
            { id: "whatsapp-communication", title: "WhatsApp Communication" },
            { id: "communication", title: "Communication" }
        ],
    },
    {
        id: "data-migration",
        title: "Data Migration",
        desc: "Smooth transition from legacy systems.",
        image: "/schoolBells/data-migration.webp",
        icon: Database,
        fullDesc: "Switching to MySchoolBells is effortless. Our Data Migration module provides tools and templates to securely import student records, staff details, and historic academic data from Excel files or previous software. We ensure zero data loss during your digital transformation.",
        features: [
            "Bulk Import Tools",
            "Data Validation & Cleaning",
            "Mapping Templates",
            "Historical Data Archive",
            "Error Reporting"
        ],
        benefits: [
            "Fast system setup",
            "Data integrity assurance",
            "Continuity of academic records",
            "Reduced manual entry effort",
            "Secure transfer process"
        ],
        otherModules: [
            { id: "student-lifecycle-management", title: "Student lifecycle management" },
            { id: "staff-hr-management", title: "Staff HR management" },
            { id: "document-record-management", title: "Document record management" },
            { id: "finance-management", title: "Finance management" }
        ],
    },
    {
        id: "help-desk",
        title: "Help Desk",
        desc: "Centralized ticketing system for structured and timely issue resolution.",
        image: "/schoolBells/HelpDesk.webp",
        icon: ShieldCheck,
        fullDesc: "The Help Desk provides a centralized platform to capture, track, and resolve queries and concerns raised by parents, students, and staff. With automated ticket workflows, SLA monitoring, and resolution history, institutions can ensure transparency, accountability, and faster response times.",
        features: [
            "Centralized Ticket Management",
            "Automated Ticket Assignment",
            "SLA & Priority Tracking",
            "Resolution History & Audit Trail",
            "Real-Time Status Notifications"
        ],
        benefits: [
            "Faster and structured issue resolution",
            "Improved accountability across departments",
            "Higher parent and student satisfaction",
            "Clear visibility into pending and resolved tickets"
        ],
        otherModules: [
            { id: "communication", title: "Communication" },
            { id: "concerns", title: "Concerns" }
        ]
    },
    {
        id: "library-management",
        title: "Smart Library",
        desc: "Digitized library operations with intelligent tracking and automation.",
        image: "/schoolBells/SmartLibary.webp",
        icon: BookOpen,
        fullDesc: "The Smart Library automates library operations through digital cataloging, barcode or RFID integration, and intelligent issue-return tracking. It simplifies book management, enhances accessibility, and ensures accurate record keeping across physical and digital resources.",
        features: [
            "Digital Catalog & Advanced Search",
            "Barcode / RFID Integration",
            "Automated Issue & Return Tracking",
            "Auto Fine Calculation",
            "E-Resource Management"
        ],
        benefits: [
            "Efficient utilization of library resources",
            "Reduced manual effort and errors",
            "Faster book search and availability tracking",
            "Accurate and automated record keeping"
        ],
        otherModules: [
            { id: "academic-management", title: "Academic Management" }
        ]
    },
    {
        id: "hostel-management",
        title: "Hostel Management",
        desc: "End-to-end management of residential facilities with enhanced security.",
        image: "/schoolBells/Hostel.webp",
        icon: Landmark,
        fullDesc: "The Hostel Management streamlines residential operations by managing room allocations, meal planning, visitor records, and student movements. Integrated billing and security tracking ensure safety, transparency, and efficient hostel administration.",
        features: [
            "Room & Bed Allocation Management",
            "Meal Planning & Attendance Tracking",
            "Visitor & Movement Logs",
            "Hostel Fee Integration",
            "Security & Compliance Tracking"
        ],
        benefits: [
            "Improved student safety and monitoring",
            "Streamlined hostel administration",
            "Accurate billing and fee management",
            "Better visibility into hostel operations"
        ],
        otherModules: [
            { id: "transportation", title: "Transportation" }
        ]
    },
    {
        id: "games-pet",
        title: "Games & PET",
        desc: "Comprehensive management of sports, physical education, and fitness programs.",
        image: "/schoolBells/Games.webp",
        icon: Trophy,
        fullDesc: "The Games & PET enables institutions to organize sports activities, manage tournament schedules, and track physical education programs. It helps monitor fitness levels, record achievements, and promote holistic development beyond academics.",
        features: [
            "Sports & Tournament Scheduling",
            "Physical Fitness Assessments",
            "Student Achievement Tracking",
            "PE Training & Activity Logs",
            "Participation Reports & Analytics"
        ],
        benefits: [
            "Encourages holistic student development",
            "Organized and well-managed sports programs",
            "Improved fitness and performance tracking",
            "Recognition of student achievements"
        ],
        otherModules: [
            { id: "student-performance-analytics", title: "Student Performance & Analytics" }
        ]
    },
    {
        id: "concerns",
        title: "Concerns",
        desc: "Centralized platform to track, manage, and resolve concerns efficiently.",
        image: "/schoolBells/problemsolving.webp",
        icon: Megaphone,
        fullDesc: "The Concerns enables institutions to recognize, track, and resolve concerns raised by parents, students, staff, and internal departments. It ensures transparency, accountability, and timely resolution through structured workflows, dashboards, and detailed reports, fostering trust and continuous improvement across the organization.",
        features: [
            "Create & Customize Concern Types",
            "Parent, Staff & Inter-Office Concerns",
            "Real-Time Status Updates",
            "Class-wise Concern Tracking",
            "Inter-Office Help Desk",
            "Concern Mapping & Configuration",
            "Dashboard with Aging Reports",
            "Detailed Analysis & Reports"
        ],
        benefits: [
            "Faster concern resolution",
            "Improved transparency & accountability",
            "Better parent and staff satisfaction",
            "Clear tracking of pending and resolved issues",
            "Data-driven decision making",
            "Improved operational efficiency"
        ],
        otherModules: [
            { id: "communication", title: "Communication" },
            { id: "parent-student-portal", title: "Parent & Student Portal" },
            { id: "administration-operations", title: "Administration & Operations" },
            { id: "reports-dashboards", title: "Reports & Dashboards" }
        ]
    }
];
