export type EventTicket = {
  id: string;
  image: string;
  name: string;
  date: string;
  location: string;
  price: number;
  description: string;
};

export const products: EventTicket[] = [
  {
    id: 'evt-101',
    image:
      'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800',
    name: 'Amsterdam Expat Mixer: Canal Side Drinks',
    price: 15.5,
    date: '2026-03-12T18:30:00',
    location: 'Hannekes Boom, Amsterdam',
    description:
      "<p>Join the <strong>Amsterdam International Community</strong> for a relaxed evening of networking and drinks at one of the city's most iconic waterfront spots.</p><p>This event is specifically designed for:</p><ul><li>Newcomers looking to build their first local network.</li><li>Long-term residents wanting to expand their professional circle.</li><li>Anyone interested in sharing tips about life in the Netherlands.</li></ul><p><em>Note: The first 30 guests receive a complimentary welcome drink!</em></p>",
  },
  {
    id: 'evt-102',
    image:
      'https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?auto=format&fit=crop&q=80&w=800',
    name: 'AI & Ethics: The 2026 Summit',
    price: 299.0,
    date: '2026-04-05T09:00:00',
    location: 'Tech Hub Central, San Francisco & Online',
    description:
      "<p>A deep dive into the rapidly evolving regulatory landscape of <strong>Generative AI</strong>. As we move into 2026, the conversation shifts from 'what is possible' to 'what is responsible'.</p><p>Key topics include:</p><ul><li>Algorithmic transparency and bias mitigation.</li><li>Intellectual property in the age of synthetic media.</li><li>Global compliance standards for AI startups.</li></ul><p>Featuring keynote speakers from leading tech labs and international ethical oversight committees.</p>",
  },
  {
    id: 'evt-103',
    image:
      'https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&q=80&w=800',
    name: 'Midnight Jazz & Soul Session',
    price: 45.0,
    date: '2026-03-20T22:00:00',
    location: 'The Blue Note, New Orleans',
    description:
      '<p>Experience the soulful heart of New Orleans in an intimate, candlelit setting. Our <strong>Midnight Sessions</strong> are famous for unannounced guest appearances by world-class musicians.</p><p><strong>What to expect:</strong></p><ul><li>90 minutes of live improvisational jazz.</li><li>A curated menu of prohibition-era signature cocktails.</li><li>Strict no-phone policy to preserve the atmosphere.</li></ul><p>Your ticket includes a complimentary drink and a commemorative vinyl sticker.</p>',
  },
  {
    id: 'evt-104',
    image:
      'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=800',
    name: 'Startup Founders Masterclass',
    price: 120.0,
    date: '2026-05-15T10:00:00',
    location: 'Station F, Paris',
    description:
      "<p>Scaling a business is harder than starting one. In this intensive masterclass, we break down the exact frameworks used by <strong>Unicorn Founders</strong> to navigate the 'Valley of Death' between Series A and B.</p><p><strong>Core Curriculum:</strong></p><ul><li>Hiring for culture vs. hiring for speed.</li><li>Optimizing unit economics for global expansion.</li><li>The psychology of high-stakes fundraising.</li></ul><p>Limited to 50 participants to ensure high-quality peer-to-peer networking.</p>",
  },
  {
    id: 'evt-105',
    image:
      'https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?auto=format&fit=crop&q=80&w=800',
    name: 'Board Game Night: Strategy & Social',
    price: 10.0,
    date: '2026-02-28T19:00:00',
    location: 'Spielwiese, Berlin',
    description:
      "<p>Forget the digital world for a night. Whether you are a fan of <em>Catan</em>, <em>Terraforming Mars</em>, or obscure indie titles, come test your strategic mettle.</p><p><strong>Why join us?</strong></p><ul><li>Over 500 titles available in our library.</li><li>Dedicated 'Game Masters' to teach you the rules in 10 minutes.</li><li>Matchmaking system to find players of your skill level.</li></ul><p>Pizza and craft beers are available for purchase throughout the night.</p>",
  },
  {
    id: 'evt-106',
    image:
      'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800',
    name: 'Sunrise Yoga & Mindfulness',
    price: 25.0,
    date: '2026-06-01T06:30:00',
    location: 'Bondi Beach, Sydney',
    description:
      '<p>Start your week with intention and clarity. This 90-minute outdoor session combines a dynamic <strong>Vinyasa Flow</strong> with deep guided meditation as the sun rises over the Pacific Ocean.</p><p><strong>Session details:</strong></p><ul><li>All levels welcome (modifications provided).</li><li>High-quality yoga mats available for rent.</li><li>Includes a post-session green juice or herbal tea.</li></ul><p>Please arrive 15 minutes early to secure your spot on the sand.</p>',
  },
  {
    id: 'evt-107',
    image:
      'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80&w=800',
    name: 'Tuscan Wine Tasting Tour',
    price: 85.0,
    date: '2026-09-10T14:00:00',
    location: 'Castello di Verrazzano, Italy',
    description:
      "<p>Explore the rich heritage of <strong>Chianti Classico</strong> in the heart of Tuscany. This isn't just a tasting; it's a historical journey through the vineyards of a 12th-century castle.</p><p><strong>The Experience:</strong></p><ul><li>Guided walk through the ancient oak forests and vineyards.</li><li>Exclusive access to the private cellars.</li><li>Four-course pairing lunch featuring local farm-to-table ingredients.</li></ul><p>Transportation from Florence city center is included in the ticket price.</p>",
  },
  {
    id: 'evt-108',
    image:
      'https://images.unsplash.com/photo-1565191999001-551c187427bb?auto=format&fit=crop&q=80&w=800',
    name: 'Pottery & Pinot: Creative Evening',
    price: 65.0,
    date: '2026-03-05T18:00:00',
    location: 'The Clay Studio, London',
    description:
      '<p>Get your hands dirty and your glass full! This beginner-friendly pottery workshop is the perfect way to de-stress after a long day at work.</p><p><strong>Workshop Highlights:</strong></p><ul><li>Learn the basics of hand-building and wheel-throwing.</li><li>Unlimited Pinot Noir and non-alcoholic alternatives.</li><li>All your creations will be fired, glazed, and ready for pickup in 2 weeks.</li></ul><p>Absolutely no prior artistic experience is required!</p>',
  },
  {
    id: 'evt-109',
    image:
      'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800',
    name: 'Web3 Developers Meetup',
    price: 0.0,
    date: '2026-04-22T17:30:00',
    location: 'The Crypto Lab, Lisbon',
    description:
      '<p>Connect with the builders of the decentralized future. This month, our focus is on <strong>Zero-Knowledge Proofs</strong> and the next generation of privacy-preserving dApps.</p><p><strong>Agenda:</strong></p><ul><li>Lightning talks on Smart Contract security.</li><li>Developer AMA with lead engineers from major L2 protocols.</li><li>Networking session with local VC firms.</li></ul><p>Proof of Attendance (POAP) will be available for all attendees.</p>',
  },
  {
    id: 'evt-110',
    image:
      'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&q=80&w=800',
    name: 'Urban Gardening Volunteer Day',
    price: 0.0,
    date: '2026-05-02T10:00:00',
    location: 'Green Fingers Community Plot, Brooklyn',
    description:
      '<p>Help us prepare our community sanctuary for the spring season! It’s a great way to learn about <strong>sustainable urban agriculture</strong> while giving back to the neighborhood.</p><p><strong>Activity List:</strong></p><ul><li>Building new raised garden beds.</li><li>Composting and soil preparation.</li><li>Planting native pollinator-friendly flowers.</li></ul><p>We provide all the tools, gloves, and a community BBQ celebration at the end of the day.</p>',
  },
  {
    id: 'evt-111',
    image:
      'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=800',
    name: 'Photography Walk: Neon Lights Edition',
    date: '2026-03-25T19:30:00',
    location: 'Shinjuku District, Tokyo',
    price: 40.0,
    description:
      '<p>Capture the electric energy of Tokyo at night. This <strong>Photography Walk</strong> is designed for hobbyists and pros alike who want to master long-exposure and low-light shooting.</p><p><strong>What we will cover:</strong></p><ul><li>Balancing neon highlights with deep shadows.</li><li>Composition techniques for crowded urban environments.</li><li>Hand-held shooting vs. tripod stability.</li></ul><p>Small group size (max 8 people) to ensure everyone gets personalized feedback on their shots.</p>',
  },
  {
    id: 'evt-112',
    image:
      'https://images.unsplash.com/photo-1591189863430-ab87e120f312?auto=format&fit=crop&q=80&w=800',
    name: 'Molecular Gastronomy Workshop',
    date: '2026-04-10T11:00:00',
    location: 'The Culinary Lab, Barcelona',
    price: 150.0,
    description:
      "<p>Step into the future of cooking. This hands-on workshop introduces you to the science behind <strong>Molecular Gastronomy</strong>, turning your kitchen into a laboratory of flavors.</p><p><strong>Key techniques you'll learn:</strong></p><ul><li><strong>Spherification:</strong> Creating juice-filled pearls that burst in the mouth.</li><li><strong>Foams & Airs:</strong> Adding delicate textures to classic dishes.</li><li><strong>Liquid Nitrogen:</strong> Instant freezing for avant-garde desserts.</li></ul><p>Enjoy a 5-course tasting menu of everything you've created at the end of the session.</p>",
  },
];
