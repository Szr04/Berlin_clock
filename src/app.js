export class BerlinClock {
    berlinClockSingleMinute(minutes) {
        if (this.hasAnOffsetOf0(minutes)) return "XXXX";
        if (this.hasAnOffsetOf1(minutes)) return "YXXX";
        if (this.hasAnOffsetOf2(minutes)) return "YYXX";
        if (this.hasAnOffsetOf3(minutes)) return "YYYX";
        if (this.hasAnOffsetOf4(minutes)) return "YYYY";
        
        return "XXXX"; 
    }

    berlinClock5Minutes(minutes){
        if (this.isUnder5minutes(minutes)) return "XXXXXXXXXXX"
    }

    isUnder5minutes(minutes){
        return minutes < 5 
    }

    hasAnOffsetOf0 (minutes){
        return minutes % 5 ===0;
    }

    hasAnOffsetOf1(minutes) {
        return minutes % 5 === 1;
    }

    hasAnOffsetOf2(minutes) {
        return minutes % 5 === 2;
    }

    hasAnOffsetOf3(minutes) {
        return minutes % 5 === 3;
    }

    hasAnOffsetOf4(minutes) {
        return minutes % 5 === 4;
    }

}