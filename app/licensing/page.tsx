'use client'

import { motion } from 'framer-motion'
import { Shield, Mail, ArrowLeft, FileText, Scale, Lock } from 'lucide-react'
import Link from 'next/link'

export default function LicensingPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-electric-cyan transition-colors mb-12"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Shield className="w-16 h-16 text-electric-cyan mx-auto mb-6" />
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Licensing & Legal
          </h1>
          <p className="text-xl text-gray-400">
            Terms of use, licensing information, and intellectual property notices
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="space-y-12">
          {/* Proprietary Software Notice */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-8 bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl"
          >
            <div className="flex items-start gap-4 mb-6">
              <Lock className="w-8 h-8 text-electric-cyan flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-3xl font-bold mb-4">Proprietary Software</h2>
                <p className="text-lg text-gray-300 leading-relaxed mb-4">
                  UX-Ray is proprietary software and intellectual property owned by Dimitris G. 
                  All rights are reserved.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  This software, including its concept, implementation, and associated materials, 
                  may <span className="text-electric-cyan font-semibold">only be used, tested, or integrated 
                  with written permission</span> from its creator.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Usage Terms */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="p-8 bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl"
          >
            <div className="flex items-start gap-4 mb-6">
              <FileText className="w-8 h-8 text-electric-cyan flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-3xl font-bold mb-4">Usage Terms</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-electric-cyan mb-2">
                      Prohibited Actions
                    </h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-300">
                      <li>Copying, reproducing, or duplicating any part of UX-Ray</li>
                      <li>Reverse engineering, decompiling, or disassembling the software</li>
                      <li>Creating derivative works based on UX-Ray</li>
                      <li>Commercial use without explicit written authorization</li>
                      <li>Distribution or sublicensing to third parties</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-electric-cyan mb-2">
                      Permitted Actions (With Authorization)
                    </h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-300">
                      <li>Pilot testing in approved organizational contexts</li>
                      <li>Integration into workflows under licensing agreement</li>
                      <li>Evaluation for potential partnership or licensing</li>
                      <li>Academic research with proper attribution</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Licensing Options */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="p-8 bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl"
          >
            <div className="flex items-start gap-4 mb-6">
              <Scale className="w-8 h-8 text-electric-cyan flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-3xl font-bold mb-4">Licensing Inquiries</h2>
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  I&apos;m open to exploring various licensing arrangements, including:
                </p>
                
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                    <h4 className="font-semibold text-electric-cyan mb-2">Enterprise Licensing</h4>
                    <p className="text-sm text-gray-400">
                      For organizations wanting to integrate UX-Ray into their workflow
                    </p>
                  </div>
                  
                  <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                    <h4 className="font-semibold text-electric-cyan mb-2">Partnership Opportunities</h4>
                    <p className="text-sm text-gray-400">
                      Collaborative development and co-innovation arrangements
                    </p>
                  </div>
                  
                  <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                    <h4 className="font-semibold text-electric-cyan mb-2">Pilot Programs</h4>
                    <p className="text-sm text-gray-400">
                      Limited-term evaluation for qualified organizations
                    </p>
                  </div>
                  
                  <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                    <h4 className="font-semibold text-electric-cyan mb-2">Academic Use</h4>
                    <p className="text-sm text-gray-400">
                      Research and educational applications with attribution
                    </p>
                  </div>
                </div>

                <p className="text-lg text-gray-300 leading-relaxed">
                  For licensing inquiries or to discuss collaboration opportunities, 
                  please contact Dimitris G. directly.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Intellectual Property */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="p-8 bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl"
          >
            <h2 className="text-3xl font-bold mb-4">Intellectual Property Notice</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                <strong className="text-white">Copyright © 2025 Dimitris G.</strong> All rights reserved.
              </p>
              <p>
                UX-Ray, including its name, concept, methodology, implementation, and all associated 
                materials, is the intellectual property of Dimitris G.
              </p>
              <p>
                This project serves as a timestamped proof of concept and establishes prior art 
                for the innovation of AI-assisted UX evaluation within design tools.
              </p>
              <p className="text-sm text-gray-500 pt-4 border-t border-gray-800">
                UX-Ray is an independent R&D concept and is not affiliated with, endorsed by, 
                or sponsored by Figma, OpenAI, or any other third-party organization mentioned 
                on this website.
              </p>
            </div>
          </motion.section>

          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center p-12 bg-gradient-to-br from-electric-cyan/10 to-transparent border border-electric-cyan/30 rounded-2xl"
          >
            <Mail className="w-12 h-12 text-electric-cyan mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Have Questions?</h3>
            <p className="text-gray-400 mb-6">
              For licensing, partnership, or legal inquiries, please get in touch.
            </p>
            <Link
              href="/#collaborate"
              className="inline-flex items-center gap-2 px-8 py-4 bg-electric-cyan text-black font-semibold rounded-lg hover:bg-electric-cyan/90 transition-all hover:scale-105"
            >
              <Mail className="w-5 h-5" />
              Contact Me
            </Link>
          </motion.div>
        </div>

        {/* Footer Navigation */}
        <div className="mt-16 pt-8 border-t border-gray-800 text-center">
          <Link
            href="/"
            className="text-gray-400 hover:text-electric-cyan transition-colors"
          >
            ← Back to UX-Ray Home
          </Link>
        </div>
      </div>
    </main>
  )
}

