const { Client } = require('@elastic/elasticsearch')

const client = new Client({
    node: '<ip>'
});


const setOrder = async (order) => {
    if (!(await client.indices.exists({ index: 'user-orders' }))) {
        await client.indices.create({
            index: 'user-orders'
        });
    }

    await client.index({
        index: 'user-orders',
        document: order,
    })

    return;
};


const getOrders = async () => {
  
    
    const result = await client.search({
        index: "user-orders"
      });

    return result;
};
module.exports = {
    setOrder,
    getOrders
};

