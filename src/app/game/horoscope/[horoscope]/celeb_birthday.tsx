import React from "react";

const CelebBirthday: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      <div className="bg-gray-50 rounded-lg p-6">
        <h3 className="font-medium text-gray-800 mb-3">Celebrities born on: Feb 22</h3>
        <p className="text-sm text-gray-600 leading-relaxed">
          Drew Barrymore, Edward Kennedy, Michael Chang, Julius Erving, Miko Hughes, Jen Ryan, Bradley Nowell, Steve &quot;Crocodile Hunter&quot; 
          Irwin, Carly Milne, Les Salengs
        </p>
      </div>

      <div className="bg-gray-50 rounded-lg p-6">
        <h3 className="font-medium text-gray-800 mb-3">Celebrity Astro Gossip:</h3>
        <p className="text-sm text-gray-600 leading-relaxed">
          Whoopi Goldberg continues to be highly respected for her work, her down-to-earth attitude, and her honesty and integrity, despite the fact that she has not been very prominent in the world of movies for the past years. However, all that may be about to change as Whoopi is taking charge of a stage version of her massive hit Sister Act, as the show opens its run. Apparently there&apos;ll be studios in Whoopi&apos;s acting ability when they meet month, etc.
        </p>
      </div>

      <div className="bg-gray-50 rounded-lg p-6">
        <h3 className="font-medium text-gray-800 mb-3">For those of us born on: Feb 22</h3>
        <p className="text-sm text-gray-600 leading-relaxed">
          Happy birthday! The months ahead will begin with a period of consolidation as you look at the various items demanding all your focus and their roots in your life, whether they relate to emotional relationships, home affairs or work-related projects. As spring turns to summer, so your thoughts will turn to love and new relationships in particular - though the road ahead may not be as you expected. August may see some financial setbacks, but don&apos;t dwell on this since they will only be short lived. In the fall you will be busy with travel plans and family affairs, while going a lot of effort on your part will be required if you are going to turn a dream into a reality. Towards the end of the year family will be increasingly important in your life. There are definite signs that a long-term lift may be on the verge of &apos;being located at this time&apos;!
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        <div className="bg-gray-50 rounded-lg p-6">
          <h3 className="font-medium text-gray-800 mb-3">Today&apos;s Motivational Quote</h3>
          <p className="text-sm text-gray-600 italic leading-relaxed">
            Be glad of life because it gives you the chance to love and to work and to play and to look up at the stars. — Henry Van Dyke
          </p>
        </div>

        <div className="bg-gray-50 rounded-lg p-6">
          <h3 className="font-medium text-gray-800 mb-3">Today&apos;s Chinese Proverb</h3>
          <p className="text-sm text-gray-600 italic leading-relaxed">
            When you meet someone better than yourself, turn your thoughts to becoming his equal. When you meet someone not as good as you are, look within and examine your own self.
          </p>
        </div>

        <div className="bg-gray-50 rounded-lg p-6">
          <h3 className="font-medium text-gray-800 mb-3">Today&apos;s Wisdom from around the World:</h3>
          <p className="text-sm text-gray-600 italic leading-relaxed">
            If you can&apos;t bite, don&apos;t show your teeth. — American Proverb
          </p>
        </div>
      </div>
    </div>
  )
};

export default CelebBirthday;