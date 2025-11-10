export default function Testimonials() {
  return (
    <section className="py-24 md:py-32 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
  <div className="max-w-7xl mx-auto">
    {/* Section Header */}
    <div className="text-center mb-16 md:mb-20">
      <div className="inline-flex items-center gap-2 px-4 py-2 bg-include-coral/10 rounded-full mb-6">
        <svg className="w-5 h-5 text-include-coral" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
        <span className="text-sm font-semibold text-include-navy">Trusted by Thousands</span>
      </div>
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-include-navy mb-6">
        What Our Clients Say
      </h2>
      <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
        Real stories from real people who&apos;ve transformed their business with Include
      </p>
    </div>

    {/* Testimonials Grid */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
      {/* Testimonial 1 - E-commerce Success */}
      <div className="bg-white p-8 md:p-10 lg:p-12 rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 group">
        <div className="flex items-center gap-4 mb-4">
          <img 
            src="https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_1280.jpg"
            alt="Michael Chen"
            className="w-16 h-16 rounded-full object-cover ring-2 ring-include-coral/20"
          />
          <div className="flex-1">
            <div className="flex items-center gap-1 mb-2">
              <span className="text-yellow-400 text-lg">⭐⭐⭐⭐⭐</span>
            </div>
            <h3 className="font-bold text-gray-900">Michael Chen</h3>
            <p className="text-sm text-gray-600">Founder, TechGear Plus</p>
          </div>
        </div>
        <blockquote className="text-base md:text-lg text-gray-700 leading-relaxed">
          "After implementing Include&apos;s platform, our online sales jumped 47% in just three months. The automated inventory management alone saved us 15 hours per week. The ROI was clear within the first month."
        </blockquote>
        <div className="mt-6 pt-6 border-t border-gray-100">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-include-coral">E-commerce</span>
            <svg className="w-5 h-5 text-include-navy opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>

      {/* Testimonial 2 - Marketing Agency */}
      <div className="bg-white p-8 md:p-10 lg:p-12 rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 group">
        <div className="flex items-center gap-4 mb-4">
          <img 
            src="https://cdn.pixabay.com/photo/2017/08/01/08/29/woman-2563491_1280.jpg"
            alt="Sarah Martinez"
            className="w-16 h-16 rounded-full object-cover ring-2 ring-include-coral/20"
          />
          <div className="flex-1">
            <div className="flex items-center gap-1 mb-2">
              <span className="text-yellow-400 text-lg">⭐⭐⭐⭐⭐</span>
            </div>
            <h3 className="font-bold text-gray-900">Sarah Martinez</h3>
            <p className="text-sm text-gray-600">Creative Director, Spark Media</p>
          </div>
        </div>
        <blockquote className="text-base md:text-lg text-gray-700 leading-relaxed">
          "We were drowning in client requests and missed deadlines. Include&apos;s workflow automation cut our project turnaround time from 6 weeks to 3 weeks. Our client satisfaction scores went from 78% to 96%."
        </blockquote>
        <div className="mt-6 pt-6 border-t border-gray-100">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-include-coral">Marketing</span>
            <svg className="w-5 h-5 text-include-navy opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>

      {/* Testimonial 3 - SaaS Startup */}
      <div className="bg-white p-8 md:p-10 lg:p-12 rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 group">
        <div className="flex items-center gap-4 mb-4">
          <img 
            src="https://cdn.pixabay.com/photo/2016/11/29/03/35/man-1867175_1280.jpg"
            alt="James Thompson"
            className="w-16 h-16 rounded-full object-cover ring-2 ring-include-coral/20"
          />
          <div className="flex-1">
            <div className="flex items-center gap-1 mb-2">
              <span className="text-yellow-400 text-lg">⭐⭐⭐⭐⭐</span>
            </div>
            <h3 className="font-bold text-gray-900">James Thompson</h3>
            <p className="text-sm text-gray-600">CEO, DataFlow Solutions</p>
          </div>
        </div>
        <blockquote className="text-base md:text-lg text-gray-700 leading-relaxed">
          "Include&apos;s analytics dashboard revealed we were losing 23% of potential customers at checkout. We fixed the issues they identified and recovered $180K in annual revenue. The insights were game-changing."
        </blockquote>
        <div className="mt-6 pt-6 border-t border-gray-100">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-include-coral">SaaS</span>
            <svg className="w-5 h-5 text-include-navy opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>

      {/* Testimonial 4 - Professional Services */}
      <div className="bg-white p-8 md:p-10 lg:p-12 rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 group">
        <div className="flex items-center gap-4 mb-4">
          <img 
            src="https://cdn.pixabay.com/photo/2017/08/06/12/52/woman-2592247_1280.jpg"
            alt="Emily Rodriguez"
            className="w-16 h-16 rounded-full object-cover ring-2 ring-include-coral/20"
          />
          <div className="flex-1">
            <div className="flex items-center gap-1 mb-2">
              <span className="text-yellow-400 text-lg">⭐⭐⭐⭐⭐</span>
            </div>
            <h3 className="font-bold text-gray-900">Emily Rodriguez</h3>
            <p className="text-sm text-gray-600">Partner, Summit Consulting</p>
          </div>
        </div>
        <blockquote className="text-base md:text-lg text-gray-700 leading-relaxed">
          "Our team was spending 20+ hours weekly on administrative tasks. Include&apos;s automation freed up that time for billable client work. We increased our capacity by 35% without hiring additional staff."
        </blockquote>
        <div className="mt-6 pt-6 border-t border-gray-100">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-include-coral">Consulting</span>
            <svg className="w-5 h-5 text-include-navy opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>

      {/* Testimonial 5 - Manufacturing */}
      <div className="bg-white p-8 md:p-10 lg:p-12 rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 group">
        <div className="flex items-center gap-4 mb-4">
          <img 
            src="https://cdn.pixabay.com/photo/2016/11/21/14/53/man-1845814_1280.jpg"
            alt="David Park"
            className="w-16 h-16 rounded-full object-cover ring-2 ring-include-coral/20"
          />
          <div className="flex-1">
            <div className="flex items-center gap-1 mb-2">
              <span className="text-yellow-400 text-lg">⭐⭐⭐⭐⭐</span>
            </div>
            <h3 className="font-bold text-gray-900">David Park</h3>
            <p className="text-sm text-gray-600">Operations Manager, Precision Parts Co.</p>
          </div>
        </div>
        <blockquote className="text-base md:text-lg text-gray-700 leading-relaxed">
          "Include&apos;s supply chain integration reduced our material waste by 28% and cut procurement costs by $95K annually. The real-time tracking eliminated the stockout issues that were costing us rush orders."
        </blockquote>
        <div className="mt-6 pt-6 border-t border-gray-100">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-include-coral">Manufacturing</span>
            <svg className="w-5 h-5 text-include-navy opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>

      {/* Testimonial 6 - Healthcare */}
      <div className="bg-white p-8 md:p-10 lg:p-12 rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 group">
        <div className="flex items-center gap-4 mb-4">
          <img 
            src="https://cdn.pixabay.com/photo/2017/03/01/22/18/avatar-2109804_1280.png"
            alt="Dr. Lisa Patel"
            className="w-16 h-16 rounded-full object-cover ring-2 ring-include-coral/20"
          />
          <div className="flex-1">
            <div className="flex items-center gap-1 mb-2">
              <span className="text-yellow-400 text-lg">⭐⭐⭐⭐⭐</span>
            </div>
            <h3 className="font-bold text-gray-900">Dr. Lisa Patel</h3>
            <p className="text-sm text-gray-600">Medical Director, HealthFirst Clinic</p>
          </div>
        </div>
        <blockquote className="text-base md:text-lg text-gray-700 leading-relaxed">
          "Patient scheduling was a nightmare with 40% no-show rates. Include&apos;s automated reminders and easy rescheduling dropped no-shows to 12%. We&apos;re now seeing 85 more patients per month with the same staff."
        </blockquote>
        <div className="mt-6 pt-6 border-t border-gray-100">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-include-coral">Healthcare</span>
            <svg className="w-5 h-5 text-include-navy opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </div>

    {/* Trust Indicators */}
    <div className="mt-20 pt-16 border-t border-gray-200">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
        <div className="text-center">
          <div className="text-4xl md:text-5xl font-bold text-include-navy mb-2">10K+</div>
          <div className="text-sm md:text-base text-gray-600">Happy Clients</div>
        </div>
        <div className="text-center">
          <div className="text-4xl md:text-5xl font-bold text-include-navy mb-2">4.9/5</div>
          <div className="text-sm md:text-base text-gray-600">Average Rating</div>
        </div>
        <div className="text-center">
          <div className="text-4xl md:text-5xl font-bold text-include-navy mb-2">98%</div>
          <div className="text-sm md:text-base text-gray-600">Satisfaction Rate</div>
        </div>
        <div className="text-center">
          <div className="text-4xl md:text-5xl font-bold text-include-navy mb-2">24/7</div>
          <div className="text-sm md:text-base text-gray-600">Support Available</div>
        </div>
      </div>
    </div>

    {/* CTA */}
    <div className="mt-16 text-center">
      <p className="text-lg text-gray-600 mb-6">Join thousands of satisfied clients</p>
      <button className="inline-flex items-center gap-2 px-8 py-4 bg-include-coral text-white font-semibold rounded-lg hover:bg-include-coral-dark transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
        Start Your Success Story
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </button>
    </div>
  </div>
</section>
  );
}