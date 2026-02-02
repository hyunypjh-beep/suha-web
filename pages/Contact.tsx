import React from 'react';
import { Phone, MapPin, Mail } from 'lucide-react';

const Contact: React.FC = () => {
  // 폼 제출을 처리하는 함수
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // 페이지 새로고침 방지
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      // 새로운 Forminit(Getform) ID 반영
      const response = await fetch("https://getform.io/f/yuqmtegektv", {
        method: "POST",
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        // 성공 시 팝업 띄우기
        alert("감사합니다. 문의가 성공적으로 접수되었습니다. 확인 후 연락드리겠습니다.");
        form.reset(); // [팝업 확인 버튼 클릭 시 실행] 모든 입력 필드 초기화
      } else {
        alert("오류가 발생했습니다. 잠시 후 다시 시도해주세요.");
      }
    } catch (error) {
      alert("전송 중 서버 오류가 발생했습니다.");
    }
  };

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
                    <p className="text-slate-400 text-sm mt-1">평일 08:00 - 17:00</p>
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

            {/* 온라인 문의 폼 */}
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
