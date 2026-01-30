import React from 'react';
import { ServiceItem } from '../types';
import { 
  ClipboardCheck, 
  HardHat, 
  TrafficCone, 
  Settings, 
  Truck, 
  PackageSearch 
} from 'lucide-react';

const services: ServiceItem[] = [
  {
    title: "환경안전관리사",
    description: "산업현장 중장비 및 위험작업 전문 관리",
    details: [
      "중장비(크레인 등) 사전 점검",
      "가스/케미컬 작업 중성화 확인",
      "밀폐공간 작업 5대 가스 농도 확인",
      "화기작업 규정 준수 여부 확인"
    ],
    icon: <ClipboardCheck className="w-10 h-10 text-white" />
  },
  {
    title: "안전지킴이",
    description: "위험작업 서류 작성 및 현장 안전사수",
    details: [
      "위험작업 서류 작성 및 TBM 진행",
      "보호구 착용 상태 점검",
      "작업자 건강상태 확인",
      "표준작업절차(SOP) 준수 감독"
    ],
    icon: <HardHat className="w-10 h-10 text-white" />
  },
  {
    title: "유도원",
    description: "장비 유도 및 인원 통제로 사고 예방",
    details: [
      "작업구역 설정 및 인원 통제",
      "신호법에 준한 장비 유도 (수신호 등)",
      "접근방지센서 이격 관리",
      "안전 구획(라바콘, 펜스) 설치 관리"
    ],
    icon: <TrafficCone className="w-10 h-10 text-white" />
  },
  {
    title: "반도체 설비세정",
    description: "생산 공정 장비 및 부품 정밀 세정",
    details: [
      "캐리어박스 세정",
      "모듈 및 몰드 세정",
      "불량 PCB 및 Stencil 세척",
      "설비 유지보수를 위한 클리닝"
    ],
    icon: <Settings className="w-10 h-10 text-white" />
  },
  {
    title: "부품영업 지원",
    description: "설비 부품 재고 관리 및 주문 처리",
    details: [
      "설비 부품 재고 관리 (국내외)",
      "설비 부품 주문 처리",
      "협력사 제작 주문 관리",
      "고객사 주문 접수 대응"
    ],
    icon: <PackageSearch className="w-10 h-10 text-white" />
  },
  {
    title: "부품 창고 관리",
    description: "벤더룸 운영 및 적정 재고 유지",
    details: [
      "설비 파트 및 부품 재고 관리",
      "원청 본사 및 고객사간 적정 재고 파악",
      "라인별 유지/보수 셋업 대응",
      "부품 물류 이동 대응"
    ],
    icon: <Truck className="w-10 h-10 text-white" />
  }
];

const Business: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Header */}
      <div className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">사업영역</h1>
          <p className="text-slate-300 text-lg">
            최적화된 솔루션과 전문 인력으로 안전한 현장을 만듭니다.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div key={idx} className="bg-white rounded-xl overflow-hidden shadow-lg border border-slate-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="bg-blue-900 p-6 flex items-center gap-4">
                  <div className="p-3 bg-white/20 rounded-lg">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{service.title}</h3>
                    <p className="text-blue-200 text-xs">{service.description}</p>
                  </div>
                </div>
                <div className="p-8">
                  <ul className="space-y-3">
                    {service.details.map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-3 text-slate-600 text-sm">
                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-yellow-500 shrink-0"></div>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Banner */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="md:w-1/2">
             <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
              alt="Industrial Safety" 
              className="rounded-lg shadow-xl"
             />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">전문성과 신뢰의 파트너</h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              수하이엔에스는 반도체 현장에서 축적된 노하우를 바탕으로, 단순 인력 공급을 넘어 체계적인 안전 관리 시스템을 제공합니다. 
              KOSHA-MS 인증을 통해 검증된 시스템으로 고객사의 무재해 달성을 지원합니다.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-50 p-4 rounded border border-slate-100 text-center">
                <p className="font-bold text-blue-900 text-lg">160+</p>
                <p className="text-sm text-slate-500">전문 인력 보유</p>
              </div>
              <div className="bg-slate-50 p-4 rounded border border-slate-100 text-center">
                <p className="font-bold text-blue-900 text-lg">10+</p>
                <p className="text-sm text-slate-500">주요 대기업 파트너</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Business;