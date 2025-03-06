export interface ZodiacSign {
  slug: string;
  name: string;
  dateStart: string;
  dateEnd: string;
  icon: string;
  color: string;
  description: string;
  spirit: ZodiacSpirit;
  gift: ZodiacGift;
}

export interface ZodiacSpirit {
  name: string;
  description: string;
}

export interface ZodiacGift {
  name: string;
  items: string[];
}

export const ZODIAC_SIGNS: ZodiacSign[] = [
  {
    slug: 'aries',
    name: 'Aries',
    dateStart: '03-21',
    dateEnd: '04-19',
    icon: 'aries.svg',
    color: '#FFE5E5',
    description: `Born under the blazing sign of the Ram, you're a natural-born trailblazer led by Mars, the planet of action and courage. As the first sign of the zodiac, you spark the cosmic wheel into motion with your fierce spirit and unstoppable drive.`,
    spirit: {
      name: 'Warrior Spirit',
      description: `While your lightning-quick decisions and burning desire to be first can sometimes lead to spontaneous choices, it's exactly this raw energy that makes you such a powerful force. When you channel your inner fire mindfully, there's no peak too high to conquer. Ready to discover what the stars have ignited for you today?`
    },
    gift: {
      name: 'Fire Element Gifts',
      items: [
        `Magnetic confidence that draws others to your flame`,
        'Bold leadership that inspires action',
        'Passionate determination to chase your dreams',
        'Natural courage to venture where others hesitate'
      ]
    }
  },
  {
    slug: 'taurus',
    name: 'Taurus',
    dateStart: '04-20',
    dateEnd: '05-20',
    icon: 'taurus.svg',
    color: '#FFE4F0',
    description: `Grounded in the earthly comforts, you thrive on stability and are guided by Venus, the planet of beauty and abundance. At the core of your essence is a love for security, luxury, and perseverance.`,
    spirit: {
      name: 'Steadfast Spirit',
      description: `Your unshakable determination ensures you accomplish anything you set your mind to, even if it takes time. Your devotion is a strength, but remember to embrace change when needed.`
    },
    gift: {
      name: 'Earth Element Gifts',
      items: [
        'Strong sense of loyalty and dependability',
        'Deep appreciation for life’s pleasures',
        'Ability to create beauty and comfort',
        'Patience and resilience in all endeavors'
      ]
    }
  },
  {
    slug: 'gemini',
    name: 'Gemini',
    dateStart: '05-21',
    dateEnd: '06-20',
    icon: 'gemini.svg',
    color: '#E5F6EA',
    description: `Dancing through life with dual perspectives, you’re the cosmic messenger guided by Mercury, the master of language and the mind. As the sign of the Twins, you balance curiosity and adaptability like no other.`,
    spirit: {
      name: 'Curious Spirit',
      description: `Your gift for quick thinking and communication makes you a dynamic force, though your restless energy may sometimes scatter your focus. When you harness your intellect wisely, there’s no limit to what you can achieve.`
    },
    gift: {
      name: 'Air Element Gifts',
      items: [
        'Exceptional communication and wit',
        'Quick adaptability to any situation',
        'Natural charm and curiosity',
        'Ability to connect people and ideas'
      ]
    }
  },
  {
    slug: 'cancer',
    name: 'Cancer',
    dateStart: '06-21',
    dateEnd: '07-22',
    icon: 'cancer.svg',
    color: '#E5F0FF',
    description: `Ruled by the nurturing Moon, your emotions run deep and guide your path in life, creating a sense of tenderness and intuition. At your core, you cherish family, home, and the bonds that nurture your soul.`,
    spirit: {
      name: 'Nurturing Spirit',
      description: `Your heart’s depth makes you an incredibly empathetic and compassionate person, but protecting yourself too fiercely may sometimes hold you back. When you allow your emotions to flow freely, your strength shines through.`
    },
    gift: {
      name: 'Water Element Gifts',
      items: [
        'Unparalleled emotional intuition',
        'Strong protective instincts',
        'Deep ability to nurture and heal',
        'Resilient and caring nature'
      ]
    }
  },
  {
    slug: 'leo',
    name: 'Leo',
    dateStart: '07-23',
    dateEnd: '08-22',
    icon: 'leo.svg',
    color: '#FFF4E5',
    description: `Radiating with the power of the Sun, you shine with an undeniable presence. Your energy is bold, warm, and captivating, making you a natural leader and performer.`,
    spirit: {
      name: 'Radiant Spirit',
      description: `Your passion fuels your creativity, and your courage inspires those around you. But remember, true greatness comes from lifting others, not just standing in the spotlight alone.`
    },
    gift: {
      name: 'Fire Element Gifts',
      items: [
        'Unwavering confidence and charisma',
        'Creative self-expression',
        'Strong sense of loyalty and generosity',
        'Leadership that motivates others'
      ]
    }
  },
  {
    slug: 'virgo',
    name: 'Virgo',
    dateStart: '08-23',
    dateEnd: '09-22',
    icon: 'virgo.svg',
    color: '#F0E5FF',
    description: `As the meticulous analyst of the zodiac, your sharp eye for detail and pursuit of perfection set you apart. Ruled by Mercury, your mind is always engaged, seeking ways to improve and refine.`,
    spirit: {
      name: 'Perfectionist Spirit',
      description: `Your keen insight and practical approach make you a master of efficiency, though learning to embrace imperfection can lead to greater happiness.`
    },
    gift: {
      name: 'Earth Element Gifts',
      items: [
        'Unmatched attention to detail',
        'Practical problem-solving skills',
        'Deep sense of duty and responsibility',
        'Strong organizational talents'
      ]
    }
  },
  {
    slug: 'libra',
    name: 'Libra',
    dateStart: '09-23',
    dateEnd: '10-22',
    icon: 'libra.svg',
    color: '#E5FFEA',
    description: `Balanced and charming, you seek harmony in all aspects of life. Ruled by Venus, your love for beauty and fairness makes you a natural diplomat.`,
    spirit: {
      name: 'Harmonizing Spirit',
      description: `Your ability to see all sides of a situation is a gift, but don’t let indecision hold you back from making choices that serve your highest good.`
    },
    gift: {
      name: 'Air Element Gifts',
      items: [
        'Strong sense of justice and fairness',
        'Natural charm and social grace',
        'Ability to create peace and harmony',
        'Deep appreciation for beauty and aesthetics'
      ]
    }
  },
  {
    slug: 'scorpio',
    name: 'Scorpio',
    dateStart: '10-23',
    dateEnd: '11-21',
    icon: 'scorpio.svg',
    color: '#FFE5F0',
    description: `Mysterious and intense, you are ruled by Pluto, the planet of transformation. Your emotional depth and resilience make you a force to be reckoned with.`,
    spirit: {
      name: 'Transformative Spirit',
      description: `Your passion fuels your ability to rise from the ashes stronger than before, but embracing vulnerability can unlock even greater strength.`
    },
    gift: {
      name: 'Water Element Gifts',
      items: [
        'Unmatched emotional intensity and depth',
        'Strong intuition and insight',
        'Unwavering determination and willpower',
        'Magnetic and transformative energy'
      ]
    }
  },
  {
    slug: 'sagittarius',
    name: 'Sagittarius',
    dateStart: '11-22',
    dateEnd: '12-21',
    icon: 'sagittarius.svg',
    color: '#E5FFFF',
    description: `Free-spirited and adventurous, you are guided by Jupiter, the planet of expansion. Your curiosity and optimism lead you to explore the world fearlessly.`,
    spirit: {
      name: 'Explorer Spirit',
      description: `Your thirst for knowledge and adventure is boundless, but remember to ground your dreams in reality to bring them to fruition.`
    },
    gift: {
      name: 'Fire Element Gifts',
      items: [
        'Boundless enthusiasm and optimism',
        'Love for adventure and new experiences',
        'Wisdom and a thirst for knowledge',
        'Ability to inspire others with vision'
      ]
    }
  },
  {
    slug: 'capricorn',
    name: 'Capricorn',
    dateStart: '12-22',
    dateEnd: '01-19',
    icon: 'capricorn.svg',
    color: '#FFF5E5',
    description: `Disciplined and ambitious, you are ruled by Saturn, the planet of structure. Your determination and perseverance set you up for success.`,
    spirit: {
      name: 'Ambitious Spirit',
      description: `Your patience and dedication ensure that you achieve your goals, but don’t forget to enjoy the journey along the way.`
    },
    gift: {
      name: 'Earth Element Gifts',
      items: [
        'Strong sense of responsibility and discipline',
        'Patience and long-term vision',
        'Ability to build and achieve great things',
        'Deep-rooted resilience and endurance'
      ]
    }
  },
  {
    slug: 'aquarius',
    name: 'Aquarius',
    dateStart: '01-20',
    dateEnd: '02-18',
    icon: 'aquarius.svg',
    color: '#E5F5FF',
    description: `Innovative and visionary, you are guided by Uranus, the planet of change and rebellion. Your unique perspective inspires new ways of thinking.`,
    spirit: {
      name: 'Revolutionary Spirit',
      description: `Your ability to break free from convention is powerful, but connecting with others on a deeper level can enrich your journey.`
    },
    gift: {
      name: 'Air Element Gifts',
      items: [
        'Progressive and forward-thinking mindset',
        'Strong sense of individuality and originality',
        'Ability to inspire change and innovation',
        'Deep intellectual and humanitarian insights'
      ]
    }
  },
  {
    slug: 'pisces',
    name: 'Pisces',
    dateStart: '02-19',
    dateEnd: '03-20',
    icon: 'pisces.svg',
    color: '#FFE5F5',
    description: `Dreamy and intuitive, you are ruled by Neptune, the planet of dreams and spirituality. Your empathy and imagination make you deeply connected to the unseen.`,
    spirit: {
      name: 'Mystic Spirit',
      description: `Your creativity and compassion are boundless, but staying grounded in reality can help you bring your dreams to life.`
    },
    gift: {
      name: 'Water Element Gifts',
      items: [
        'Profound emotional depth and intuition',
        'Limitless creativity and imagination',
        'Deep spiritual connection and wisdom',
        'Compassion and empathy for all beings'
      ]
    }
  }
];
