import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Users, Briefcase, TrendingUp } from 'lucide-react';

const clients = [
  "Samsung Electronics", "SEMES", "Canon Korea", "Hanyang ENG", "SFA", "Wonik IPS"
];

const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center bg-slate-900 text-white overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
            alt="Safety Construction" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 pt-20">
          <div className="max-w-3xl">
            <div className="inline-block px-3 py-1 bg-yellow-500 text-slate-900 font-bold text-xs rounded mb-4">
              KOSHA-MS 인증기업
            </div>
            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
              People First,<br />
              <span className="text-yellow-500">Safety Always.</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 font-light leading-relaxed">
              사람이 안전해야 기업이 안전합니다.<br/>
              (주)수하이엔에스는 산업현장의 무재해 관리를 전문으로 하는<br className="hidden md:block" />
              종합 안전관리 파트너입니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/business" className="px-8 py-4 bg-yellow-500 text-slate-900 font-bold rounded hover:bg-yellow-400 transition flex items-center justify-center gap-2">
                사업영역 보기 <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/contact" className="px-8 py-4 border border-white text-white font-bold rounded hover:bg-white/10 transition flex items-center justify-center">
                문의하기
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white relative -mt-10 z-20 container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 bg-white rounded-xl shadow-xl p-10 border border-slate-100">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <ShieldCheck className="w-12 h-12 text-blue-900" />
            </div>
            <h3 className="text-4xl font-black text-slate-900 mb-2">ZERO</h3>
            <p className="text-slate-500 font-medium">중대재해 발생 건수</p>
          </div>
          <div className="text-center border-t md:border-t-0 md:border-l border-slate-100 pt-8 md:pt-0">
            <div className="flex justify-center mb-4">
              <Users className="w-12 h-12 text-blue-900" />
            </div>
            <h3 className="text-4xl font-black text-slate-900 mb-2">160+</h3>
            <p className="text-slate-500 font-medium">안전 전문 인력</p>
          </div>
           <div className="text-center border-t md:border-t-0 md:border-l border-slate-100 pt-8 md:pt-0">
            <div className="flex justify-center mb-4">
              <Briefcase className="w-12 h-12 text-blue-900" />
            </div>
            <h3 className="text-4xl font-black text-slate-900 mb-2">95%</h3>
            <p className="text-slate-500 font-medium">정규직 비율</p>
          </div>
           <div className="text-center border-t md:border-t-0 md:border-l border-slate-100 pt-8 md:pt-0">
            <div className="flex justify-center mb-4">
              <TrendingUp className="w-12 h-12 text-blue-900" />
            </div>
            <h3 className="text-4xl font-black text-slate-900 mb-2">4yr+</h3>
            <p className="text-slate-500 font-medium">평균 근속년수 (감시단)</p>
          </div>
        </div>
      </section>

      {/* About Brief */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-blue-900 font-bold text-lg mb-2">ABOUT US</h2>
              <h3 className="text-4xl font-bold text-slate-900 mb-6 leading-tight">
                비즈니스 성공의 가치를 탐구하며<br/>
                <span className="text-blue-900">최적의 안전 전략</span>을 수립합니다.
              </h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                (주)수하이엔에스는 삼성전자, 세메스 등 국내 주요 대기업 현장에서
                안전관리 서비스를 위탁 운영하며 기술력과 신뢰를 쌓아왔습니다.
                단기 성과에 치우치지 않고 직원의 안전, 성장, 삶의 질을 지속적으로 개선합니다.
              </p>
              <Link to="/about" className="text-blue-900 font-bold border-b-2 border-blue-900 hover:text-blue-700 transition pb-1 inline-block">
                회사소개 자세히 보기
              </Link>
            </div>
            <div className="relative">
              <div className="bg-blue-900 absolute -top-4 -left-4 w-full h-full rounded-lg opacity-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Construction Meeting" 
                className="rounded-lg shadow-lg relative z-10 w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-blue-900 font-bold text-lg mb-2">OUR SERVICE</h2>
            <h3 className="text-3xl font-bold text-slate-900">통합 안전 가이드 및 관리 솔루션</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "환경안전관리사", desc: "중장비 사전 점검 및 밀폐공간/화기작업 안전 관리", img: "https://images.unsplash.com/photo-1531816458010-fb7685eecdad?auto=format&fit=crop&w=500&q=80" },
              { title: "안전지킴이", desc: "위험작업 서류 작성 및 표준작업절차 준수 감독", img: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=500&q=80" },
              { title: "반도체 설비세정", desc: "캐리어박스, 모듈, 몰드 등 정밀 세정 서비스", img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=500&q=80" }
            ].map((service, idx) => (
              <div key={idx} className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer">
                <img src={service.img} alt={service.title} className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-90"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h4 className="text-xl font-bold text-white mb-2">{service.title}</h4>
                  <p className="text-slate-300 text-sm mb-4">{service.desc}</p>
                  <span className="text-yellow-500 text-sm font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
                    MORE VIEW <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/business" className="inline-block px-8 py-3 border border-slate-300 text-slate-600 rounded-full hover:bg-slate-50 transition">
              모든 사업분야 보기
            </Link>
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="container mx-auto px-6">
          <p className="text-center text-slate-400 font-bold mb-8 tracking-widest text-sm">TRUSTED PARTNERS</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
            {clients.map((client, idx) => (
              <div key={idx} className="text-2xl font-bold text-slate-300 font-sans">
                {client}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl font-bold text-white mb-6">귀사의 성공과 성장을 도와드립니다</h2>
          <p className="text-blue-200 mb-10 text-lg">
            안전은 곧 신뢰입니다. 사람과 현장을 지키는 진정한 파트너가 되겠습니다.
          </p>
          <Link to="/contact" className="inline-block px-10 py-4 bg-yellow-500 text-blue-900 font-bold text-lg rounded shadow-lg hover:bg-yellow-400 hover:shadow-xl transition transform hover:-translate-y-1">
            문의하기
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;