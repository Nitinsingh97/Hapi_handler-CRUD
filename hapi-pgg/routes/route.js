import activitylist from '/home/vvdn/Desktop/hapi-pgg/activitylist';
import Hapi from 'hapi'
import Inert from 'inert'
import Joi from 'joi'
import config from '../config'
const server = Hapi.server(config.Hapi); 
  

var routes = [
  
  // Save activity
  {
      method: 'POST',
      path: '/save',
      config: {
        auth: false,
        validate: {
          payload: {
            activity : Joi.string().required().description('activity')
            
          }
        },
        description: 'save data'
      },
      handler: async(request, handler) =>  {
        try {
          var params =request.payload;
         
        
         var activity = params.activity
          
          //let activity = await request.payload.activity  
          
          let todolist = await  activitylist.create({activity : activity}) 
          return handler.view('index',{ successtatus: '!!!SUCCESSFULLY SAVED!!!'});
          // return handler.response({
          //   statusCode: 200,
          //   status: true,
          //   error: "",
          //   message: "Activities saved",
          //   data: todolist
          // })
  
        } 
        catch (e) {
               console.log(e)
            return handler.response({
              statusCode:405,
              status:false,
              error: e,
              message:"",
              data:null
            })
  
          }
        }
      },
  
  // Home route
      {
        method: 'GET',
        path: '/',
        config: {
          auth: false,
          description: 'index'
        },
        handler: async(request, handler) =>  {
          try{
           
            return handler.view('index',{});
          } catch (e) {
            
              return handler.response({
                statusCode:405,
                status:false,
                error: e,
                message:"",
                data:null
              })
    
            }}
          },
  
  
  // Fetch all activities
  {
      method: 'GET',
      path: '/lists',
      config: {
        auth: false,
        description: 'show data'
      },
      handler: async(request, handler) =>  {
        try {
         var params =request.query;
         var activitynum = params.activitynum
         // let activitynum =await encodeURIComponent(request.params.activitynum)
          console.log(activitynum)
         let showlist = await activitylist.find({ activitynum : activitynum})
         console.log(showlist)
         return handler.view('index',showlist);
         //return handler.response(showlist)  
        } catch (e) {
          
            return handler.response({
              statusCode:405,
              status:false,
              error: e,
              message:"",
              data:null
            })
  
          }}
        },
  
  
        {
          method: 'GET',
          path: '/list',
          config: {
            auth: false,
            description: 'show all data'
          },
          handler:async (request, handler) =>  {
            try {
             
             let showlist = await activitylist.findall()
            
           // return handler.response(showlist[0])
           
          return handler.view('index',{foo :showlist});
            } catch (e) {
              
                return handler.response({
                  statusCode:405,
                  status:false,
                  error: e,
                  message:"",
                  data:null
                })
      
              }}
            },
      
      
  {
      method: 'POST',
      path: '/edit',
      config: {
        auth: false,
        validate: {
          payload: {
            activitynum : Joi.string().required().description('activitynum'),
             activity : Joi.string().required().description('activity')
            
          }
        },
        description: 'edit data'
      },
      handler: async(request, handler)  => {
        try {
         
          // let activitynum =await  encodeURIComponent(request.params.activitynum)
          // let activity = await request.payload.activity
          var params =request.payload;
          console.log(request.payload)
         var activitynum = params.activitynum
         var activity = params.activity
          let todolist = await activitylist.edit({activity : activity, activitynum : activitynum}) 
          console.log(todolist)
          return handler.view('index',{ status: '!!!SUCCESSFULLY UPDATED!!!'});
          // return handler.response({
          //   statusCode: 200,
          //   status: true,
          //   error: "",
          //   message: "Edit saved",
          //   data: todolist
          // })
  
        } catch (e) {
          
            return handler.response({
              statusCode:405,
              status:false,
              error: 'ERROR FOUND!',
              message:"",
              data:null
            })
  
          }}
        },
  
  
  {
      method: 'GET',
      path: '/del',
      config: {
        auth: false,
        
        description: 'delete data'
      },
      handler: async(request, handler)  => {
        try {
          console.log(request)   
         // let activitynum = await encodeURIComponent(request.params.activitynum)
         var params =request.query;
         var activitynum = params.activitynum
             
          let todolist = await activitylist.del({ activitynum : activitynum}) 
          return handler.view('index',{ delstatus: '!!!SUCCESSFULLY DELETED!!!'});
         
          // return handler.response({
          //   statusCode: 200,
          //   status: true,
          //   error: "",
          //   message: "Sucessfully Deleted!",
          //   data: null
          // })
  
        } catch (e) {
          
            return handler.response({
              statusCode:405,
              status:false,
              error: 'ERROR FOUND!',
              message:"",
              data:null
            })
  
          }
  
      }
    }]
   
    export default server;
    exports.routes=routes;
    