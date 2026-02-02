import React, { useState } from 'react';
import { Phone, MapPin, Mail, X } from 'lucide-react';

const Contact: React.FC = () => {
  const [isAgreed, setIsAgreed] = useState(false);
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isAgreed) {
      alert("개인정보 수집 및 이용에 동의해주세요.");
      return;
    }

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", "023dd5d4-3f66-40a5-b578-c4cf6da195e8");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      const data = await response.json();
      if (data.success) {
        alert("감사합니다. 문의가 성공적으로 접수되었습니다!");
        form.reset();
        setIsAgreed(false);
      } else {
        alert("전송 실패: " + data.message);
      }
    } catch (error) {
      alert("네트워크 오류가 발생했습니다.");
    }
  };

  return (
    <div className="pt-20 relative font-sans text-slate-900">
      {/* --- 개인정보 수집 동의 팝업 (모달) --- */}
      {showPrivacyModal && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="bg-white rounded-xl w-full max-w-md shadow-2xl relative overflow-hidden animate-in fade-in zoom-in duration-200">
            <button 
              onClick={() => setShowPrivacyModal(false)} 
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center bg-slate-100 rounded-full text-slate-500 hover:bg-slate-200 transition-colors"
            >
              <X size={20} />
            </button>
            <div className="p-8">
              <h3 className="text-xl font-bold mb-8 text-center text-slate-800">개인정보 수집 및 이용 안내</h3>
              <div className="space-y-5 text-[14px] text-slate-600 leading-relaxed text-left">
                <p><strong>1. 목적 :</strong> 문의 및 상담 서비스 제공을 위한 연락처 정보 확인</p>
                <p><strong>2. 필수 항목 :</strong> 이름(또는 상호명), 연락처, 이메일</p>
                <p><strong>3. 선택 항목 :</strong> 문의 내용</p>
                <p><strong>4. 수집 항목 :</strong> 사용자 쿠키 데이터 (유입 경로, 내부 이동 경로 등)</p>
                <p><strong>5. 보유기간 :</strong> 상담 완료 시까지 보관하며, 이후 지체 없이 파기합니다.</p>
                <div className="pt-4 border-t border-slate-100 text-[13px] text-slate-500">
                  위 정보 수집에 대한 동의를 거부할 권리가 있으며, 거부 시에는 서비스 이용이 제한될 수 있습니다.
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 헤더 섹션 (이전 스타일로 복구) */}
      <div className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">고객지원</h1>
          <p className="text-slate-300 text-lg">궁금하신 사항이 있으시면 언제든지 문의해주세요.</p>
        </div>
      </div>

      <section className="py-10 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            
            {/* 왼쪽: Contact Us 정보 및 지도 */}
            <div className="flex flex-col h-full">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Contact Us</h2>
              <div className="space-y-6 mb-8">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-[#1e3a8a]" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900 mb-0.5">본사 주소</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">충남 아산시 탕정면 삼성로 242-10, 204동 206호 (31457)</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-[#1e3a8a]" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900 mb-0.5">전화번호</h4>
                    <p className="text-slate-600 text-sm">041-540-7883</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-[#1e3a8a]" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900 mb-0.5">이메일</h4>
                    <p className="text-slate-600 text-sm font-medium">official@suha-ens.com</p>
                  </div>
                </div>
              </div>

              {/* 오시는 길 제목 추가 */}
              <h3 className="text-xl font-bold text-slate-900 mb-3">오시는 길</h3>

              {/* --- Map (높이 축소) --- */}
              <div className="w-full h-[300px] bg-slate-200 rounded-2xl overflow-hidden shadow-lg border border-slate-200 relative">
                 <iframe 
                   src="https://maps.google.com/maps?q=충남%20아산시%20탕정면%20삼성로%20242-10&t=&z=16&ie=UTF8&iwloc=&output=embed"
                   width="100%" 
                   height="100%" 
                   style={{ border: 0 }} 
                   allowFullScreen 
                   loading="lazy" 
                   referrerPolicy="no-referrer-when-downgrade"
                   title="Suha E&S Headquarters Map"
                   className="grayscale-[20%] hover:grayscale-0 transition-all duration-500 absolute inset-0"
                 ></iframe>
              </div>
            </div>

            {/* 오른쪽: 온라인 문의 폼 (높이 확장 및 Flex 적용) */}
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm h-full flex flex-col">
              <h3 className="text-xl font-bold text-slate-900 mb-6">온라인 문의</h3>
              <form onSubmit={handleSubmit} className="flex flex-col flex-grow gap-3">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700 ml-1">회사명 / 성함</label>
                  <input name="name" type="text" className="w-full p-3 bg-white border border-slate-200 rounded-lg outline-none focus:ring-2 focus:ring-blue-900/10 focus:border-[#1e3a8a] transition-all text-sm" placeholder="입력해주세요" required />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700 ml-1">연락처</label>
                  <input name="phone" type="tel" className="w-full p-3 bg-white border border-slate-200 rounded-lg outline-none focus:ring-2 focus:ring-blue-900/10 focus:border-[#1e3a8a] transition-all text-sm" placeholder="010-0000-0000" required />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700 ml-1">이메일</label>
                  <input name="email" type="email" className="w-full p-3 bg-white border border-slate-200 rounded-lg outline-none focus:ring-2 focus:ring-blue-900/10 focus:border-[#1e3a8a] transition-all text-sm" placeholder="example@company.com" required />
                </div>
                
                {/* 문의내용: 남은 공간 채우기 */}
                <div className="space-y-1 flex flex-col flex-grow min-h-[120px]">
                  <label className="text-xs font-semibold text-slate-700 ml-1">문의내용</label>
                  <textarea 
                    name="message" 
                    className="w-full p-3 bg-white border border-slate-200 rounded-lg outline-none focus:ring-2 focus:ring-blue-900/10 focus:border-[#1e3a8a] transition-all text-sm flex-grow resize-none" 
                    placeholder="문의하실 내용을 입력해주세요" 
                    required
                  ></textarea>
                </div>
                
                {/* --- 파란색 체크박스 동의 섹션 --- */}
                <div className="pt-2 mt-auto">
                  <div className="py-1">
                    <p className="text-[13px] text-slate-800 font-semibold mb-2 flex items-center">
                      개인정보 수집 및 이용 동의 <span className="text-rose-500 ml-1">*</span>
                    </p>
                    <div className="flex items-center gap-2">
                      <input 
                        id="privacy-check"
                        type="checkbox" 
                        checked={isAgreed}
                        onChange={(e) => setIsAgreed(e.target.checked)}
                        className="w-4 h-4 rounded border-slate-300 text-[#1e3a8a] focus:ring-[#1e3a8a] cursor-pointer"
                      />
                      <label htmlFor="privacy-check" className="text-[13px] text-slate-700 cursor-pointer select-none">
                        동의합니다
                      </label>
                      <button 
                        type="button"
                        onClick={() => setShowPrivacyModal(true)}
                        className="text-[13px] text-slate-400 underline underline-offset-4 hover:text-blue-900 ml-1"
                      >
                        보기
                      </button>
                    </div>
                  </div>

                  {/* --- 수하이엔에스 블루 버튼 --- */}
                  <button 
                    type="submit" 
                    disabled={!isAgreed}
                    className={`w-full py-3 mt-3 rounded-lg font-bold text-base transition-all duration-300 ${
                      isAgreed 
                      ? 'bg-[#1e3a8a] text-white hover:bg-[#172e6d] shadow-md transform hover:-translate-y-0.5' 
                      : 'bg-slate-300 text-slate-500 cursor-not-allowed'
                    }`}
                  >
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
