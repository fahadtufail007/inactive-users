const user = {
  name: 'Qasim Asad',
  age: '25',
  city: 'san francisco',
  lastActivity: new Date().getTime(),
};

const inactiveFirstStage = () => {
  console.log('User has been inactive for the past 1-2 minutes');
};

const inactiveSecondStage = () => {
  console.log('User has been inactive for the past 3-4 minutes');
};

const inactiveThirdStage = () => {
  console.log('User has been inactive for the past 5-6 minutes');
};

function getDateDiffInMins(date1, date2) {
  const diffMs = Math.abs(date1 - date2);
  return diffMs / 1000 / 60;
}

// this is the main method that acts like a worker and runs every 1 minute
setInterval(function () {
  // please write your code here
  const minutesInActive = getDateDiffInMins(new Date(), user.lastActivity);
  const diffCleansed = minutesInActive % 6;
  if (diffCleansed <= 2) {
    inactiveFirstStage();
  } else if (diffCleansed <= 4) {
    inactiveSecondStage();
  } else if (diffCleansed <= 6) {
    inactiveThirdStage();
  }
}, 1000);
