import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { HiOutlineChartBar, HiOutlineCalendar, HiOutlineSparkles, HiOutlineShieldCheck, HiOutlineLockClosed, HiOutlineEyeOff } from "react-icons/hi"
import GoogleButton from "@/components/google-button"
import useStore from "@/services/store"

export default function Landing() {
  const [scrolled, setScrolled] = useState(false)
  const { user } = useStore()
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleStart = () => {
    navigate("/wrapped")
  }

  return (
    <div className="min-h-screen bg-[#fafafa] font-sans text-slate-900 selection:bg-indigo-100 selection:text-indigo-900">
      {/* Navbar Minimaliste - Apparaît au scroll */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}`}>
        <div className="bg-white/80 backdrop-blur-md border-b border-slate-100">
          <div className="container mx-auto px-6 h-16 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                <HiOutlineCalendar className="text-white w-5 h-5" />
              </div>
              <span className="font-bold text-xl tracking-tight">Calendar Wrapped</span>
            </div>
            {user ? (
              <button onClick={handleStart} className="bg-gray-900 text-white py-2 px-4 text-sm rounded-xl font-bold hover:bg-gray-800 transition-all">
                Mon Wrapped
              </button>
            ) : (
              <GoogleButton buttonText="Se connecter" onSuccess={handleStart} className="bg-gray-900 text-white !py-2 !px-4 !text-sm !rounded-xl font-bold" />
            )}
          </div>
        </div>
      </nav>

      {/* Hero Section - Ultra Catchy & Compact */}
      <header className="relative min-h-[95vh] flex items-center justify-center overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center mt-[-5vh]">
            <div className="flex justify-center mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-600 text-white text-xs lg:text-sm font-bold shadow-lg shadow-indigo-200 animate-fade-in">
                <HiOutlineSparkles className="w-4 h-4" />
                <span>Wrapped 2025 est disponible</span>
              </div>
            </div>

            <h1 className="text-6xl lg:text-[10rem] font-black tracking-tighter leading-[0.8] mb-8 bg-clip-text text-transparent bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-600 uppercase text-center">
              VOTRE ANNÉE <br />
              <span className="italic text-center">EN CHIFFRES.</span>
            </h1>

            <p className="text-lg lg:text-2xl text-slate-500 mb-10 max-w-3xl mx-auto leading-tight font-medium text-center">
              Découvrez enfin combien d'heures vous avez passé en réunion, <br className="hidden lg:block" /> qui est votre collaborateur favori et vos habitudes de travail.
            </p>

            <div className="flex flex-col items-center gap-6">
              {user ? (
                <button
                  onClick={handleStart}
                  className="bg-indigo-600 text-white px-12 py-6 text-xl lg:text-2xl hover:scale-105 hover:shadow-2xl hover:shadow-indigo-300 rounded-[2rem] font-black tracking-tight transition-all"
                >
                  Découvrir mon Wrapped
                </button>
              ) : (
                <GoogleButton
                  buttonText="Découvrir mon Wrapped"
                  onSuccess={handleStart}
                  className="bg-indigo-600 text-white !px-12 !py-6 !text-xl lg:!text-2xl hover:scale-105 hover:shadow-2xl hover:shadow-indigo-300 !rounded-[2rem] font-black tracking-tight"
                />
              )}
              <div className="flex items-center gap-6 text-slate-400">
                <p className="text-xs lg:text-sm flex items-center gap-2">
                  <HiOutlineLockClosed className="w-4 h-4" />
                  Sécurisé par Google
                </p>
                <div className="w-1 h-1 bg-slate-200 rounded-full"></div>
                <p className="text-xs lg:text-sm flex items-center gap-2">
                  <HiOutlineShieldCheck className="w-4 h-4" />
                  100% Confidentiel
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Background Visuals - Plus dynamiques */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 overflow-hidden pointer-events-none">
          <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-indigo-100/50 rounded-full blur-[140px] animate-blob"></div>
          <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-purple-100/50 rounded-full blur-[140px] animate-blob animation-delay-2000"></div>
          <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] bg-blue-100/30 rounded-full blur-[100px] animate-blob animation-delay-4000"></div>
        </div>
      </header>

      {/* Bento Grid Features - Épuré */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-slate-50 rounded-[3rem] p-12 border border-slate-100 flex flex-col justify-between group hover:bg-indigo-50 transition-all duration-500 hover:shadow-xl hover:shadow-indigo-100/20 text-left">
              <div>
                <div className="w-16 h-16 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <HiOutlineChartBar className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-3xl font-black mb-4 tracking-tight text-slate-900">Analyse de Temps</h3>
                <p className="text-slate-600 text-xl leading-relaxed text-left">
                  Comprenez précisément comment vos semaines s'organisent entre deep work, réunions et temps personnel.
                </p>
              </div>
            </div>

            <div className="bg-slate-900 rounded-[3rem] p-12 text-white flex flex-col justify-between group hover:bg-slate-800 transition-all duration-500 hover:shadow-2xl hover:shadow-slate-200/20 text-left">
              <div>
                <div className="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center mb-8 group-hover:rotate-12 transition-transform">
                  <HiOutlineSparkles className="w-8 h-8 text-amber-400" />
                </div>
                <h3 className="text-3xl font-black mb-4 tracking-tight">Wrapped 2025</h3>
                <p className="text-slate-400 text-xl leading-relaxed text-left">
                  Générez un résumé visuel magnifique de votre année, prêt à être partagé avec votre équipe ou vos proches.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Section - Inchangée car déjà propre */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto bg-white rounded-[3rem] p-12 lg:p-20 shadow-xl shadow-slate-200/50 border border-slate-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <HiOutlineShieldCheck className="w-64 h-64 text-indigo-600" />
            </div>

            <div className="relative z-10 text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-sm font-bold mb-8 border border-emerald-100">
                <HiOutlineShieldCheck className="w-4 h-4" />
                <span>Protection des données certifiée</span>
              </div>

              <h2 className="text-4xl font-bold mb-8 text-slate-900 leading-tight">
                Vos données vous appartiennent. <br />
                <span className="text-indigo-600">Nous les respectons.</span>
              </h2>

              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <div className="flex gap-5">
                    <div className="flex-shrink-0 w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center">
                      <HiOutlineEyeOff className="w-6 h-6 text-slate-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Pas de partage tiers</h4>
                      <p className="text-slate-500">Vos données ne sont jamais vendues ou partagées avec des entreprises tierces. Jamais.</p>
                    </div>
                  </div>
                  <div className="flex gap-5">
                    <div className="flex-shrink-0 w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center">
                      <HiOutlineLockClosed className="w-6 h-6 text-slate-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Zéro entraînement IA</h4>
                      <p className="text-slate-500">Nous n'utilisons pas votre historique pour entraîner des modèles de langage ou d'IA.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-indigo-50/50 rounded-3xl p-8 border border-indigo-100">
                  <p className="text-indigo-900 font-medium leading-relaxed">
                    "Notre seul objectif est de transformer vos métadonnées de calendrier en insights utiles pour vous. Les accès Google sont utilisés exclusivement pour la
                    génération de votre Wrapped et la visualisation de vos statistiques personnelles."
                  </p>
                  <div className="mt-6 flex items-center gap-3 text-indigo-600 font-bold">
                    <span>Transparence Totale</span>
                    <div className="h-px flex-1 bg-indigo-200"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA - Centré */}
      <section className="py-32 bg-white text-center relative overflow-hidden">
        <div className="container mx-auto px-6 flex flex-col items-center">
          <h2 className="text-6xl lg:text-8xl font-black mb-16 tracking-tighter leading-none text-center uppercase">
            PRÊT POUR VOTRE <br />
            <span className="text-indigo-600 italic">WRAPPED ?</span>
          </h2>
          {user ? (
            <button
              onClick={handleStart}
              className="bg-indigo-600 text-white px-16 py-8 text-3xl shadow-2xl shadow-indigo-200 rounded-[2.5rem] font-black hover:scale-105 transition-transform"
            >
              Découvrir mon Wrapped
            </button>
          ) : (
            <GoogleButton
              buttonText="Découvrir mon Wrapped"
              onSuccess={handleStart}
              className="bg-indigo-600 text-white !px-16 !py-8 !text-3xl shadow-2xl shadow-indigo-200 !rounded-[2.5rem] font-black hover:scale-105 transition-transform"
            />
          )}
        </div>
      </section>

      <footer className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="w-6 h-6 bg-slate-900 rounded flex items-center justify-center">
              <HiOutlineCalendar className="text-white w-4 h-4" />
            </div>
            <span className="font-bold text-slate-900">Calendar Wrapped</span>
          </div>
          <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-medium text-slate-500">
            <button onClick={() => navigate("/terms")} className="hover:text-indigo-600 transition-colors">
              Conditions Générales d'Utilisation
            </button>
            <button onClick={() => navigate("/privacy")} className="hover:text-indigo-600 transition-colors">
              Politique de Confidentialité
            </button>
            <button onClick={() => navigate("/legal-notice")} className="hover:text-indigo-600 transition-colors">
              Mentions Légales
            </button>
          </div>
          <p className="text-slate-400 text-center text-xs lg:text-sm">© 2026 — Fait avec passion pour les données.</p>
        </div>
      </footer>
    </div>
  )
}
