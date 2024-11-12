export class BerlinClock {
    berlinClockSingleMinute(minutes) {
        if (minutes === 0 || minutes === 5) return "XXXX";
        if (minutes === 1) return "YXXX";
        if (minutes === 2) return "YYXX";
        if (minutes === 3) return "YYYX";
        if (minutes === 4) return "YYYY";
        
        return "XXXX"; 
    }
}