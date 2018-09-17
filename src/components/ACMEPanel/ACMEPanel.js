import React from 'react'
import "./ACMEPanel.scss";
const LogoSVG = (
    <svg id="SvgLogoAcmeStack" className="ACMELogo" viewBox="0 0 44 44">
    <defs>
        <linearGradient id="SvgLogoAcmeStackGradient" x1="6.725" x2="37.275" y1="37.279" y2="6.729" gradientUnits="userSpaceOnUse">
        <stop offset="0" stop-color="#7e24fa"/>
        <stop offset="1" stop-color="#caaef2"/>
        </linearGradient>
    </defs>
    <path fill="url(#SvgLogoAcmeStackGradient)" d="M44 22.007a2.928 2.928 0 0 0-1.477-2.56l-1.911-1.104 1.909-1.102c.926-.534 1.479-1.49 1.479-2.559s-.552-2.025-1.477-2.56L23.482 1.121a2.961 2.961 0 0 0-2.956-.001L1.478 12.117A2.926 2.926 0 0 0 0 14.677c0 1.069.552 2.026 1.478 2.56l1.91 1.103-1.911 1.103A2.923 2.923 0 0 0 0 22.001c0 1.068.552 2.025 1.478 2.56l1.91 1.102-1.91 1.103A2.929 2.929 0 0 0 0 29.326c0 1.069.552 2.026 1.478 2.56l19.05 10.994a2.953 2.953 0 0 0 2.954-.001L42.521 31.89A2.922 2.922 0 0 0 44 29.332a2.928 2.928 0 0 0-1.477-2.56l-1.911-1.104 1.909-1.102A2.925 2.925 0 0 0 44 22.007zM21.991 3.702L41.032 14.66 22.005 25.642 7.328 17.205a1.467 1.467 0 0 0-.456-.262l-3.904-2.244L21.991 3.702zm19.041 25.607L22.017 40.298 2.968 29.349l3.401-1.964 14.159 8.172a2.963 2.963 0 0 0 2.954-.001l14.156-8.171 3.394 1.924zm-19.015 3.665L7.329 24.53a1.488 1.488 0 0 0-.458-.263l-3.903-2.243L6.37 20.06l14.158 8.171a2.953 2.953 0 0 0 2.954-.001l14.156-8.171 3.393 1.925-19.014 10.99z"/>
</svg>
);

const ACMEPanel = () => {
  return (
    <div className="ACMEPanel">
        <h1>AcmeStack</h1>
        <div class="ACMELogoBox">
            {LogoSVG}
        </div>
    </div>
  )
}

export default ACMEPanel
