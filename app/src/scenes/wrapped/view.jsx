import React, { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { HiXMark, HiShare, HiChevronLeft, HiChevronRight } from "react-icons/hi2"
import toast from "react-hot-toast"
import moment from "moment"

import api from "@/services/api"
import Loader from "@/components/loader"

const COLORS = ["bg-blue-600", "bg-purple-600", "bg-pink-600", "bg-indigo-600", "bg-teal-600", "bg-orange-600"]

export default function View() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [slide, setSlide] = useState(0)

  useEffect(() => {
    const fetchWrapped = async () => {
      try {
        const { ok, data } = await api.get(`/wrapped/${id}`)
        if (!ok) {
          toast.error("Wrapped not found")
          navigate("/wrapped")
          return
        }
        setData(data)
      } catch (e) {
        console.error(e)
        toast.error("Failed to load wrapped")
        navigate("/wrapped")
      } finally {
        setLoading(false)
      }
    }
    fetchWrapped()
  }, [id, navigate])

  const handleShare = () => {
    if (!data) return
    const text = `My ${data.year} on Google Calendar:
🗓 ${data.totalEvents} events
⏱ ${data.totalHours} hours spent
🏆 My Persona: ${data.persona}
Check your own stats!`
    navigator.clipboard.writeText(text)
    toast.success("Summary copied to clipboard!")
  }

  if (loading) return <Loader />
  if (!data) return null

  const slides = [
    // Slide 0: Intro
    {
      bg: "bg-indigo-900",
      content: (
        <div className="text-center animate-in fade-in zoom-in duration-500">
          <h1 className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-4">{data.year}</h1>
          <h2 className="text-4xl font-bold text-white mb-8">WRAPPED</h2>
          <p className="text-indigo-200 text-xl">Ready to see how you spent your time?</p>
        </div>
      )
    },
    // Slide 1: Totals
    {
      bg: "bg-purple-900",
      content: (
        <div className="text-center space-y-12">
          <div>
            <p className="text-purple-300 text-xl mb-2">You spent</p>
            <h2 className="text-7xl font-bold text-white mb-2">{data.totalHours}</h2>
            <p className="text-white text-2xl">Hours in meetings</p>
          </div>
          <div className="w-32 h-1 bg-white/20 mx-auto rounded-full" />
          <div>
            <p className="text-purple-300 text-xl mb-2">Across</p>
            <h2 className="text-7xl font-bold text-white mb-2">{data.totalEvents}</h2>
            <p className="text-white text-2xl">Events</p>
          </div>
        </div>
      )
    },
    // Slide 2: Intense Weeks
    {
      bg: "bg-pink-900",
      content: (
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Most Intense Weeks</h2>
          <div className="space-y-4">
            {data.intenseWeeks.map((week, i) => (
              <div key={i} className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-pink-200 font-medium">Week {week.week}</span>
                  <span className="text-2xl font-bold text-white">{week.hours}h</span>
                </div>
                <p className="text-sm text-pink-300">
                  {moment(week.startDate).format("MMM D")} - {moment(week.endDate).format("MMM D")}
                </p>
              </div>
            ))}
          </div>
        </div>
      )
    },
    // Slide 3: Extremes
    {
      bg: "bg-blue-900",
      content: (
        <div className="w-full max-w-md space-y-6">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">The Extremes</h2>
          {data.earliestMeeting && (
            <div className="bg-white/10 p-4 rounded-xl">
              <p className="text-blue-300 text-sm uppercase tracking-wider mb-1">Earliest Start</p>
              <h3 className="text-2xl font-bold text-white">{data.earliestMeeting.time}</h3>
              <p className="text-white/80 truncate">{data.earliestMeeting.summary}</p>
            </div>
          )}
          {data.latestMeeting && (
            <div className="bg-white/10 p-4 rounded-xl">
              <p className="text-blue-300 text-sm uppercase tracking-wider mb-1">Latest Start</p>
              <h3 className="text-2xl font-bold text-white">{data.latestMeeting.time}</h3>
              <p className="text-white/80 truncate">{data.latestMeeting.summary}</p>
            </div>
          )}
          {data.longestMeeting && (
            <div className="bg-white/10 p-4 rounded-xl">
              <p className="text-blue-300 text-sm uppercase tracking-wider mb-1">Longest Marathon</p>
              <h3 className="text-2xl font-bold text-white">{data.longestMeeting.duration} min</h3>
              <p className="text-white/80 truncate">{data.longestMeeting.summary}</p>
            </div>
          )}
        </div>
      )
    },
    // Slide 4: Top People
    {
      bg: "bg-teal-900",
      content: (
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Top Collaborators</h2>
          <div className="space-y-4">
            {data.topPeople.map((person, i) => (
              <div key={i} className="flex items-center gap-4 bg-white/10 p-4 rounded-xl">
                <div className="h-10 w-10 rounded-full bg-teal-500 flex items-center justify-center font-bold text-white text-lg">{i + 1}</div>
                <div className="flex-1 min-w-0">
                  <p className="text-white font-medium truncate">{person.displayName || person.email}</p>
                  <p className="text-teal-200 text-sm">{person.hours} hours together</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    },
    // Slide 5: Persona
    {
      bg: "bg-orange-900",
      content: (
        <div className="text-center">
          <p className="text-orange-300 text-xl mb-4">Your Calendar Persona is</p>
          <div className="inline-block px-8 py-4 bg-white text-orange-900 text-4xl font-black uppercase tracking-widest rounded-full transform -rotate-3 mb-8 shadow-2xl">
            {data.persona}
          </div>
          <div className="text-white/80 max-w-sm mx-auto">
            {data.persona === "Workaholic" && "You're truly dedicated... maybe take a break?"}
            {data.persona === "Gamer" && "Work hard, play hard!"}
            {data.persona === "Sport Addict" && "Keeping active while staying productive."}
            {data.persona === "Social Butterfly" && "Your calendar is as full as your social life."}
            {data.persona === "Balanced Bee" && "Perfectly balanced, as all things should be."}
          </div>
        </div>
      )
    }
  ]

  const nextSlide = () => {
    if (slide < slides.length - 1) setSlide(slide + 1)
  }

  const prevSlide = () => {
    if (slide > 0) setSlide(slide - 1)
  }

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center ${slides[slide].bg} transition-colors duration-500`}>
      {/* Navigation */}
      <button onClick={() => navigate("/wrapped")} className="absolute top-6 right-6 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all z-20">
        <HiXMark className="h-6 w-6" />
      </button>

      <button
        onClick={handleShare}
        className="absolute top-6 left-6 flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all z-20 font-medium"
      >
        <HiShare className="h-5 w-5" />
        Share
      </button>

      {/* Progress Bar */}
      <div className="absolute top-0 left-0 w-full flex gap-1 p-2 z-10">
        {slides.map((_, i) => (
          <div key={i} className="h-1 flex-1 rounded-full bg-white/20 overflow-hidden">
            <div className={`h-full bg-white transition-all duration-300 ${i <= slide ? "w-full" : "w-0"}`} />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="w-full h-full flex flex-col items-center justify-center p-8 relative">{slides[slide].content}</div>

      {/* Controls */}
      <div className="absolute inset-y-0 left-0 w-1/3 z-0" onClick={prevSlide} />
      <div className="absolute inset-y-0 right-0 w-1/3 z-0" onClick={nextSlide} />

      {/* Visible controls for desktop if needed, or just indicators */}
      <div className="absolute bottom-8 flex gap-4 z-20">
        <button onClick={prevSlide} disabled={slide === 0} className="p-3 rounded-full bg-white/10 text-white disabled:opacity-30 hover:bg-white/20">
          <HiChevronLeft className="h-6 w-6" />
        </button>
        <button onClick={nextSlide} disabled={slide === slides.length - 1} className="p-3 rounded-full bg-white/10 text-white disabled:opacity-30 hover:bg-white/20">
          <HiChevronRight className="h-6 w-6" />
        </button>
      </div>
    </div>
  )
}
