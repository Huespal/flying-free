import Image from 'next/image';
import './styles.css';

const Footer = () => {

  const generateDeepLink = () => {
    /* userAgentData should not be used in Production. It is stil experimental:
    https://developer.mozilla.org/en-US/docs/Web/API/NavigatorUAData/mobile */
    // @ts-ignore
    const isMobile = navigator.userAgentData?.mobile;
    const username = 'daniel-san-luis';
    const prefix = isMobile ? 'linkedin://' : 'https://www.linkedin.com/';
    return `${prefix}in/${username}`;
  }

  return (
    <footer className="main-footer">
      <p>Have a nice trip!</p>

      <div className="main-footer-right">
        <a href={generateDeepLink()}>
          <Image src="/linkedin-logo.png" alt="Me :)" width="24" height="24" />
        </a>
        <p>{new Date().getFullYear()}. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;