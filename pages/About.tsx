import React from 'react';
import { HistoryItem } from '../types';
import { CheckCircle2, Trophy, Users } from 'lucide-react';

const historyData: HistoryItem[] = [
  {
    year: "2024~2025",
    events: [
      "삼성전자 온양/천안사업장 안전감시 업무 종료 (25.09)",
      "세메스 해외 사업장(대만) 신규 위탁 체결 (25.08)",
      "캐논(아넬바 공정) 신규 위탁 체결 (25.08)",
      "신보, (주)채우 안전관리사 신규 위탁 (24.01)"
    ]
  },
  {
    year: "2022~2023",
    events: [
      "HKSPACE(온양/천안) 신규 위탁 (23.09)",
      "캐논코리아(평택) 신규 위탁 (23.05)",
      "한양이엔지 안전감시단 신규 위탁 (22.12)",
      "KOSHA MS 전환심사 취득 (22.05)"
    ]
  },
  {
    year: "2020~2021",
    events: [
      "세메스 기흥/화성/탕정 안전지킴이 위탁 (21.10)",
      "세메스 본사 감시단 신규 위탁 (21.07)",
      "KOSHA 18001 연장심사 취득 (20.09)",
      "(주)수하이엔에스 법인명 변경 (20.07)"
    ]
  }
];

const About: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Page Header */}
      <div className="bg-slate-900 text-white py-20 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">회사소개</h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            사람 중심의 경영과 상생, 소통을 기반으로 안전한 산업 현장을 만들어갑니다.
          </p>
        </div>
      </div>

      {/* CEO Message */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/3">
              <div className="bg-slate-100 rounded-lg p-2">
                 <img 
                  src="https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="CEO" 
                  className="w-full h-auto rounded shadow-lg grayscale hover:grayscale-0 transition duration-500"
                 />
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                "사람이 먼저다(People First)"
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6 text-lg">
                안녕하십니까,<br/>
                (주)수하이엔에스는 반도체·제조현장 등 산업현장의 '무재해 관리'를 전문으로 하는 종합 안전관리 기업입니다.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                저희는 단기 성과에 치우치지 않고 직원의 안전, 성장, 삶의 질을 지속적으로 개선함으로써 장기적인 경쟁력 확보를 목표로 합니다.
                이를 위해 우리는 사람 중심의 경영과 상생, 소통 기반의 조직 문화를 핵심 원칙으로 삼고 있습니다.
              </p>
              <div className="mt-8">
                <p className="font-bold text-slate-900">대표이사 박 종 철</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">경영철학</h2>
            <p className="text-slate-500 mt-2">수하이엔에스가 추구하는 핵심 가치입니다.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 text-center hover:shadow-lg transition">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-blue-900" />
              </div>
              <h3 className="text-xl font-bold mb-4">사람 중심 경영</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                모든 정책은 직원의 신체적 안전과 인권적 존엄성을 최우선으로 합니다. 정규직 중심 고용과 공정 보상을 실현합니다.
              </p>
            </div>
             <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 text-center hover:shadow-lg transition">
              <div className="w-16 h-16 bg-yellow-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <Trophy className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">동반 성장</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                직무교육, 자격 취득, 경력개발을 통해 개인과 조직이 함께 성장하며, 투명한 평가로 신뢰를 확보합니다.
              </p>
            </div>
             <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 text-center hover:shadow-lg transition">
              <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">상생과 소통</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                일방적 지시가 아닌 현장의 목소리를 반영하는 쌍방향 소통 구조와 상생 협력 체계를 구축합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* History */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">연혁</h2>
            <p className="text-slate-500 mt-2">6년간 10여 개 대기업/중견기업 파트너십 확대</p>
          </div>

          <div className="relative border-l-2 border-slate-200 ml-4 md:ml-1/2">
            {historyData.map((item, idx) => (
              <div key={idx} className="mb-10 ml-6 md:ml-0 md:flex md:justify-between items-center w-full">
                <div className="absolute -left-[9px] md:left-1/2 md:-ml-[9px] w-5 h-5 bg-blue-900 rounded-full border-4 border-white"></div>
                
                <div className={`md:w-[45%] ${idx % 2 === 0 ? 'md:mr-auto md:text-right md:pr-10' : 'md:ml-auto md:pl-10'}`}>
                   <h3 className="text-2xl font-bold text-blue-900 mb-4">{item.year}</h3>
                   <ul className="space-y-2">
                     {item.events.map((event, eventIdx) => (
                       <li key={eventIdx} className="text-slate-600 text-sm">{event}</li>
                     ))}
                   </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;