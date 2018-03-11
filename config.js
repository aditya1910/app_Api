let environmentDetails = {};

console.log('in local');
environmentDetails = {
mongoUrl: "mongodb://localhost:27017/appDb",
}


module.exports = {
  mongoUrl: environmentDetails.mongoUrl
}
