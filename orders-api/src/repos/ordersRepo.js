const { Client } = require('@elastic/elasticsearch')

const client = new Client({
    node: 'https://elastic:MLVp8D9AJQ4Y7lhO1FGC5jbQ@b4f5e59d9b0543aa82da38bff878f665.us-central1.gcp.cloud.es.io'
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

