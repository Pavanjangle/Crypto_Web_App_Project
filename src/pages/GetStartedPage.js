import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/GetStartedPage.css";

function GetStartedPage() {
  return (
    <div className="get-started-page">
      {/* Header */}
      <header className="gsp-header">
        <nav className="gsp-nav">
          <ul className="gsp-nav-list">
            {/* Features Dropdown */}
            <li className="gsp-nav-item gsp-dropdown">
              <NavLink to="#">Features</NavLink>
              <ul className="gsp-dropdown-menu">
                <li><NavLink to="#">Overview</NavLink></li>
                <li><NavLink to="#">Security</NavLink></li>
                <li><NavLink to="#">Analytics</NavLink></li>
                <li><NavLink to="#">Integrations</NavLink></li>
                <li><NavLink to="#">Support</NavLink></li>
              </ul>
            </li>
            {/* Pricing Dropdown */}
            <li className="gsp-nav-item gsp-dropdown">
              <NavLink to="#">Pricing</NavLink>
              <ul className="gsp-dropdown-menu">
                <li><NavLink to="#">Basic Plan</NavLink></li>
                <li><NavLink to="#">Pro Plan</NavLink></li>
                <li><NavLink to="#">Enterprise</NavLink></li>
                <li><NavLink to="#">Compare Plans</NavLink></li>
                <li><NavLink to="#">FAQ</NavLink></li>
              </ul>
            </li>
            {/* Blog Dropdown */}
            <li className="gsp-nav-item gsp-dropdown">
              <NavLink to="#">Blog</NavLink>
              <ul className="gsp-dropdown-menu">
                <li><NavLink to="#">Latest News</NavLink></li>
                <li><NavLink to="#">Tutorials</NavLink></li>
                <li><NavLink to="#">Market Insights</NavLink></li>
                <li><NavLink to="#">Community Stories</NavLink></li>
                <li><NavLink to="#">Announcements</NavLink></li>
              </ul>
            </li>
            {/* About Dropdown */}
            <li className="gsp-nav-item gsp-dropdown">
              <NavLink to="#">About</NavLink>
              <ul className="gsp-dropdown-menu">
                <li><NavLink to="#">Our Team</NavLink></li>
                <li><NavLink to="#">Mission</NavLink></li>
                <li><NavLink to="#">Careers</NavLink></li>
                <li><NavLink to="#">Partners</NavLink></li>
                <li><NavLink to="#">Press</NavLink></li>
              </ul>
            </li>
            {/* Contact Dropdown */}
            <li className="gsp-nav-item gsp-dropdown">
              <NavLink to="#">Contact</NavLink>
              <ul className="gsp-dropdown-menu">
                <li><NavLink to="#">Support</NavLink></li>
                <li><NavLink to="#">Sales</NavLink></li>
                <li><NavLink to="#">Feedback</NavLink></li>
                <li><NavLink to="#">Request a Demo</NavLink></li>
                <li><NavLink to="#">Community</NavLink></li>
              </ul>
            </li>
          </ul>
        </nav>
      </header>
      {/* ...body and footer will go here... */}
    </div>
  );
}

export default GetStartedPage;