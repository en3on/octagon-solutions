import React, {Component} from 'react';
import {Carousel, Jumbotron} from 'react-bootstrap';
import './AboutPage.css';


class AboutPage extends Component {
  render() {
    return (
      <div className="main-container">
      <Jumbotron className="jumbotron-image">
          <h1>About Octagon Accounting Solutions</h1>
          <h2><em>Business Bookkeeping - It’s what we do!</em></h2>
      </Jumbotron>
      <h3 className="text-center"><em>How can we streamline your Bookkeeping?</em></h3>
      <div className="content-container">
      <p>Octagon Bookkeeping Solutions is a technology-enabled bookkeeping service
provider.  We offer online bookkeeping and accounting services to a broad
range of small and medium sized business.</p>
      </div>
      <hr className="fancy-line" />
      <div className="parent-container">
      <div className="content-container">
      <p>If you can manage most of your business from your mobile why can’t your SME
or small business’s bookkeeping and accounting be simplified? Well it can.
Technology has changed the game and, using online, cloud-based accounting
software, such as Zoho, Quickbooks, Reckon, XERO and more we are leading
the way to redefine how you manage your SME and small business’s
bookkeeping and accounting regardless of where you trade in Australia.</p>
      </div>
      <hr />
      <div className="content-container">
      <p>We provide ongoing bookkeeping maintenance in the background while you
focus on your core business operations.  As experienced bookkeeping, we&#39;ll
help you with all the data entry and bank reconciliations that are required, all
on a remote-basis.</p>
      </div>
      <hr />
      <div className="content-container">
      <p>Our bookkeeping advisors payroll processing services for growing businesses,
assisting in government remittances and year end filings. With over 15 years of
experience, our experts have the knowledge and expertise to handle any
situation.</p>
      </div>
      <hr />
      <div className="content-container">
      <p>Get the best for your small to medium business without the hefty price tag.
Our prices are fixed and upfront so there are no hidden fees or unexpected
bills. We don’t bill you for those phone conversations when you just need
some quick advice. We’re professionals who live and breathe accounting and
bookkeeping. We get to know your company and thrive on helping you scale
your business and achieve your goals.</p>
      </div>
      </div>
      </div>
    )
  }
}

export default AboutPage;