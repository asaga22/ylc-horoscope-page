const Signup: React.FC = () => {
  return(
    <div className="bg-white shadow-md rounded-lg p-4 flex gap-4 items-center">
      <div className="text-red-500 text-2xl">
        🔮
      </div>
      <div className="flex-1">
        <p className="font-medium text-sm">
          <span className="font-bold">While you&apos;re here, why not sign up for our daily editions?</span> They&apos;re packed with essential retirement resources, 
          information and news relevant to your life stage. Try some of our online games and puzzles, too!
        </p>
      </div>
      <div>
        <button className="bg-red-500 text-white text-sm rounded-md py-2 px-4 uppercase font-medium">
          Sign up now
        </button>
      </div>
    </div>
  );
}

export default Signup;