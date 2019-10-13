export const type = 'findRailsResults';

const findRailsResults = text => {
    return {
        type,
        payload: text,
    };
};

export default findRailsResults;