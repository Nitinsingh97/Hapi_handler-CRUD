import db from '/home/vvdn/Desktop/hapi-pgg/core/db';
  var activitylist  = ({
    create: async( {activity}) => {
    return db('todolist').insert( { activity}).returning('*')
    },


    find : async({ activitynum}) => {
      console.log(activitynum)
    return db('todolist').select('*').where({activitynum}).first()
    },

    findall : async() => {
    return db('todolist').select('*')
    },

    edit : async({activity , activitynum}) => {
    return db('todolist').where({activitynum}).update({activity}).returning('activity')
    },

    del : async({ activitynum}) => {
    return db('todolist').where({activitynum}).del('*').returning('*')
    }

    })

export default activitylist;