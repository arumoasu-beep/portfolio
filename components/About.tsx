// components/About.tsx
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6">About Me</h2>

        <p className="mb-4">
          <strong>almos（アルモアス）</strong> です。東京・神奈川を拠点に活動しています。
          大手企業での事務職経験を活かしながら、
          <strong>動画編集・WordPress制作・GAS業務自動化・オンライン秘書</strong>
          を中心に、“現場で本当に役立つサポート” を提供しています。
        </p>

        <p className="mb-4">
          アパレル撮影のディレクション経験もあり、
          「段取り」「伝わりやすい見せ方」に落とし込むことが得意です。
        </p>

        <h3 className="text-xl font-semibold mt-6">できること</h3>
        <ul className="list-disc pl-6">
          <li>動画編集（Premiere Pro）</li>
          <li>WordPress制作</li>
          <li>Google Apps Script（業務自動化）</li>
          <li>オンライン秘書（事務サポート / 調整業務）</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6">強み</h3>
        <ul className="list-disc pl-6">
          <li>大手企業で培った報連相・遂行力</li>
          <li>改善点を見つけて即提案・即実行</li>
          <li>コツコツ丁寧・誠実対応</li>
          <li>クリエイティブ × 実務を両立</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6">仕事スタイル</h3>
        <ul className="list-disc pl-6">
          <li>対応：動画編集 / WordPress / GAS / 秘書業務</li>
          <li>時間：平日夜21時〜 / 週末可</li>
          <li>連絡：Slack / Email / Instagram / LINE</li>
        </ul>
      </div>
    </section>
  );
};

export default About;
