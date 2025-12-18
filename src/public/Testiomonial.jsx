"use client";
import { MessageCircle } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    {
      name: "Sarah",
      text: "Amazing IT support and strategy guidance!",
      title: "Manager, SolutionsPlus",
    },
    {
      name: "John",
      text: "Reliable and innovative tech partner.",
      title: "CTO, TechCorp",
    },
    {
      name: "Jane",
      text: "Exceptional service and expertise.",
      title: "CEO, BusinessInc",
    },
  ];

  return (
    <section className="py-20 bg-white text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-indigo-600 mb-10">
        What They’re Saying
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto px-6">
        {reviews.map((r) => (
          <div
            key={r.name}
            className="p-6 bg-gray-50 rounded-lg shadow hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            <MessageCircle className="w-12 h-12 text-indigo-600 mb-4 mx-auto" />
            <p className="text-gray-700 italic mb-3">“{r.text}”</p>
            <h4 className="font-bold text-indigo-600">{r.name}</h4>
            <p className="text-gray-500">{r.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
