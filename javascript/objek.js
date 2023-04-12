console.log("Objek");
const car = {
    name: "Honda",
     accelerate: function() {
     console.log("Accelerate")
     }
    };
    //Using dot
    console.log(car.name);
    car.accelerate();
    //Using element name as string
    console.log(car['name']);
    car['accelerate']();