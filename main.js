
const remindMe = (function() {
  const dayLen = 86400000;
  const _dayLen = 86400000;
  const _currDate = Date.now();
  const baseUrl = "https://api.github.com/users/";
  const _data = {
    config: {},
    raw_data: [],
    cleaned_data: [],
    metrics: {}
  };

  const _getLast24hrs = data =>
    data
      .map(event => Date.parse(event.created_at))
      .filter(item => _currDate - item < _dayLen);



  const _drawRes = () => { 
    const hook = document.querySelector('#'+_data.config.el);
    const el = document.createElement('ul'); 
    el.innerHTML = 
    `
    <li>You Current Goal is: ${_data.config.dailyGoal}</li>
    <li>So far you have hit: ${_data.metrics.percentage_daily}% of your goal.</li>
    `;

    hook.appendChild(el);
  }

  const _crunchData = async () => {
    _data.raw_data = await new Promise((resolve, reject) => {
      fetch(`${baseUrl}${_data.config.userName}/events`)
        .then(res => res.json())
        .then(res => resolve(res))
        .catch(err => reject(err));
    });

    _data.cleaned_data = _getLast24hrs(_data.raw_data);
    _data.metrics.percentage_daily = (_data.cleaned_data.length / _data.config.dailyGoal) * 100;
    _drawRes();
  };

  const init = data => {
    _data.config = data;
    _crunchData();
  };

  return {
    init: init
  };
})();

