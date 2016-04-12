# List issues

Chrome extension to list all open issues from the repositories of the logged in user.

![Screenshot](https://raw.githubusercontent.com/spite/list-issues/master/images/screenshot.png "Screenshot")

[Click here to install from Chrome Store](https://chrome.google.com/webstore/detail/list-issues/oidjbkhcaokjgihpbcbfhlmfegagohal)

# How it works

The extension doesn't use Github API or OAuth. It simply fetches github.com, tries to get the currently logged in user, loads the repositories page and loads an issues page with a query containing all the user's repos.

To do that the extension requires access to github.com, and the permissions for that are stated like this: 

![Permissions](https://raw.githubusercontent.com/spite/list-issues/master/images/permissions.png "Permissions")
Even though it's only used to read two pages. 

The extension won't work if there isn't a logged in session.

#### License ####

MIT licensed

Copyright (C) 2016 Jaume Sanchez Elias, http://www.clicktorelease.com