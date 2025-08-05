import React from "react";

export default function Login() {
  return (
    <div className="flex h-screen w-screen bg-[#011A53] font-sans">
      {/* Esquerda */}
      <div className="w-1/2 flex flex-col justify-center items-center text-white px-8">
        <h1 className="text-4xl font-semibold mb-2">Bem-vindo</h1>
        <h2 className="text-3xl font-bold flex items-center gap-2">
          ao <span className="text-white">Z-TINTAS</span>
          <span>
            <img
              src="/icone-rolo.png"
              alt="rolo"
              className="w-6 inline-block"
            />
          </span>
        </h2>
        <p className="text-sm mt-2 tracking-widest">MANIPULAÇÃO DE PIGMENTOS</p>

        <img
          src="/pintor.png"
          alt="pintor"
          className="w-64 mt-8"
        />
      </div>

      {/* Direita */}
      <div className="w-1/2 flex justify-center items-center">
        <div className="bg-[#f1faff] w-[400px] rounded-3xl p-8 shadow-xl text-center relative">
          <div className="w-16 h-16 bg-[#011A53] rounded-full flex items-center justify-center text-white absolute -top-8 left-1/2 -translate-x-1/2 border-4 border-[#1CD6CE]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5.121 17.804A11.955 11.955 0 0112 15c2.5 0 4.847.76 6.879 2.058M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </div>

          <h2 className="text-2xl font-bold text-[#011A53] mt-10 mb-6">Login</h2>

          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Matrícula"
              className="bg-[#011A53] text-white rounded-full py-2 px-4 focus:outline-none"
            />
            <input
              type="password"
              placeholder="Senha"
              className="bg-[#011A53] text-white rounded-full py-2 px-4 focus:outline-none"
            />

            <div className="text-right text-sm text-[#011A53] cursor-pointer hover:underline">
              Esqueceu sua senha?
            </div>

            <button
              type="submit"
              className="bg-[#011A53] text-white rounded-full py-2 px-4 font-semibold hover:brightness-110"
            >
              Entrar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
