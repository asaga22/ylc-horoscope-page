const PersonalityTraits: React.FC = () => {
  return(
    <section className="mb-8">
      <h2 className="text-xl font-bold text-gray-800 mb-6">PERSONALITY TRAITS</h2>
      <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 mb-6">
        <div className="bg-gray-50 rounded-lg py-2 px-3 text-center text-sm">Adventurous</div>
        <div className="bg-gray-50 rounded-lg py-2 px-3 text-center text-sm">Action-oriented</div>
        <div className="bg-gray-50 rounded-lg py-2 px-3 text-center text-sm">Bold</div>
        <div className="bg-gray-50 rounded-lg py-2 px-3 text-center text-sm">Brave</div>
        <div className="bg-gray-50 rounded-lg py-2 px-3 text-center text-sm">Confident</div>
        <div className="bg-gray-50 rounded-lg py-2 px-3 text-center text-sm">Courageous</div>
        <div className="bg-gray-50 rounded-lg py-2 px-3 text-center text-sm">Determined</div>
        <div className="bg-gray-50 rounded-lg py-2 px-3 text-center text-sm">Direct & straight-forward</div>
        <div className="bg-gray-50 rounded-lg py-2 px-3 text-center text-sm">Dynamic</div>
        <div className="bg-gray-50 rounded-lg py-2 px-3 text-center text-sm">Impatient</div>
        <div className="bg-gray-50 rounded-lg py-2 px-3 text-center text-sm">Impulsive</div>
        <div className="bg-gray-50 rounded-lg py-2 px-3 text-center text-sm">Independent</div>
        <div className="bg-gray-50 rounded-lg py-2 px-3 text-center text-sm">Passionate</div>
        <div className="bg-gray-50 rounded-lg py-2 px-3 text-center text-sm">Risk taker</div>
      </div>

      <div className="space-y-4 text-sm text-gray-700 leading-relaxed mb-6">
        <p>
          Aries can be headstrong. Best not to argue with an Aries, because things can quickly escalate.
        </p>
        <p>
          They&apos;re great leaders and are focused on work and in life. They can be ambitious. They often act now and consider the consequences later, 
          especially when those consequences only apply to others.
        </p>
        <p>
          Aries most positive traits are their positivity and direct approach. They don&apos;t play games with people. 
          They have a good sense of adventure and can be impulsive.
        </p>
        <p>
          The best matches for an Aries are Gemini, Leo, Sagittarius, and Aquarius.
        </p>
      </div>
    </section>
  );
}

export default PersonalityTraits;