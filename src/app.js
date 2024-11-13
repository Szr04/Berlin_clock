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
        if (this.isUnder5minutes(minutes)) return "XXXXXXXXXXX";
        if (this.isBetween5and9(minutes)) return "YXXXXXXXXXX";
        if (this.isBetween10and14(minutes)) return "YYXXXXXXXXX";
        if (this.isBetween15and19(minutes)) return "YYRXXXXXXXX";
        if (this.isBetween20and24(minutes)) return "YYRYXXXXXXX";
        if(this.isBetween25and29(minutes)) return "YYRYYXXXXXX";
        if(this.isBetween30and34(minutes)) return "YYRYYRXXXXX";
        if(this.isBetween35and39(minutes)) return "YYRYYRYXXXX";
        if(this.isBetween40and44(minutes)) return "YYRYYRYYXXX";
        if(this.isBetween45and49(minutes)) return "YYRYYRYYRXX";
        if(this.isBetween50and54(minutes)) return "YYRYYRYYRYX";
        if(this.isBetween55and59(minutes)) return "YYRYYRYYRYY";
    }

    isUnder5minutes(minutes){
        return minutes < 5 
    }
    isBetween5and9(minutes){
        return minutes >= 5 && minutes <= 9;
    }
    isBetween10and14(minutes){
        return minutes >=10 && minutes <= 14;
    }

    isBetween15and19(minutes){
        return minutes >=15 && minutes <= 19;
    }

    isBetween20and24(minutes){
        return minutes >=20 && minutes <= 24;
    }

    isBetween25and29(minutes){
        return minutes >=25 && minutes <= 29;
    }

    isBetween30and34(minutes){
        return minutes >=30 && minutes <= 34;
    }

    isBetween35and39(minutes){
        return minutes >=35 && minutes <= 39;
    }

    isBetween40and44(minutes){
        return minutes >=40 && minutes <=44;
    }

    isBetween45and49(minutes){
        return minutes >=45 && minutes <=49;
    }

    isBetween50and54(minutes){
        return minutes >=50 && minutes <=54;
    }

    isBetween55and59(minutes){
        return minutes >=55 && minutes <=59;
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