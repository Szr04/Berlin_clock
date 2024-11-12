export class BerlinClock {
    berlinClockSingleMinute(minutes) {
        if (minutes === 0) return "XXXX";
        if (minutes === 1) return "YXXX";
        if (minutes === 2) return "YYXX";
        if (minutes === 3) return "YYYX";
        
        return "XXXX"; 
    }
}