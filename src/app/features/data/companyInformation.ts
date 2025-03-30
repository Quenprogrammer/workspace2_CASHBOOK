import {path} from '../../core/system/variables/globalVariables';
export const companyName = "SAHIZ GROUP";
export const industry = "Technology";
export const address = " Danladi Nasidi Estate Mariri ";
export const LGA = "Kumbotso L.G.A";
export const country = "Nigeria";
export const founded = "2019";
export const headquarters = "Kano State, Kumbotso";
export const logo= "bg/logo.png";
export const stateLocated= "Kano State";
export const website = "https://www.techinnovations.com";
export const CEOName = "Abdullahi Sidi Jinjiri";
export const email = "info@techinnovations.com";
export const phone = "+9036014519";
export const socialAccount = [

  {name:'Discord', link:'',logo:'socialIcons/4.png'},
  {name:'Facebook', link:'',logo:'socialIcons/5.png'},
  {name:'GitHub', link:'',logo:'socialIcons/6.png'},


  {name:'Instagram', link:'',logo:'socialIcons/9.png'},
  {name:'LinkedIn', link:'',logo:'socialIcons/10.png'},
  {name:'Reddit', link:'',logo:'socialIcons/14.png'},
  {name:'Snapchat', link:'',logo:'socialIcons/15.png'},
  {name:'Telegram', link:'',logo:'socialIcons/16.png'},
  {name:'Tiktok', link:'',logo:'socialIcons/17.png'},
  {name:'Youtube', link:'',logo:'socialIcons/24.png'},
]
export const paymentMethods=[
  {name:'Instagram', logo:'',Details:{}},
  {name:'Instagram', logo:'',Details:{}},
  {name:'Instagram', logo:'',Details:{}},
]
export const companyPaymentChannels /*{name:string, sn:string, link:string, image:string }*/=[
  {
    name: "First Bank",
    acct: "Sahiz Group ",
    acctNO: "0000000000",
    image: path + "firstBank.png"
  },
  {
    name: "GT Bank",
    acct: "Sahiz Group ",
    acctNO: "0000000000",
    image: path + "gtbank.png"
  },
  {
    name: "Zenith Bank",
    acct: "Sahiz Group ",
    acctNO: "0000000000",
    image: path + "zenithBank.png"
  },

]
export const locationsWeWork=[
  {name:'Kano State', icon:''},
  {name:'Abuja', icon:''},
  {name:'Giedam', icon:''},
  {name:'Maiduguri State', icon:''},
  {name:'Jigawa State', icon:''},
  {name:'Lagos State', icon:''},
]
export const qualities=[
  {name:'Integrity', value:90},
  {name:'Sustainability', value:75},
  {name:'Client satisfaction', value:83},
  {name:'Excellence', value:80},
  {name:'Innovation', value:85},
  {name:'Trust', value:85},
]
export interface Statistic {
  value: number;
  label: string;
  animatedValue?: number; // Optional property for animated value
}
export let statistics: Statistic[] = [
  { value: 6, label: 'Programs' },
  { value: 1131, label: 'successfully jobs' },
  { value: +40, label: 'Staffs' },
  { value: 12, label: 'State of operation' },
  { value: +20, label: 'Fish Nursery' },
  { value: 800, label: 'Clients' },
  { value: 5, label: 'years of service' },
  { value: 3, label: 'Standard Cafteria' },


];
