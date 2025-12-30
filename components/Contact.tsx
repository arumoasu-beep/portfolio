// components/Contact.tsx
import React, { useState } from "react";

const Contact: React.FC = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const res = await fetch("https://formspree.io/f/xbdjbejb", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });

    if (res.ok) {
      setStatus("SUCCESS");
      form.reset();
    } else {
      setStatus("ERROR");
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6">Contact</h2>
        <p className="mb-6">
          お仕事のご相談・お問い合わせは、こちらのフォームよりお気軽にお送りください。
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            required
            placeholder="お名前"
            className="w-full border p-3 rounded"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="メールアドレス"
            className="w-full border p-3 rounded"
          />
          <textarea
            name="message"
            required
            placeholder="ご用件をご記入ください"
            className="w-full border p-3 rounded h-32"
          />

          <button
            type="submit"
            className="px-6 py-3 bg-indigo-600 text-white rounded"
          >
            送信する
          </button>
        </form>

        {status === "SUCCESS" && (
          <p className="text-green-600 mt-4">送信しました。ありがとうございます！</p>
        )}
        {status === "ERROR" && (
          <p className="text-red-600 mt-4">送信に失敗しました。再度お試しください。</p>
        )}
      </div>
    </section>
  );
};

export default Contact;
