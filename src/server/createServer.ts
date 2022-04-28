import { createServer } from 'miragejs'

createServer({
  routes () {
    this.get('/api/houses', () => ({
      data: [
        {
          id: 1,
          name: 'Casa na praia',
          address: {
            neighbourhood: 'Vila Expedicionários',
            street: 'Rua dos Expedicionários'
          },
          area: 100,
          images: [
            'https://images.unsplash.com/photo-1616046229478-9901c5536a45?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
            'https://images.unsplash.com/photo-1616137466211-f939a420be84?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80',
            'https://images.unsplash.com/photo-1616486701797-0f33f61038ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'
          ],
          price: 870,
          rooms: {
            bedrooms: 2
          }
        },
        {
          id: 2,
          name: 'Apartamento com sobrado e 2 quartos',
          address: {
            neighbourhood: 'Vila Coronel Horta',
            street: 'Rua Capitão Teodoro Sampaio'
          },
          area: 120,
          images: [
            'https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
            'https://images.unsplash.com/photo-1604014238312-ccb88904fa7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
            'https://images.unsplash.com/photo-1600607687644-c7171b42498f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
          ],
          price: 1200,
          rooms: {
            bedrooms: 2
          }
        },
        {
          id: 3,
          name: 'Casa de campo tranquila',
          address: {
            neighbourhood: 'Bairro Dos Camponeses',
            street: 'Rua dos Coqueiros & Palmares'
          },
          area: 120,
          images: [
            'https://images.unsplash.com/photo-1585773690161-7b1cd0accfcf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
            'https://images.unsplash.com/photo-1636288585507-087763fb7fad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
            'https://images.unsplash.com/photo-1585129467345-f0f5fb305cbc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
          ],
          price: 1150,
          rooms: {
            bedrooms: 3
          }
        },
        {
          id: 4,
          name: 'Casa no centro | perto do metrô',
          address: {
            neighbourhood: 'Cidade Nova',
            street: 'Rua São Francisco'
          },
          area: 200,
          images: [
            'https://images.unsplash.com/photo-1459535653751-d571815e906b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1468&q=80',
            'https://images.unsplash.com/photo-1463741408080-b210ee5227dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1485&q=80',
            'https://images.unsplash.com/photo-1566681990869-2ab77a7b6461?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
          ],
          price: 820,
          rooms: {
            bedrooms: 1
          }
        }
      ]
    }))
  }
})
