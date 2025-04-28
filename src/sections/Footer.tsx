"use client"

import React from 'react';
import styled, { keyframes } from 'styled-components';

// Keyframe for fade-in effect
const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

// Keyframe for bouncing effect on icons
const bounce = keyframes`
  0% {
    transform: translateY(0);
  }
  30% {
    transform: translateY(-10px);
  }
  50% {
    transform: translateY(0);
  }
  70% {
    transform: translateY(-5px);
  }
  100% {
    transform: translateY(0);
  }
`;

const FooterContainer = styled.footer`
  background-color:rgba(10, 8, 38, 0.81);
  color: #ecf0f1;
  padding: 20px 0;
  text-align: center;
  animation: ${fadeIn} 1s ease-in-out;
  width: 100%;
  height: auto;
  overflow:hidden;

  @media (max-width: 768px) {
    padding: 15px 0;
  }

  @media (max-width: 480px) {
    padding: 10px 0;
  }
`;

const SocialIconsContainer = styled.div`
  margin: 20px 0;
  display: flex;
  justify-content: center;
  gap: 30px;

  @media (max-width: 768px) {
    gap: 15px;
  }

  @media (max-width: 480px) {
    gap: 10px;
    flex-wrap: wrap;
  }
`;

const Icon = styled.a`
  color: #ecf0f1;
  font-size: 24px;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #3498db;
  }

  &:hover svg {
    animation: ${bounce} 1s;
  }

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

const FooterText = styled.p`
  font-size: 14px;
  margin: 10px 0;

  @media (max-width: 768px) {
    font-size: 12px;
  }

  @media (max-width: 480px) {
    font-size: 10px;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>&copy; 2025 My Awesome Website</FooterText>
      <SocialIconsContainer>
        <Icon href="https://www.facebook.com" target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
            <path d="M9 8H7v4h2v12h4V12h3.12l.38-4H13V6c0-.78.21-1.45 1.45-1.45h2.6V0h-3c-3.19 0-5.45 1.86-5.45 5.24v3.76z" />
          </svg>
        </Icon>
        <Icon href="https://www.twitter.com" target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
            <path d="M23 3a10.79 10.79 0 0 1-3.1.85 4.82 4.82 0 0 0 2.1-2.66A9.76 9.76 0 0 1 19.13 3a4.79 4.79 0 0 0-8.18 4.34A13.55 13.55 0 0 1 1.67 2.87a4.77 4.77 0 0 0 1.48 6.35A4.69 4.69 0 0 1 2 8.78v.06a4.78 4.78 0 0 0 3.83 4.69 4.75 4.75 0 0 1-2.16.08 4.79 4.79 0 0 0 4.47 3.3A9.61 9.61 0 0 1 1 18.69a13.49 13.49 0 0 0 7.26 2.13c8.71 0 13.49-7.21 13.49-13.48 0-.2 0-.4-.01-.61A9.78 9.78 0 0 0 23 3z" />
          </svg>
        </Icon>
        <Icon href="https://www.linkedin.com" target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
            <path d="M22.23 0H1.77C.79 0 0 .79 0 1.77v20.46C0 23.21.79 24 1.77 24h20.46c.98 0 1.77-.79 1.77-1.77V1.77C24 .79 23.21 0 22.23 0zM7.09 20.45H3.56v-11.5h3.53v11.5zm-1.77-13.16c-1.13 0-2.06-.93-2.06-2.06 0-1.13.93-2.06 2.06-2.06 1.14 0 2.06.93 2.06 2.06 0 1.13-.92 2.06-2.06 2.06zm13.44 13.16h-3.53v-6.33c0-1.51-.03-3.46-2.1-3.46-2.1 0-2.42 1.64-2.42 3.33v6.46h-3.53v-11.5h3.39v1.56h.05c.47-.89 1.63-1.81 3.35-1.81 3.57 0 4.23 2.35 4.23 5.4v6.35z" />
          </svg>
        </Icon>
      </SocialIconsContainer>
    </FooterContainer>
  );
};

export default Footer;
