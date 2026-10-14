export const clientLogos = [
  { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWwyL1ObszyBaVDjk-bd8YM8Cp5Otk78LX1g&s', alt: 'Client logo' },
  { src: 'https://www.telenor.com/binaries/media/gallery/logos/telenor_symbol_blue_RGB_Refresh.png', alt: 'Telenor' },
  { src: 'https://www.pakpedia.pk/files/Image/Mall-of-Lahore.png', alt: 'Mall of Lahore' },
  { src: 'https://subtle-marketing.com/wp-content/uploads/2025/09/trust-logo.png', alt: 'Client logo' },
  { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGeEzgP4E4A_ltBGW1EKKuYIzggQX_r3WU3w&s', alt: 'Client logo' },
  { src: 'https://subtle-marketing.com/wp-content/uploads/2024/12/7.png', alt: 'Client logo' },
  { src: 'https://subtle-marketing.com/wp-content/uploads/2024/12/6.png', alt: 'Client logo' },
  { src: 'https://m.media-amazon.com/images/S/stores-image-uploads-eu-prod/c/AmazonStores/A1F83G8C2ARO7P/a3d4148e68ea9080ba50d88a595999c3.w400.h400.jpg', alt: 'Amazon Store' },
  { src: 'https://subtle-marketing.com/wp-content/uploads/2025/09/8-768x715.png', alt: 'Client logo' },
  { src: 'https://subtle-marketing.com/wp-content/uploads/2024/12/1-1.png', alt: 'Client logo' },
  { src: 'https://res.cloudinary.com/dqdfuhtps/image/upload/v1780389346/300797482_598244741899580_2635237337859747808_n_mwtaxl.jpg', alt: 'Client logo' },
  { src: 'https://res.cloudinary.com/dqdfuhtps/image/upload/v1780385709/WhatsApp_Image_2026-06-02_at_11.57.16_pneukd.jpg', alt: 'Client logo' },
  { src: 'https://res.cloudinary.com/dqdfuhtps/image/upload/v1780385705/Untitled_design_97_bbb7un.webp', alt: 'Client logo' },
  { src: 'https://res.cloudinary.com/dqdfuhtps/image/upload/v1780385704/logo-clear_qh5ps9.png', alt: 'Client logo' },
  { src: 'https://res.cloudinary.com/dqdfuhtps/image/upload/v1780385703/66c6d311e37d0_xfkunl.jpg', alt: 'Client logo' },
  { src: 'https://subtle-marketing.com/wp-content/uploads/2025/09/logo.webp', alt: 'Client logo' },
  { src: 'https://subtle-marketing.com/wp-content/uploads/2024/12/2-1.png', alt: 'Client logo' },
  { src: 'https://subtle-marketing.com/wp-content/uploads/2024/12/4.png', alt: 'Client logo' },
  { src: 'https://subtle-marketing.com/wp-content/uploads/2024/12/5.png', alt: 'Client logo' },
];

export const moduleChips = [
  { label: 'Admissions', goto: 'manager' },
  { label: 'Fees & challans', goto: 'finance' },
  { label: 'Invoices', goto: 'finance' },
  { label: 'Attendance', goto: 'instructor' },
  { label: 'Assignments', goto: 'instructor' },
  { label: 'Grades', goto: 'student' },
  { label: 'Virtual classes', goto: 'instructor' },
  { label: 'LMS library', goto: 'student' },
  { label: 'Certificates', goto: 'student' },
  { label: 'Leads pipeline', goto: 'manager' },
  { label: 'Payroll', goto: 'finance' },
  { label: 'Employees', goto: 'finance' },
  { label: 'Expenses', goto: 'finance' },
  { label: 'Reports', goto: 'admin' },
  { label: 'Branch scoping', goto: 'admin' },
  { label: 'Email alerts', goto: 'admin' },
  { label: 'AI assistant', goto: 'admin' },
];

export const modules = [
  {
    group: 'Main',
    title: 'Dashboard & branches',
    description: 'Live KPIs by date range, branch switching, staff accounts with role-based access, and email alerts.',
    goto: 'admin',
  },
  {
    group: 'Academics',
    title: 'Courses & batches',
    description: 'Course catalogue, batch scheduling, instructor assignment, and a weekly LMS library with protected video.',
    goto: 'admin',
  },
  {
    group: 'Students',
    title: 'Records & import',
    description: 'Full student profiles, bulk Excel import with a summary report, and one-click certificate issue.',
    goto: 'admin',
  },
  {
    group: 'Finance',
    title: 'Fees & invoices',
    description: 'Per-student fee agreements with discounts and due dates, a challan generated automatically on every payment, and a downloadable invoice for each one.',
    goto: 'finance',
  },
  {
    group: 'HR',
    title: 'Employees & payroll',
    description: 'A staff directory covering every worker type, fixed or percentage-based salary, and one-click payroll with a full run history.',
    goto: 'finance',
  },
  {
    group: 'Operations',
    title: 'Leads & reports',
    description: 'Twelve-stage pipeline, WhatsApp outreach, funnel analytics, and exportable PDF reports.',
    goto: 'manager',
  },
  {
    group: 'Account',
    title: 'Branding & settings',
    description: 'Your logo, your palette, your app name and domain — applied to every screen, email and PDF.',
    goto: 'admin',
  },
  {
    group: 'Assistant',
    title: 'Built-in AI',
    description: 'Ask a question in plain language and get an answer drawn from your own institute\'s data.',
    goto: 'admin',
  },
];

export const testimonials = [
  {
    quote: 'We were running 200 students across six WhatsApp groups and one Excel file. Enrollment, attendance and certificates are now in one place, and nobody asks me for their marks any more.',
    initials: 'AK',
    name: 'Ayesha Khan',
    role: 'Institute Owner · Faisalabad',
  },
  {
    quote: 'Students see our logo, our colours, our domain. Half of them think we built the whole thing ourselves, and honestly that credibility is worth the fee on its own.',
    initials: 'SM',
    name: 'Sana Malik',
    role: 'Coaching Centre · Karachi',
  },
  {
    quote: 'Leads used to sit in a notebook. Now every enquiry gets logged and followed up, and I can see the conversion rate for each branch on its own.',
    initials: 'HA',
    name: 'Hina Aslam',
    role: 'Branch Manager · Multan',
  },
  {
    quote: 'The branch scoping sold it for me. My Gulberg manager sees her leads and nothing else — no payroll, no other branch. That was never possible on the old setup.',
    initials: 'FA',
    name: 'Farhan Ahmed',
    role: 'Academy Director · Lahore',
  },
  {
    quote: 'Fee follow-up was the worst part of the job. Now I open the dashboard, see who is overdue, and the WhatsApp message is one tap away.',
    initials: 'UR',
    name: 'Usman Raza',
    role: 'Branch Manager · Rawalpindi',
  },
  {
    quote: 'Certificates used to be a Word template I edited by hand every single time. Now it\'s one click and it\'s already carrying our own branding.',
    initials: 'NF',
    name: 'Nadia Farooq',
    role: 'Admissions Officer · Karachi',
  },
  {
    quote: 'Payroll used to take me two evenings a month. Commission per admission now calculates itself and the payslips go out as PDFs on their own.',
    initials: 'BH',
    name: 'Bilal Hussain',
    role: 'Operations · Islamabad',
  },
  {
    quote: 'The LMS library with protected video meant our course content stopped getting shared outside the batch it belongs to. That alone paid for the switch.',
    initials: 'IS',
    name: 'Imran Sheikh',
    role: 'Institute Owner · Sialkot',
  },
  {
    quote: 'Switching branches from one login changed everything for me — I run three cities now, and I\'m never logged into the wrong one.',
    initials: 'TM',
    name: 'Tariq Mehmood',
    role: 'Regional Head · Lahore',
  },
];

export const faqs = [
  {
    question: 'Does it run under our own name?',
    answer: 'Yes. Your logo, colours, institute name and domain are applied across every portal, every email and every PDF. Staff and students never see our branding.',
  },
  {
    question: 'Can a branch manager see the finances?',
    answer: 'No, unless you give them an admin role. The manager portal is scoped to leads and admissions for their branch. Payroll, expenses and institute-wide settings are not reachable from that login.',
  },
  {
    question: 'Can we bring our existing student records across?',
    answer: 'Yes. Download the import template, fill it from your current sheet, and upload. You get a row-by-row summary showing exactly what came in and what needs fixing.',
  },
  {
    question: 'How do live classes work?',
    answer: 'An instructor schedules a session against a batch and generates a meeting link in one click. Students see it on their dashboard, and attendance is recorded against the same batch.',
  },
  {
    question: 'What happens to fee records if a student leaves?',
    answer: 'The student is archived rather than deleted. Their fee history, attendance log and issued certificates stay on the ledger so your reports for past periods do not change.',
  },
  {
    question: 'Do we need to install anything?',
    answer: 'No. It runs in the browser on your own subdomain. Setup happens on a call with us, and you can be taking admissions the same week.',
  },
];
