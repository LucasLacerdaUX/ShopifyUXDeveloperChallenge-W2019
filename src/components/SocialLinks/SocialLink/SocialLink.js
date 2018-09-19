import React from "react";
import PropTypes from "prop-types";
import "./SocialLink.scss";

const SocialLink = props => {
  const { socialId, socialDesc, children } = props;
  return (
    <a
      id={socialId}
      className="SocialLink"
      href={`#${socialId}`}
      title={socialDesc}
    >
      {children}
    </a>
  );
};

SocialLink.propTypes = {
  socialId: PropTypes.string.isRequired,
  socialDesc: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired
};

export default SocialLink;
