export const trainsDatabase = [
  {
    trainNumber: '12951',
    trainName: 'Mumbai Central - New Delhi Rajdhani Express',
    origin: 'MMCT',
    destination: 'NDLS',
    departureTime: '17:00',
    arrivalTime: '08:32',
    duration: '15h 32m',
    status: 'ON_TIME', // ON_TIME, DELAYED
    delayMinutes: 0,
    schedule: [
      { stationCode: 'MMCT', stationName: 'Mumbai Central', arrival: 'Source', departure: '17:00', distance: '0 km', day: 1, platform: '1' },
      { stationCode: 'BVI', stationName: 'Borivali', arrival: '17:22', departure: '17:24', distance: '30 km', day: 1, platform: '6' },
      { stationCode: 'ST', stationName: 'Surat', arrival: '19:43', departure: '19:48', distance: '263 km', day: 1, platform: '1' },
      { stationCode: 'BRC', stationName: 'Vadodara Jn', arrival: '21:06', departure: '21:16', distance: '392 km', day: 1, platform: '2' },
      { stationCode: 'RTM', stationName: 'Ratlam Jn', arrival: '00:25', departure: '00:28', distance: '653 km', day: 2, platform: '5' },
      { stationCode: 'KOTA', stationName: 'Kota Jn', arrival: '03:15', departure: '03:20', distance: '920 km', day: 2, platform: '1' },
      { stationCode: 'NDLS', stationName: 'New Delhi', arrival: '08:32', departure: 'Destination', distance: '1386 km', day: 2, platform: '3' }
    ],
    currentStationIndex: 3 // Mock live location (between BRC and RTM)
  },
  {
    trainNumber: '12004',
    trainName: 'New Delhi - Lucknow Swarna Shatabdi Express',
    origin: 'NDLS',
    destination: 'LJN',
    departureTime: '06:10',
    arrivalTime: '12:40',
    duration: '06h 30m',
    status: 'DELAYED',
    delayMinutes: 25,
    schedule: [
      { stationCode: 'NDLS', stationName: 'New Delhi', arrival: 'Source', departure: '06:10', distance: '0 km', day: 1, platform: '9' },
      { stationCode: 'GZB', stationName: 'Ghaziabad Jn', arrival: '06:48', departure: '06:50', distance: '25 km', day: 1, platform: '2' },
      { stationCode: 'ALJN', stationName: 'Aligarh Jn', arrival: '07:48', departure: '07:50', distance: '131 km', day: 1, platform: '3' },
      { stationCode: 'CNB', stationName: 'Kanpur Central', arrival: '11:20', departure: '11:25', distance: '440 km', day: 1, platform: '9' },
      { stationCode: 'LJN', stationName: 'Lucknow Ne', arrival: '12:40', departure: 'Destination', distance: '512 km', day: 1, platform: '6' }
    ],
    currentStationIndex: 2 // Mock live location
  }
];

export const searchTrain = (query) => {
  return trainsDatabase.find((t) => 
    t.trainNumber === query || t.trainName.toLowerCase().includes(query.toLowerCase())
  );
};
