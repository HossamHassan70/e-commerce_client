// App.jsx (أو Layout.jsx إذا كنت تفصل التخطيط)

import React from "react";
// يجب استيراد Outlet من مكتبة التوجيه الخاصة بك (عادةً react-router-dom)
import { Outlet } from "react-router-dom"; 
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
// لم نعد نحتاج إلى استيراد Home هنا

export default function App() {
  return (
    // العنصر الأب يضمن أن ارتفاعه يغطي الشاشة على الأقل ويستخدم Flex Column
    // **w-full min-h-screen flex flex-col** هذا التكوين صحيح لضمان بقاء الـ Footer في الأسفل
    <div className="w-full min-h-screen flex flex-col"> 
      <Header />
      <Navbar />

      {/* العنصر <main> يستخدم **flex-grow** ليأخذ كل المساحة المتبقية ويدفع الـ Footer للأسفل */}
      <main className="flex-grow">
        {/* 🚨 هنا ننادي على Outlet بدلاً من Home 🚨 */}
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}