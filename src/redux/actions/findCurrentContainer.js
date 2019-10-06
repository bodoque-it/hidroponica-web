export const type = 'findCurrentContainer';

const findCurrentContainer = (itemId) => ({
    type,
    payload: +itemId,
});

export default findCurrentContainer;