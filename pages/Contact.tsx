import React from 'react';
import { Phone, MapPin, Mail } from 'lucide-react';

const Contact: React.FC = () => {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      // 폼이니트(Getform) 전용 주소로 변경되었습니다.
      const response = await fetch("https://getform.io/f/3t47wpfmxei", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        // 성공 시 팝업 알림
        alert("문의가 정상적으로 접수되었습니다.\n확인 후 빠르게 연락드리겠습니다.");
        form.reset(); 
      } else {
        alert("전송에 실패했습니다. 잠시 후 다시 시도해주세요.");
      }
    } catch (error) {
      alert("서버와 통신 중 오류가 발생했습니다.");
    }
  };

  return (
    <div className="pt-20">
      <div className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">고객지원</h1>
          <p className="text-slate-300 text-lg">궁금하신 사항이 있으시면 언제든지 문의해주세요.</p>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* 연락처 정보 */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Contact Us</h2>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-blue-900" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-1">본사 주소</h4>
                    <p className="text-slate-600">충남 아산시 탕정면 삼성로 242-10, 204동 206호 (31457)</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-blue-900" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-1">전화번호</h4>
                    <p className="text-slate-600">041-540-7883</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-blue-900" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-1">이메일</h4>
                    <p className="text-slate-600">official@suha-ens.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 온라인 문의 폼 (중요: action 삭제됨) */}
            <div className="bg-slate-50 p-8 rounded-xl border border-slate-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">온라인 문의</h3>
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">회사명 / 성함</label>
                    <input name="name" type="text" className="w-full p-3 border border-slate-300 rounded focus:ring-2 focus:ring-blue-900" placeholder="입력해주세요" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">연락처</label>
                    <input name="phone" type="tel" className="w-full p-3 border border-slate-300 rounded focus:ring-2 focus:ring-blue-900" placeholder="010-0000-0000" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">이메일</label>
                    <input name="email" type="email" className="w-full p-3 border border-slate-300 rounded focus:ring-2 focus:ring-blue-900" placeholder="example@company.com" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">문의내용</label>
                    <textarea name="message" rows={4} className="w-full p-3 border border-slate-300 rounded focus:ring-2 focus:ring-blue-900" placeholder="문의하실 내용을 입력해주세요" required></textarea>
                  </div>
                  <button type="submit" className="w-full bg-blue-900 text-white font-bold py-4 rounded hover:bg-blue-800 transition shadow-lg">
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
