import { ethers } from 'ethers';
import '../css/Navigation.css';

const Navigation = ({ account, setAccount }) => {
  const connectHandler = async () => {
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    const account = ethers.utils.getAddress(accounts[0]);
    setAccount(account);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <h1 className="brand-title">MY-PASS</h1>
        </div>
        
        <ul className="navbar-links">
          <li className="nav-item">
            <a href="/" className="nav-link">
              <span className="link-text">Concerts</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link">
              <span className="link-text">Sports</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link">
              <span className="link-text">Arts & Theater</span>
            </a>
          </li>
        </ul>

        <div className="navbar-connect">
          {account ? (
            <button type="button" className="connect-button">
              {account.slice(0, 6) + '...' + account.slice(38, 42)}
            </button>
          ) : (
            <button type="button" className="connect-button" onClick={connectHandler}>
              Connect
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;