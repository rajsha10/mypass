import { useEffect, useState } from 'react'
import { ethers } from 'ethers'

// Components
import Navigation from './components/Navigation'
import Sort from './components/Sort'
import Card from './components/Card'
import SeatChart from './components/SeatChart'

// ABIs
import MyPass from './abis/MyPassABI.json'

// Config
import config from './config.json'

function App() {

  const thumbImages = [
    '/images/fight.png',
    '/images/hack.png',
    '/images/hack.png',
    '/images/kkr.png',
    '/images/hack.png',
    '/images/hydrabad.png',
    '/images/hack.png',
    '/images/hack.png',
    '/images/luck.png',
    '/images/hack.png',
    '/images/robot.png',
    
  ];

  const [provider, setProvider] = useState(null)
  const [account, setAccount] = useState(null)

  const [myPass, setMyPass] = useState(null)
  const [occasions, setOccasions] = useState([])

  const [occasion, setOccasion] = useState({})
  const [toggle, setToggle] = useState(false)

  const loadBlockchainData = async () => {
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
      const account = ethers.utils.getAddress(accounts[0])
      setAccount(account)
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    setProvider(provider)

    const network = await provider.getNetwork()
    console.log('Chain ID:', network.chainId);
    const myPass = new ethers.Contract(config[network.chainId].MyPass.address, MyPass, provider)
    setMyPass(myPass)

    const totalOccasions = await myPass.totalOccasions()
    const occasions = []

    for (var i = 1; i <= totalOccasions; i++) {
      const occasion = await myPass.getOccasion(i)
      occasions.push(occasion)
    }

    setOccasions(occasions)

    window.ethereum.on('accountsChanged', async () => {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
      const account = ethers.utils.getAddress(accounts[0])
      setAccount(account)
    })
    console.log(account)
  }

  useEffect(  () =>  {
    loadBlockchainData()    
    console.log("Works")
  }, [])

  return (
    <div>
      <header>
        <Navigation account={account} setAccount={setAccount} />

        <h2 className="header__title">Book Your <strong>EVENT</strong> Tickets <strong>EASILY</strong> With <strong>MyPass</strong></h2>
        <p className="header_para">NFT directly to your wallet!</p>
      </header>

      <Sort />

      <div className='cards'>
        {occasions.map((occasion, index) => (
          <Card
            occasion={occasion}
            id={index + 1}
            myPass={myPass}
            provider={provider}
            account={account}
            toggle={toggle}
            setToggle={setToggle}
            setOccasion={setOccasion}
            key={index}
            src={thumbImages[index++]}
          />
        ))}
      </div>

      {toggle && (
        <SeatChart
          occasion={occasion}
          myPass={myPass}
          provider={provider}
          setToggle={setToggle}
        />
      )}
    </div>
  );
}

export default App;