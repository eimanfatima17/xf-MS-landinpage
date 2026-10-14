export const site = {
  name: 'Extreme IMS',
  title: 'Extreme IMS — one login runs the whole institute',
  description:
    'Admissions, fees, attendance, payroll and lectures in one branded platform. Four portals for admins, managers, instructors and students. Book a live demo on WhatsApp.',
  themeColor: '#4a8c89',
  email: 'info@extremefreelancing.com',
  phone: '+92 302 5123508',
  whatsappNumber: '923025123508',
  company: 'Extreme Freelancing',
  year: 2026,
};

export const whatsappUrl = `https://wa.me/${site.whatsappNumber}`;

const demoText = encodeURIComponent("Hi, I'd like to book a live demo of Extreme IMS.").replace(/'/g, '%27');
export const whatsappDemoUrl = `${whatsappUrl}?text=${demoText}`;

export const emailDemoUrl = `mailto:${site.email}?subject=${encodeURIComponent('Demo Request — Extreme IMS')}`;
