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

    it("should return YYXXXXXXXXX when given 10 minutes", function() {
        const date = new Date();
        date.setMinutes(10);
      
        const result = clock.berlinClock5Minutes(date.getMinutes());
        
        expect(result).toBe("YYXXXXXXXXX");   
      });

      it("should return YYXXXXXXXXX when given 11 minutes", function() {
        const date = new Date();
        date.setMinutes(11);
      
        const result = clock.berlinClock5Minutes(date.getMinutes());
        
        expect(result).toBe("YYXXXXXXXXX");   
      });

      it("should return YYXXXXXXXXX when given 14 minutes", function() {
        const date = new Date();
        date.setMinutes(14);
      
        const result = clock.berlinClock5Minutes(date.getMinutes());
        
        expect(result).toBe("YYXXXXXXXXX");   
      });

      it("should return YYRXXXXXXXX when given 15 minutes", function() {
        const date = new Date();
        date.setMinutes(15);
      
        const result = clock.berlinClock5Minutes(date.getMinutes());
        
        expect(result).toBe("YYRXXXXXXXX");   
      });

      it("should return YYRXXXXXXXX when given 16 minutes", function() {
        const date = new Date();
        date.setMinutes(16);
      
        const result = clock.berlinClock5Minutes(date.getMinutes());
        
        expect(result).toBe("YYRXXXXXXXX");   
      });

      it("should return YYRXXXXXXXX when given 19 minutes", function() {
        const date = new Date();
        date.setMinutes(19);
      
        const result = clock.berlinClock5Minutes(date.getMinutes());
        
        expect(result).toBe("YYRXXXXXXXX");   
      });

      it("should return YYRYXXXXXXX when given 20 minutes", function() {
        const date = new Date();
        date.setMinutes(20);
      
        const result = clock.berlinClock5Minutes(date.getMinutes());
        
        expect(result).toBe("YYRYXXXXXXX");   
      });

      it("should return YYRYXXXXXXX when given 24 minutes", function() {
        const date = new Date();
        date.setMinutes(24);
      
        const result = clock.berlinClock5Minutes(date.getMinutes());
        
        expect(result).toBe("YYRYXXXXXXX");   
      });

      it("should return YYRYYXXXXXX when given 25 minutes", function() {
        const date = new Date();
        date.setMinutes(25);
      
        const result = clock.berlinClock5Minutes(date.getMinutes());
        
        expect(result).toBe("YYRYYXXXXXX");   
      });

      it("should return YYRYYXXXXXX when given 29 minutes", function() {
        const date = new Date();
        date.setMinutes(29);
      
        const result = clock.berlinClock5Minutes(date.getMinutes());
        
        expect(result).toBe("YYRYYXXXXXX");   
      });

      it("should return YYRYYRXXXXX when given 30 minutes", function() {
        const date = new Date();
        date.setMinutes(30);
      
        const result = clock.berlinClock5Minutes(date.getMinutes());
        
        expect(result).toBe("YYRYYRXXXXX");   
      });

      
      it("should return YYRYYRXXXXX when given 34 minutes", function() {
        const date = new Date();
        date.setMinutes(34);
      
        const result = clock.berlinClock5Minutes(date.getMinutes());
        
        expect(result).toBe("YYRYYRXXXXX");   
      });

      it("should return YYRYYRYXXXX when given 35 minutes", function() {
        const date = new Date();
        date.setMinutes(35);
      
        const result = clock.berlinClock5Minutes(date.getMinutes());
        
        expect(result).toBe("YYRYYRYXXXX");   
      });

      it("should return YYRYYRYXXXX when given 39 minutes", function() {
        const date = new Date();
        date.setMinutes(39);
      
        const result = clock.berlinClock5Minutes(date.getMinutes());
        
        expect(result).toBe("YYRYYRYXXXX");   
      });

      it("should return YYRYYRYYXXX when given 40 minutes", function() {
        const date = new Date();
        date.setMinutes(40);
      
        const result = clock.berlinClock5Minutes(date.getMinutes());
        
        expect(result).toBe("YYRYYRYYXXX");   
      });

      it("should return YYRYYRYYXXX when given 41 minutes", function() {
        const date = new Date();
        date.setMinutes(41);
      
        const result = clock.berlinClock5Minutes(date.getMinutes());
        
        expect(result).toBe("YYRYYRYYXXX");   
      });

      it("should return YYRYYRYYXXX when given 44 minutes", function() {
        const date = new Date();
        date.setMinutes(44);
      
        const result = clock.berlinClock5Minutes(date.getMinutes());
        
        expect(result).toBe("YYRYYRYYXXX");   
      });

      it("should return YYRYYRYYRXX when given 45 minutes", function() {
        const date = new Date();
        date.setMinutes(45);
      
        const result = clock.berlinClock5Minutes(date.getMinutes());
        
        expect(result).toBe("YYRYYRYYRXX");   
      });

      it("should return YYRYYRYYRXX when given 49 minutes", function() {
        const date = new Date();
        date.setMinutes(49);
      
        const result = clock.berlinClock5Minutes(date.getMinutes());
        
        expect(result).toBe("YYRYYRYYRXX");   
      });






    
    
    



})
