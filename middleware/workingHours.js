const date = new Date();
const day = date.getUTCDay();
const hours = date.getUTCHours();



const isWorking = (req, res, next) => {
    
  ((day != 6 && day != 7) && ( 17 <= hours >=9) )? 

    next() :
    
      res.status(401).sendFile(__dirname + "/Closed.html");
    
  };
  
  // export the function
  module.exports = isWorking;