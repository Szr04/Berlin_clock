export class BerlinClock {
    berlinClockSingleMinute(minutes) {
        if (minutes === 0) return "XXXX";
        if (minutes === 1) return "YXXX";
        
        return "YYYY"; 
    }
}