import "./App.css";

let fakeData = [
  {
    img: "https://i.ibb.co/jhkLRm6/col8-1.jpg",
  },
  {
    img: "https://i.ibb.co/VtsmMZF/col4-9.jpg",
  },
  {
    img: "https://i.ibb.co/jrzb7qB/col4-4.jpg",
  },
  {
    img: "https://i.ibb.co/6Hfg4RL/col4-8.jpg",
  },
  {
    img: "https://i.ibb.co/fn8LvvR/col4-2.jpg",
  },

  {
    img: "https://i.ibb.co/gDSbVNv/col4-1.jpg",
  },
  {
    img: "https://i.ibb.co/Qc9x7QH/col8-2.jpg",
  },
  {
    img: "https://i.ibb.co/kmMfNTg/col4-3.jpg",
  },
  {
    img: "https://i.ibb.co/1qMJkgK/col4-7.jpg",
  },
  {
    img: "https://i.ibb.co/hLBqpZK/col4-5.jpg",
  },
  {
    img: "https://i.ibb.co/fxFPx70/col8-3.jpg",
  },
  {
    img: "https://i.ibb.co/6FGb46N/col4-6.jpg",
  },
];

function App() {
  let checkNumber = 0;
  let flag = 6;
  const dash = fakeData?.map((item, index) => {
    if (checkNumber === index) {
      checkNumber = checkNumber + flag;
      flag = flag === 6 ? 4 : 6;
      return (
        <div className="col-lg-8 py-3" style={{ paddingLeft: "110px" }}>
          <img
            width="700px"
            height="400px"
            className="shadow-lg p-3 rounded"
            src={item?.img}
            alt="img"
          />
        </div>
      );
    } else {
      return (
        <div className="col-lg-4 py-3" style={{ paddingLeft: "25px" }}>
          <img
            width="400px"
            height="400px"
            className="shadow-lg p-3 rounded"
            src={item?.img}
            alt="img"
          />
        </div>
      );
    }
  });

  return (
    <>
      <nav class="navbar navbar-black bg-black fixed-top">
        <div class="container-fluid ">
          <h2 className="text-white ps-5">IMAGE GALLERY (Pattern Problem)</h2> 
        </div>
      </nav>
      <div className="row" id="App">
        {dash}
      </div>
    </>
  );
}

export default App;
