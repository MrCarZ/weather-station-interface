export const mapDataToArrayPosition = (newTimestamp, isLightningStrike) => {
    const newTimestampAsDate = new Date(newTimestamp);

    if (isLightningStrike) {
        return newTimestampAsDate.getHours() * 60;
    }
    return newTimestampAsDate.getHours() * 60 + newTimestampAsDate.getMinutes();
}
