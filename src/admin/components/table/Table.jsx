import "./table.scss"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

// Made by Moses Mwila 
// for Zykar Solutions Limited

const List = () => {

 const rows = [
    {
      
        id: 74185,
        product: "Laptop Backpack",
        img: "	https://m.media-amazon.com/images/I/61Cp0QZBlSL._AC_UY218_.jpg",
        customer: "Arlyn Mwila",
        date: "15 August",
        amount: 985,
        method: "Cash On Delivery",
        status: "Pending",
    },
    {
        id: 2235235,
        product: "Playstation 5",
        img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
        customer: "Jamal Banda",
        date: "1 April",
        amount: 2057,
        method: "Mobile Money",
        status: "Approved",
    },
    // {
    //     id: 11443155,
    //     product: "Denim Jeans 5",
    //     img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
    //     customer: "Monse Tembo",
    //     date: "1 May",
    //     amount: 687,
    //     method: "Cash On Delivery",
    //     status: "Approved",
    // },
    {
        id: 2235235,
        product: "Apple Iphone 14",
        img: "https://m.media-amazon.com/images/I/618Bb+QzCmL._AC_UY218_.jpg",
        customer: "Arlyn Mwila",
        date: "1 June",
        amount: 1757,
        method: "Online Payment",
        status: "Approved",
    },
    {
        id: 2235235,
        product: "Apple Iphone 14 Pro",
        img: "https://m.media-amazon.com/images/I/618Bb+QzCmL._AC_UY218_.jpg",
        customer: "Oscar Bwalya",
        date: "17 July",
        amount: 7757,
        method: "Online Payment",
        status: "Approved",
    },
 ];


  return (
    <TableContainer component={Paper} className="table">
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          {/* <TableCell className="tableCell">Tracking ID</TableCell>
          <TableCell className="tableCell">Product</TableCell>
          <TableCell className="tableCell">Customer</TableCell>
          <TableCell className="tableCell">Date</TableCell>
          <TableCell className="tableCell">Amount</TableCell>
          <TableCell className="tableCell">Payment Method</TableCell>
          <TableCell className="tableCell">Status</TableCell> */}
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow
            key={row.id} >
            <TableCell className="tableCell" align="left">{row.id}</TableCell>
            <TableCell className="tableCell" align="left">
              <div className="cellWrapper">
                <img src={row.img} alt="" className="image" />
                {row.product}
              </div>
            </TableCell>
            <TableCell className="tableCell">{row.customer}</TableCell>
            <TableCell className="tableCell">{row.date}</TableCell>
            <TableCell className="tableCell">{row.amount}</TableCell>
            <TableCell className="tableCell">{row.method}</TableCell>
            <TableCell className="tableCell">
              <span className={`status ${row.status}`}>{row.status}</span>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  )
}

export default List