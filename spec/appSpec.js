import { BerlinClock } from '../src/app.js';

describe("berlinClockSingleMinute function should return the single minute", function() {
    const clock = new BerlinClock();

    it("it should return XXXX when given 0 minute", function() {
        const date = new Date();
        date.setMinutes(0);

        const result = clock.berlinClockSingleMinute(date.getMinutes());

        expect(result).toBe("XXXX");   
    });

    it ("it should return YXXX when given 1 minute", function(){
        const date = new Date();
        date.setMinutes(1);

        const result = clock.berlinClockSingleMinute(date.getMinutes());

        expect(result).toBe("YXXX");   

    });

    it ("it should return YYXX when given 2 minutes", function(){
        const date = new Date();
        date.setMinutes(2);

        const result = clock.berlinClockSingleMinute(date.getMinutes());

        expect(result).toBe("YYXX");   

    });

    it ("it should return YYYX when given 3 minutes", function(){
        const date = new Date();
        date.setMinutes(3);

        const result = clock.berlinClockSingleMinute(date.getMinutes());

        expect(result).toBe("YYYX");   

    });

    it ("it should return YYYY when given 4 minutes", function(){
        const date = new Date();
        date.setMinutes(4);

        const result = clock.berlinClockSingleMinute(date.getMinutes());

        expect(result).toBe("YYYY");   

    });

    it ("it should return XXXX when given 5 minutes", function(){
        const date = new Date();
        date.setMinutes(5);

        const result = clock.berlinClockSingleMinute(date.getMinutes());

        expect(result).toBe("XXXX");   

    });

    it ("it should return YXXX when given 6 minutes", function(){
        const date = new Date();
        date.setMinutes(6);

        const result = clock.berlinClockSingleMinute(date.getMinutes());

        expect(result).toBe("YXXX");   

    });

    it ("it should return YYXX when given 7 minutes", function(){
        const date = new Date();
        date.setMinutes(7);

        const result = clock.berlinClockSingleMinute(date.getMinutes());

        expect(result).toBe("YYXX");   

    });

    it ("it should return YYYX when given 8 minutes", function(){
        const date = new Date();
        date.setMinutes(8);

        const result = clock.berlinClockSingleMinute(date.getMinutes());

        expect(result).toBe("YYYX");   

    });

    it ("it should return YYYY when given 9 minutes", function(){
        const date = new Date();
        date.setMinutes(9);

        const result = clock.berlinClockSingleMinute(date.getMinutes());

        expect(result).toBe("YYYY");   

    });

    it ("it should return XXXX when given 10 minutes", function(){
        const date = new Date();
        date.setMinutes(10);

        const result = clock.berlinClockSingleMinute(date.getMinutes());

        expect(result).toBe("XXXX");   

    });

    it ("it should return YXXX when given 11 minutes", function(){
        const date = new Date();
        date.setMinutes(11);

        const result = clock.berlinClockSingleMinute(date.getMinutes());

        expect(result).toBe("YXXX");   

    });

});

describe("berlinClock5Minutes function should return the 5 minutes", function() {
    const clock = new BerlinClock();

    it("it should return XXXXXXXXXXX when given 0 minute", function() {
        const date = new Date();
        date.setMinutes(0);

        const result = clock.berlinClock5Minutes(date.getMinutes());

        expect(result).toBe("XXXXXXXXXXX");   
    });

    
    it("it should return XXXXXXXXXXX when given 1 minute", function() {
        const date = new Date();
        date.setMinutes(1);

        const result = clock.berlinClock5Minutes(date.getMinutes());

        expect(result).toBe("XXXXXXXXXXX");   
    });

    it("it should return XXXXXXXXXXX when given 2 minutes", function() {
        const date = new Date();
        date.setMinutes(2);

        const result = clock.berlinClock5Minutes(date.getMinutes());

        expect(result).toBe("XXXXXXXXXXX");   
    });

    it("it should return XXXXXXXXXXX when given 3 minutes", function() {
        const date = new Date();
        date.setMinutes(3);

        const result = clock.berlinClock5Minutes(date.getMinutes());

        expect(result).toBe("XXXXXXXXXXX");   
    });

    it("it should return YXXXXXXXXXX when given 5 minutes", function() {
        const date = new Date();
        date.setMinutes(5);

        const result = clock.berlinClock5Minutes(date.getMinutes());

        expect(result).toBe("YXXXXXXXXXX");   
    });

    it("it should return YXXXXXXXXXX when given 6 minutes", function() {
        const date = new Date();
        date.setMinutes(6);

        const result = clock.berlinClock5Minutes(date.getMinutes());

        expect(result).toBe("YXXXXXXXXXX");   
    });

    it("it should return YXXXXXXXXXX when given 9 minutes", function() {
        const date = new Date();
        date.setMinutes(9);

        const result = clock.berlinClock5Minutes(date.getMinutes());

        expect(result).toBe("YXXXXXXXXXX");   
    });
    
    



})
