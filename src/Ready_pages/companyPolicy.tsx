import React from "react";

const CompanyPolicy = () => {
  return (
    <main>
      <div className="bg-slate-400 font-[sans-serif]">
        <div className="max-w-6xl mx-auto py-16 px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-md:max-w-md mx-auto">
            <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all">
              <div className="p-8">
                <h3 className="text-gray-800 text-xl font-semibold mb-3">
                  Free Delivery
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  For all oders over $50, consectetur adipim scing elit.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all">
              <div className="p-8">
                <h3 className="text-gray-800 text-xl font-semibold mb-3">
                  90 Days Return
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  If goods have problems, consectetur adipim scing elit..
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all">
              <div className="p-8">
                <h3 className="text-gray-800 text-xl font-semibold mb-3">
                  Secure Payment
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  100% secure payment, consectetur adipim scing elit..
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CompanyPolicy;
