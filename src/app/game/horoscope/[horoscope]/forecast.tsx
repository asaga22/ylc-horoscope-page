import React from 'react';

const Forecast = () => {
  return (
    <section className="bg-gray-50 rounded-lg p-6 mb-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-800">FORECAST</h2>
        <div className="flex items-center">
          <div className="bg-red-500 flex justify-center items-center mr-2 p-1">
            <span className="text-white">📅</span>
          </div>
          <span className="text-sm">Feb 22, 2025</span>
        </div>
      </div>

      {/* Mobile layout - stacked sections */}
      <div className="md:hidden space-y-4">
        {/* Compatible Sign Section */}
        <div className="bg-white rounded-lg p-4">
          <p className="text-sm font-medium mb-2">Your compatible sign today for:</p>
          <div className="flex mb-2">
            <div className="flex-1 bg-white rounded-l-full py-1 px-4 text-center text-sm border border-r-0">
              Love
            </div>
            <div className="flex-1 bg-gray-800 text-white rounded-r-full py-1 px-4 text-center text-sm">
              Libra
            </div>
          </div>
          <div className="flex">
            <div className="flex-1 bg-white rounded-l-full py-1 px-4 text-center text-sm border border-r-0">
              Friendship
            </div>
            <div className="flex-1 bg-gray-800 text-white rounded-r-full py-1 px-4 text-center text-sm">
              Aquarius
            </div>
          </div>
        </div>

        {/* Lucky Numbers Section */}
        <div className="bg-white rounded-lg p-4">
          <p className="text-sm font-medium mb-2">Your lucky numbers for today:</p>
          <div className="grid grid-cols-3 gap-2">
            <div className="bg-gray-100 rounded-md flex items-center justify-center h-8 text-red-600 font-medium">4</div>
            <div className="bg-gray-100 rounded-md flex items-center justify-center h-8 text-red-600 font-medium">11</div>
            <div className="bg-gray-100 rounded-md flex items-center justify-center h-8 text-red-600 font-medium">20</div>
            <div className="bg-gray-100 rounded-md flex items-center justify-center h-8 text-red-600 font-medium">27</div>
            <div className="bg-gray-100 rounded-md flex items-center justify-center h-8 text-red-600 font-medium">33</div>
            <div className="bg-gray-100 rounded-md flex items-center justify-center h-8 text-red-600 font-medium">42</div>
          </div>
        </div>

        {/* Moon Phase Section */}
        <div className="bg-white rounded-lg p-4">
          <p className="text-sm font-medium mb-2">This week&apos;s moon phase is:</p>
          <div className="bg-white rounded-md p-2">
            <span className="text-gray-800">Waning Crescent</span>
          </div>
        </div>

        {/* Compatibility Ratings Section */}
        <div className="bg-white rounded-lg p-4">
          <p className="text-sm font-medium mb-2">Your compatible sign today for:</p>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="bg-white rounded-full py-1 px-4 text-center text-sm border w-24">
                Love
              </div>
              <div className="text-yellow-400">★★★☆☆</div>
            </div>
            <div className="flex items-center justify-between">
              <div className="bg-white rounded-full py-1 px-4 text-center text-sm border w-24">
                Money
              </div>
              <div className="text-yellow-400">★★★☆☆</div>
            </div>
            <div className="flex items-center justify-between">
              <div className="bg-white rounded-full py-1 px-4 text-center text-sm border w-24">
                Mood
              </div>
              <div className="text-yellow-400">★★★☆☆</div>
            </div>
            <div className="flex items-center justify-between">
              <div className="bg-white rounded-full py-1 px-4 text-center text-sm border w-24">
                Style
              </div>
              <div className="text-yellow-400">★★★☆☆</div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop layout - grid layout */}
      <div className="hidden md:block">
        <div className="grid grid-cols-3 gap-4 mb-6">
          {/* Compatible Sign */}
          <div>
            <p className="text-sm font-medium mb-2">Your compatible sign today for:</p>
            <div className="flex mb-2">
              <div className="flex-1 bg-gray-200 rounded-l-md py-1 px-3 text-center text-sm">
                Love
              </div>
              <div className="flex-1 bg-blue-500 text-white rounded-r-md py-1 px-3 text-center text-sm">
                Libra
              </div>
            </div>
            <div className="flex">
              <div className="flex-1 bg-gray-200 rounded-l-md py-1 px-3 text-center text-sm">
                Friendship
              </div>
              <div className="flex-1 bg-gray-800 text-white rounded-r-md py-1 px-3 text-center text-sm">
                Aquarius
              </div>
            </div>
          </div>
          
          {/* Lucky Numbers */}
          <div>
            <p className="text-sm font-medium mb-2">Your lucky numbers for today:</p>
            <div className="grid grid-cols-3 gap-2">
              <div className="bg-red-100 rounded-md flex items-center justify-center h-8 text-red-600 font-medium">4</div>
              <div className="bg-red-100 rounded-md flex items-center justify-center h-8 text-red-600 font-medium">11</div>
              <div className="bg-red-100 rounded-md flex items-center justify-center h-8 text-red-600 font-medium">20</div>
              <div className="bg-red-100 rounded-md flex items-center justify-center h-8 text-red-600 font-medium">27</div>
              <div className="bg-red-100 rounded-md flex items-center justify-center h-8 text-red-600 font-medium">33</div>
              <div className="bg-red-100 rounded-md flex items-center justify-center h-8 text-red-600 font-medium">42</div>
            </div>
          </div>
          
          {/* Moon Phase */}
          <div>
            <p className="text-sm font-medium mb-2">This week&apos;s moon phase is:</p>
            <div className="bg-gray-100 rounded-md p-2 flex justify-center">
              <span className="text-gray-800">Waning Crescent</span>
            </div>
          </div>
        </div>
        
        {/* Compatibility Ratings */}
        <div>
          <p className="text-sm font-medium mb-2">Your compatible sign today for:</p>
          <div className="grid grid-cols-4 gap-2">
            <div>
              <div className="bg-gray-100 rounded-md py-1 px-3 text-center text-sm mb-1">Love</div>
              <div className="flex justify-center">
                <span className="text-yellow-400">★★★</span>
              </div>
            </div>
            <div>
              <div className="bg-gray-100 rounded-md py-1 px-3 text-center text-sm mb-1">Money</div>
              <div className="flex justify-center">
                <span className="text-yellow-400">★★★</span>
              </div>
            </div>
            <div>
              <div className="bg-gray-100 rounded-md py-1 px-3 text-center text-sm mb-1">Mood</div>
              <div className="flex justify-center">
                <span className="text-yellow-400">★★★</span>
              </div>
            </div>
            <div>
              <div className="bg-gray-100 rounded-md py-1 px-3 text-center text-sm mb-1">Style</div>
              <div className="flex justify-center">
                <span className="text-yellow-400">★★★</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Forecast;