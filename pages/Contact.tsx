import React from 'react';
import { Phone, MapPin, Mail } from 'lucide-react';

const Contact: React.FC = () => {
  // 폼 제출 핸들러
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // 페이지 이동 절대 방지
    
    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xaqbjajg", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        // 성공 시 팝업 알림
        alert("문의가 정상적으로 접수되었습니다.\n확인 후 빠르게 연락드리겠습니다.");
        form.reset(); // 입력 폼 초기화
      } else {
        // Formspree 응답 에러 시
        alert("전송에 실패했습니다. 잠시 후 다시 시도해주세요.");
      }
    } catch (error) {
      // 네트워크 에러 시
      alert("서버와 통신 중 오류가 발생했습니다.");
    }
  };

  return (
    <div className="pt-20">
      {/* 상단 헤더 */}
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
            
            {/* 왼쪽: 연락처 정보 */}
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

              {/* 지도 이미지 섹션 */}
              <div className="mt-10 w-full h-64 bg-slate-200 rounded-lg overflow-hidden relative">
                <img 
                  src="
