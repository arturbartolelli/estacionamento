export function serPlaca(str){
    let plate = /^[A-Z]{3}[0-9][A-Z][0-9]{2}/i;

        return plate.test(str)?true:false;
}


