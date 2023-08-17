import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart" ;
import List from "../../components/table/Table";

const Single = () => {
  return (
    <div className="single">
      <Sidebar/>
      <div className="singleContainer">
        <Navbar/>
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img src="https://pps.whatsapp.net/v/t61.24694-24/299007329_635167487805954_791033754617318626_n.jpg?ccb=11-4&oh=01_AdTCN5Q_GQA7f66w8JGF7PyKPmeHW0gEV5pb7aWOsoPtNA&oe=64466D37" 
              alt="" className="itemImg"/>
              <div className="details">
                <h1 className="itemTitle">lokesh kumar</h1>
                <div className="detailItem">
                  <span className="itemKey">Phone :</span>
                  <span className="itemKey">+8449211042</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address :</span>
                  <span className="itemKey">83 bardarpur border ,delhi </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country :</span>
                  <span className="itemKey">inida </span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 /1} title="User Spending ( Last 6 Months)"/>
          </div>
        </div>
        <div className="bottom">
        <h1 className="title">Last Transactions</h1>
         
        </div>
      </div>
    </div>
)
}

export default Single
