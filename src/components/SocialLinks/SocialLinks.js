import React from 'react'
import "./SocialLinks.scss";
import SocialLink from './SocialLink/SocialLink';

const SocialLinks = () => {
    const Google = (
        <svg id="SvgLogoGoogle" viewBox="0 0 16 16">
          <path d="M15.636 6.545H8.182v3.091h4.291c-.4 1.964-2.073 3.091-4.291 3.091-2.618 0-4.727-2.109-4.727-4.727s2.109-4.727 4.727-4.727c1.127 0 2.145.4 2.945 1.055L13.455 2C12.037.764 10.219 0 8.182 0c-4.436 0-8 3.564-8 8s3.564 8 8 8c4 0 7.636-2.909 7.636-8 0-.473-.073-.982-.182-1.455z"/>
        </svg>        
    );
    
    const Facebook = (
        <svg id="SvgLogoFacebook" viewBox="0 0 16 16">
            <path d="M12.501 3.002h-1.999c-.302 0-.999.474-.999.999V6h2.998v3.002H9.499V16H6.497V9.001H3.499V6h2.998V4.001C6.497 1.797 8.459 0 10.562 0h1.939v3.002z"/>
        </svg>
    );

    const Twitter = (<svg id="SvgLogoTwitter" viewBox="0 0 16 16">
  <path d="M16 3.037a6.54 6.54 0 0 1-1.885.516 3.295 3.295 0 0 0 1.443-1.816 6.56 6.56 0 0 1-2.084.797 3.286 3.286 0 0 0-5.595 2.993 9.318 9.318 0 0 1-6.766-3.428 3.286 3.286 0 0 0 1.016 4.382A3.267 3.267 0 0 1 .64 6.07v.041a3.284 3.284 0 0 0 2.633 3.218c-.483.132-.99.151-1.482.057a3.288 3.288 0 0 0 3.067 2.28A6.594 6.594 0 0 1 0 13.027a9.291 9.291 0 0 0 5.032 1.472v.001c6.038 0 9.34-5.002 9.34-9.34 0-.142 0-.284-.009-.424A6.694 6.694 0 0 0 16 3.037z"/>
</svg>
    );
    
    return (
        <div class="SocialPanel">
            <span>or login with</span>
            <div className="SocialLinks">
            <SocialLink socialName="Google">{Google}</SocialLink>
            <SocialLink socialName="Facebook">{Facebook}</SocialLink>
            <SocialLink socialName="Twitter">{Twitter}</SocialLink>
            </div>
        </div>
  )
}

export default SocialLinks