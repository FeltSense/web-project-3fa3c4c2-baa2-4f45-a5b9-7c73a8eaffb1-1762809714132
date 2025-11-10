export default function Hero() {
  return (
    <section className="relative min-h-screen bg-slate-900 overflow-hidden">
  {/* Animated background pattern */}
  <div className="absolute inset-0 opacity-10">
    <div className="absolute top-0 left-0 w-96 h-96 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
    <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
    <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
  </div>

  {/* Grid pattern overlay */}
  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]"></div>

  <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-24 md:py-32">
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      {/* Content Column */}
      <div className="text-left space-y-8 opacity-0 animate-[fadeIn_0.8s_ease-out_forwards]">
        {/* Trust badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
          <div className="flex -space-x-2">
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 border-2 border-slate-900"></div>
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-slate-900"></div>
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 border-2 border-slate-900"></div>
          </div>
          <span className="text-sm text-gray-300 font-medium">Trusted by 2,500+ teams worldwide</span>
        </div>

        {/* Main headline */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight max-w-4xl">
          Where Every Voice{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-blue-400 to-purple-400">
            Matters
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-2xl leading-relaxed">
          Build inclusive teams, foster collaboration, and drive innovation with tools designed for modern organizations that value every perspective.
        </p>

        {/* Feature highlights */}
        <div className="flex flex-col sm:flex-row gap-6 text-gray-400">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-teal-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm md:text-base">Real-time collaboration</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm md:text-base">Enterprise security</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm md:text-base">24/7 support</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <button className="group px-8 py-4 bg-teal-600 hover:bg-teal-700 text-white text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2">
            Start Free Trial
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
          <button className="px-8 py-4 border-2 border-white/30 text-white text-lg font-semibold rounded-xl hover:bg-white hover:text-slate-900 transition-all duration-200 backdrop-blur-sm">
            Watch Demo
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 md:gap-12 pt-8 mt-12 border-t border-white/10">
          <div className="text-center sm:text-left">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">99.9%</div>
            <div className="text-sm text-gray-400">Uptime SLA</div>
          </div>
          <div className="text-center sm:text-left">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">150+</div>
            <div className="text-sm text-gray-400">Countries</div>
          </div>
          <div className="text-center sm:text-left">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">4.9/5</div>
            <div className="text-sm text-gray-400">User Rating</div>
          </div>
        </div>
      </div>

      {/* Image Column */}
      <div className="relative lg:block opacity-0 animate-[fadeIn_0.8s_ease-out_0.3s_forwards]">
        {/* Main image with glassmorphic card effect */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&h=900&fit=crop&q=80" 
            alt="Diverse team collaborating in modern office space"
            className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>
        </div>

        {/* Floating stat cards */}
        <div className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-md rounded-xl p-6 shadow-2xl border border-gray-100 max-w-[200px] animate-bounce">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-gradient-to-br from-teal-400 to-teal-600 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <div>
              <div className="text-2xl font-bold text-slate-900">+127%</div>
              <div className="text-xs text-gray-600">Team Productivity</div>
            </div>
          </div>
        </div>

        <div className="absolute -top-6 -right-6 bg-white/95 backdrop-blur-md rounded-xl p-6 shadow-2xl border border-gray-100 max-w-[200px] animate-bounce" style={{ animationDelay: '1s' }}>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <div>
              <div className="text-2xl font-bold text-slate-900">2.5K+</div>
              <div className="text-xs text-gray-600">Active Teams</div>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-br from-teal-500/20 to-blue-500/20 rounded-full blur-3xl"></div>
      </div>
    </div>
  </div>

  {/* Bottom wave decoration */}
  <div className="absolute bottom-0 left-0 right-0">
    <svg className="w-full h-24 text-gray-50" preserveAspectRatio="none" viewBox="0 0 1440 74" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 74L60 68.8C120 63.7 240 53.3 360 47.8C480 42.3 600 41.7 720 45.7C840 49.7 960 58.3 1080 59.3C1200 60.3 1320 53.7 1380 50.3L1440 47V74H1380C1320 74 1200 74 1080 74C960 74 840 74 720 74C600 74 480 74 360 74C240 74 120 74 60 74H0Z" fill="currentColor"/>
    </svg>
  </div>
</section>
  );
}