import React, { useState } from "react";

const LoginPage = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-8 rounded shadow-lg w-80">
        <h2 className="text-2xl font-bold mb-6 text-center">Giriş Yap</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Kullanıcı Adı
          </label>
          <input type="text" className="mt-1 p-2 border rounded w-full" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Şifre
          </label>
          <input type="password" className="mt-1 p-2 border rounded w-full" />
        </div>
        <button className="bg-blue-500 text-white p-2 rounded w-full hover:bg-blue-600">
          Giriş Yap
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
