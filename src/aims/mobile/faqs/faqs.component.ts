import {Component, Pipe, PipeTransform} from '@angular/core';
import {
  NgbAccordionBody,
  NgbAccordionButton, NgbAccordionCollapse,
  NgbAccordionDirective,
  NgbAccordionHeader,
  NgbAccordionItem
} from "@ng-bootstrap/ng-bootstrap";

interface FAQ{

  question: string;
  answer: string;
}
@Pipe({standalone: true, name: 'replaceLineBreaks'})
 class ReplaceLineBreaks implements PipeTransform {
  transform(value: string): string {
    return value.replace(/\n/g, '<br/>');
  }
}
@Component({
  selector: 'tbr-faqs',
  standalone: true,
  imports: [
    NgbAccordionDirective,
    NgbAccordionItem,
    NgbAccordionHeader,
    NgbAccordionButton,
    NgbAccordionCollapse,
    NgbAccordionBody,
    ReplaceLineBreaks
  ],
  templateUrl: './faqs.component.html',
  styleUrl: './faqs.component.scss'
})
export class FAQsComponent {

  qas:FAQ[] = [
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
      question:"What is important when buying a property in Cyprus?",
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
  ]

}
