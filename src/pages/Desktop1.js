import "./Desktop1.css";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const Desktop1 = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [isVisible1, setIsVisible1] = useState(true);
    const [isVisible2, setIsVisible2] = useState(true);
    const [searchValue, setSearchValue] = useState("");
    const [count, setCount] = useState(1425);
    const [count1, setCount1] = useState(2167);
    const toggleVisibility = () => {
      setIsVisible(true);
      setIsVisible1(false);
      setIsVisible2(false);
    };
    const toggleVisibility1 = () => {
      setIsVisible1(true);
      setIsVisible(false);
      setIsVisible2(false);
    };
    const toggleVisibility2 = () => {
      setIsVisible2(true);
      setIsVisible(false);
      setIsVisible1(false);
    };
    const toggleVisibility3 = () => {
      setIsVisible2(true);
      setIsVisible(true);
      setIsVisible1(true);
    };

    const handleSelectChange = (selectedValue) => {
      console.log('Selected value:', selectedValue);
      if (selectedValue === 'allOrders') {
        toggleVisibility3()
      }
      else if (selectedValue === 'completed') {
        toggleVisibility1() 

      }
      else if (selectedValue === 'inProgress'){
        toggleVisibility2()
      }
      else{
        toggleVisibility()
      }

    };

    let stringToCompare = 'allorders'; 
    let stringToCompare1 = 'completed';
    let stringToCompare2 = 'inprogress';
    let stringToCompare3 = 'canceled';

    const handleSearchChange = (event) => {
      setSearchValue(event.target.value);
      
    };
    const clearSearchInput = () => {
      setSearchValue('');
    };
  
    const compareSearch = () => {
      if (searchValue.toLowerCase() === stringToCompare.toLowerCase()) {
        toggleVisibility3()
      }
      else if (searchValue.toLowerCase() === stringToCompare1.toLowerCase()){
        toggleVisibility1() 
      } 
      else if (searchValue.toLowerCase() === stringToCompare2.toLowerCase()){
        toggleVisibility2() 
      }
      else if (searchValue.toLowerCase() === stringToCompare3.toLowerCase()){
        toggleVisibility()
      }
      clearSearchInput();
    };

    

    useEffect(() => {
      const incrementCount = () => {
        setCount((prevCount) => prevCount + 1);
        setCount1((prevCount) => prevCount + 1);
      };
      const intervalId = setInterval(incrementCount, 5000)
      return () => clearInterval(intervalId);
    }, []);

  return (
    <div className="desktop-1">
      <div className="desktop-1-child" />
      <div className="frame-parent">
        <div className="search-parent"> 
          <input type="search" placeholder="search..."  onChange={handleSearchChange} ></input>
          <img onClick={compareSearch}
            className="basilsearch-outline-icon"
            alt=""
            src="/basilsearchoutline.svg"
          />
        </div>
        <b className="cameron-rogers">Cameron Rogers</b>
        <b className="manager">Manager</b>
        <b className="b">{`>`}</b>
        <img className="frame-child" alt="" src="/frame-4@2x.png" />
        <img
          className="carbonnotification-icon"
          alt=""
          src="/carbonnotification.svg"
        />
      </div>
      <div className="frame-group">
        <div className="search-for-order-id-status-et-parent">
          <input type="search" placeholder="Search for order ID, Status etc..." value={searchValue} onChange={handleSearchChange}></input>
          <img onClick={compareSearch}
            className="basilsearch-outline-icon1"
            alt=""
            src="/basilsearchoutline1.svg"
          />
        </div>
        <div className="filters-parent">
          <select onChange={(e) => handleSelectChange(e.target.value)}>
            <option></option>
            <option value="allOrders">All Orders</option>
            <option value="completed">Completed</option>
            <option value="inProgress">In Progress</option>
            <option value="canceled">Canceled</option>
          </select>
          <img className="ionfilter-icon" alt="" src="/ionfilter.svg" />
        </div>
        <div className="attachment-parent">
          <div className="attachment">Attachment</div>
          <img
            className="majesticonsattachment"
            alt=""
            src="/majesticonsattachment.svg"
          />
        </div>
        <div className="export-parent">
          <div className="export">{`Export `}</div>
          <div className="div">{`>`}</div>
        </div>
        <img className="miexport-icon" alt="" src="/miexport.svg" />
      </div>
      <div className="desktop-1-inner">
        <div className="frame-container">
          <img className="frame-item" alt="" src="/frame-7.svg" />
          <b className="customer">Customer</b>
          <b className="b1">{count}</b>
          <div className="parent">
            <b className="b2">+21%</b>
            <b className="increase">Increase</b>
          </div>
        </div>
      </div>
      <div className="group-div">
        <div className="frame-container">
          <img className="frame-item" alt="" src="/frame-71.svg" />
          <b className="customer">Monthly Revenue</b>
          <b className="b1">${count1}</b>
          <div className="group">
            <b className="b2">568</b>
            <b className="increase">Orders</b>
          </div>
        </div>
      </div>
      <div className="desktop-1-inner1">
        <div className="frame-container">
          <img className="frame-item" alt="" src="/frame-72.svg" />
          <b className="customer">Today Visitor</b>
          <b className="b1">612</b>
          <div className="container">
            <b className="b2">+17</b>
            <b className="increase">Today</b>
          </div>
        </div>
      </div>
      <div className="desktop-1-inner2">
        <div className="frame-container">
          <img className="frame-item" alt="" src="/frame-73.svg" />
          <b className="customer">Today Sale</b>
          <b className="b1">36</b>
          <div className="parent1">
            <b className="b2">-8%</b>
            <b className="increase">Today</b>
          </div>
        </div>
      </div>
      <div className="desktop-1-inner3">
        <div className="customer-statistics-parent">
          <div className="customer-statistics">Customer Statistics</div>
          <div className="ellipse-div" />
          <div className="frame-child2" />
          <div className="line-div" />
          <div className="line-div" />
          <div className="frame-child4" />
          <div className="frame-child5" />
          <div className="frame-child5" />
          <div className="frame-child7" />
          <div className="parent2">
            <div className="div1">+70%</div>
            <div className="div1">+70%</div>
          </div>
          <div className="wrapper">
            <div className="div3">+30%</div>
          </div>
        </div>
      </div>
      <div className="desktop-1-inner4">
        <div className="customer-statistics-parent">
          <div className="available-trucks">Available Trucks</div>
          <div className="ak-145746">AK-145746</div>
          <div className="ak-740743">AK-740743</div>
          <div className="ak-326783">AK-326783</div>
          <div className="washinton-to-ilinois">Washinton to Ilinois</div>
          <div className="abu-dhabi-to">Abu Dhabi to Dubai Hills Estate</div>
          <div className="chelsea-to-manchester">Chelsea to manchester</div>
          <div className="view-all">View all</div>
          <div className="frame-child8" />
          <div className="frame-child9" />
          <div className="div4">65/100</div>
          <div className="div5">30/100</div>
          <div className="div6">82/100</div>
        </div>
      </div>
      <b className="all-orders"onClick={toggleVisibility3}>All Orders</b>
      <div className="completed"onClick={toggleVisibility1}>Completed</div>
      <div className="in-progress" onClick={toggleVisibility2}>In Progress</div>
      <div className="canceled" onClick={toggleVisibility}>Canceled</div>
      <div className="desktop-1-item" />
      <div className="desktop-1-child1" />
      <div className="order-id">Order ID</div>
      <div className="customer1">Customer</div>
      <div className="date">Date</div>
      <div className="product">Product</div>
      <div className="price">Price</div>
      <div className="status">Status</div>
      <div className="payment-meth">Payment meth.</div>
      <div className="div7">{`>`}</div>
      <div className="div8">{`>`}</div>
      <div className="div9">{`>`}</div>
      <div className="div10">{`>`}</div>
      <div className="div11">{`>`}</div>
      <div className="div12">{`>`}</div>
      <div className="div13">{`>`}</div>
      <div className="htes4325"style={{ display: isVisible1 ? 'block' : 'none' }}>HTES4325</div>
      <div className="sdwe6321"style={{ display: isVisible2 ? 'block' : 'none' }}>SDWE6321</div>
      <div className="ferw4793"style={{ display: isVisible1 ? 'block' : 'none' }}>FERW4793</div>
      <div className="aqwe3252" style={{ display: isVisible ? 'block' : 'none' }}>AQWE3252</div>
      <div className="jgtr8086"style={{ display: isVisible1 ? 'block' : 'none' }}>JGTR8086</div>
      <div className="dwsn5127"style={{ display: isVisible2 ? 'block' : 'none' }}>DWSN5127</div>
      <div className="klut7146" style={{ display: isVisible ? 'block' : 'none' }}>KLUT7146</div>
      <div className="hmbc5095"style={{ display: isVisible2 ? 'block' : 'none' }}>HMBC5095</div>
      <div className="rvcz2985"style={{ display: isVisible1 ? 'block' : 'none' }}>RVCZ2985</div>
      <div className="dwck5647"style={{ display: isVisible ? 'block' : 'none' }}>DWCK5647</div>
      <div className="klfd1642"style={{ display: isVisible1 ? 'block' : 'none' }}>KLFD1642</div>
      <div className="zswe3672"style={{ display: isVisible2 ? 'block' : 'none' }}>ZSWE3672</div>
      <div className="randy-michael"style={{ display: isVisible1 ? 'block' : 'none' }}>Randy Michael</div>
      <div className="clement-mike"style={{ display: isVisible2 ? 'block' : 'none' }}>Clement Mike</div>
      <div className="tory-victor"style={{ display: isVisible1 ? 'block' : 'none' }}>Tory Victor</div>
      <div className="fowler-antony"style={{ display: isVisible ? 'block' : 'none' }}>Fowler Antony</div>
      <div className="hector-bellerin"style={{ display: isVisible1 ? 'block' : 'none' }}>Hector Bellerin</div>
      <div className="johnny-cage"style={{ display: isVisible2 ? 'block' : 'none' }}>Johnny Cage</div>
      <div className="joyce-winters"style={{ display: isVisible ? 'block' : 'none' }}>Joyce Winters</div>
      <div className="amber-cathy"style={{ display: isVisible2 ? 'block' : 'none' }}>Amber Cathy</div>
      <div className="danny-neil"style={{ display: isVisible1 ? 'block' : 'none' }}>Danny Neil</div>
      <div className="simpson-debby"style={{ display: isVisible ? 'block' : 'none' }}>Simpson Debby</div>
      <div className="florina-dora"style={{ display: isVisible1 ? 'block' : 'none' }}>Florina Dora</div>
      <div className="jose-moore"style={{ display: isVisible2 ? 'block' : 'none' }}>Jose Moore</div>
      <div className="div14"style={{ display: isVisible1 ? 'block' : 'none' }}>07.12.2023</div>
      <div className="div15"style={{ display: isVisible2 ? 'block' : 'none' }}>23.10.2023</div>
      <div className="div16"style={{ display: isVisible1 ? 'block' : 'none' }}>21.06.2023</div>
      <div className="div17"style={{ display: isVisible ? 'block' : 'none' }}>07.11.2023</div>
      <div className="div18"style={{ display: isVisible1 ? 'block' : 'none' }}>17.12.2023</div>
      <div className="div19"style={{ display: isVisible2 ? 'block' : 'none' }}>18.07.2023</div>
      <div className="div20"style={{ display: isVisible ? 'block' : 'none' }}>19.06.2023</div>
      <div className="div21"style={{ display: isVisible2 ? 'block' : 'none' }}>05.02.2023</div>
      <div className="div22"style={{ display: isVisible1 ? 'block' : 'none' }}>11.06.2023</div>
      <div className="div23"style={{ display: isVisible ? 'block' : 'none' }}>09.09.2023</div>
      <div className="div24"style={{ display: isVisible1 ? 'block' : 'none' }}>19.04.2023</div>
      <div className="div25"style={{ display: isVisible2 ? 'block' : 'none' }}>07.03.2023</div>
      <div className="macbook-pro"style={{ display: isVisible1 ? 'block' : 'none' }}>Macbook pro</div>
      <div className="puma-shirt"style={{ display: isVisible2 ? 'block' : 'none' }}>Puma Shirt</div>
      <div className="nike-bag"style={{ display: isVisible1 ? 'block' : 'none' }}>Nike Bag</div>
      <div className="air-freshner"style={{ display: isVisible ? 'block' : 'none' }}>Air freshner</div>
      <div className="kg-dumbbell"style={{ display: isVisible1 ? 'block' : 'none' }}>50KG Dumbbell</div>
      <div className="mary-kay"style={{ display: isVisible2 ? 'block' : 'none' }}>Mary kay</div>
      <div className="hisense-tv"style={{ display: isVisible ? 'block' : 'none' }}>55’’ Hisense TV</div>
      <div className="blender"style={{ display: isVisible2 ? 'block' : 'none' }}>Blender</div>
      <div className="leather-shoe"style={{ display: isVisible1 ? 'block' : 'none' }}>Leather shoe</div>
      <div className="gucci-bag"style={{ display: isVisible ? 'block' : 'none' }}>Gucci bag</div>
      <div className="silver-necklace"style={{ display: isVisible1 ? 'block' : 'none' }}>Silver necklace</div>
      <div className="zenik-wristwatch"style={{ display: isVisible2 ? 'block' : 'none' }}>Zenik wristwatch</div>
      <div className="div26"style={{ display: isVisible1 ? 'block' : 'none' }}>$650.00</div>
      <div className="div27"style={{ display: isVisible2 ? 'block' : 'none' }}>$230.00</div>
      <div className="div28"style={{ display: isVisible1 ? 'block' : 'none' }}>$184.30</div>
      <div className="div29"style={{ display: isVisible ? 'block' : 'none' }}>$21.80</div>
      <div className="div30"style={{ display: isVisible1 ? 'block' : 'none' }}>$76.99</div>
      <div className="div31"style={{ display: isVisible2 ? 'block' : 'none' }}>$26.99</div>
      <div className="div32"style={{ display: isVisible ? 'block' : 'none' }}>$312.00</div>
      <div className="div33"style={{ display: isVisible2 ? 'block' : 'none' }}>$56.00</div>
      <div className="div34"style={{ display: isVisible1 ? 'block' : 'none' }}>$19.00</div>
      <div className="div35"style={{ display: isVisible ? 'block' : 'none' }}>$531.45</div>
      <div className="div36"style={{ display: isVisible1 ? 'block' : 'none' }}>$4312.00</div>
      <div className="div37"style={{ display: isVisible2 ? 'block' : 'none' }}>$5321.00</div>
      <div className="complete-wrapper">
        <div className="complete"style={{ display: isVisible1 ? 'block' : 'none' }}>complete</div>
      </div>
      <div className="in-progress-wrapper"style={{ display: isVisible2 ? 'block' : 'none' }}>
        <div className="in-progress1">In progress</div>
      </div>
      <div className="in-progress-container"style={{ display: isVisible2 ? 'block' : 'none' }}>
        <div className="in-progress1">In progress</div>
      </div>
      <div className="in-progress-frame"style={{ display: isVisible2 ? 'block' : 'none' }}>
        <div className="in-progress1">In progress</div>
      </div>
      <div className="in-progress-wrapper1"style={{ display: isVisible2 ? 'block' : 'none' }}>
        <div className="in-progress1">In progress</div>
      </div>
      <div className="complete-container"style={{ display: isVisible1 ? 'block' : 'none' }}>
        <div className="complete">complete</div>
      </div>
      <div className="canceled-wrapper"style={{ display: isVisible ? 'block' : 'none' }}>
        <div className="complete" >Canceled</div>
      </div>
      <div className="canceled-container"style={{ display: isVisible ? 'block' : 'none' }}>
        <div className="complete" >Canceled</div>
      </div>
      <div className="canceled-frame"style={{ display: isVisible ? 'block' : 'none' }}>
        <div className="complete" >Canceled</div>
      </div>
      <div className="complete-frame"style={{ display: isVisible1 ? 'block' : 'none' }}>
        <div className="complete">complete</div>
      </div>
      <div className="complete-wrapper1"style={{ display: isVisible1 ? 'block' : 'none' }}>
        <div className="complete">complete</div>
      </div>
      <div className="complete-wrapper2"style={{ display: isVisible1 ? 'block' : 'none' }}>
      <div className="complete">complete</div>
      </div>
      <div className="credit-card"style={{ display: isVisible1 ? 'block' : 'none' }}>Credit card</div>
      <div className="bank-transfer"style={{ display: isVisible2 ? 'block' : 'none' }}>Bank transfer</div>
      <div className="credit-card1"style={{ display: isVisible1 ? 'block' : 'none' }}>Credit card</div>
      <div className="paypal"style={{ display: isVisible ? 'block' : 'none' }}>Paypal</div>
      <div className="credit-card2"style={{ display: isVisible1 ? 'block' : 'none' }}>Credit card</div>
      <div className="bank-transfer1"style={{ display: isVisible2 ? 'block' : 'none' }}>Bank transfer</div>
      <div className="paypal1"style={{ display: isVisible ? 'block' : 'none' }}>Paypal</div>
      <div className="credit-card3"style={{ display: isVisible2 ? 'block' : 'none' }}>Credit card</div>
      <div className="bank-transfer2"style={{ display: isVisible1 ? 'block' : 'none' }}>Bank transfer</div>
      <div className="paypal2"style={{ display: isVisible ? 'block' : 'none' }}>Paypal</div>
      <div className="credit-card4"style={{ display: isVisible1 ? 'block' : 'none' }}>Credit card</div>
      <div className="bank-transfer3"style={{ display: isVisible2 ? 'block' : 'none' }}>Bank transfer</div>
      <div className="group-parent">
        <div className="frame-wrapper">
          <div className="customer-statistics-parent">
            <div className="top-countries">Top Countries</div>
            <div className="frame-child10" />
            <div className="frame-child11" />
            <div className="frame-child12" />
            <div className="frame-child13" />
            <div className="australia">Australia</div>
            <div className="united-state">United State</div>
            <div className="asia">Asia</div>
            <div className="africa">Africa</div>
          </div>
        </div>
        <img
          className="img-matplotlib-pie1-1-icon"
          alt=""
          src="/img-matplotlib-pie1-1@2x.png"
        />
      </div>
    </div>
  );
};

export default Desktop1;
