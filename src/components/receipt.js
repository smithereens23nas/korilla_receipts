import React from "react";

const Receipt = (props) => {

const handleChange = (event, element) => {
  //find something that is equal to the value that you want to change
  //if thats true > change the state of the original arr
  //so that it reflects element paid to true
  //somewhere in if statement use setReceipt
  if(event.target.id === element.id){
  element.paid = true
  console.log('clicked')
  // props.setReceipt({ ...props.receipt, event.target. })
  }
  console.log(event.target.id)
  console.log(element.id)
}

  return (
    <div>
      {props.receipt.map((item, index) => {
          return (
              <div id={item.id} key = {index} onClick={(event)=>handleChange(event, item)}>
              <h5>costumer: { item.person }</h5>
              <p>main: { item.order.main }</p>
              <p>protein: { item.order.protein }</p>
              <p>rice: { item.order.rice }</p>
              <p>sauce: { item.order.sauce }</p>
              <p>drink: { item.order.drink }</p>
              <p>cost: { item.order.cost }</p>
              <p>paid: { item.paid ? <>true</> : <>false</>  }</p>
              </div>
          )
      })}
    </div>
  );
};

export default Receipt;
