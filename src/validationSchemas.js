export const schema = {
    body: {
        name: { type: 'string', min: 3, max: 50 },
        price: { type: 'string' },
        description: { type: 'string', min: 10, max: 1000 },
    },
};