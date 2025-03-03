import {crypto, path} from '../core/system/variables/globalVariables';



export const paymentChannels = [
  {
    name: "Alipay",
    sn: "1",
    link: "pending",
    image: path + "alipay.png"
  },
  {
    name: "Amazon Pay",
    sn: "2",
    link: "pending",
    image: path + "AmazonPay.png"
  },
  {
    name: "Apple Pay",
    sn: "3",
    link: "pending",
    image: path + "ApplePay.jpg"
  },
  {
    name: "Binance",
    sn: "4",
    link: "pending",
    image: path + "binance.png"
  },
  {
    name: "Binance Chain Wallet",
    sn: "5",
    link: "pending",
    image: path + "BinanceChainWallet.png"
  },
  {
    name: "Bitpay",
    sn: "6",
    link: "pending",
    image: path + "bitpay.png"
  },
  {
    name: "Blockchain Wallet",
    sn: "7",
    link: "pending",
    image: path + "BlockchainWallet.png"
  },
  {
    name: "Coinbase",
    sn: "8",
    link: "pending",
    image: path + "coinbase.png"
  },
  {
    name: "CoinGecko",
    sn: "9",
    link: "pending",
    image: path + "coingecko.png"
  },
  {
    name: "CoinMarketCap",
    sn: "10",
    link: "pending",
    image: path + "coinmarketcap.png"
  },
  {
    name: "(link unavailable)",
    sn: "11",
    link: "pending",
    image: path + "crypto.com.png"
  },
  {
    name: "Electrum",
    sn: "12",
    link: "pending",
    image: path + "electrum.png"
  },
  {
    name: "Exodus Wallet",
    sn: "13",
    link: "pending",
    image: path + "ExodusWallet.jpg"
  },
  {
    name: "Fidelity",
    sn: "14",
    link: "pending",
    image: path + "fedelity.png"
  },
  {
    name: "First Bank",
    sn: "15",
    link: "pending",
    image: path + "firstBank.png"
  },
  {
    name: "Fortmatic",
    sn: "16",
    link: "pending",
    image: path + "Fortmatic.png"
  },
  {
    name: "Google Pay",
    sn: "17",
    link: "pending",
    image: path + "googlepay.png"
  },
  {
    name: "GT Bank",
    sn: "18",
    link: "pending",
    image: path + "gtbank.png"
  },
  {
    name: "Jaiz Bank",
    sn: "19",
    link: "pending",
    image: path + "jaizbank.png"
  },
  {
    name: "Klarna",
    sn: "20",
    link: "pending",
    image: path + "Klarna.png"
  },
  {
    name: "Kuda",
    sn: "21",
    link: "pending",
    image: path + "kuda.jpg"
  },
  {
    name: "Kukoin",
    sn: "22",
    link: "pending",
    image: path + "kukoin.png"
  },
  {
    name: "Ledger Live",
    sn: "23",
    link: "pending",
    image: path + "LedgerLive.png"
  },
  {
    name: "MetaMask",
    sn: "24",
    link: "pending",
    image: path + "MetaMask.png"
  },
  {
    name: "MyEtherWallet",
    sn: "25",
    link: "pending",
    image: path + "MyEtherWallet.png"
  },
  {
    name: "OKX",
    sn: "26",
    link: "pending",
    image: path + "okx.png"
  },
  {
    name: "Opay",
    sn: "27",
    link: "pending",
    image: path + "opay.png"
  },
  {
    name: "Palmpay",
    sn: "28",
    link: "pending",
    image: path + "palmpay.jpg"
  },
  {
    name: "Payoneer",
    sn: "29",
    link: "pending",
    image: path + "Payoneer.jpg"
  },
  {
    name: "PayPal",
    sn: "30",
    link: "pending",
    image: path + "PayPal.png"
  },
  {
    name: "Square",
    sn: "31",
    link: "pending",
    image: path + "Square.png"
  },
  {
    name: "Stripe",
    sn: "32",
    link: "pending",
    image: path + "Stripe.png"},


{
  name: "TradingView",
    sn: "33",
  link: "pending",
  image: path + "tradingView.png"
},
{
  name: "Trezor Wallet",
    sn: "34",
  link: "pending",
  image: path + "TrezorWallet.png"
},
{
  name: "TrustVolt",
    sn: "35",
  link: "pending",
  image: path + "trustvolt.png"
},
{
  name: "Trust Wallet",
    sn: "36",
  link: "pending",
  image: path + "TrustWallet.jpg"
},
{
  name: "Unity Bank",
    sn: "37",
  link: "pending",
  image: path + "unitybank.png"
},
{
  name: "Venmo",
    sn: "38",
  link: "pending",
  image: path + "Venmo.jpg"
},
{
  name: "Whatsapp",
    sn: "39",
  link: "pending",
  image: path + "Whatsapp.png"
},
{
  name: "Zengo",
    sn: "40",
  link: "pending",
  image: path + "zengo.png"
},
{
  name: "Zenith Bank",
    sn: "41",
  link: "pending",
  image: path + "zenithBank.png"}
  ,{
    name: 'MetaMask',
    link: 'https://metamask.io',
    image: path + 'MetaMask.png',  // Replace with actual image URL or path
    category: 'crypto'
  },
  {
    name: 'Trust Wallet',
    link: 'https://trustcrypto.com',
    image:  path + 'TrustWallet.jpg',  // Replace with actual image URL or path
    category: 'crypto'
  },
  {
    name: 'Coinbase Wallet',
    link: 'https://www.coinbase.com/',
    image:  path + 'coinbase.png',  // Replace with actual image URL or path
    category: 'crypto'
  },
  {
    name: 'Exodus Wallet',
    link: 'https://www.exodus.com',
    image:  path + 'ExodusWallet.jpg',  // Replace with actual image URL or path
    category: 'crypto'
  },
  {
    name: 'Binance Chain Wallet',
    link: 'https://www.binance.org/en/crypto',
    image:  path + 'BinanceChainWallet.png',  // Replace with actual image URL or path
    category: 'crypto'
  },
  {
    name: 'MyEtherWallet',
    link: 'https://www.myethercrypto.com',
    image:  path + 'MyEtherWallet.png',  // Replace with actual image URL or path
    category: 'crypto'
  },
  {
    name: 'MetaMask Mobile',
    link: 'https://metamask.io/mobile',
    image:  path + 'MetaMask.png',  // Replace with actual image URL or path
    category: 'crypto'
  },
  {
    name: 'Fortmatic',
    link: 'https://fortmatic.com',
    image:  path + 'Fortmatic.png',  // Replace with actual image URL or path
    category: 'crypto'
  },
  {
    name: 'Ledger Live',
    link: 'https://www.ledger.com/ledger-live',
    image:  path + 'LedgerLive.png',  // Replace with actual image URL or path
    category: 'crypto'
  },
  {
    name: 'Trezor Wallet',
    link: 'https://trezor.io',
    image:  path + 'TrezorWallet.png',  // Replace with actual image URL or path
    category: 'crypto'
  },
  {
    name: 'Electrum Wallet',
    link: 'https://electrum.org',
    image:  path + 'electrum.png',  // Replace with actual image URL or path
    category: 'crypto'
  },
  {
    name: 'Blockchain Wallet',
    link: 'https://www.blockchain.com/crypto',
    image:  path + 'BlockchainWallet.png',  // Replace with actual image URL or path
    category: 'crypto'
  },
  {
    name: 'BitPay Wallet',
    link: 'https://www.bitpay.com/',
    image:  path + 'bitpay.png',  // Replace with actual image URL or path
    category: 'crypto'
  },
  {
    name: 'Zengo Wallet',
    link: 'https://www.zengo.com',
    image:  path + 'zengo.png',  // Replace with actual image URL or path
    category: 'crypto'
  },
  {
    name: 'TrustVault',
    link: 'https://www.trustvault.com',
    image:  path + 'trustvolt.png',  // Replace with actual image URL or path
    category: 'crypto'
  },{
    name: 'Binance',
    link: 'https://www.binance.com',
    image:  path + 'binance.png'
  },
  {
    name: 'Coinbase',
    link: 'https://www.coinbase.com/',
    image:  path + 'coinbase.png'
  },
  {
    name: 'CoinGecko',
    link: 'https://www.coingecko.com',
    image:  path + 'coingecko.png'
  },
  {
    name: 'CoinMarketCap',
    link: 'https://www.coinmarketcap.com',
    image:  path + 'coinmarketcap.png'
  },
  {
    name: 'Crypto.com',
    link: 'https://www.crypto.com',
    image:  path + 'crypto.com.png'
  },
  {
    name: 'KuCoin',
    link: 'https://www.kucoin.com',
    image:  path + 'kukoin.png'
  },
  {
    name: 'OKX',
    link: 'https://www.okx.com',
    image:  path + 'okx.png'
  },
  {
    name: 'TradingView',
    link: 'https://www.tradingview.com',
    image:  path + 'tradingView.png'
  }
,{
  name: "Alipay",
    sn: "1",
  link: "pending",
  image: path + "alipay.png"
},
{
  name: "Amazon Pay",
    sn: "2",
  link: "pending",
  image: path + "AmazonPay.png"
},
{
  name: "Apple Pay",
    sn: "3",
  link: "pending",
  image: path + "ApplePay.jpg"
},
{
  name: "Binance",
    sn: "4",
  link: "pending",
  image: path + "binance.png"
},
{
  name: "Binance Chain Wallet",
    sn: "5",
  link: "pending",
  image: path + "BinanceChainWallet.png"
},
{
  name: "Bitpay",
    sn: "6",
  link: "pending",
  image: path + "bitpay.png"
},
{
  name: "Blockchain Wallet",
    sn: "7",
  link: "pending",
  image: path + "BlockchainWallet.png"
},
{
  name: "Coinbase",
    sn: "8",
  link: "pending",
  image: path + "coinbase.png"
},
{
  name: "CoinGecko",
    sn: "9",
  link: "pending",
  image: path + "coingecko.png"
},
{
  name: "CoinMarketCap",
    sn: "10",
  link: "pending",
  image: path + "coinmarketcap.png"
},
{
  name: "(link unavailable)",
    sn: "11",
  link: "pending",
  image: path + "crypto.com.png"
},
{
  name: "Electrum",
    sn: "12",
  link: "pending",
  image: path + "electrum.png"
},
{
  name: "Exodus Wallet",
    sn: "13",
  link: "pending",
  image: path + "ExodusWallet.jpg"
},
{
  name: "Fidelity",
    sn: "14",
  link: "pending",
  image: path + "fedelity.png"
},

];
