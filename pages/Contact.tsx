import React from 'react';
import { Phone, MapPin, Clock, Mail } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Header */}
       <div className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">고객지원</h1>
          <p className="text-slate-300 text-lg">
            궁금하신 사항이 있으시면 언제든지 문의해주세요.
          </p>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Info */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Contact Us</h2>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-blue-900" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-1">본사 주소</h4>
                    <p className="text-slate-600">
                      충남 아산시 탕정면 삼성로 242-10, 204동 206호<br/>
                      (31457)
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-blue-900" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-1">전화번호</h4>
                    <p className="text-slate-600">041-540-7883</p>
                    <p className="text-slate-400 text-sm mt-1">평일 09:00 - 18:00</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-blue-900" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-1">이메일</h4>
                    <p className="text-slate-600">admin@suhaens.com</p>
                  </div>
                </div>
              </div>

               {/* Map Placeholder */}
               <div className="mt-10 w-full h-64 bg-slate-200 rounded-lg overflow-hidden relative">
                  <img 
                    src="https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                    alt="Map Background" 
                    className="w-full h-full object-cover opacity-50"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white p-4 rounded shadow-lg text-center">
                      <p className="font-bold text-slate-900">Suha E&S 본사</p>
                      <a 
                        href="https://map.kakao.com/?q=충남 아산시 탕정면 삼성로 242-10" 
                        target="_blank" 
                        rel="noreferrer"
                        className="text-xs text-blue-600 hover:underline"
                      >
                        지도 보기
                      </a>
                    </div>
                  </div>
               </div>
            </div>

            {/* Form */}
            <div className="bg-slate-50 p-8 rounded-xl border border-slate-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">온라인 문의</h3>
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">회사명 / 성함</label>
                    <input type="text" className="w-full p-3 border border-slate-300 rounded focus:ring-2 focus:ring-blue-900 focus:outline-none" placeholder="입력해주세요" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">연락처</label>
                    <input type="tel" className="w-full p-3 border border-slate-300 rounded focus:ring-2 focus:ring-blue-900 focus:outline-none" placeholder="010-0000-0000" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">이메일</label>
                    <input type="email" className="w-full p-3 border border-slate-300 rounded focus:ring-2 focus:ring-blue-900 focus:outline-none" placeholder="example@company.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">문의내용</label>
                    <textarea rows={4} className="w-full p-3 border border-slate-300 rounded focus:ring-2 focus:ring-blue-900 focus:outline-none" placeholder="문의하실 내용을 입력해주세요"></textarea>
                  </div>
                  <button className="w-full bg-blue-900 text-white font-bold py-4 rounded hover:bg-blue-800 transition">
                    문의하기
                  </button>
                </div>
              </form>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;