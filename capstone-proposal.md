Name of Student: Bryce Bresnan


Name of Project: ReddAlert 


Project's Purpose or Goal: This React based app uses API calls to monitor selected subreddits for a user defined ratio of users online to total registered users and notifies the user once that ratio has been surpassed. Optionally, the user can queue up posts to be launched using the active user ratio as a trigger thereby giving the post the greatest opportunity for engagement. Additional functionality will include analytics on previous posts and subreddit activity history allowing the user to optimize their posting strategy by making informed predictions. 


List the absolute minimum features the project requires to meet this purpose or goal:
* CRUD Functionality for Subreddits
* Authentication
* Call the Reddit API for the number of people online and number of people subscribed to a chosen subreddit
   * Do this once per minute
   * IF the active user ratio is over the user defined set point:
      * Notify the user by email or text message
         * Consider a strategy to handle over-notification issues.
            * Do not notify for one hour after first notification
               * UNLESS:Tier structure: at first set point then AGAIN if at 2x the set point
            * Blackout times, ie. no notifications between 1am and 7am
         * Mute Notifications


What tools, frameworks, libraries, APIs, modules and/or other resources (whatever is specific to your track, and your language) will you use to create this MVP? List them all here. Be specific.
* React
* Bulma for React (CSS Styling)
* Reddit API
* Auth0


If you finish developing the minimum viable product (MVP) with time to spare, what will you work on next? Describe these features here: Be specific.


* Edit functionality for ratio notifications
* Edit notification settings (how often, what times, what number or email...etc)
* Keep track of historical data in order to make graphs to identify trends 
* Deploy for public use
* Queue posts to be launched automatically by ratio trigger. 


What additional tools, frameworks, libraries, APIs, or other resources will these additional features require?
* Firebase
* Reddit Analytics API’s