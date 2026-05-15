import Journey from './journey.jsx';
import Particle from "../assets/particle.jsx";
import React from "react";
import { Col, Row } from "react-bootstrap";


import C from "../assets/TechIcons/C++.svg";
import Javascript from "../assets/TechIcons/Javascript.svg";
import Node from "../assets/TechIcons/Node.svg";
import ReactIcon from "../assets/TechIcons/React.svg";
import HaskellIcon from "../assets/TechIcons/Haskell.svg";

import Python from "../assets/TechIcons/Python.svg";
import Typescript from "../assets/TechIcons/Typescript.svg";
import Git from "../assets/TechIcons/Git.svg";
import Firebase from "../assets/TechIcons/Firebase.svg";
import Redis from "../assets/TechIcons/Redis.svg";
import Docker from "../assets/TechIcons/Docker.svg";
import Mongo from "../assets/TechIcons/Mongo.svg";
import SQL from "../assets/TechIcons/SQL.svg";
import Kubernates from "../assets/TechIcons/Kubernates.svg";

import Tailwind from "../assets/TechIcons/Tailwind.svg";

import Postman from "../assets/TechIcons/Postman.svg";
import AWS from "../assets/TechIcons/AWS.svg";
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { useState, useEffect, useRef } from "react";


/**
 * SLS-inspired Contact Footer
 * Full-width page footer — drop at the bottom of your layout.
 *
 * Same dependencies as ContactCard.jsx:
 *   Google Fonts:
 *     https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;700&family=Share+Tech+Mono&display=swap
 *   Tabler Icons:
 *     https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/tabler-icons.min.css
 */

const styles = `
  .sls-footer-wrap {
    --sls-navy:    #0b0d1a;
    --sls-mission: #0d1b2a;
    --sls-orange:  #e8600a;
    --sls-amber:   #f4a225;
    --sls-white:   #f0f4ff;
    --sls-bluegray:#8ba3c7;
    --sls-purple:  #2e1f5e;
    --sls-grid:    rgba(139, 163, 199, 0.12);
  }

  .sls-footer-wrap footer {
    width: 100%;
    background: var(--sls-mission);
    border-top: 2px solid var(--sls-orange);
    position: relative;
    overflow: hidden;
    font-family: 'Share Tech Mono', monospace;
  }

  .sls-footer-wrap footer::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(var(--sls-grid) 1px, transparent 1px),
      linear-gradient(90deg, var(--sls-grid) 1px, transparent 1px);
    background-size: 28px 28px;
    pointer-events: none;
  }

  .sls-footer-wrap .ft-accent-bar {
    height: 3px;
    background: linear-gradient(90deg, var(--sls-orange), rgba(244,162,37,0.3) 60%, transparent);
  }

  .sls-footer-wrap .ft-corner {
    position: absolute;
    width: 10px;
    height: 10px;
    border-color: var(--sls-orange);
    border-style: solid;
  }
  .sls-footer-wrap .ft-corner.tl { top: 8px; left: 8px;  border-width: 1.5px 0 0 1.5px; }
  .sls-footer-wrap .ft-corner.tr { top: 8px; right: 8px; border-width: 1.5px 1.5px 0 0; }

  .sls-footer-wrap .ft-inner {
    padding: 24px 32px 20px;
    position: relative;
  }

  .sls-footer-wrap .ft-grid {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: start;
    gap: 24px;
  }

  .sls-footer-wrap .ft-mission-label {
    font-family: 'Orbitron', sans-serif;
    font-size: 8px;
    letter-spacing: 3px;
    color: var(--sls-orange);
    margin: 0 0 6px;
    text-transform: uppercase;
  }

  .sls-footer-wrap .ft-name {
    font-family: 'Orbitron', sans-serif;
    font-size: 13px;
    font-weight: 700;
    color: var(--sls-white);
    margin: 0 0 2px;
    letter-spacing: 1px;
  }

  .sls-footer-wrap .ft-role {
    font-size: 10px;
    color: var(--sls-amber);
    letter-spacing: 1.5px;
    margin: 0;
  }

  .sls-footer-wrap .ft-insignia-wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
  }

  .sls-footer-wrap .ft-insignia {
    width: 36px;
    height: 36px;
  }

  .sls-footer-wrap .ft-status {
    font-size: 8px;
    color: #3eff8b;
    letter-spacing: 2px;
    display: flex;
    align-items: center;
    gap: 5px;
  }

  .sls-footer-wrap .ft-status-dot {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: #3eff8b;
    animation: ft-pulse 2.4s ease-in-out infinite;
  }

  @keyframes ft-pulse {
    0%, 100% { opacity: 1; }
    50%       { opacity: 0.3; }
  }

  .sls-footer-wrap .ft-links {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 4px;
  }

  .sls-footer-wrap .ft-link {
    display: flex;
    align-items: center;
    gap: 8px;
    text-decoration: none;
    padding: 5px 0;
  }

  .sls-footer-wrap .ft-link-text { text-align: right; }

  .sls-footer-wrap .ft-link-label {
    font-size: 8.5px;
    letter-spacing: 1.5px;
    color: var(--sls-bluegray);
    text-transform: uppercase;
    margin: 0 0 2px;
  }

  .sls-footer-wrap .ft-link-val {
    font-size: 11px;
    color: var(--sls-amber);
    margin: 0;
    transition: color 0.15s;
  }

  .sls-footer-wrap .ft-link i {
    font-size: 14px;
    color: rgba(139, 163, 199, 0.4);
    flex-shrink: 0;
    transition: color 0.15s;
  }

  .sls-footer-wrap .ft-link:hover .ft-link-val { color: var(--sls-white); }
  .sls-footer-wrap .ft-link:hover i            { color: var(--sls-orange); }

  .sls-footer-wrap .ft-divider {
    height: 1px;
    background: var(--sls-grid);
    margin: 16px 0 12px;
  }

  .sls-footer-wrap .ft-bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .sls-footer-wrap .ft-id,
  .sls-footer-wrap .ft-copy {
    font-size: 8px;
    letter-spacing: 1.5px;
    color: rgba(139, 163, 199, 0.3);
  }

  @media (max-width: 600px) {
    .sls-footer-wrap .ft-grid {
      grid-template-columns: 1fr;
      justify-items: center;
      text-align: center;
    }
    .sls-footer-wrap .ft-links { align-items: center; }
    .sls-footer-wrap .ft-link-text { text-align: center; }
    .sls-footer-wrap .ft-bottom { flex-direction: column; gap: 6px; }
  }
`;

function FooterInsignia() {
  return (
    <svg
      className="ft-insignia"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="20" cy="20" r="19" stroke="#e8600a" strokeWidth="1.5" />
      <circle cx="20" cy="20" r="13" stroke="rgba(139,163,199,0.3)" strokeWidth="0.75" />
      <ellipse cx="20" cy="20" rx="19" ry="7" stroke="#f4a225" strokeWidth="1" strokeDasharray="3 2" />
      <polygon points="20,7 22.5,16 20,14 17.5,16" fill="#f4a225" />
      <rect x="18.5" y="14" width="3" height="12" fill="#e8600a" />
      <rect x="14" y="22" width="5" height="2" rx="1" fill="rgba(139,163,199,0.6)" />
      <rect x="21" y="22" width="5" height="2" rx="1" fill="rgba(139,163,199,0.6)" />
    </svg>
  );
}

function FooterLink({ icon, label, value, href }) {
  const isEmail = href.startsWith("mailto");
  return (
    <a
      className="ft-link"
      href={href}
      target={isEmail ? undefined : "_blank"}
      rel="noopener noreferrer"
    >
      <div className="ft-link-text">
        <p className="ft-link-label">{label}</p>
        <p className="ft-link-val">{value}</p>
      </div>
      <i className={`ti ti-${icon}`} aria-hidden="true" />
    </a>
  );
}

export default function ContactFooter() {
  useEffect(() => {
    const id = "sls-footer-styles";
    if (!document.getElementById(id)) {
      const tag = document.createElement("style");
      tag.id = id;
      tag.textContent = styles;
      document.head.appendChild(tag);
    }
  }, []);

  return (
    <div className="sls-footer-wrap">
      <footer>
        <span className="ft-corner tl" />
        <span className="ft-corner tr" />
        <div className="ft-accent-bar" />

        <div className="ft-inner">
          <div className="ft-grid">

            <div>
              <p className="ft-mission-label">Portfolio · 2026</p>
              <p className="ft-name">Kevin Mendoza</p>
              <p className="ft-role">Software Engineer</p>
            </div>

            <div className="ft-insignia-wrap">
              <FooterInsignia />
              <div className="ft-status">
                <span className="ft-status-dot" />
                ONLINE
              </div>
            </div>

            <div className="ft-links">
              <FooterLink
                icon="mail"
                label="Comm channel"
                value="Mendo329@csusm.edu"
                href="mailto:Mendo329@csusm.edu"
              />
              <FooterLink
                icon="brand-github"
                label="Code repository"
                value="github.com/Icarus-150"
                href="https://www.github.com/Icarus-150"
              />
              <FooterLink
                icon="brand-linkedin"
                label="Professional network"
                value="linkedin.com/in/kevinmmendoza"
                href="https://www.linkedin.com/in/kevinmmendoza"
              />
            </div>

          </div>

          <div className="ft-divider" />

          <div className="ft-bottom">
            <span className="ft-id">ID-2026-KM-0150</span>
            <span className="ft-copy">Built by Kevin Mendoza &nbsp;·&nbsp; CSUSM</span>
          </div>
        </div>
      </footer>
    </div>
  );
}