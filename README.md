# springfield-rec-contacts
Contact list for the Springfield Recreation centre!

Built with React JS, all data is currently being stored in the React state. The app just needs to be paired with a small backend to consume new contacts and store them in either a document based DB or a relational DB. Python or Node paired with MongoDB or SQlite would be perfect. Some basic error checking is implemented in the React onSubmit event, preventing garbage input from making it through to the hypothetical backend. Rendering of the contact list is decoupled allowing for a proper 'Admin' view to be implemented with auth, and other features without the need to rework any existing code.

Hosted on Heroku at: https://young-headland-73121.herokuapp.com/

Created with:
- https://github.com/facebook/create-react-app
- https://reactjs.org/
- https://www.heroku.com/platform

This was my first experience developing with React, and I am definitely interested in working with it more in the future.
