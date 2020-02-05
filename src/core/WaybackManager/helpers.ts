const convertDateFromWaybackItemReleaseDate = (dateString = '') => {
    const dateParts = dateString.split('-');
    const year = +dateParts[0];
    const mon = +dateParts[1] - 1;
    const day = +dateParts[2];
    return new Date(year, mon, day);
};

// the title of wayback item is like "World Imagery (Wayback 2014-02-20)",
// therefore need to call this method to extract "2014-02-20" from string
const extractDateFromWaybackItemReleaseDate = (waybackItemReleaseDate = '') => {
    
    const regexpYYYYMMDD = /\d{4}-\d{2}-\d{2}/g;
    const results = waybackItemReleaseDate.match(regexpYYYYMMDD);

    const dateString = results.length ? results[0] : waybackItemReleaseDate;
    const datetime = convertDateFromWaybackItemReleaseDate(dateString);
    
    return {
        releaseDateLabel: dateString,
        releaseDatetime: datetime,
    };
};

export { extractDateFromWaybackItemReleaseDate };
