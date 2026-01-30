import React from 'react';
import { Phone, MapPin, Mail, Award } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Company Info */}
          <div>
            <div className="mb-4">
               <div className="bg-white p-2 rounded-lg inline-block">
                 <img src="/suha_logo.png" alt="Suha E&S" className="h-8 w-auto" />
               </div>
            </div>
            <p className="text-sm leading-relaxed mb-6 text-slate-400">
              (주)수하이엔에스는 반도체·제조현장 등 산업현장의 '무재해 관리'를 전문으로 하는 종합 안전관리 기업입니다.
              사람이 안전해야 기업이 안전하다는 철학을 실천합니다.
            </p>
            <div className="flex items-center gap-3">
              <div className="bg-white/10 p-2 rounded">
                 <Award className="w-5 h-5 text-yellow-500" />
              </div>
              <div className="text-sm">
                <p className="font-bold text-white">KOSHA-MS 인증기업</p>
                <p className="text-xs text-slate-400">안전보건경영시스템</p>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-yellow-500 mt-0.5" />
                <span className="text-sm">
                  충남 아산시 탕정면 삼성로 242-10, 204동 206호 (31457)
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-yellow-500" />
                <span className="text-sm">041-540-7883</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-yellow-500" />
                <span className="text-sm">admin@suhaens.com</span>
              </li>
            </ul>
          </div>

          {/* Quick Links / Message */}
          <div>
             <h3 className="text-white font-bold text-lg mb-4">Core Value</h3>
             <p className="text-2xl font-light text-white italic mb-4">
               "People First,<br/> Safety Always."
             </p>
             <p className="text-sm text-slate-400">
               고객의 비즈니스 성공을 함께 합니다.<br/>
               안전한 산업 현장을 만드는 진정한 파트너가 되겠습니다.
             </p>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>COPYRIGHT (c) (주)수하이엔에스 ALL RIGHTS RESERVED.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <span>개인정보처리방침</span>
            <span>이메일무단수집거부</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
