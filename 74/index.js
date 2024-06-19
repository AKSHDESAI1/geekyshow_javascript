const obj = new Object();

const addPropertyForm = document.getElementById("addPropertyForm");
const addProperty_Msg = document.getElementById("addProperty_Msg");

const getPropertyForm = document.getElementById("getPropertyForm");
const getProperty_Msg = document.getElementById("getProperty_Msg");

const container = document.getElementById("container");

const msg_Data = {
  AddProperty: {
    Success: "Data Added Successfully",
    Error: "Please Add MeaningFull Information.",
  },
  GetProperty: {},
  DeleteProperty: {},
};

const msg_type = {
  Success: "success",
  Error: "error",
};

addPropertyForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let key = addPropertyForm.Key.value;
  let value = addPropertyForm.Value.value;

  if (key.trim() == "" || value.trim() == "") {
    return addProperty_Msg_Fun(msg_Data.AddProperty.Error, msg_type.Error);
  }

  if (obj[key] != undefined) {
    let confirm = window.confirm(
      "This Property is already Exist! Do you Want to Override this ?"
    );
    if (!confirm) {
      getObjectData();
      return alert(
        "Ok, This Property will not Override, Thanks for Clarification."
      );
    }
  }

  obj[key] = value;
  console.log(obj);

//   addPropertyForm.Key.value = "";
//   addPropertyForm.Value.value = "";

  getObjectData();
  return addProperty_Msg_Fun(msg_Data.AddProperty.Success, msg_type.Success);
});

function addProperty_Msg_Fun(msg, type) {
  if (type == msg_type.Success) {
    addProperty_Msg.innerHTML = `<div style='color:green'> ${msg}`;
  } else if (type == msg_type.Error) {
    addProperty_Msg.innerHTML = `<div style='color:red'> ${msg} </div>`;
  } else {
    pass;
  }

  setTimeout(() => {
    addProperty_Msg.innerText = "";
  }, 3000);
}

getPropertyForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let key = getPropertyForm.Key.value;
    let value = getPropertyForm.Value.value;

    if(key.trim() == "") {

    }
})  

function getProperty_Msg_Fun(msg, type) {

}

function getObjectData() {
  let str = "";
  for (const key in obj) {
    console.log(key);
    str += `<li> ${key} - ${obj[key]} </li>`;
  }
  console.log("value of str is", str);
  container.innerHTML = str;
}
