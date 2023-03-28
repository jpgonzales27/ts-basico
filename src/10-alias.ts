(() => {
  (() => {
    type UserId = string | number;
    let userId: UserId;

    function greeting(userId: UserId) {
      if (typeof userId === 'string') {
        console.log(`String: ${userId.toLowerCase()}`);
      } else {
        console.log(`number: ${userId.toFixed(1)}`);
      }
    }

    greeting('hello');
    greeting(12.33);
  })();
})();
