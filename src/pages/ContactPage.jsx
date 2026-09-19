import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, MessageSquare } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    company: '',
    name: '',
    email: '',
    phone: '',
    requirement: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `*FORM PERMINTAAN PENAWARAN (RFQ)*\n\n` +
      `Perusahaan: ${formData.company}\n` +
      `PIC: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `No. Telp/WA: ${formData.phone}\n` +
      `Kebutuhan: ${formData.requirement}`
    );
    window.open(`https://wa.me/6285880427199?text=${text}`, '_blank');
  };

  return (
    <div className="py-12 sm:py-20 bg-slate-50 dark:bg-[#070B14] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-12">
          <span className="text-amber-500 font-extrabold text-xs tracking-widest uppercase block mb-2">
            Get in Touch
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
            Hubungi Tim Penjualan & Teknik
          </h1>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-2">
            Ajukan permintaan penawaran harga (RFQ), estimasi waktu pengiriman, atau diskusi teknis dengan tim engineering kami.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Kolom Info Kontak */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white dark:bg-[#0C1222] border border-slate-200 dark:border-slate-800/80 rounded-2xl p-6 sm:p-8 space-y-6">
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-amber-500/10 rounded-xl text-amber-500 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-sm font-bold text-slate-900 dark:text-white">Alamat Kantor & Gudang</h2>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                 Kawasan Pergudangan Terpadu Blok A No. 12, Jl. Contoh Industri Utama, Jakarta Raya, Indonesia.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-amber-500/10 rounded-xl text-amber-500 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-sm font-bold text-slate-900 dark:text-white">Telepon & WhatsApp</h2>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                    +62 812-XXXX-XXXX
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-amber-500/10 rounded-xl text-amber-500 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-sm font-bold text-slate-900 dark:text-white">Email Korespondensi</h2>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                    contact@companyexample.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-amber-500/10 rounded-xl text-amber-500 shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-sm font-bold text-slate-900 dark:text-white">Jam Operasional</h2>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                    Senin – Jumat: 08.00 – 17.00 WIB<br />
                    Sabtu: 08.00 – 13.00 WIB
                  </p>
                </div>
              </div>

            </div>

            {/* Quick Action Banner */}
            <div className="p-6 rounded-2xl bg-amber-500 text-slate-950 flex items-center justify-between gap-4">
              <div>
                <h2 className="font-black text-sm">Butuh Respon Cepat?</h2>
                <p className="text-xs font-semibold mt-0.5 opacity-90">Terhubung langsung dengan Sales Engineer via WhatsApp</p>
              </div>
              <a
                href="https://wa.me/6285880427199"
                target="_blank"
                rel="noreferrer"
                className="p-3 bg-slate-950 text-white rounded-xl hover:bg-slate-800 transition shrink-0"
              >
                <MessageSquare className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Form RFQ */}
          <div className="lg:col-span-7 bg-white dark:bg-[#0C1222] border border-slate-200 dark:border-slate-800/80 rounded-2xl p-6 sm:p-8">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
              Kirim Formulir Permintaan Penawaran (RFQ)
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
              Lengkapi informasi berikut dan tim kami akan segera menyiapkan estimasi penawaran resmi.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                    Nama Perusahaan / PT
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Contoh: PT Semen Perkasa"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                    Nama PIC
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Nama Anda"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                    Email Perusahaan
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="nama@perusahaan.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                    Nomor Telepon / WA
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="0812xxxx"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                  Rincian Kebutuhan & Spesifikasi Barang
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Cantumkan nama produk, ukuran, spesifikasi standar (ANSI/DIN), dan perkiraan kuantiti..."
                  value={formData.requirement}
                  onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-amber-500 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 px-4 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold rounded-xl text-xs transition duration-150 inline-flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-amber-500/20"
              >
                <Send className="w-4 h-4" />
                <span>Kirim Permintaan Penawaran</span>
              </button>
            </form>
          </div>

        </div>

      </div>
    </div>
  );
}