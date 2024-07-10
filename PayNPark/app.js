const charge = {
    sedane: "$5",
    suv: "$7",
    bike: "$3"

}

const vehicleType = document.querySelector("#vehicleType");
const h5qrAmount = document.querySelector("#h5qrAmount");
const h5uid = document.querySelector("#displayUID");
const h5uidNumber = document.querySelector("#uidNumber");

const onVehicleSelect = document.querySelector("#vehicleSelect");
const newUID = document.querySelector("#newUID");
const vehicleNumberSubmit = document.querySelector("#submit")

const vehicleNumber = document.querySelector("#number");

vehicleType.addEventListener('change', function () {
    console.log(this.value)
    type = this.value;
    const toPay = charge[type];
    h5qrAmount.textContent = `Scan QR -> Pay ${toPay} -> Enter Vehicle Number -> Click Submit`;
    onVehicleSelect.style.display = "inline-block";

})



const newEntry = document.querySelector("#newEntry");

const newEntryForm = document.querySelector("#clickNewEntry");
const h5newUid = document.querySelector("#uidNumber")
const inputNumber = document.querySelector("#vehicleNumber")

newEntry.addEventListener('click', function () {
    newEntryForm.style.display = "inline-block";
    h5verifyUID.textContent = "";
    h5newUid.textContent = "";
    verifyUID.style.display = "none";
    newUID.style.display = "none";
    onVehicleSelect.style.display = "none";
    inputNumber.value = "";
    inputUID.value = "";
})

let uid = "";

function generateUID(vnumber, uid) {
    vnumber = vnumber.split(" ");
    randNumber = Math.floor(Math.random() * 1000);
    uid = `${vnumber[vnumber.length - 1]}${randNumber}`;
    return uid;
}



vehicleNumberSubmit.addEventListener('click', function () {
    newUID.style.display = "inline-block";
    uid = generateUID(inputNumber.value);
    h5newUid.textContent = uid;
})

const notedButton = document.querySelector("#noted");

notedButton.addEventListener("click", function () {
    newEntryForm.style.display = "none";
    newUID.style.display = "none";
})

const exit = document.querySelector("#exit");
const verifyUID = document.querySelector("#divVerfyUID");

exit.addEventListener("click", function () {
    verifyUID.style.display = "inline-block";
})

const inputUID = document.querySelector("#inputuid");
const submitUID = document.querySelector("#submitUID");
const h5verifyUID = document.querySelector("#verifyUID");

submitUID.addEventListener("click", function () {
    if (inputUID.value === uid) {
        h5verifyUID.textContent = "UID Verified";
    } else {
        h5verifyUID.textContent = "Incorrect UID";
    }
})
