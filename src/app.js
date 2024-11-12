export class BerlinClock {
    berlinClockSingleMinute(minutes) {
        if (minutes === 0 || minutes === 5) return "XXXX";
        if (this.hasAnOffsetOf1(minutes)) return "YXXX";
        if (this.hasAnOffsetOf2(minutes)) return "YYXX";
        if (minutes === 3) return "YYYX";
        if (minutes === 4) return "YYYY";
        
        return "XXXX"; 
    }

    hasAnOffsetOf1(minutes) {
        return minutes % 5 === 1;
    }

    hasAnOffsetOf2(minutes) {
        return minutes % 5 === 2;
    }


}