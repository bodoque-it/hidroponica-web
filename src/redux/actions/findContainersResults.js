export const type = 'findContainersResults';

const findContainersResults = text => {
    return {
        type,
        payload: text,
    };
};

export default findContainersResults;