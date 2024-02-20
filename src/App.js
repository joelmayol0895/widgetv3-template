import Widget from "./components/Widget";

function App() {
  //Instance ID
  let InstanceId_Widget = "513953";

  //Product ID
  let ProductId = "";

  return (
    <>
      <div className="wrapper">
        <div class="accordion" id="accordionExample">
          <Widget
            instanceid={InstanceId_Widget}
            productid={ProductId}
            active="true"
            heading="Reviews Widget"
          />
        </div>
      </div>
    </>
  );
}

export default App;
