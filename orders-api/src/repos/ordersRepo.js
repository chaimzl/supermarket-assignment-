const { Client } = require('@elastic/elasticsearch')

const client = new Client({
    node:'<ip>'
});


const setOrder = async (order) => {
    if (!(await client.indices.exists({ index: 'orders' }))) {
        await client.indices.create({
            index: 'orders'
        });
    }

    await client.index({
        index: 'orders',
        document: order,
    })

    return;
};


const getOrders = async () => {
  
    
    const result = await client.search({
        index: "orders"
      });

    return result;
};
module.exports = {
    setOrder,
    getOrders
};

