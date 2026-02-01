
import React, { useState } from 'react';
import { 
  PieChart, Pie, Cell, ResponsiveContainer, Tooltip as RechartsTooltip,
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend 
} from 'recharts';
import { 
  Phone, 
  Mail, 
  ChevronRight, 
  ArrowRight, 
  CheckCircle2, 
  CircleDot,
  Dna,
  Cpu,
  Globe,
  Plus,
  // Fix: Add missing Target and BarChart3 icons
  Target,
  BarChart3,
  // Fix: Alias PieChart icon to avoid collision with Recharts PieChart component
  PieChart as PieChartIcon
} from 'lucide-react';
import { 
  COMPANY_NAME, 
  TAGLINE, 
  CONTACT_EMAIL, 
  CONTACT_PHONE,
  CORE_OFFERINGS,
  UNIQUE_SELLING_POINTS,
  TEAM_MEMBERS,
  MARKET_INSIGHTS,
  COMPETITIVE_ANALYSIS,
  REVENUE_ALLOCATION
} from './constants';

const COLORS = ['#1e3a8a', '#f97316', '#3b82f6', '#fb923c', '#60a5fa', '#fdba74', '#93c5fd'];

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Home');

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border-4 border-blue-900 border-b-orange-500 flex items-center justify-center font-bold text-blue-900 text-xl">
                Q
              </div>
              <span className="font-extrabold text-blue-900 text-xl tracking-tight hidden sm:block">
                QYX <span className="text-orange-500">MedTech</span>
              </span>
            </div>
            <div className="hidden md:flex space-x-8 text-sm font-semibold text-slate-600">
              {['Home', 'About', 'Product', 'Market', 'Team', 'Contact'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-blue-900 transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
            <button className="bg-blue-900 text-white px-6 py-2.5 rounded-full font-bold text-sm hover:bg-blue-800 transition-all shadow-lg shadow-blue-900/20">
              Inquire Now
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 md:pt-48 md:pb-32 blue-gradient text-white relative overflow-hidden">
        <div className="absolute top-20 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -z-0"></div>
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl -z-0"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-widest mb-6">
                <CheckCircle2 size={14} /> DPIIT Recognised Startup
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
                Revolutionizing <span className="text-orange-400">Male Fertility</span> Diagnostics
              </h1>
              <p className="text-lg md:text-xl text-blue-100/80 mb-8 max-w-lg font-light leading-relaxed">
                {TAGLINE}
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-bold transition-all flex items-center gap-2 group shadow-xl shadow-orange-500/30">
                  Explore Solution <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <div className="flex flex-col justify-center">
                  <div className="flex items-center gap-2 text-sm text-blue-200">
                    <Phone size={14} /> {CONTACT_PHONE}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-blue-200">
                    <Mail size={14} /> {CONTACT_EMAIL}
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="w-full aspect-square bg-white rounded-3xl p-8 shadow-2xl relative overflow-hidden flex items-center justify-center">
                <div className="absolute top-0 left-0 w-full h-2 bg-orange-500"></div>
                <div className="flex flex-col items-center gap-6">
                  <div className="w-48 h-48 border-[12px] border-blue-900 rounded-full flex items-center justify-center">
                    <div className="text-7xl font-black text-blue-900 relative">
                      Q
                      <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-orange-500 rounded-lg"></div>
                    </div>
                  </div>
                  <div className="text-center">
                    <h2 className="text-4xl font-black text-blue-900 tracking-tighter">QYX <span className="text-orange-500">MedTech</span></h2>
                    <p className="text-blue-900/60 font-semibold tracking-widest text-xs mt-1 uppercase">Diagnostics Excellence</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-blue-600 p-6 rounded-2xl shadow-xl flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                  <Dna className="text-white" />
                </div>
                <div>
                  <div className="text-white font-bold text-2xl">Digital</div>
                  <div className="text-blue-100 text-xs">Healthcare Solution</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2">
              <h2 className="text-sm font-bold text-orange-500 uppercase tracking-widest mb-3">Introduction</h2>
              <h3 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-6">Innovative Diagnostics for a Global Epidemic</h3>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                QYX MedTech is focused on revolutionizing male fertility diagnostics. We are developing a home-based fertility screening kit that offers instant digital reports and doctor consultation support. Our solution addresses the barriers of social stigma, logic errors, and limited access to traditional diagnostic services.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="p-6 rounded-2xl bg-blue-50 border border-blue-100">
                  <div className="w-12 h-12 rounded-xl bg-blue-900 flex items-center justify-center text-white mb-4">
                    <Target />
                  </div>
                  <h4 className="text-xl font-bold text-blue-900 mb-2">Our Vision</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    To be a leading innovator in digital health, providing accessible, private, and reliable healthcare solutions that empower individuals to take control of their fertility.
                  </p>
                </div>
                <div className="p-6 rounded-2xl bg-orange-50 border border-orange-100">
                  <div className="w-12 h-12 rounded-xl bg-orange-500 flex items-center justify-center text-white mb-4">
                    <Plus />
                  </div>
                  <h4 className="text-xl font-bold text-blue-900 mb-2">Our Mission</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    To deliver cutting-edge diagnostic solutions that combine privacy, convenience, and expert consultation, enhancing the lives of individuals globally.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-tr from-blue-900 to-orange-500 rounded-3xl opacity-10 group-hover:opacity-20 transition-opacity"></div>
              <img 
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1000&auto=format&fit=crop" 
                alt="Diagnostics Laboratory" 
                className="rounded-2xl shadow-2xl relative z-10 h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Problems & Solutions */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-orange-400 uppercase tracking-widest mb-3">The Challenge & The Solution</h2>
            <h3 className="text-3xl md:text-5xl font-extrabold mb-6">Bridging the Gap in Fertility Testing</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Problems */}
            <div className="bg-white/5 border border-white/10 p-10 rounded-3xl">
              <h4 className="text-2xl font-bold text-orange-400 mb-8 flex items-center gap-3">
                <CircleDot className="text-orange-500" /> Key Problems
              </h4>
              <ul className="space-y-6">
                {[
                  "Social stigma and hesitation to seek clinical testing.",
                  "Limited awareness and lack of accessible diagnostic options.",
                  "Time-consuming and expensive hospital-based procedures.",
                  "Reduced chances of successful intervention due to delays."
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-4 text-slate-300">
                    <div className="w-6 h-6 rounded-full bg-orange-500/20 text-orange-500 flex items-center justify-center shrink-0 font-bold text-xs mt-1">!</div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Solutions */}
            <div className="bg-blue-900/40 border border-blue-500/20 p-10 rounded-3xl shadow-inner">
              <h4 className="text-2xl font-bold text-blue-300 mb-8 flex items-center gap-3">
                <CheckCircle2 className="text-blue-400" /> Our Solutions
              </h4>
              <ul className="space-y-6">
                {[
                  "Private, home-based diagnostic screening kit.",
                  "Instant digital report generation for immediate results.",
                  "Integrated doctor consultation for professional advice.",
                  "Hassle-free, confidential access to medical experts."
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-4 text-blue-100">
                    <div className="w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center shrink-0 font-bold text-xs mt-1">
                      <ChevronRight size={14} />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Product Offerings */}
      <section id="product" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-orange-500 uppercase tracking-widest mb-3">Our Offerings</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-blue-900">Seamless Technology, Reliable Results</h3>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {CORE_OFFERINGS.map((offering, idx) => (
              <div key={idx} className="group p-8 rounded-3xl bg-slate-50 border border-slate-200 hover:border-blue-200 hover:bg-white hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-300">
                <div className="mb-6 p-4 bg-white rounded-2xl w-fit shadow-sm group-hover:bg-blue-50 group-hover:text-blue-900 transition-colors">
                  {offering.icon}
                </div>
                <h4 className="text-xl font-bold text-blue-900 mb-4">{offering.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{offering.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-20 bg-blue-900 rounded-3xl p-10 md:p-16 text-white">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h4 className="text-3xl font-extrabold mb-6">Technology & Prototype</h4>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-orange-500 shrink-0 flex items-center justify-center font-bold">1</div>
                    <div>
                      <h5 className="font-bold text-xl mb-1">Single-Use Sample Chip</h5>
                      <p className="text-blue-100/70 text-sm">Hygienic and easy-to-use chip for sample collection.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-orange-500 shrink-0 flex items-center justify-center font-bold">2</div>
                    <div>
                      <h5 className="font-bold text-xl mb-1">Reusable Analyzer</h5>
                      <p className="text-blue-100/70 text-sm">Sophisticated sensor-based analysis hardware.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-orange-500 shrink-0 flex items-center justify-center font-bold">3</div>
                    <div>
                      <h5 className="font-bold text-xl mb-1">Mobile Connectivity</h5>
                      <p className="text-blue-100/70 text-sm">Instant data transfer via Bluetooth/Type-C for report generation.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 bg-white/10 rounded-2xl backdrop-blur-md">
                  <Cpu className="text-orange-400 mb-4 w-10 h-10" />
                  <h5 className="font-bold text-lg">Sensor-Based</h5>
                  <p className="text-xs text-blue-100/60 mt-1">High-precision diagnostic testing</p>
                </div>
                <div className="p-6 bg-white/10 rounded-2xl backdrop-blur-md">
                  <Globe className="text-blue-400 mb-4 w-10 h-10" />
                  <h5 className="font-bold text-lg">Digital App</h5>
                  <p className="text-xs text-blue-100/60 mt-1">iOS and Android companion app</p>
                </div>
                <div className="col-span-2 p-6 bg-orange-500/20 border border-orange-500/30 rounded-2xl">
                  <h5 className="font-bold text-orange-400 uppercase text-xs tracking-widest mb-2">Roadmap</h5>
                  <div className="flex items-center justify-between text-[10px] sm:text-xs">
                    <span className="bg-orange-500 text-white px-2 py-1 rounded">Development</span>
                    <ArrowRight size={12} />
                    <span className="opacity-60">Validation</span>
                    <ArrowRight size={12} />
                    <span className="opacity-60">Pilot</span>
                    <ArrowRight size={12} />
                    <span className="opacity-60">Feedback</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* USP Section */}
      <section className="py-24 blue-gradient text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-blue-300 uppercase tracking-widest mb-3">Why Choose Us</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold">Unique Selling Points</h3>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6">
            {UNIQUE_SELLING_POINTS.map((usp, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 hover:border-orange-500/50 p-8 rounded-3xl w-full sm:w-64 group transition-all">
                <div className="text-orange-500 text-3xl font-black mb-4 group-hover:scale-110 transition-transform">
                  {usp.id}
                </div>
                <div className="mb-4 text-blue-400">{usp.icon}</div>
                <h4 className="font-bold text-lg mb-2">{usp.title}</h4>
                <p className="text-blue-100/60 text-sm leading-relaxed">{usp.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Insights */}
      <section id="market" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-sm font-bold text-orange-500 uppercase tracking-widest mb-3">Market Opportunities</h2>
              <h3 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-6">Massive Growth Potential</h3>
              <p className="text-slate-600 mb-8 leading-relaxed">
                The male fertility market is seeing unprecedented growth, driven by increasing health awareness and technological advancements in digital healthcare.
              </p>
              
              <div className="space-y-6">
                {MARKET_INSIGHTS.map((market, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-200">
                    <div>
                      <h5 className="font-bold text-blue-900">{market.name}</h5>
                      <p className="text-xs text-slate-500">CAGR {market.cagr}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-blue-900 font-bold">USD {market.forecast2030}B</div>
                      <div className="text-xs text-orange-600 font-semibold">by 2030/33</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="h-[400px] w-full bg-slate-50 rounded-3xl p-8 border border-slate-200">
              <h4 className="font-bold text-blue-900 mb-6 flex items-center gap-2">
                <BarChart3 size={20} className="text-orange-500" /> Market Growth Projection
              </h4>
              <ResponsiveContainer width="100%" height="90%">
                <BarChart data={MARKET_INSIGHTS}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                  <XAxis dataKey="name" hide />
                  <YAxis hide />
                  <RechartsTooltip 
                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
                  />
                  <Bar dataKey="size2023" name="2023 Size" fill="#1e3a8a" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="forecast2030" name="Forecast" fill="#f97316" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
              <div className="flex justify-center gap-4 mt-2 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                <div className="flex items-center gap-1"><div className="w-3 h-3 bg-blue-900 rounded-sm"></div> Current</div>
                <div className="flex items-center gap-1"><div className="w-3 h-3 bg-orange-500 rounded-sm"></div> Forecast</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Competitive Analysis Table */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-orange-500 uppercase tracking-widest mb-3">Competitive Edge</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-blue-900">How We Stand Out</h3>
          </div>
          
          <div className="overflow-x-auto rounded-3xl border border-slate-200 shadow-xl bg-white">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-blue-900 text-white">
                  <th className="p-6 font-bold">Feature</th>
                  <th className="p-6 font-bold bg-orange-500 text-center">QYX MedTech</th>
                  <th className="p-6 font-bold">EZ Check Alpha</th>
                  <th className="p-6 font-bold">Clear & Sure</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {COMPETITIVE_ANALYSIS.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition-colors">
                    <td className="p-6 font-semibold text-blue-900">{row.feature}</td>
                    <td className="p-6 text-center font-bold bg-orange-50/50 text-blue-900">{row.qyx}</td>
                    <td className="p-6 text-slate-500 text-sm">{row.competitor1}</td>
                    <td className="p-6 text-slate-500 text-sm">{row.competitor2}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Revenue & Budget */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 h-[450px]">
              <h4 className="font-bold text-blue-900 mb-6 flex items-center gap-2">
                <PieChartIcon size={20} className="text-orange-500" /> Revenue Allocation Breakdown
              </h4>
              <ResponsiveContainer width="100%" height="90%">
                <PieChart>
                  <Pie
                    data={REVENUE_ALLOCATION}
                    cx="50%"
                    cy="50%"
                    innerRadius={80}
                    outerRadius={140}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {REVENUE_ALLOCATION.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <RechartsTooltip />
                </PieChart>
              </ResponsiveContainer>
              <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 mt-4">
                {REVENUE_ALLOCATION.slice(0, 4).map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-[10px] font-bold text-slate-500 uppercase">
                    <div className="w-2 h-2 rounded-full" style={{backgroundColor: COLORS[idx]}}></div>
                    {item.name} ({item.value}%)
                  </div>
                ))}
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <h2 className="text-sm font-bold text-orange-500 uppercase tracking-widest mb-3">Revenue Model</h2>
              <h3 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-6">Sustainable Business Strategy</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
                  <h5 className="font-bold text-blue-900 mb-2">Product Sales</h5>
                  <p className="text-xs text-slate-500">Direct sales of diagnostic kits to end users and clinics.</p>
                </div>
                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
                  <h5 className="font-bold text-blue-900 mb-2">Subscriptions</h5>
                  <p className="text-xs text-slate-500">Recurring revenue from reports and professional consultations.</p>
                </div>
                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
                  <h5 className="font-bold text-blue-900 mb-2">Data Analytics</h5>
                  <p className="text-xs text-slate-500">Monetizing anonymized health data insights for research.</p>
                </div>
                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
                  <h5 className="font-bold text-blue-900 mb-2">Partnerships</h5>
                  <p className="text-xs text-slate-500">Bulk sales to healthcare providers and clinic chains.</p>
                </div>
              </div>
              <div className="mt-8 p-6 bg-blue-900 text-white rounded-3xl">
                <div className="flex justify-between items-center mb-4">
                  <span className="font-bold">Total Funding Target</span>
                  <span className="text-2xl font-black text-orange-400">₹20,00,000</span>
                </div>
                <p className="text-xs text-blue-200 leading-relaxed">
                  Strategic allocation focusing 40% on product development and 20% on rigorous pilot testing to ensure market-readiness and accuracy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-sm font-bold text-orange-500 uppercase tracking-widest mb-3">Meet Our Directors</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-16">The Minds Behind QYX MedTech</h3>
          
          <div className="flex flex-wrap justify-center gap-12">
            {TEAM_MEMBERS.map((member, idx) => (
              <div key={idx} className="w-full max-w-sm group">
                <div className="relative mb-8 inline-block">
                  <div className="absolute -inset-4 bg-orange-500 rounded-full scale-95 group-hover:scale-105 transition-transform opacity-10"></div>
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-48 h-48 rounded-full object-cover border-[6px] border-white shadow-xl relative z-10 mx-auto"
                  />
                </div>
                <h4 className="text-2xl font-extrabold text-blue-900 mb-1">{member.name}</h4>
                <div className="text-orange-500 font-bold uppercase text-xs tracking-widest mb-4">{member.role}</div>
                <p className="text-slate-600 leading-relaxed text-sm italic">
                  "{member.description}"
                </p>
                <div className="mt-4 text-xs font-bold text-blue-900/40">B.Pharm (2017)</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Marketing Strategy / Scale Up */}
      <section id="strategy" className="py-24 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-orange-400 uppercase tracking-widest mb-3">Scale Up Strategy</h2>
            <h3 className="text-3xl md:text-5xl font-extrabold mb-6">Aiming for Global Impact</h3>
          </div>
          
          <div className="relative py-10">
            {/* Timeline Line */}
            <div className="absolute top-1/2 left-0 w-full h-1 bg-white/10 hidden lg:block"></div>
            
            <div className="grid lg:grid-cols-4 gap-8">
              {[
                { title: "Expand Product Line", desc: "Introduce additional diagnostic kits for broader health assessments.", step: "01" },
                { title: "Geographic Expansion", desc: "Reach new cities and international markets, urban and semi-urban.", step: "02" },
                { title: "Partnerships", desc: "Collaborate with providers, clinics, and pharmacies for wider credibility.", step: "03" },
                { title: "AI Integration", desc: "Enhance product with AI-driven insights and personalized solutions.", step: "04" }
              ].map((item, idx) => (
                <div key={idx} className="relative z-10 bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="w-12 h-12 bg-orange-500 rounded-2xl flex items-center justify-center font-black text-xl mb-6 shadow-lg shadow-orange-500/20">
                    {item.step}
                  </div>
                  <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                  <p className="text-blue-100/60 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contact" className="bg-slate-950 text-white pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-full border-4 border-white flex items-center justify-center font-bold text-white text-xl">
                  Q
                </div>
                <span className="font-extrabold text-white text-2xl tracking-tight">
                  QYX <span className="text-orange-500">MedTech</span>
                </span>
              </div>
              <p className="text-slate-400 max-w-sm mb-8 leading-relaxed">
                Empowering individuals and couples to take control of their fertility health through privacy, precision, and expert medical support.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-orange-500 transition-colors">
                  <ArrowRight size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-orange-500 transition-colors">
                  <ArrowRight size={18} />
                </a>
              </div>
            </div>
            
            <div>
              <h5 className="font-bold text-lg mb-6">Quick Links</h5>
              <ul className="space-y-4 text-slate-400 text-sm">
                <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#product" className="hover:text-white transition-colors">Solutions</a></li>
                <li><a href="#market" className="hover:text-white transition-colors">Market Size</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-bold text-lg mb-6">Contact Us</h5>
              <ul className="space-y-4 text-slate-400 text-sm">
                <li className="flex items-center gap-3">
                  <Phone size={16} className="text-orange-500" /> {CONTACT_PHONE}
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={16} className="text-orange-500" /> {CONTACT_EMAIL}
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded-full bg-blue-500"></div>
                  DPIIT Recognised Startup
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-12 border-t border-white/10 text-center text-slate-500 text-xs">
            <p>&copy; {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.</p>
            <p className="mt-2">Designed for accessibility and precision healthcare.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
