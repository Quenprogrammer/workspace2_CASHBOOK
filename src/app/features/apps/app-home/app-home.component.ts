import { Component} from '@angular/core';
import {DatePipe, } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {path, pathMsword} from '../../../core/system/variables/globalVariables';
import {TruncateTextPipe} from '../../../shared/truncate-text-pipe/truncate-text.pipe';
import {RouterLink} from '@angular/router';
import { email, logo} from '../../data/companyInformation';
import {TextComponent} from '../../../core/components/text/text.component';


@Component({
  selector: 'app-app-home',
  standalone: true,
  imports: [
    FormsModule,
    TruncateTextPipe,
    RouterLink,
    TextComponent
  ],
  templateUrl: './app-home.component.html',
  styleUrl: './app-home.component.css',
  providers: [DatePipe]
})
export class AppHomeComponent {
  text:string='';
  payments = [
    {
      name: "Alipay",
      sn: "1",
      link: "https://www.alipay.com",
      image: path + "alipay.png"
    },
    {
      name: "Amazon Pay",
      sn: "2",
      link: "https://pay.amazon.com",
      image: path + "AmazonPay.png"
    },
    {
      name: "Apple Pay",
      sn: "3",
      link: "https://www.apple.com/apple-pay/",
      image: path + "ApplePay.jpg"
    },
    {
      name: "Fortmatic",
      sn: "16",
      link: "https://fortmatic.com",
      image: path + "Fortmatic.png"
    },
    {
      name: "Google Pay",
      sn: "17",
      link: "https://pay.google.com",
      image: path + "googlepay.png"
    },
    {
      name: "PayPal",
      sn: "30",
      link: "https://www.paypal.com",
      image: path + "PayPal.png"
    },
    {
      name: "Square",
      sn: "31",
      link: "https://squareup.com",
      image: path + "Square.png"
    },
    {
      name: "Stripe",
      sn: "32",
      link: "https://stripe.com",
      image: path + "Stripe.png"
    },
    {
      name: "Venmo",
      sn: "38",
      link: "https://www.venmo.com",
      image: path + "Venmo.jpg"
    },
    {
      name: "WhatsApp Pay",
      sn: "39",
      link: "https://www.whatsapp.com/payments",
      image: path + "Whatsapp.png"
    },
  ];
  crypto = [
    {
      name: "Binance",
      sn: "4",
      link: "https://www.binance.com",
      image: path + "binance.png"
    },
    {
      name: "Binance Chain Wallet",
      sn: "5",
      link: "https://www.binance.org/en",
      image: path + "BinanceChainWallet.png"
    },
    {
      name: "BitPay",
      sn: "6",
      link: "https://bitpay.com/",
      image: path + "bitpay.png"
    },
    {
      name: "Blockchain Wallet",
      sn: "7",
      link: "https://www.blockchain.com",
      image: path + "BlockchainWallet.png"
    },
    {
      name: "Coinbase",
      sn: "8",
      link: "https://www.coinbase.com",
      image: path + "coinbase.png"
    },
    {
      name: "CoinGecko",
      sn: "9",
      link: "https://www.coingecko.com",
      image: path + "coingecko.png"
    },
    {
      name: "CoinMarketCap",
      sn: "10",
      link: "https://coinmarketcap.com",
      image: path + "coinmarketcap.png"
    },
    {
      name: "Crypto.com",
      sn: "11",
      link: "https://crypto.com",
      image: path + "crypto.com.png"
    },
    {
      name: "Electrum",
      sn: "12",
      link: "https://electrum.org",
      image: path + "electrum.png"
    },
    {
      name: "Exodus Wallet",
      sn: "13",
      link: "https://www.exodus.com",
      image: path + "ExodusWallet.jpg"
    },
    {
      name: "Klarna",
      sn: "20",
      link: "https://www.klarna.com",
      image: path + "Klarna.png"
    },
    {
      name: "KuCoin",
      sn: "22",
      link: "https://www.kucoin.com",
      image: path + "kucoin.png"
    },
    {
      name: "Ledger Live",
      sn: "23",
      link: "https://www.ledger.com/ledger-live",
      image: path + "LedgerLive.png"
    },
    {
      name: "MetaMask",
      sn: "24",
      link: "https://metamask.io",
      image: path + "MetaMask.png"
    },
    {
      name: "MyEtherWallet",
      sn: "25",
      link: "https://www.myetherwallet.com",
      image: path + "MyEtherWallet.png"
    },
    {
      name: "OKX",
      sn: "26",
      link: "https://www.okx.com",
      image: path + "okx.png"
    },
    {
      name: "Payoneer",
      sn: "29",
      link: "https://www.payoneer.com",
      image: path + "Payoneer.jpg"
    },
    {
      name: "TradingView",
      sn: "33",
      link: "https://www.tradingview.com",
      image: path + "tradingView.png"
    },
    {
      name: "Trezor Wallet",
      sn: "34",
      link: "https://trezor.io",
      image: path + "TrezorWallet.png"
    },
    {
      name: "TrustVault",
      sn: "35",
      link: "https://www.trustvault.com",
      image: path + "trustvolt.png"
    },
    {
      name: "Zengo",
      sn: "40",
      link: "https://zengo.com",
      image: path + "zengo.png"
    },

  ];
  commercialBanks = [
    {
      name: "Fidelity",
      sn: "14",
      link: "https://www.fidelity.com",
      image: path + "fidelity.png"
    },
    {
      name: "First Bank",
      sn: "15",
      link: "https://www.firstbanknigeria.com",
      image: path + "firstBank.png"
    },
    {
      name: "GT Bank",
      sn: "18",
      link: "https://www.gtbank.com",
      image: path + "gtbank.png"
    },
    {
      name: "Jaiz Bank",
      sn: "19",
      link: "https://jaizbankplc.com",
      image: path + "jaizbank.png"
    },
    {
      name: "Kuda",
      sn: "21",
      link: "https://www.kuda.com",
      image: path + "kuda.jpg"
    },
    {
      name: "Opay",
      sn: "27",
      link: "https://www.opayweb.com",
      image: path + "opay.png"
    },
    {
      name: "Palmpay",
      sn: "28",
      link: "https://www.palmpay.com",
      image: path + "palmpay.jpg"
    },
    {
      name: "Unity Bank",
      sn: "37",
      link: "https://www.unitybankng.com",
      image: path + "unitybank.png"
    },
    {
      name: "Zenith Bank",
      sn: "41",
      link: "https://www.zenithbank.com",
      image: path + "zenithBank.png"
    },
    // Additional Banks
    {
      name: "Access Bank",
      sn: "42",
      link: "https://www.accessbankplc.com",
      image: path + "accessBank.png"
    },
    {
      name: "UBA",
      sn: "43",
      link: "https://www.ubagroup.com",
      image: path + "uba.png"
    },
    {
      name: "Sterling Bank",
      sn: "44",
      link: "https://www.sterlingbankng.com",
      image: path + "sterlingBank.png"
    },
    {
      name: "EcoBank",
      sn: "45",
      link: "https://www.ecobank.com",
      image: path + "ecobank.png"
    },



  ];
  socialMedia = [
    { name: "Facebook", sn: "1", link: "https://www.facebook.com", image: path + 'facebook-svgrepo-com.svg' }, { name: "WhatsApp", sn: "3", link: "https://www.whatsapp.com", image: path + 'whatsapp-128-svgrepo-com.svg' },
    { name: "Instagram", sn: "4", link: "https://www.instagram.com", image: path + 'instagram-svgrepo-com.svg' },
    { name: "Twitter", sn: "5", link: "https://www.twitter.com", image: path + 'twitter-svgrepo-com.svg' },
    { name: "TikTok", sn: "6", link: "https://www.tiktok.com", image: path + 'tiktok-svgrepo-com.svg' },
    { name: "Snapchat", sn: "7", link: "https://www.snapchat.com", image: path + 'snapchat-square-svgrepo-com.svg' },
    { name: "LinkedIn", sn: "8", link: "https://www.linkedin.com", image: path + 'linkedin-svgrepo-com.svg' },
    { name: "Discord", sn: "9", link: "https://www.discord.com", image: path + 'discord-svgrepo-com.svg' },
    { name: "GitHub", sn: "10", link: "https://www.github.com", image: path + 'github-142-svgrepo-com.svg' }

  ];
  microsoftPackage=[
    { name: "Word", sn: "1", link: "https://www.office.com/launch/word", image: pathMsword + 'word.jpeg' },
    { name: "Excel", sn: "2", link: "https://www.office.com/launch/excel", image: pathMsword + 'excel.jpeg' },
    { name: "PowerPoint", sn: "3", link: "https://www.office.com/launch/powerpoint", image: pathMsword + 'powerpoint.jpeg' },
    { name: "OneNote", sn: "4", link: "https://www.office.com/launch/onenote", image: pathMsword + '' },
    { name: "Outlook", sn: "5", link: "https://www.office.com/launch/outlook", image: pathMsword + '' },
    { name: "Teams", sn: "6", link: "https://teams.microsoft.com", image: pathMsword + 'teams.jpeg' },
    { name: "Forms", sn: "7", link: "https://forms.office.com", image: pathMsword + '' },
    { name: "OneDrive", sn: "8", link: "https://www.office.com/launch/onedrive", image: pathMsword + 'onedrive.jpeg' },
    { name: "Stream", sn: "10", link: "https://web.microsoftstream.com", image: pathMsword + '' },
    { name: "Planner", sn: "12", link: "https://tasks.office.com", image: pathMsword + 'planner.png' },
    { name: "To Do", sn: "13", link: "https://to-do.office.com", image: pathMsword + 'todo.png' },
    { name: "Project", sn: "14", link: "https://project.microsoft.com", image: pathMsword + '' },
    { name: "Bookings", sn: "16", link: "https://book.ms", image: pathMsword + 'bookings.png' },
    { name: "Access (Online)", sn: "20", link: "https://www.office.com/launch/access", image: pathMsword + 'access.jpeg' }

  ];
  googleProducts=[
    { name: "Google Docs", sn: "1", link: "https://docs.google.com", image: path + '' },
    { name: "Google Sheets", sn: "2", link: "https://sheets.google.com", image: path + '' },
    { name: "Google Slides", sn: "3", link: "https://slides.google.com", image: path + '' },
    { name: "Google Forms", sn: "4", link: "https://forms.google.com", image: path + '' },
    { name: "Google Drive", sn: "5", link: "https://drive.google.com", image:   'google/gDrive.svg' },
    { name: "Google Calendar", sn: "6", link: "https://calendar.google.com", image: path + '' },
    { name: "Google Meet", sn: "7", link: "https://meet.google.com", image:   'google/Gmeet.svg' },
    { name: "Google Classroom", sn: "8", link: "https://classroom.google.com", image: path + '' },
    { name: "Google Jamboard", sn: "9", link: "https://jamboard.google.com", image: path + '' },
    { name: "Google Keep", sn: "10", link: "https://keep.google.com", image: path + '' },
    { name: "Gmail", sn: "11", link: "https://mail.google.com", image: path + '' },
    { name: "Google Sites", sn: "12", link: "https://sites.google.com", image:   'google/googleHead.svg' },
    { name: "Google Tasks", sn: "13", link: "https://tasks.google.com", image: path + '' },
    { name: "Google Contacts", sn: "14", link: "https://contacts.google.com", image: path + '' },
    { name: "Google Translate", sn: "15", link: "https://translate.google.com", image: path + '' },
    { name: "Google Scholar", sn: "16", link: "https://scholar.google.com", image: path + '' },
    { name: "Google News", sn: "17", link: "https://news.google.com", image: path + '' },
    { name: "Google Maps", sn: "18", link: "https://maps.google.com", image:   'google/Gmap.svg' },
    { name: "Google Photos", sn: "19", link: "https://photos.google.com", image: path + '' },
    { name: "Google Analytics", sn: "20", link: "https://analytics.google.com", image: path + '' }

  ]
  constructor() {}

  images = [
    { id: 1, src: 'apps/icons/paymentMethod.svg', alt: 'Image 1', title: 'Payment Methods' },
    { id: 2, src: 'apps/icons/cryptoCurrency.svg', alt: 'Image 2', title: 'CryptoCurrency' },
    { id: 3, src: 'apps/icons/bank.svg', alt: 'Image 3', title: 'Commercial Banks' },
    { id: 4, src: 'apps/icons/calender.svg', alt: 'Image 4', title: 'Calender' },
    { id: 5, src: 'apps/icons/drive.svg', alt: 'Image 4', title: 'Drive' },

  ];
  inBuild=[
    {name:'Notepad', link:'/notepad', logo:'apps/icons/notepad.svg'},
    {name:'Calculator', link:'/calculator', logo:'apps/icons/calculator.svg'},
    {name:'Google', link:'/google', logo:'apps/icons/calculator.svg'},
    {name:' ', link:'/microsoft', logo:'apps/icons/calculator.svg'},
  ];

  isModalOpen = false;
  modalTitle = '';
  modalContent: { name: string, sn:string, link:string, image:string  }[] = [];

  openModal(id: number) {
    this.isModalOpen = true;
    switch (id) {
      case 1:
        this.modalTitle = 'Payment Wallets';
        this.modalContent = [
          {
            name: "Alipay",
            sn: "1",
            link: "https://www.alipay.com",
            image: path + "alipay.png"
          },
          {
            name: "Amazon Pay",
            sn: "2",
            link: "https://pay.amazon.com",
            image: path + "AmazonPay.png"
          },
          {
            name: "Apple Pay",
            sn: "3",
            link: "https://www.apple.com/apple-pay/",
            image: path + "ApplePay.jpg"
          },
          {
            name: "Fortmatic",
            sn: "16",
            link: "https://fortmatic.com",
            image: path + "Fortmatic.png"
          },
          {
            name: "Google Pay",
            sn: "17",
            link: "https://pay.google.com",
            image: path + "googlepay.png"
          },
          {
            name: "PayPal",
            sn: "30",
            link: "https://www.paypal.com",
            image: path + "PayPal.png"
          },
          {
            name: "Square",
            sn: "31",
            link: "https://squareup.com",
            image: path + "Square.png"
          },
          {
            name: "Stripe",
            sn: "32",
            link: "https://stripe.com",
            image: path + "Stripe.png"
          },
          {
            name: "Venmo",
            sn: "38",
            link: "https://www.venmo.com",
            image: path + "Venmo.jpg"
          },
          {
            name: "WhatsApp Pay",
            sn: "39",
            link: "https://www.whatsapp.com/payments",
            image: path + "Whatsapp.png"
          },
        ];
        break;
      case 2:
        this.modalTitle = 'Crypto Currency';
        this.modalContent = [
          {
            name: "Binance",
            sn: "4",
            link: "https://www.binance.com",
            image: path + "binance.png"
          },
          {
            name: "Binance Chain Wallet",
            sn: "5",
            link: "https://www.binance.org/en",
            image: path + "BinanceChainWallet.png"
          },
          {
            name: "BitPay",
            sn: "6",
            link: "https://bitpay.com/",
            image: path + "bitpay.png"
          },
          {
            name: "Blockchain Wallet",
            sn: "7",
            link: "https://www.blockchain.com",
            image: path + "BlockchainWallet.png"
          },
          {
            name: "Coinbase",
            sn: "8",
            link: "https://www.coinbase.com",
            image: path + "coinbase.png"
          },
          {
            name: "CoinGecko",
            sn: "9",
            link: "https://www.coingecko.com",
            image: path + "coingecko.png"
          },
          {
            name: "CoinMarketCap",
            sn: "10",
            link: "https://coinmarketcap.com",
            image: path + "coinmarketcap.png"
          },
          {
            name: "Crypto.com",
            sn: "11",
            link: "https://crypto.com",
            image: path + "crypto.com.png"
          },
          {
            name: "Electrum",
            sn: "12",
            link: "https://electrum.org",
            image: path + "electrum.png"
          },
          {
            name: "Exodus Wallet",
            sn: "13",
            link: "https://www.exodus.com",
            image: path + "ExodusWallet.jpg"
          },
          {
            name: "Klarna",
            sn: "20",
            link: "https://www.klarna.com",
            image: path + "Klarna.png"
          },
          {
            name: "KuCoin",
            sn: "22",
            link: "https://www.kucoin.com",
            image: path + "kucoin.png"
          },
          {
            name: "Ledger Live",
            sn: "23",
            link: "https://www.ledger.com/ledger-live",
            image: path + "LedgerLive.png"
          },
          {
            name: "MetaMask",
            sn: "24",
            link: "https://metamask.io",
            image: path + "MetaMask.png"
          },
          {
            name: "MyEtherWallet",
            sn: "25",
            link: "https://www.myetherwallet.com",
            image: path + "MyEtherWallet.png"
          },
          {
            name: "OKX",
            sn: "26",
            link: "https://www.okx.com",
            image: path + "okx.png"
          },
          {
            name: "Payoneer",
            sn: "29",
            link: "https://www.payoneer.com",
            image: path + "Payoneer.jpg"
          },
          {
            name: "TradingView",
            sn: "33",
            link: "https://www.tradingview.com",
            image: path + "tradingView.png"
          },
          {
            name: "Trezor Wallet",
            sn: "34",
            link: "https://trezor.io",
            image: path + "TrezorWallet.png"
          },
          {
            name: "TrustVault",
            sn: "35",
            link: "https://www.trustvault.com",
            image: path + "trustvolt.png"
          },
          {
            name: "Zengo",
            sn: "40",
            link: "https://zengo.com",
            image: path + "zengo.png"
          },

        ];
        break;
      case 3:
        this.modalTitle = 'Commercial Banks';
        this.modalContent = [
          {
            name: "Fidelity",
            sn: "14",
            link: "https://www.fidelity.com",
            image: path + "fidelity.png"
          },
          {
            name: "First Bank",
            sn: "15",
            link: "https://www.firstbanknigeria.com",
            image: path + "firstBank.png"
          },
          {
            name: "GT Bank",
            sn: "18",
            link: "https://www.gtbank.com",
            image: path + "gtbank.png"
          },
          {
            name: "Jaiz Bank",
            sn: "19",
            link: "https://jaizbankplc.com",
            image: path + "jaizbank.png"
          },
          {
            name: "Kuda",
            sn: "21",
            link: "https://www.kuda.com",
            image: path + "kuda.jpg"
          },
          {
            name: "Opay",
            sn: "27",
            link: "https://www.opayweb.com",
            image: path + "opay.png"
          },
          {
            name: "Palmpay",
            sn: "28",
            link: "https://www.palmpay.com",
            image: path + "palmpay.jpg"
          },
          {
            name: "Unity Bank",
            sn: "37",
            link: "https://www.unitybankng.com",
            image: path + "unitybank.png"
          },
          {
            name: "Zenith Bank",
            sn: "41",
            link: "https://www.zenithbank.com",
            image: path + "zenithBank.png"
          },
          // Additional Banks
          {
            name: "Access Bank",
            sn: "42",
            link: "https://www.accessbankplc.com",
            image: path + "accessBank.png"
          },
          {
            name: "UBA",
            sn: "43",
            link: "https://www.ubagroup.com",
            image: path + "uba.png"
          },
          {
            name: "Sterling Bank",
            sn: "44",
            link: "https://www.sterlingbankng.com",
            image: path + "sterlingBank.png"
          },
          {
            name: "EcoBank",
            sn: "45",
            link: "https://www.ecobank.com",
            image: path + "ecobank.png"
          },



        ];

        break;
      case 4:
        this.modalTitle = 'Social media';
        this.modalContent = [
          { name: "Facebook", sn: "1", link: "https://www.facebook.com", image: path + 'facebook-svgrepo-com.svg' }, { name: "WhatsApp", sn: "3", link: "https://www.whatsapp.com", image: path + 'whatsapp-128-svgrepo-com.svg' },
          { name: "Instagram", sn: "4", link: "https://www.instagram.com", image: path + 'instagram-svgrepo-com.svg' },
          { name: "Twitter", sn: "5", link: "https://www.twitter.com", image: path + 'twitter-svgrepo-com.svg' },
          { name: "TikTok", sn: "6", link: "https://www.tiktok.com", image: path + 'tiktok-svgrepo-com.svg' },
          { name: "Snapchat", sn: "7", link: "https://www.snapchat.com", image: path + 'snapchat-square-svgrepo-com.svg' },
          { name: "LinkedIn", sn: "8", link: "https://www.linkedin.com", image: path + 'linkedin-svgrepo-com.svg' },
          { name: "Discord", sn: "9", link: "https://www.discord.com", image: path + 'discord-svgrepo-com.svg' },
          { name: "GitHub", sn: "10", link: "https://www.github.com", image: path + 'github-142-svgrepo-com.svg' }

        ];
        break;
      case 5:
        this.modalTitle = 'Modal 5 Title';
        this.modalContent = [

        ];
        break;
      default:
        break;
    }
  }

  closeModal() {
    this.isModalOpen = false;
  }

  protected readonly logo = logo;
  protected readonly email = email;
}
