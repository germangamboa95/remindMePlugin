
const remindMe = (function () {

  const times = {
    dailyGoal:  86400000,
    weeklyGoal: 604800000,
    monthlyGoal: 2592000000,
    yearlyGoal: 31556952000
  }

  const _currDate = Date.now();
  const baseUrl = "https://api.github.com/users/";
  const _data = {
    config: {},
    raw_data: [],
    cleaned_data: [],
    metrics: []
  };



  const _getLastXhrs = (data, hrs) =>
    data
      .map(event => Date.parse(event.created_at))
      .filter(item => _currDate - item < hrs);



  const _drawRes = () => {
    const hook = document.querySelector('#' + _data.config.el);
    const el = document.createElement('ul');
    _data.cleaned_data.forEach((item, index) => {
      const key = Object.keys(item).toString();
      // Regex expression using lookahead and lookbehind. 
      el.innerHTML += `<li>Your ${key.split(/(?<=[a-z])(?=[A-Z])/).join(' ').toLowerCase()} is ${_data.metrics[index]}% Complete!</li>`
    })

    hook.appendChild(el);
  }

  const _crunchData = async () => {
    _data.raw_data = await new Promise((resolve, reject) => {
      fetch(`${baseUrl}${_data.config.userName}/events`)
        .then(res => res.json())
        .then(res => resolve(res))
        .catch(err => reject(err));
    });

    for (let item in _data.config.goals) {
      _data.cleaned_data.push(
        { [item] : _getLastXhrs(_data.raw_data, times[item])}
      );
    }

    console.log(_data);

    _data.metrics = _data.cleaned_data.map(item => {
      const key = Object.keys(item)
      return (item[key].length / _data.config.goals[key] * 100).toFixed(2)
    });

    _drawRes();
  };

  const init = data => {
    //  Throw Err if config object is not passed in. 
    try {
      if (!data) throw new ReferenceError('config object cannot be null');
      _data.config = data;

      _crunchData();
    }

    catch (err) {
      console.log(err)
    }

  };

  return {
    init: init
  };
})();

