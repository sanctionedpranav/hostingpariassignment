import { GoZap } from "react-icons/go";
import { TbTriangleFilled } from "react-icons/tb";
import { LuStar } from "react-icons/lu";
import { FaRegCircle } from "react-icons/fa6";
import { LuPopsicle } from "react-icons/lu";
import { IoChatbubbleOutline } from "react-icons/io5";
import { FaRegEnvelope } from "react-icons/fa6";
import { GrPhone } from "react-icons/gr";



export const domains = [".org", ".com", ".net", ".co", ".edu"];

export const benefits = [
  "Fast, Optimized For Performance",
  "99.9% Uptime Guarantee",
  "Advanced SSL Protection",
  "24/7 Live Support",
  "Daily Automatic Backups",
  "Easily Scalable As You Grow",
];

export const plans = [
  { title: "Shared Hosting", description: "Perfect for beginners, easy setup, secure", price: "$2.99/Mo" },
  { title: "VPS Hosting", description: "Scalable, high-performance virtual servers", price: "$14.99/Mo" },
  { title: "Reseller Hosting", description: "Sell hosting services under your own brand", price: "$14.99/Mo" },
  { title: "Cloud Hosting", description: "Flexible, fast, and optimized for performance", price: "$14.99/Mo" },
  { title: "Dedicated Servers", description: "Full control, enterprise-grade power", price: "$79.99/Mo" },
  { title: "SSL Certificates", description: "Secure your website and boost trust", price: "$9.99/Mo" },
];

export const actualnumbers = [
  { title: "Uptime Guarantee", number: "99.9%" },
  { title: "Website Hosted", number: "10,000" },
  { title: "Customer Support", number: "24/7" },
  { title: "Data center world wide", number: "100+" },
];

export const features = [
  { icon: <GoZap />, title: "Ultra-Fast Performance", description: "Our optimized servers ensure lightning-fast loading times" },
  { icon: <GoZap />, title: " Automatic Daily Backups", description: "Never lose your data, with secure daily backups." },
  { icon: <GoZap />, title: "One-Click App Installs", description: "Easily set up WordPress, Joomla, and 100+ apps in seconds" },
  { icon: <GoZap />, title: "Cheapest Prices", description: "Get premium hosting at unbeatable prices." },
  { icon: <GoZap />, title: "Free SSL & Security ", description: "keep your site safe with top-tier encryption and DDoS protection." },
  { icon: <GoZap />, title: "Fully Managed Hosting", description: "We handle the technical stuff, so you don’t have to." },
];

export const perfectPlans = [
  {
    icon: <TbTriangleFilled />,
    name: "Starter",
    monthlyPrice: "$5/month",
    yearlyPrice: "$50/year",
    features: [
      "1 Website",
      "10GB SSD Storage",
      "Free SSL Certificate",
      "99.9% Uptime Guarantee",
      "24/7 Support",
    ],
    popular: false,
    bgColor: "bg-white",
    textColor: "text-gray-700",
    borderColor: "border-gray-300",
  },
  {
    icon: <LuStar />,
    name: "Pro",
    monthlyPrice: "$30/month",
    yearlyPrice: "$300/year",
    features: [
      "Unlimited Websites & Storage",
      "Free SSL, Daily Backups & CDN",
      "Advanced Security & DDoS Protection",
      "Dedicated Resources & High-Speed Performance",
      "Free Domain For 1 Year",
      "24/7 VIP Support",
    ],
    popular: true,
    bgColor: "bg-[#1e3a8a]",
    textColor: "text-white",
    borderColor: "border-blue-700",
  },
  {
    icon: <FaRegCircle />,
    name: "Business",
    monthlyPrice: "$5/month",
    yearlyPrice: "$50/year",
    features: [
      "1 Website",
      "10GB SSD Storage",
      "Free SSL Certificate",
      "99.9% Uptime Guarantee",
      "24/7 Support",
    ],
    popular: false,
    bgColor: "bg-white",
    textColor: "text-gray-700",
    borderColor: "border-gray-300",
  },
];

export const steps = [
  {
    title: "Choose Your Plan",
    description:
      "Pick the hosting package that best fits your needs. Whether you're starting small or need advanced features, we have a plan for you.",
    icon: "\uD83D\uDED2",
  },
  {
    title: "Set Up Or Migrate",
    description:
      "Easily launch a new site with our intuitive tools, or let our experts handle the migration of your existing website—completely free and with zero downtime.",
    icon: "⚙️",
  },
  {
    title: "Go Live!",
    description:
      "Once everything is set up, your website will be online, secure, and optimized for performance. Enjoy seamless hosting with 24/7 support at your fingertips.",
    icon: "🚀",
  },
];

export const contact = [
  { icon: <LuPopsicle />, title: "Support Center", description: " Visit our help desk for step-by-step guides and FAQs." },
  { icon: <IoChatbubbleOutline />, title: " Live Chat", description: " Get instant answers from our experts, available 24/7" },
  { icon: <FaRegEnvelope />, title: "Email Support", description: "Drop us a message at support@hostingpari.com" },
  { icon: <GrPhone />, title: "Phone Support", description: "Speak with our team directly at +123-456-7890." },
];

export const testimonials = [
  {
    name: "Alex M.",
    role: "E-commerce Store Owner",
    review: "Switching to Hosting Pari was the best decision for our website. The speed and security are unmatched.",
  },
  {
    name: "David P.",
    role: "Agency Founder",
    review: "Excellent support! They helped me migrate my site hassle-free. Highly recommend!",
  },
  {
    name: "David P.",
    role: "Agency Founder",
    review: "Excellent support! They helped me migrate my site hassle-free. Highly recommend!",
  },
  {
    name: "David P.",
    role: "Agency Founder",
    review: "Excellent support! They helped me migrate my site hassle-free. Highly recommend!",
  },
  {
    name: "Michael T.",
    role: "Blogger",
    review: "Our website uptime has been flawless since we joined. Fantastic hosting service!",
  }
];
