import React, {Component} from 'react';
import {Jumbotron, Button, ListGroup, Alert} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import PackageCard from '../packages/PackageCard';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div>
        {this.props.location.state && this.props.location.state.isAuthenticated && <Alert className="m-3" variant="success">You have successfully Signed In! <a href={`/user/${localStorage.getItem('id')}`}><b>Click Here to go to your account.</b></a></Alert>}
      <Jumbotron>
        <h1>Welcome to Octogon Accounting Solutions!</h1>
        <p>Octagon Bookkeeping Solutions is a professional organisation that provides comprehensive bookkeeping and administrative services for small businesses.</p>
        <p><Button variant="primary"><Link className="jumbotron-links" to="/about">About Us!</Link></Button></p>
      </Jumbotron>
      <h4 className="text-center"><em>We tailor to business of any size!</em></h4>
      <h3 className="text-center">Our Services Include:</h3>
      <div className="services-container">
      <ListGroup>
        <ListGroup.Item variant="info" className="text-center">Payroll</ListGroup.Item>
        <ListGroup.Item>Weekly/fortnightly/monthly Payroll</ListGroup.Item>
        <ListGroup.Item>Payroll tax (PAYG)</ListGroup.Item>
        <ListGroup.Item>Superannuation</ListGroup.Item>
        <ListGroup.Item>WorkCover reporting</ListGroup.Item>
      </ListGroup>
      <ListGroup>
        <ListGroup.Item variant="info" className="text-center">ATO Compliance</ListGroup.Item>
        <ListGroup.Item>BAS/IAS lodgement</ListGroup.Item>
      </ListGroup>
      <ListGroup>
        <ListGroup.Item variant="info" className="text-center">Bookkeeping</ListGroup.Item>
        <ListGroup.Item>Accounts Payable</ListGroup.Item>
        <ListGroup.Item>Accounts Receivable</ListGroup.Item>
        <ListGroup.Item>Bank reconciliations</ListGroup.Item>
        <ListGroup.Item>Daily transactional entries</ListGroup.Item>
      </ListGroup>
      <ListGroup>
        <ListGroup.Item variant="info" className="text-center">Balance sheet</ListGroup.Item>
        <ListGroup.Item>Profit & Loss Reports</ListGroup.Item>
        <ListGroup.Item>Processing/reconciliations</ListGroup.Item>
        <ListGroup.Item>Creditors/Debtors</ListGroup.Item>
      </ListGroup>
      <ListGroup>
        <ListGroup.Item variant="info" className="text-center">Software</ListGroup.Item>
        <ListGroup.Item>Setup/Installation</ListGroup.Item>
        <ListGroup.Item>Chart of accounts</ListGroup.Item>
        <ListGroup.Item>Import Customer / Suppliers Data</ListGroup.Item>
        <ListGroup.Item>Import Inventory Data</ListGroup.Item>
      </ListGroup>
      </div>
      <h2 className="text-center line-height-8">Our uniquely tailored packages:</h2>
      <div className="services-container">
        <PackageCard 
        img="https://i.imgur.com/CJZxxND.jpg"
        title="Lite"  
        text={
          <>
        <p>This package includes:</p>
        <ul>
          <li>1 Bank Account Reconciled Daily</li>
          <li>1 Credit Card</li>
          <li>Receipt Bank to Manage Expenses</li>
          <li>Quarterly BAS Calculation & Lodgement</li>
        </ul>
          </>}
        price={<><b>350</b><span> <em>a month</em></span></>}
        />
        <PackageCard
        img="https://i.imgur.com/HrdO3iR.jpg" 
        title="Ultimate"
        text={
          <>
          <p>This package includes:</p>
          <ul>
            <li>2 Bank Account Reconciled Daily</li>
            <li>1 Credit Card</li>
            <li>Receipt Bank to Manage Expenses</li>
            <li>Payroll for up to 5 Employees</li>
            <li>Quarterly BAS Calculation & Lodgement</li>
            <li>Superannuation</li>
          </ul>
            </>}
        price={<><b>750</b><span> <em>a month</em></span></>}
        />
        <PackageCard 
        img="https://i.imgur.com/j9PCOq1.jpg"
        title="Premium"
        text={
          <>
          <p>This package includes:</p>
          <ul>
            <li>3 Bank Account Reconciled Daily</li>
            <li>3 Credit Card</li>
            <li>Receipt Bank to Manage Expenses</li>
            <li>Payroll for up to 10 Employees</li>
            <li>Quarterly BAS Calculation & Lodgement</li>
          </ul>
          </>
        } 
        price={<><b>1180</b><span> <em>a month</em></span></>}
        />
      </div>
      </div>  
    )
  }
}

export default Home;