import React, { useState } from 'react';
import { Phone, MapPin, Mail, X } from 'lucide-react';

const Contact: React.FC = () => {
  const [isAgreed, setIsAgreed] = useState(false); // 체크박스 상태 관리
  const [showPrivacyModal, setShowPrivacyModal] = useState(false); // 팝업창 상태 관리

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // 동의 체크 여부 다시 확인
    if (!isAgreed) {
      alert("개인정보 수집 및 이용에 동의해주세요.");
      return;
    }

    const form = e.currentTarget;
    const formData = new FormData(form);

    // ✅ 발급받으신 Web3Forms Access Key 적용
    formData.append("access_key", "023dd5d4-3f66-40a5-b578-c4cf6da195e8");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        alert("감사합니다. 문의가 성공적으로 접수되었습니다. 확인 후 연락드리겠습니다.");
        form.reset();
        setIsAgreed(false); // 폼 초기화 시 체크박스도 해제
      } else {
        alert("죄송합니다. 전송 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.");
      }
    } catch (error) {
      alert("네트워크 오류가 발생했습니다. 연결 상태를 확인해주세요.");
    }
  };

  return (
    <div className="pt-20 relative">
      {/* --- 개인정보 수집 동의 상세 팝업 (모달) --- */}
      {showPrivacyModal && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-50 p-4">
          <div className="bg-white rounded-lg w-full max-w-md shadow-2xl relative animate-in fade-in zoom-in duration-200">
            <button 
              onClick={() => setShowPrivacyModal(false)} 
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors"
            >
              <X size={24} />
            </button>
            <div className="p-8">
              <h3 className="text-xl font-bold mb-6 text-slate-900 border-b pb-4">개인정보 수집 및 이용 안내</h3>
              <div className="space-y-4 text-sm text-slate-600 overflow-y-auto max-h-[350px] pr-2 text-left leading-relaxed">
                <p><strong>1. 목적 :</strong> 상담 및 서비스 제공을 위한 연락처 정보 확인</p>
                <p><strong>2. 필수 항목 :</strong> 회사명/성함, 연락처, 이메일</p>
                <p><strong>3. 수집 항목 :</strong> 상담 내용 및 접속 로그 데이터 등</p>
                <p><strong>4. 보유 및 이용기간 :</strong> 검토 완료 후 서비스 종료 시까지 보관하며, 이후 지체 없이 파기합니다.</p>
                <p className="pt-4 text-xs text-slate-500 border-t">※ 위 정보 수집에 대한 동의를 거부할 권리가 있으며, 거부 시에는 문의 접수가 제한될 수 있습니다.</p>
              </div>
              <button 
                onClick={() => setShowPrivacyModal(false)}
                className="w-full mt-6 bg-slate-900 text-white py-3 rounded font-bold hover:bg-slate-800 transition"
              >
                확인
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 헤더 섹션 */}
      <div className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">고객지원</h1>
          <p className="text-slate-300 text-lg">궁금하신 사항이 있으시면 언제든지 문의해주세요.</p>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* 왼쪽 정보 섹션 */}
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
                    <p
