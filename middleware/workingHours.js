const date = new Date();
const day = date.getUTCDay();
const hours = date.getUTCHours();

const isWorking = (req, res, next) => {
  if ((day != 6 && day != 7)  && ( hours >=9 ||  17 <= hours ) ) {
    next();
    
  } else {
    res.status(401).sendFile(__dirname + "/Closed.html");
  }
};
console.log(hours);
// export the function
module.exports = isWorking;
