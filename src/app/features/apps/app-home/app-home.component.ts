import {AfterViewInit, Component, ElementRef, inject, ViewChild} from '@angular/core';
import {DatePipe, NgForOf, NgIf} from '@angular/common';
import {StatsComponent} from './stats/stats.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {InvalidAccountComponent} from '../../../core/system/invalid-account/invalid-account.component';
import {FormsModule} from '@angular/forms';
import {path} from '../../../core/system/variables/globalVariables';
import {paymentChannels} from '../../../data/apps';
import {TruncateTextPipe} from '../../../shared/truncate-text-pipe/truncate-text.pipe';


@Component({
  selector: 'app-app-home',
  standalone: true,
  imports: [

    StatsComponent,

    FormsModule,
    NgIf,
    NgForOf,
    TruncateTextPipe
  ],
  templateUrl: './app-home.component.html',
  styleUrl: './app-home.component.css',
  providers: [DatePipe]
})
export class AppHomeComponent {

  constructor() {}

  images = [
    { id: 1, src: 'apps/alipay.png', alt: 'Image 1', title: 'Payment Methods' },
    { id: 2, src: 'apps/alipay.png', alt: 'Image 2', title: 'CryptoCurrency' },
    { id: 3, src: 'apps/alipay.png', alt: 'Image 3', title: 'Commercial Banks' },
    { id: 4, src: 'apps/alipay.png', alt: 'Image 4', title: 'Modal 4' },
    { id: 5, src: 'apps/alipay.png', alt: 'Image 5', title: 'Modal 5' }
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
        this.modalTitle = 'Modal 4 Title';
        this.modalContent = [

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

  protected readonly paymentChannels = paymentChannels;
}
