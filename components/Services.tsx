export default function Services() {
  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-br from-slate-50 via-white to-teal-50 overflow-hidden">
  {/* Background decoration */}
  <div className="absolute inset-0 opacity-40">
    <div className="absolute top-0 right-0 w-96 h-96 bg-teal-100 rounded-full blur-3xl"></div>
    <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl"></div>
  </div>

  <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
    {/* Section Header */}
    <div className="text-center mb-16 md:mb-20">
      <div className="inline-flex items-center justify-center px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-semibold mb-6">
        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z" />
        </svg>
        Comprehensive Solutions
      </div>
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
        Services That Drive
        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">
          Real Results
        </span>
      </h2>
      <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
        From strategy to execution, we deliver integrated solutions that transform your business and accelerate growth
      </p>
    </div>

    {/* Services Grid - Featured Layout */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
      
      {/* Featured Service - Spans 2 columns on large screens */}
      <div className="lg:col-span-2 lg:row-span-2 group">
        <div className="relative h-full bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 border border-gray-100 overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-teal-400 to-blue-500 opacity-10 rounded-full blur-3xl group-hover:opacity-20 transition-opacity duration-500"></div>
          
          <div className="relative">
            <div className="relative h-80 md:h-96 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=800&fit=crop"
                alt="Strategic Business Consulting"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
              <div className="absolute top-6 left-6">
                <span className="inline-flex items-center px-4 py-2 bg-teal-600 text-white rounded-full text-sm font-semibold shadow-lg">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                  </svg>
                  Featured Service
                </span>
              </div>
            </div>
            
            <div className="p-8 md:p-12 lg:p-16">
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Strategic Business Consulting
              </h3>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                Transform your business with data-driven strategies and expert guidance. We analyze your market position, identify growth opportunities, and create actionable roadmaps that deliver measurable results.
              </p>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-teal-600 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-base text-gray-700">Market analysis and competitive positioning strategies</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-teal-600 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-base text-gray-700">Custom growth roadmaps with quarterly milestones</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-teal-600 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-base text-gray-700">Executive coaching and leadership development programs</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-teal-600 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-base text-gray-700">Performance metrics and KPI tracking dashboards</span>
                </div>
              </div>

              <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-teal-600 to-blue-600 text-white font-semibold rounded-xl hover:from-teal-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl group">
                Explore Consulting Services
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Service 2 - Digital Transformation */}
      <div className="group">
        <div className="relative h-full bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 border border-gray-100 overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-500 opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity duration-500"></div>
          
          <div className="relative h-64 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop"
              alt="Digital Transformation"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
          </div>
          
          <div className="p-8 md:p-12">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
              Digital Transformation
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Modernize your operations with cutting-edge technology solutions. We implement cloud infrastructure, automation tools, and digital workflows that boost efficiency by up to 40%.
            </p>
            
            <div className="space-y-2 mb-6">
              <div className="flex items-center text-base text-gray-700">
                <svg className="w-5 h-5 text-teal-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Cloud migration and infrastructure setup
              </div>
              <div className="flex items-center text-base text-gray-700">
                <svg className="w-5 h-5 text-teal-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Process automation and workflow optimization
              </div>
              <div className="flex items-center text-base text-gray-700">
                <svg className="w-5 h-5 text-teal-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Digital training and change management
              </div>
            </div>

            <button className="inline-flex items-center text-teal-600 font-semibold hover:text-teal-700 transition-colors duration-300 group">
              Learn More
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Service 3 - Data Analytics */}
      <div className="group">
        <div className="relative h-full bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 border border-gray-100 overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-teal-400 to-cyan-500 opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity duration-500"></div>
          
          <div className="relative h-64 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
              alt="Data Analytics & Insights"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
          </div>
          
          <div className="p-8 md:p-12">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                </svg>
              </div>
            </div>
            
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
              Data Analytics & Insights
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Turn raw data into actionable intelligence. Our advanced analytics platform provides real-time insights, predictive modeling, and custom dashboards that drive informed decision-making.
            </p>
            
            <div className="space-y-2 mb-6">
              <div className="flex items-center text-base text-gray-700">
                <svg className="w-5 h-5 text-teal-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Real-time business intelligence dashboards
              </div>
              <div className="flex items-center text-base text-gray-700">
                <svg className="w-5 h-5 text-teal-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Predictive analytics and forecasting models
              </div>
              <div className="flex items-center text-base text-gray-700">
                <svg className="w-5 h-5 text-teal-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Custom reporting and data visualization
              </div>
            </div>

            <button className="inline-flex items-center text-teal-600 font-semibold hover:text-teal-700 transition-colors duration-300 group">
              Discover Analytics
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Service 4 - Process Optimization */}
      <div className="group md:col-span-2 lg:col-span-1">
        <div className="relative h-full bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 border border-gray-100 overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-400 to-blue-500 opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity duration-500"></div>
          
          <div className="relative h-64 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop"
              alt="Process Optimization"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
          </div>
          
          <div className="p-8 md:p-12">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
              Process Optimization
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Streamline operations and eliminate inefficiencies. We conduct comprehensive process audits, identify bottlenecks, and implement lean methodologies that reduce costs by 25-35%.
            </p>
            
            <div className="space-y-2 mb-6">
              <div className="flex items-center text-base text-gray-700">
                <svg className="w-5 h-5 text-teal-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Workflow analysis and redesign
              </div>
              <div className="flex items-center text-base text-gray-700">
                <svg className="w-5 h-5 text-teal-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Lean Six Sigma implementation
              </div>
              <div className="flex items-center text-base text-gray-700">
                <svg className="w-5 h-5 text-teal-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Continuous improvement frameworks
              </div>
            </div>

            <button className="inline-flex items-center text-teal-600 font-semibold hover:text-teal-700 transition-colors duration-300 group">
              Optimize Now
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Service 5 - Change Management */}
      <div className="group md:col-span-2 lg:col-span-2">
        <div className="relative h-full bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 border border-slate-700 overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-teal-500 to-blue-500 opacity-20 rounded-full blur-3xl group-hover:opacity-30 transition-opacity duration-500"></div>
          
          <div className="relative grid md:grid-cols-2 gap-8">
            <div className="relative h-full min-h-[300px] md:min-h-0 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop"
                alt="Change Management"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-transparent"></div>
            </div>
            
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-blue-600 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                  </svg>
                </div>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Change Management & Training
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Navigate organizational transformation with confidence. Our structured change management programs ensure smooth transitions, high adoption rates, and sustained employee engagement throughout your transformation journey.
              </p>
              
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-base text-gray-300">
                  <svg className="w-5 h-5 text-teal-400 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Stakeholder engagement and communication plans
                </div>
                <div className="flex items-center text-base text-gray-300">
                  <svg className="w-5 h-5 text-teal-400 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Customized training programs and workshops
                </div>
                <div className="flex items-center text-base text-gray-300">
                  <svg className="w-5 h-5 text-teal-400 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Adoption tracking and success metrics
                </div>
              </div>

              <button className="inline-flex items-center px-8 py-4 bg-white text-slate-900 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl group w-fit">
                Start Your Transformation
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>

    {/* Bottom CTA */}
    <div className="mt-16 md:mt-20 text-center">
      <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-8 bg-white rounded-2xl shadow-lg border border-gray-100">
        <div className="flex-shrink-0">
          <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </div>
        </div>
        <div className="text-left">
          <h3 className="text-xl font-bold text-slate-900 mb-1">Not sure which service fits your needs?</h3>
          <p className="text-gray-700">Schedule a free consultation and we&apos;ll create a custom solution for you</p>
        </div>
        <button className="flex-shrink-0 px-8 py-4 bg-gradient-to-r from-teal-600 to-blue-600 text-white font-semibold rounded-xl hover:from-teal-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap">
          Book Consultation
        </button>
      </div>
    </div>
  </div>
</section>
  );
}