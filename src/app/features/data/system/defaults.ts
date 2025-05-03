import {Timestamp} from "@angular/fire/firestore";

export interface PropertyOption {
  name: string;
  description: string;
  photo: string;
  offers: string;
}


export interface ServicePage {
  serviceId: string;
  serviceTitle: string;
  serviceShortDescription: string;
  serviceDescription: string;
  serviceImageUrls: string;
  featuredImage1?:string;
  featuredImage2?:string;
  //serviceQuestionsAndAnswers: ServiceQuestionsAndAnswers[];


}
export interface TermsSection {
  id: string;
  title: string;
  content: string[];
}
export interface FAQ{

  question: string;
  answer: string;
}
export interface siteMapInterface {
  id: string,
  name: string,
  link: string,
  description: string,
  logo: string,

}



export const aboutUsHeaders:string='Welcome to Tibet Realty Co., your trusted partner in property investment in the beautiful region of North Cyprus. With our extensive knowledge and deep understanding of the local real estate market, we are dedicated to helping you find the perfect property that suits your needs and aspirations.'

export const qas:FAQ[] = [
  {
    question:'What is the first step of the home buying process?',
    answer:'Getting pre-approved for a mortgage is the first step of the home buying process. Getting a pre-approval letter from a lender gets the ball rolling in the right direction.​\n' +
      '\n' +
      'Here’s why:\n' +
      '\n' +
      'First, you need to know how much you can borrow. Knowing how much home you can afford narrows down online home searching to suitable properties; thus, no time is wasted considering homes that are not within your budget. (Pre-approvals also help prevent disappointment caused by falling in love with unaffordable homes.)\n' +
      '\n' +
      'Second, your lender’s loan estimate will show how much money is required for the down payment and closing costs. You may need more time to save up money, liquidate other assets or seek mortgage gift funds from your family. In any case, you will have a clear picture of what is financially required.\n' +
      '\n' +
      'Finally, being pre-approved for a mortgage demonstrates that you are a serious buyer to both your real estate agent and the person selling their home.\n' +
      '\n' +
      'Most real estate agents will require a pre-approval before showing homes – this is especially true at the higher end of the real estate market; sellers of luxury homes will only allow pre-screened (and verified) buyers to view their homes. This is meant to keep out “Looky Lous” and protect the seller’s privacy. What’s more, by limiting who enters their home, sellers are given extra security from potential thieves trying to case the home (like identifying security systems, locating expensive artwork or other high-value personal property).'
  },
  {
    question:'What is important when buying a property in Cyprus?',
    answer: 'The first step is to contact a qualified Real Estate Agent. At Tibet Realty co we provide the best realtor services in North Cyprus. We will guide you through the process of inspecting the property, providing mortgage advice, and clarifying your concerns. ',
  },
  {
    question: 'Can foreigners buy a house in Cyprus?',
    answer: 'Yes. Registered foreigners–including workers, investors, and students–are qualified to be property owners in North Cyprus. '
  },
  {
    question: 'Can Tibet Realty co. help me find a lawyer?',
    answer: 'Tibet Realty Co. ensures that your interests are maximally protected throughout the buying process. We provide a list of experienced and trusted lawyers in North Cyprus with prerequisite qualifications and portfolios to guide you. There are also English speaking lawyers; ensuring that there is no communication barrier. '
  },
  {
    question: 'How long does it take to buy a home?',
    answer: 'From start (searching online) to finish (closing escrow), buying a home takes about 10 to 12 weeks. Once a home is selected an the offer is accepted, the average time to complete the escrow period on a home is 30 to 45 days (under normal market conditions). Though, well-prepared home buyers who pay cash have been known to purchase properties faster than that.\n' +
      '\n' +
      'Market conditions are a major factor in how fast homes are sold. In hot markets with a lot of sales activity, buying a home may take a little longer than normal. That’s because several parties involved in the transaction get behind when business suddenly picks up. For example, a spike in home sales increases the demand for property appraisals and home inspections, yet there will be no increase in the number of appraisers and inspectors available to do the work. Lender turn-around times for loan underwriting can also slow down. If each party involved in a deal takes a day or two longer to get their work done, the entire process gets extended.'
  },
  {
    question: 'What is a seller’s market?',
    answer: 'In sellers’ markets, increasing demand for homes drives up prices. Here are some of the drivers of demand:\n' +
      '\n' +
      'Economic factors – the local labor market heats up, bringing an inflow of new residents and pushing up home prices before more inventory can be built.\n' +
      '\n' +
      'Interest rates trending downward – improves home affordability, creating more buyer interest, particularly for first time home buyers who can afford bigger homes as the cost of money goes lower.\n' +
      '\n' +
      'A short-term spike in interest rates – may compel “on the fence” buyers to make a purchase if they believe the upward trend will continue. Buyers want to make a move before their purchasing power (the amount they can borrow) gets eroded.\n' +
      '\n' +
      'Low inventory – fewer homes on the market because of a lack of new construction. Prices for existing homes may go up because there are fewer units available.'
  },
  {
    question: 'What is a buyer’s market?',
    answer: 'A buyer’s market is characterized by declining home prices and reduced demand. Several factors may affect long-term and short-term buyer demand, like: Economic disruption – a big employer shuts down operations, laying off their workforce.\n' +
      '\n' +
      'Interest rates trending higher – the amount of money the people can borrow to buy a home is reduced because the cost of money is higher, thus reducing the total number of potential buyers in the market. Home prices drop to meet the level of demand and buyers find better deals.\n' +
      '\n' +
      'Short-term drop in interest rates – can give borrowers a temporary edge with more purchasing power before home prices can react to the recent interest rate changes.\n' +
      '\n' +
      'High inventory – a new subdivision and can create downward pressure on prices of older homes nearby, particularly if they lack highly desirable features (modern appliances, etc.)\n' +
      '\n' +
      'Natural disasters – a recent earthquake or flooding can tank property values in the neighborhood where those disruptions occurred.'
  },
  {
    question: 'What are the mortgage details?',
    answer: 'Until recently, North Cyprus bank mortgages for pre-owned “resale” properties were restricted to Turkish Cypriots working in Cyprus.  Overseas visitors buying a property in North Cyprus, previously took advantage instead of the non-status payment plans offered by some of the developers of new-build villas or apartments, with the villas tending to be off-plan and apartments ready and under construction.  However, as of 2018 low-interest, 50% North Cyprus bank mortgages have become available to overseas buyers on key-ready villas and apartments with individual title deeds, subject to the financial status of the buyer. '
  },
  {
    question: 'What are the main benefits of a North Cyprus bank mortgage?',
    answer: 'The villas and apartments are key-ready, unfinished and off-plan properties. The properties have an individual title deed already in place. Bank loans are up to 50% of the value of the property. These bank mortgages are subject to status and can take up to 3 months to arrange, often longer.'
  },
  {
    question: 'What are the benefits of a North Cyprus developer payment plan loan?',
    answer: 'There are some Special Offers which are Interest-Free from developers – contact us for details. All customers qualify for the purchase of a villa or apartment with instalment payments. These instalment plans can be arranged more quickly than a bank loan (within a month in some cases) and the process of more simple. The loans are non-status, requiring no proof of income. Loans are interest-free during any build period (stage payments). However, once the property is completed, interest rates are generally higher than bank mortgages.\n' +
      ' '
  },
  {
    question: 'Must I set up Power of Attorney?',
    answer: 'Tibet Realty Co will assist you to set up a limited power of attorney with a certified legal advisor in the TRNC. This is a very quick process and without risk to yourself.  The only proof of identity required is your passport.  Many visitors do this during their visit in order to have the option to buy once they return home.  It is important as it enables the lawyer to on your behalf to sign documents if you are away from Northern Cyprus for long periods of time.  Giving this power of attorney is usually without charge and enables all the important buying processes right from the contract registration, to putting the deeds into your name, to be done without you having to return to Cyprus.'
  },   {
    question: 'What taxes must I pay when buying a property?',
    answer: 'There are three main taxes which must be paid.  The first is a 0.5% stamp duty (current at July 2014) if paid within one month of the contract date.  Please note, this is currently a very low rate – so we recommend buying sooner rather than later as this rate may rise.  If it is not paid within this time, it increases until it becomes 1.5% if paid after 6 months. You will have the option to pay upfront or pay on transfer of title and pay a higher rate.\n' +
      '\n' +
      ' \n' +
      '\n' +
      'Once your purchase permission has been granted, your legal advisor will notify you and then fill out all of the necessary land registry valuation forms for the valuation of the property. It is usually at this point that taxes will be payable. The taxes are Transfer of Title Fee (again currently very low at initial 1% option for your first purchase).  This is a given percentage of the contract sale price.  In addition, if you are buying a brand new property from a developer, you will usually have to pay 5% VAT to the government (although this is subject to change by the government regulations).\n' +
      '\n' +
      ' '
  }
];
export const sitemap:siteMapInterface[] =[
  {
    id: 'home',
    name: 'Home',
    link: '/home',
    description: 'A dedicated home page showcasing trending properties, latest real estate news, and key navigation options.',
    logo: 'assets/tibetSitemap/home-svgrepo-com.svg'
  },
  {
    id: 'buy-property',
    name: 'Buy Property',
    link: '/buy-property',
    description: 'Browse and explore a wide range of properties available for purchase, including residential, commercial, and investment options.',
    logo: 'assets/tibetSitemap/house-2-svgrepo-com.svg'
  },
  {
    id: 'rent-property',
    name: 'Rent Property',
    link: '/rent-property',
    description: 'Find rental properties, apartments, and commercial spaces available for lease with detailed pricing and location information.',
    logo: 'assets/tibetSitemap/cottage-svgrepo-com (2).svg'
  },
  {
    id: 'new-projects',
    name: 'New Projects',
    link: '/new-projects',
    description: 'Discover upcoming and newly launched real estate projects, including residential and commercial developments with investment potential.',
    logo: 'assets/tibetSitemap/house-chimney-user-svgrepo-com.svg'
  },
  {
    id: 'about-us',
    name: 'About Us',
    link: '/about-us',
    description: 'Learn about our company, mission, vision, values, and how we aim to transform the real estate market through our platform.',
    logo: 'assets/tibetSitemap/about-filled-svgrepo-com.svg'
  },
  {
    id: 'news',
    name: 'News',
    link: '/news',
    description: 'Stay updated with the latest real estate news, market reports, expert opinions, and property investment trends.',
    logo: 'assets/tibetSitemap/news-round-svgrepo-com.svg'
  },
  {
    id: 'career',
    name: 'Career',
    link: '/career',
    description: 'Explore job opportunities, career growth paths, and vacancies available within our company.',
    logo: 'assets/tibetSitemap/career-svgrepo-com.svg'
  },
  {
    id: 'contact-us',
    name: 'Contact Us',
    link: '/contact-us',
    description: 'Reach out to us for inquiries, support, or partnership opportunities through various communication channels.',
    logo: 'assets/tibetSitemap/contact-phone-communication-svgrepo-com.svg'
  },
  {
    id: 'learning-resources',
    name: 'Learning Resources',
    link: '/learning-resources',
    description: 'Access educational materials, articles, guides, and videos about real estate investment, property management, and market analysis.',
    logo: 'assets/tibetSitemap/house-svgrepo-com.svg'
  },
  {
    id: 'meet-a-mentor',
    name: 'Meet A Mentor',
    link: '/learning-resources/meet-a-mentor',
    description: 'Connect with experienced real estate mentors who can provide guidance and insights for successful property investments.',
    logo: 'assets/tibetSitemap/learning-head-book-education-svgrepo-com.svg'
  },
  {
    id: 'lease-property',
    name: 'Lease Property',
    link: '/lease-property',
    description: 'List your property for lease or browse properties available for long-term and short-term leasing options.',
    logo: 'assets/tibetSitemap/retirement-round-svgrepo-com.svg'
  },
  {
    id: 'search',
    name: 'Search',
    link: '/search',
    description: 'Use our advanced search functionality to find properties by location, price range, property type, and other filters.',
    logo: 'assets/tibetSitemap/search-globe-svgrepo-com.svg'
  },
  {
    id: 'other-resources',
    name: 'Other Resources',
    link: '/other-resources',
    description: 'Find additional resources related to real estate laws, financing options, and property valuation tools.',
    logo: 'assets/tibetSitemap/cottage-svgrepo-com.svg'
  },
  {
    id: 'privacy-and-policy',
    name: 'Privacy And Policy',
    link: '/privacy-and-policy',
    description: 'Read our privacy policy outlining how we handle user data, security measures, and compliance with regulations.',
    logo: 'assets/tibetSitemap/privacy-tips-svgrepo-com.svg'
  },
  {
    id: 'referral-program',
    name: 'Referral Program',
    link: '/referral-program',
    description: 'Join our referral program and earn rewards by referring friends, family, or clients to our platform.',
    logo: 'assets/tibetSitemap/learning-student-svgrepo-com.svg'
  },
  {
    id: 'sell-property',
    name: 'Sell Property',
    link: '/sell-property',
    description: 'List your property for sale, connect with potential buyers, and access tools to optimize your property listing.',
    logo: 'assets/tibetSitemap/chat.svg'
  },
  {
    id: 'property-catalogue',
    name: 'Property Catalogue',
    link: '/property-catalogue',
    description: 'Explore a comprehensive catalogue of available properties, categorized by type, location, and price range.',
    logo: 'assets/tibetSitemap/records.svg'
  },
  {
    id: 'terms-of-services',
    name: 'Terms Of Services',
    link: '/terms-of-services',
    description: 'Review our terms and conditions that govern the use of our platform and real estate services.',
    logo: 'assets/tibetSitemap/product-warranty-term-svgrepo-com.svg'
  },
  {
    id: 'our-team',
    name: 'Our Team',
    link: '/our-team',
    description: 'Meet our dedicated team of professionals who are committed to delivering exceptional real estate services.',
    logo: 'assets/tibetSitemap/team-delete-svgrepo-com.svg'
  },
  {
    id: 'insurance',
    name: 'Insurance',
    link: '/insurance',
    description: 'Learn about real estate insurance options, policies for property protection, and coverage plans.',
    logo: 'assets/tibetSitemap/insurance-svgrepo-com.svg'
  },
  {
    id: 'why-invest',
    name: 'Why Invest',
    link: '/why-invest',
    description: 'Understand the benefits of real estate investment, market opportunities, and strategies to maximize returns.',
    logo: 'assets/tibetSitemap/dollar-circle-list-svgrepo-com.svg'
  },
  {
    id: 'faqs',
    name: 'FAQs',
    link: '/FAQs',
    description: 'Find answers to frequently asked questions about property buying, selling, renting, and platform features.',
    logo: 'assets/tibetSitemap/faq-button-svgrepo-com.svg'
  },
  {
    id: 'all-services',
    name: 'All Services',
    link: '/services/all-services',
    description: 'Discover all the services offered on our platform, including property listings, investment consultation, and home financing options.',
    logo: 'assets/tibetSitemap/cloud-storage-svgrepo-com.svg'
  }
]
 export const service=[

 ]
export const  termsAndConditions: TermsSection[] = [
  {
    id: "accountInfo",
    title: "1. Accounts",
    content: [
      "When you create an account with us, you must provide us information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.",
      "You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password, whether your password is with our Service or a third-party service.",
      "You agree not to disclose your password to any third party. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account."
    ]
  },
  {
    id: "linksToOtherWebsInfo",
    title: "2. Links to other websites",
    content: [
      "Our Service may contain links to third-party web sites or services that are not owned or controlled by Space.",
      "Space has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that Space shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on or through any such web sites or services.",
      "We strongly advise you to read the terms and conditions and privacy policies of any third-party web sites or services that you visit."
    ]
  },
  {
    id: "terminationInfo",
    title: "3. Termination",
    content: [
      "We may terminate or suspend access to our Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.",
      "All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity and limitations of liability.",
      "We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.",
      "Upon termination, your right to use the Service will immediately cease. If you wish to terminate your account, you may simply discontinue using the Service.",
      "All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity and limitations of liability."
    ]
  },
  {
    id: "goveringLawInfo",
    title: "4. Governing law",
    content: [
      "These Terms shall be governed and construed in accordance with the laws of Jersey, without regard to its conflict of law provisions.",
      "Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect. These Terms constitute the entire agreement between us regarding our Service, and supersede and replace any prior agreements we might have between us regarding the Service."
    ]
  },
  {
    id: "changesInfo",
    title: "5. Changes",
    content: [
      "We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.",
      "By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service."
    ]
  }
];
export const homeSettingsData = {
  dynamicHeroTexts: ["love to live", "enjoy living"],
  staticHeroTexts: "Discover a place you'll",
  heroTitleVideo: "https://firebasestorage.googleapis.com/v0/b/tibet-realty.appspot.com/o/home%2Fvideo1tibetrealty.mp4?alt=media&token=12816bb3-0f52-466e-96c3-125498769a3f",
  GeneralOverview: "Tibet Realty Co. and its experienced experts are dedicated to making sure you get a head start on your goal of selling or purchasing your dream home.\n\n" +

    "With no registration fees, unnecessary levies, and hidden fees, Tibet Realty Co. provides you with detailed appraisals, walk-in inspections, friendly service, and quality guidance all free of charge. We have a network of experienced Agents in unique locations and tailored property auctions to fill your specific needs.\n\n" +

    "The only standard that guides ours is yours.",

  GeneralOverviewPicture: "https://firebasestorage.googleapis.com/v0/b/tibet-realty.appspot.com/o/homeSettings%2FGeneralOverviewPicture%2Fk3.jpg?alt=media&token=239a871a-2ece-4775-9aae-44e4fca3a5a5",
  PropertySaleOptions: [
    {
      "offers": "2471",
      "name": "Nicosia",
      "description": "Prices from £5,490,000.00",
      "photo": "https://firebasestorage.googleapis.com/v0/b/tibet-realty.appspot.com/o/homeSettings%2Fcities%2Fnicosia.jpg?alt=media&token=8bfdf081-f2dd-481c-8684-4ea76e4cce39"
    },
    {
      "offers": "364",
      "name": "Kyrenia",
      "description": "Prices from £3,371,000.00",
      "photo": "https://firebasestorage.googleapis.com/v0/b/tibet-realty.appspot.com/o/homeSettings%2Fcities%2Fkyrenia.jpg?alt=media&token=d861ca2f-34c4-42cd-8217-129782766093"
    },
    {
      "offers": "14",
      "name": "Lefke",
      "description": "Prices from £215,000.00",
      "photo": "https://firebasestorage.googleapis.com/v0/b/tibet-realty.appspot.com/o/homeSettings%2Fcities%2Flefke.jpg?alt=media&token=13f87d20-94ec-4e68-9586-05b7220aceca"
    },
    {
      "offers": "6",
      "name": "Famagusta",
      "description": "Prices from £53,652.00",
      "photo": "https://firebasestorage.googleapis.com/v0/b/tibet-realty.appspot.com/o/homeSettings%2Fcities%2Ffamagusta.png?alt=media&token=1b6afb7a-5049-4232-97a6-8cb58a8d12f0"
    },

  ],
  PropertyRentOptions: [
    {
      "offers": "521",
      "name": "Kyrenia",
      "description": "Prices from £3,371,000.00",
      "photo": "https://firebasestorage.googleapis.com/v0/b/tibet-realty.appspot.com/o/homeSettings%2Fcities%2Fkyrenia.jpg?alt=media&token=d861ca2f-34c4-42cd-8217-129782766093"

    },
    {
      "offers": "256",
      "name": "Nicosia",
      "description": "Prices from £5,490,000.00",
      "photo": "https://firebasestorage.googleapis.com/v0/b/tibet-realty.appspot.com/o/homeSettings%2Fcities%2Fnicosia.jpg?alt=media&token=8bfdf081-f2dd-481c-8684-4ea76e4cce39"

    },
    {
      "offers": "68",
      "name": "Famagusta",
      "description": "Prices from £53,652.00",
      "photo": "https://firebasestorage.googleapis.com/v0/b/tibet-realty.appspot.com/o/homeSettings%2Fcities%2Ffamagusta.png?alt=media&token=1b6afb7a-5049-4232-97a6-8cb58a8d12f0"

    },
    {
      "offers": "24",
      "name": "Lefke",
      "description": "Prices from £215,000.00",
      "photo": "https://firebasestorage.googleapis.com/v0/b/tibet-realty.appspot.com/o/homeSettings%2Fcities%2Flefke.jpg?alt=media&token=13f87d20-94ec-4e68-9586-05b7220aceca"

    }
  ],
  EliteShowcaseTitle: "Find your dream home",
  ShowcaseThemeLine: "An exploration of creativity, beauty, and faith.",

};
export const privacyPolicySections = [
  {
    id: 'introduction',
    title: 'Introduction',
    content: [
      'Thanks for using our products and services ("Services"). The Services are provided by Pixeel Ltd. ("Space"), located at 153 Williamson Plaza, Maggieberg, MT 09514, England, United Kingdom.',
      'By using our Services, you are agreeing to these terms. Please read them carefully.',
      'Our Services are very diverse, so sometimes additional terms or product requirements (including age requirements) may apply. Additional terms will be available with the relevant Services, and those additional terms become part of your agreement with us if you use those Services.'
    ]
  },
  {
    id: 'using-our-services',
    title: 'Using our services',
    content: [
      'You must follow any policies made available to you within the Services.',
      'Don\'t misuse our Services. For example, don\'t interfere with our Services or try to access them using a method other than the interface and the instructions that we provide. You may use our Services only as permitted by law, including applicable export and re-export control laws and regulations. We may suspend or stop providing our Services to you if you do not comply with our terms or policies or if we are investigating suspected misconduct.',
      'Using our Services does not give you ownership of any intellectual property rights in our Services or the content you access. You may not use content from our Services unless you obtain permission from its owner or are otherwise permitted by law. These terms do not grant you the right to use any branding or logos used in our Services. Don\'t remove, obscure, or alter any legal notices displayed in or along with our Services.'
    ]
  },
  {
    id: 'privacy-copyright',
    title: 'Privacy and copyright protection',
    content: [
      'Space\'s privacy policies explain how we treat your personal data and protect your privacy when you use our Services. By using our Services, you agree that Space can use such data in accordance with our privacy policies.',
      'We respond to notices of alleged copyright infringement and terminate accounts of repeat infringers according to the process set out in the U.S. Digital Millennium Copyright Act.',
      'We provide information to help copyright holders manage their intellectual property online. If you think somebody is violating your copyrights and want to notify us, you can find information about submitting notices and Space\'s policy about responding to notices in our Help Center.'
    ]
  },
  {
    id: 'your-content',
    title: 'Your content in our services',
    content: [
      'Some of our Services allow you to upload, submit, store, send or receive content. You retain ownership of any intellectual property rights that you hold in that content. In short, what belongs to you stays yours.',
      'When you upload, submit, store, send or receive content to or through our Services, you give Space (and those we work with) a worldwide license to use, host, store, reproduce, modify, create derivative works (such as those resulting from translations, adaptations or other changes we make so that your content works better with our Services), communicate, publish, publicly perform, publicly display and distribute such content. The rights you grant in this license are for the limited purpose of operating, promoting, and improving our Services, and to develop new ones. This license continues even if you stop using our Services (for example, for a business listing you have added to Space Maps). Some Services may offer you ways to access and remove content that has been provided to that Service. Also, in some of our Services, there are terms or settings that narrow the scope of our use of the content submitted in those Services. Make sure you have the necessary rights to grant us this license for any content that you submit to our Services.'
    ]
  }
];

const facebook:string='https://www.facebook.com/tibetrealtycocyprus';
const instagram:string='https://www.instagram.com/tibetrealtycocyprus?igsh=ZnVrd2JydmVqc3c3&utm_source=qr"';
const tiktok:string='https://www.tiktok.com/@tibetrealtycocyprus?';
const email:string='info@tibetrealtyco.com';
const youtube:string='https://youtube.com/@tibetrealtyco?si=TZSYLI2X4tJLLF-N';
