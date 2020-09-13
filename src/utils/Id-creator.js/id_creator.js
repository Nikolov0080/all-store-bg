
const ID = () => {
    return '-' + Math.random().toString(6).substr(2, 9);
};

export default ID;