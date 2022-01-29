# Insomnia parser

I wanted to monitor a list of used items in insomnia, and I wanted to be notified when a new listing was published. So, I made this simple nodejs project to parse the Insomnia website and send me an email when a new listing is published.

The core requirement for this to work is a sendgrid account, because sendgrid is used to send all the emails. The app will create a local file named `listings.json` which will contain all the listings that have been published and emailed to you. Whenever a new listing is published, the app will send an email to you and add it to the local storage, so on the next parse it will not be sent again.

The application is configured by an env file, with the following variables:

```
export SENDGRID_API_KEY='API_KEY_HERE'
export URL='INSOMNIA_URL_HERE'
export MAILTO='mailto email'
export FROM='from email'
export SUBJECT='email subject'
```

I believe it is self explanatory, so feel free to use it as you might!

P.S.: This README.md was 98% generated by Github's CoPilot, I only gave a few words for context.
