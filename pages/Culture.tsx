import React from 'react';
import { Benefit } from '../types';
import { Heart, Briefcase, GraduationCap, Home } from 'lucide-react';

const benefits: Benefit[] = [
  {
    category: "생활안정",
    items: ["상여금 지급", "명절 보너스 및 선물", "생일 축하금", "경조휴가 및 지원금", "월차/반차 제도"],
    icon: <Home className="w-8 h-8 text-blue-900" />
  },
  {
    category: "근무복지",
    items: ["월 팀비 지급", "중식비 지원 (월 26식)", "계절별 유니폼 지급", "안전보호구 지급", "교통비 지원"],
    icon: <Briefcase className="w-8 h-8 text-blue-900" />
  },
  {
    category: "건강복지",
    items: ["종합검진 지원 (본인/가족)", "충무병원 건강상담", "일반검진/뇌심평가 년 1회", "폭염/한파 시 음료 지급"],
    icon: <Heart className="w-8 h-8 text-blue-900" />
  },
  {
    category: "성장지원",
    items: ["자기개발 성장 지원", "자격증 취득 축하금", "자격증 수당 지급", "우수사원 포상", "멘토링 프로그램"],
    icon: <GraduationCap className="w-8 h-8 text-blue-900" />
  }
];

const Culture: React.FC = () => {
  return (
    <div className="pt-20">
       {/* Header */}
       <div className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">인사/복지</h1>
          <p className="text-slate-300 text-lg">
            직원이 행복해야 기업이 성장합니다. 작은 복지 하나가 큰 안전을 만듭니다.
          </p>
        </div>
      </div>

      {/* Welfare Grid */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">복지제도</h2>
            <p className="text-slate-500 mt-2">직원의 일상과 성장을 함께합니다.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:border-blue-200 transition">
                <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{benefit.category}</h3>
                <ul className="space-y-2">
                  {benefit.items.map((item, iIdx) => (
                    <li key={iIdx} className="text-slate-600 text-sm flex items-center gap-2">
                      <div className="w-1 h-1 bg-blue-900 rounded-full"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education System */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">교육체계</h2>
            <p className="text-slate-500 mt-2">체계적인 교육으로 전문가를 양성합니다.</p>
          </div>

          <div className="space-y-8 max-w-4xl mx-auto">
            {/* Step 1 */}
            <div className="flex flex-col md:flex-row gap-6 bg-slate-50 p-6 rounded-lg border-l-4 border-yellow-500">
              <div className="md:w-1/4">
                <span className="text-sm font-bold text-yellow-600 bg-yellow-100 px-3 py-1 rounded-full">Beginner</span>
                <h4 className="text-xl font-bold text-slate-900 mt-2">신규자 직무교육</h4>
              </div>
              <div className="md:w-3/4">
                <p className="text-slate-700 mb-2 font-medium">필답 교육 (2주) + OJT 실습 (6주)</p>
                <p className="text-slate-500 text-sm">기초 안전 이론 및 멘토링 프로그램을 통한 현장 적응 훈련</p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col md:flex-row gap-6 bg-slate-50 p-6 rounded-lg border-l-4 border-blue-500">
              <div className="md:w-1/4">
                <span className="text-sm font-bold text-blue-600 bg-blue-100 px-3 py-1 rounded-full">Skill-Up</span>
                <h4 className="text-xl font-bold text-slate-900 mt-2">사내 직무교육</h4>
              </div>
              <div className="md:w-3/4">
                <p className="text-slate-700 mb-2 font-medium">일별 불합리 교육 + 주별 테마 교육</p>
                <p className="text-slate-500 text-sm">현장 사례 중심의 토론형 교육 및 안전 감각 향상</p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col md:flex-row gap-6 bg-slate-50 p-6 rounded-lg border-l-4 border-slate-800">
              <div className="md:w-1/4">
                <span className="text-sm font-bold text-slate-600 bg-slate-200 px-3 py-1 rounded-full">Master</span>
                <h4 className="text-xl font-bold text-slate-900 mt-2">전문가 교육</h4>
              </div>
              <div className="md:w-3/4">
                <p className="text-slate-700 mb-2 font-medium">외부 전문기관 위탁 교육</p>
                <p className="text-slate-500 text-sm">산업안전보건공단, 장비 제조업체 방문 등 심화 전문성 함양</p>
              </div>
            </div>
          </div>
        </div>
      </section>

       {/* CSR */}
       <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">지역사회와 함께 성장하는 나눔경영</h2>
          <div className="bg-white/10 p-10 rounded-xl max-w-4xl mx-auto">
             <div className="text-5xl font-bold text-yellow-500 mb-4">1,900만원+</div>
             <p className="text-xl mb-8">누적 기부금액 (매분기 지속 후원)</p>
             <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-blue-100">
               <div className="bg-white/10 p-3 rounded">탕정면사무소</div>
               <div className="bg-white/10 p-3 rounded">배방읍사무소</div>
               <div className="bg-white/10 p-3 rounded">천안 소망의집</div>
               <div className="bg-white/10 p-3 rounded">백석동사무소</div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Culture;