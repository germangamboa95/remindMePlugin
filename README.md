# Track your commit Goal

This vanilla JS plug in allows you to display a widget with your daily commit goals on your website. 

## Usage 

Initialize plug-in with config object: 

```javascript

    const congfig = {
        userName: 'germangamboa95', // Github user name.
        dailyGoal: 5, // Daily commit goal. 
        el: 'remindMe-hook' // HTML element where to render widget

    }
    remindMe.init(congfig);
```

## Upcoming Features: 

- [ ] Be able to track Daily, Weekly, Monthly and Yearly Goals.
- [ ] Add styling hooks to the widget. 
- [ ] Add option to display results as progress bars.