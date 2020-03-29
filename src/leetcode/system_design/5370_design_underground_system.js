var UndergroundSystem = function() {
  this.passengersInfo = {}
  this.stationsInfo = {}
};

/**
 * @param {number} id
 * @param {string} stationName
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkIn = function(id, stationName, t) {
  this.passengersInfo[id] = {
    startStationName: stationName,
    startTime: t
  }
};

/**
 * @param {number} id
 * @param {string} stationName
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkOut = function(id, stationName, t) {
  const startTime = this.passengersInfo[id].startTime
  const costTime = t - startTime
  if (this.stationsInfo[stationName] === undefined) {
    this.stationsInfo[stationName] = {
      from: {
      }
    }
  }
  if (this.stationsInfo[stationName].from[stationName] === undefined) {
    this.stationsInfo[stationName].from[stationName] = {
      timeArr: [],
      averageTime: 0,
    }
  }
  this.stationsInfo[stationName].from[stationName].timeArr.push(costTime)
  let sum = 0
  this.stationsInfo[stationName].from[stationName].timeArr.forEach(item => {
    sum += item
  })
  this.stationsInfo[stationName].from[stationName].averageTime = sum / this.stationsInfo[stationName].from[stationName].timeArr.length
};

/**
 * @param {string} startStation
 * @param {string} endStation
 * @return {number}
 */
UndergroundSystem.prototype.getAverageTime = function(startStation, endStation) {
  function traversal () {

  }
  
};

/**
 * Your UndergroundSystem object will be instantiated and called as such:
 * var obj = new UndergroundSystem()
 * obj.checkIn(id,stationName,t)
 * obj.checkOut(id,stationName,t)
 * var param_3 = obj.getAverageTime(startStation,endStation)
 */