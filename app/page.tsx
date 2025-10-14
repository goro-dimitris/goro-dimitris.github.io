'use client'

import { motion } from 'framer-motion'
import { 
  Scan, 
  Sparkles, 
  Target, 
  CheckCircle2, 
  BarChart3, 
  Mail,
  ExternalLink,
  Eye,
  Zap,
  Shield,
  Linkedin,
  Globe,
  Loader2,
  Play,
  X
} from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export default function Home() {
  const [isVideoOpen, setIsVideoOpen] = useState(false)

  return (
    <main className="min-h-screen bg-black text-white">
      <HeroSection onVideoOpen={() => setIsVideoOpen(true)} />
      <WhatIsSection />
      <HowItWorksSection />
      <UXScienceSection />
      <ValuePropositionSection />
      <BehindTheProjectSection />
      <CollaborateSection />
      <Footer />
      <VideoModal isOpen={isVideoOpen} onClose={() => setIsVideoOpen(false)} />
    </main>
  )
}

// Hero Section
function HeroSection({ onVideoOpen }: { onVideoOpen: () => void }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]" />
      
      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 left-20 w-64 h-64 bg-electric-cyan/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute bottom-20 right-20 w-96 h-96 bg-electric-cyan/5 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-electric-cyan/10 border border-electric-cyan/20 mb-8">
            <Sparkles className="w-4 h-4 text-electric-cyan" />
            <span className="text-sm text-electric-cyan">AI-Powered UX Evaluation</span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-8xl font-bold mb-6 tracking-tight"
        >
          See your UX
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-cyan to-white">
            through AI eyes
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto"
        >
          Where heuristics meet machine insight. Transform complex UX audits into fast, insightful, and measurable feedback loops.
        </motion.p>

        {/* Animated Figma Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-12 relative max-w-2xl mx-auto"
        >
          <FigmaFrameAnimation />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="#how-it-works"
            className="inline-flex items-center gap-2 px-8 py-4 bg-electric-cyan text-black font-semibold rounded-lg hover:bg-electric-cyan/90 transition-all hover:scale-105"
          >
            Learn How It Works
            <Zap className="w-5 h-5" />
          </a>
          <button
            onClick={onVideoOpen}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gray-800 hover:bg-gray-700 text-white font-semibold rounded-lg border border-gray-600 hover:border-electric-cyan/50 transition-all hover:scale-105"
          >
            <Play className="w-5 h-5" />
            Watch Demo
          </button>
        </motion.div>
      </div>
    </section>
  )
}

// Animated Figma Frame Component
function FigmaFrameAnimation() {
  return (
    <div className="relative p-8 bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl">
      {/* Mock Figma Frame */}
      <div className="bg-gray-800/50 rounded-lg p-6 relative overflow-hidden">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
          <span className="text-xs text-gray-500 ml-2">Figma Frame</span>
        </div>
        
        <div className="space-y-3">
          <div className="h-8 bg-gray-700/50 rounded" />
          <div className="h-20 bg-gray-700/50 rounded" />
          <div className="grid grid-cols-2 gap-3">
            <div className="h-16 bg-gray-700/50 rounded" />
            <div className="h-16 bg-gray-700/50 rounded" />
          </div>
        </div>

        {/* Scanning Line */}
        <motion.div
          className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-electric-cyan to-transparent"
          animate={{
            top: ['0%', '100%'],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* AI Analysis Markers */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute top-20 right-4"
        >
          <div className="flex items-center gap-2 px-3 py-1 bg-electric-cyan/20 border border-electric-cyan rounded-full text-xs">
            <Eye className="w-3 h-3 text-electric-cyan" />
            <span className="text-electric-cyan">Analyzing...</span>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

// What is UX-Ray Section
function WhatIsSection() {
  return (
    <section className="py-32 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-16 items-center"
        >
          <div>
            <h2 className="text-5xl font-bold mb-6">What is UX-Ray?</h2>
            <p className="text-xl text-gray-400 leading-relaxed mb-8">
              UX-Ray is an AI-powered evaluation layer for Figma that analyzes usability and accessibility directly in your design workspace. It translates heuristics and WCAG standards into actionable, visual feedback.
            </p>
            <div className="inline-flex items-center gap-2 text-electric-cyan text-sm">
              <Sparkles className="w-4 h-4" />
              <span>Powered by GPT + Figma API + Human UX Strategy</span>
            </div>
          </div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative p-8 bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl"
            >
              <div className="absolute inset-0 bg-electric-cyan/5 rounded-2xl blur-xl" />
              <div className="relative">
                <Scan className="w-16 h-16 text-electric-cyan mb-4" />
                <div className="space-y-3">
                  {['Heuristic Analysis', 'Accessibility Check', 'Visual Hierarchy', 'Content Review'].map((item, i) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                      className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg"
                    >
                      <CheckCircle2 className="w-5 h-5 text-electric-cyan" />
                      <span className="text-gray-300">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// How It Works Section
function HowItWorksSection() {
  const steps = [
    {
      number: '01',
      title: 'Select your frame',
      description: 'Choose any design frame in Figma that you want to evaluate',
      icon: Target,
    },
    {
      number: '02',
      title: 'Click Run UX-Ray',
      description: 'Activate the AI-powered analysis engine with a single click',
      icon: Zap,
    },
    {
      number: '03',
      title: 'Get instant audit report',
      description: 'Receive actionable insights with visual annotations and recommendations',
      icon: BarChart3,
    },
  ]

  return (
    <section id="how-it-works" className="py-32 px-6 bg-gradient-to-b from-transparent to-gray-900/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold mb-6">How It Works</h2>
          <p className="text-xl text-gray-400">Three simple steps to revolutionize your UX workflow</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative p-8 bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl hover:border-electric-cyan/50 transition-all group"
            >
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-electric-cyan/10 border border-electric-cyan/30 rounded-full flex items-center justify-center text-2xl font-bold text-electric-cyan">
                {step.number}
              </div>
              
              <step.icon className="w-12 h-12 text-electric-cyan mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
              <p className="text-gray-400">{step.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-gray-500">
            Powered by <span className="text-electric-cyan">GPT</span> + <span className="text-electric-cyan">Figma API</span> + <span className="text-electric-cyan">Human UX Strategy</span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}

// Built on UX Science Section
function UXScienceSection() {
  const standards = [
    {
      title: 'Nielsen Norman Heuristics',
      description: '10 general principles for interaction design',
      link: 'https://www.nngroup.com/articles/ten-usability-heuristics/',
      icon: Shield,
    },
    {
      title: 'WCAG 2.2 Standards',
      description: 'Web Content Accessibility Guidelines',
      link: 'https://www.w3.org/WAI/WCAG22/quickref/',
      icon: CheckCircle2,
    },
    {
      title: 'Custom Guidelines',
      description: 'Adaptable to your brand and client requirements',
      link: '#',
      icon: Sparkles,
    },
  ]

  return (
    <section className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold mb-6">Built on UX Science</h2>
          <p className="text-xl text-gray-400">Grounded in proven frameworks and industry standards</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {standards.map((standard, index) => (
            <motion.a
              key={standard.title}
              href={standard.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="p-8 bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl hover:border-electric-cyan/50 transition-all group cursor-pointer"
            >
              <standard.icon className="w-12 h-12 text-electric-cyan mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold mb-3 flex items-center gap-2">
                {standard.title}
                <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>
              <p className="text-gray-400">{standard.description}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

// Value Proposition Section
function ValuePropositionSection() {
  const metrics = [
    { label: 'Reduce audit time', value: '40%', color: 'from-electric-cyan to-blue-500' },
    { label: 'Identify usability issues', value: '80%', color: 'from-electric-cyan to-green-500' },
    { label: 'Boost team consistency', value: '100%', color: 'from-electric-cyan to-purple-500' },
  ]

  return (
    <section className="py-32 px-6 bg-gradient-to-b from-gray-900/20 to-transparent">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold mb-6">Measurable Outcomes</h2>
          <p className="text-xl text-gray-400">Transform your UX process with quantifiable results</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="text-center p-8"
            >
              <motion.div
                initial={{ width: '0%' }}
                whileInView={{ width: metric.value }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.5 + index * 0.15 }}
                className="relative h-4 bg-gray-800 rounded-full overflow-hidden mb-6"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${metric.color}`} />
              </motion.div>
              
              <div className={`text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r ${metric.color}`}>
                {metric.value}
              </div>
              <p className="text-xl text-gray-400">{metric.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Behind The Project Section
function BehindTheProjectSection() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="mb-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative w-32 h-32 mx-auto mb-6"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-electric-cyan to-deep-cyan rounded-full blur-lg opacity-30" />
              <img
                src="/ux-ray-site/dimitris.jpg"
                alt="Dimitris G. - Senior UX Designer"
                width={128}
                height={128}
                className="rounded-full object-cover border-4 border-electric-cyan/20 relative z-10"
              />
            </motion.div>
          </div>
          
          <h2 className="text-5xl font-bold mb-6">Behind the Project</h2>
          
          <p className="text-xl text-gray-400 leading-relaxed mb-8">
            UX-Ray is a personal R&D initiative by <span className="text-white font-semibold">Dimitris G.</span>, 
            a Senior UX Designer blending creativity and AI to make technology more human-centered.
          </p>

          <div className="flex justify-center gap-4">
            <a
              href="https://www.linkedin.com/in/gorodimitris/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-all hover:scale-105"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
            <a
              href="https://gorodimitris.gr/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-all hover:scale-105"
            >
              <Globe className="w-5 h-5" />
              Portfolio
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Collaborate Section with Contact Form
function CollaborateSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')

    try {
      // Using Formsubmit.co - No signup required, works immediately
      const response = await fetch('https://formsubmit.co/ajax/gorodimitris@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `New UX-Ray Contact from ${formData.name}`,
          _captcha: 'false',
        }),
      })

      const result = await response.json()

      if (result.success) {
        setSubmitted(true)
        setFormData({ name: '', email: '', message: '' })
        setTimeout(() => setSubmitted(false), 5000)
      } else {
        setError('Failed to send message. Please try again.')
      }
    } catch {
      setError('Network error. Please check your connection and try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-32 px-6 bg-gradient-to-b from-transparent to-gray-900/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl font-bold mb-6">Let&apos;s Collaborate</h2>
          <p className="text-xl text-gray-400">
            Interested in piloting UX-Ray or exploring AI-assisted UX frameworks?
            <br />
            Let&apos;s talk.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          onSubmit={handleSubmit}
          className="space-y-6 p-8 bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl"
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:border-electric-cyan focus:outline-none transition-colors"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:border-electric-cyan focus:outline-none transition-colors"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              required
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:border-electric-cyan focus:outline-none transition-colors resize-none"
              placeholder="Tell me about your project or interest in UX-Ray..."
            />
          </div>

          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 bg-red-500/10 border border-red-500/50 rounded-lg text-red-400 text-sm"
            >
              {error}
            </motion.div>
          )}

          {submitted && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 bg-electric-cyan/10 border border-electric-cyan/50 rounded-lg text-electric-cyan text-sm"
            >
              ✓ Message sent successfully! I&apos;ll get back to you soon.
            </motion.div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full px-8 py-4 bg-electric-cyan text-black font-semibold rounded-lg hover:bg-electric-cyan/90 transition-all hover:scale-[1.02] flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Sending...
              </>
            ) : submitted ? (
              <>
                <CheckCircle2 className="w-5 h-5" />
                Message Sent!
              </>
            ) : (
              <>
                <Mail className="w-5 h-5" />
                Send Message
              </>
            )}
          </button>
        </motion.form>
      </div>
    </section>
  )
}

// Video Modal Component
function VideoModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        className="relative w-full max-w-4xl mx-4 bg-black rounded-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/70 rounded-full transition-colors"
        >
          <X className="w-6 h-6 text-white" />
        </button>

        {/* Video Player */}
        <div className="relative w-full aspect-video">
          <video
            className="w-full h-full object-cover"
            controls
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          >
            <source src="/ux-ray-site/HowItWorksVideo.mov" type="video/quicktime" />
            <source src="/ux-ray-site/HowItWorksVideo.mov" type="video/mp4" />
            <p className="text-white p-4">
              Your browser doesn't support this video format. 
              <br />
              <a 
                href="/ux-ray-site/HowItWorksVideo.mov" 
                download 
                className="text-electric-cyan hover:underline"
              >
                Download the video instead
              </a>
            </p>
          </video>
        </div>

        {/* Video Info */}
        <div className="p-6 bg-gradient-to-b from-gray-900 to-black">
          <h3 className="text-xl font-bold text-white mb-2">UX-Ray Demo</h3>
          <p className="text-gray-400">
            See how UX-Ray works in action with this interactive demonstration.
          </p>
        </div>
      </motion.div>
    </motion.div>
  )
}

// Footer
function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-gray-400 mb-2">
              © 2025 Dimitris G. — All rights reserved.
            </p>
            <p className="text-sm text-gray-600">
              UX-Ray is an independent R&D concept, not affiliated with Figma or OpenAI.
            </p>
          </div>

          <div className="flex gap-6">
            <Link
              href="/licensing"
              className="text-gray-400 hover:text-electric-cyan transition-colors"
            >
              Licensing
            </Link>
            <a
              href="#"
              className="text-gray-400 hover:text-electric-cyan transition-colors"
            >
              Privacy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

