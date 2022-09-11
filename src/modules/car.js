/**
 * @description a basic object with two fields: Number and Color
 * @assumption the registration number for two cars can never be same
 * @author pooja lebaku<lebaku.pooja577@gmail.com>
 */
class Car {
    constructor (NUMBER, COLOR) {
        this.NUMBER = NUMBER; // unique property of an instance of car class
        this.COLOR = COLOR;
    }

    isCarEqual (carA, carB) {
        return ((carA.NUMBER.toLowerCase() === carB.NUMBER.toLowerCase())
            && carA.COLOR.toLowerCase() === carB.toLowerCase());
    }
}

module.exports = Car;
