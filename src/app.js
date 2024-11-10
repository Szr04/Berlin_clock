export class BerlinClock{
    convertTimeStamp() {
        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();

        return this.convertBerlinClock(hours,minutes,seconds);
    }

    convertBerlinClock(hours, minutes, seconds) {
        return {
            secondsLight: this.getSecondsLight(seconds),
            fiveHourBlocks: this.getFiveHourBlocks(hours),
            simpleHours: this.getSimpleHours(hours),
            fiveMinuteBlocks: this.getFiveMinuteBlocks(minutes),
            simpleMinutes: this.getSimpleMinutes(minutes)
        };
    }
}