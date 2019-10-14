class Cars {

    constructor( brandName, model, productionYear ) {

        this.productionYear = productionYear;
        this.brandName = brandName;
        this.model = model;

    }

}

function showCars( type, data, isDisplayed ) {

    data = JSON.stringify(data);

    if(isDisplayed) {

        document.write(type + '<br>');
        document.write(data + '<br>');

    }else{

        alert('error');

    }

}

var new_car = _.create(Cars.prototype,{brandName: "MercedesBenz", model: 'SLK500', productionYear: 2014});
var invert = _.invert({MercedesBenz: "brandName", SLK500: 'model', 2014: 'productionYear'});
let pick = _.pick({brandName: "MercedesBenz", model: 'SLK500', productionYear: 2014}, 'brandName', 'productionYear');
let omit = _.omit({brandName: "MercedesBenz", model: 'SLK500', productionYear: 2014}, 'model');
showCars('Create', new_car,true);
showCars('Invert:', invert,true);
showCars('Pick:', pick ,true);
showCars('Omit:' , omit, true);