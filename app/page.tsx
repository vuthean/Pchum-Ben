"use client";

import { useEffect, useState } from "react";

const tripDate = new Date("2026-10-10T06:00:00+07:00");

export default function Home() {
  const [countdown, setCountdown] = useState("");

  useEffect(() => {
    const update = () => {
      const diff = tripDate.getTime() - Date.now();
      if (diff <= 0) {
        setCountdown("ដល់ថ្ងៃទៅវត្តហើយ! 🙏");
        return;
      }
      const days = Math.floor(diff / 86400000);
      const hours = Math.floor((diff % 86400000) / 3600000);
      const mins = Math.floor((diff % 3600000) / 60000);
      const secs = Math.floor((diff % 60000) / 1000);
      setCountdown(`${days} ថ្ងៃ ${hours} ម៉ោង ${mins} នាទី ${secs} វិនាទី`);
    };

    update();
    const timer = setInterval(update, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main>
      <section className="hero">
        <div className="lantern lantern1">🏮</div>
        <div className="lantern lantern2">🏮</div>
        <div className="lotus">🪷</div>

        <nav>
          <div className="brand">🙏 ភ្ជុំបិណ្ឌ ២០២៦</div>
          <a href="#details">ព័ត៌មាន</a>
        </nav>

        <div className="heroContent">
          <p className="eyebrow">១០ • ១០ • ២០២៦</p>
          <h1>ទៅវត្ត<br /><span>ជាមួយមិត្តភក្តិ</span></h1>
          <p className="lead">
            មួយថ្ងៃសម្រាប់ការជួបជុំ ការធ្វើបុណ្យ និងការចែករំលែកស្នាមញញឹម។
          </p>

          <div className="dateCard">
            <div>
              <small>ថ្ងៃ</small>
              <strong>សៅរ៍</strong>
            </div>
            <div className="divider" />
            <div>
              <small>កាលបរិច្ឆេទ</small>
              <strong>១០ តុលា ២០២៦</strong>
            </div>
            <div className="divider" />
            <div>
              <small>ម៉ោងចាប់ផ្តើម</small>
              <strong>៦:០០ ព្រឹក</strong>
            </div>
          </div>

          <a className="primaryButton" href="#details">មើលកម្មវិធី ↓</a>
        </div>
      </section>

      <section className="countdownSection">
        <p>រាប់ថយក្រោយដល់ថ្ងៃទៅវត្ត</p>
        <div className="countdown">{countdown}</div>
      </section>

      <section id="details" className="content">
        <div className="sectionHeading">
          <p className="eyebrow">OUR DAY</p>
          <h2>កម្មវិធីរបស់ពួកយើង</h2>
          <p>មិនចាំបាច់ប្រណិតទេ — សំខាន់គឺបានជួបគ្នា និងធ្វើបុណ្យជាមួយគ្នា។</p>
        </div>

        <div className="timeline">
          <article>
            <span>០៦:០០</span>
            <div>
              <h3>ជួបជុំគ្នា</h3>
              <p>ជួបគ្នាតាមចំណុចកំណត់ ហើយត្រៀមដំណើរទៅវត្ត។</p>
            </div>
          </article>
          <article>
            <span>០៧:០០</span>
            <div>
              <h3>ទៅវត្ត 🙏</h3>
              <p>ធ្វើបុណ្យ ប្រគេនចង្ហាន់ និងចូលរួមពិធីតាមប្រពៃណី។</p>
            </div>
          </article>
          <article>
            <span>១០:០០</span>
            <div>
              <h3>ជួបជុំ & ថតរូប</h3>
              <p>សម្រាក និយាយលេង និងរក្សាទុកអនុស្សាវរីយ៍ជាមួយគ្នា។</p>
            </div>
          </article>
          <article>
            <span>១២:០០</span>
            <div>
              <h3>អាហារថ្ងៃត្រង់ 🍚</h3>
              <p>ញ៉ាំអាហារជាមួយគ្នា និងបញ្ចប់កម្មវិធីដោយស្នាមញញឹម។</p>
            </div>
          </article>
        </div>
      </section>

      <section className="quote">
        <div className="quoteMark">“</div>
        <p>បុណ្យភ្ជុំបិណ្ឌ គឺជាពេលវេលានៃការចងចាំ ការដឹងគុណ និងការជួបជុំគ្រួសារ។</p>
        <span>— សួស្តីបុណ្យភ្ជុំបិណ្ឌ 🙏</span>
      </section>

      <section className="friends">
        <p className="eyebrow">FRIENDS DAY</p>
        <h2>មកជាមួយគ្នា ❤️</h2>
        <p>កុំភ្លេចអាវស្អាតៗ កាមេរ៉ា និងស្នាមញញឹមរបស់អ្នក!</p>
        <button onClick={() => alert("បានកក់កន្លែងក្នុងក្រុមហើយ! 🙏❤️")}>
          ខ្ញុំទៅជាមួយ! 🙌
        </button>
      </section>

      <footer>
        <div>🙏 បុណ្យភ្ជុំបិណ្ឌ ២០២៦</div>
        <span>Made with ❤️ for friends & family</span>
      </footer>
    </main>
  );
}