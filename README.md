# Track your commit Goal

This vanilla JS plug in allows you to display a widget with your daily commit goals on your website. 

## Usage 

Initialize plug-in with config object: 

```javascript

    const congfig = {
        userName: 'germangamboa95', // Github user name.
        goals: {
               dailyGoal: 5, // Daily commit goal. 
               weeklyGoal: 35 // Weekly commit goal. 
        },
        el: 'remindMe-hook' // HTML element where to render widget

    }
    remindMe.init(congfig);
```

### goal types: 

    You can currently add in 'dailyGoal', 'weeklyGoal', 'monthlyGoal', and 'yearlyGoal' in the goals object as params. 


## Upcoming Features: 

- [x] Be able to track Daily, Weekly, Monthly and Yearly Goals.
- [ ] Add styling hooks to the widget. 
- [ ] Add option to display results as progress bars.

## Dev Notes:

    - List is now displaying goals properly. I need to add more features to make it worth it.
    - I need to make sure I return more than the last 30 commits from the github ajax call.  
