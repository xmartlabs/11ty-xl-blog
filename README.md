
## 11ty 0.11.0

### Build
npx @11ty/eleventy

### Serve locally the static site
npx @11ty/eleventy --serve

### Automatically run when input template files change.
### Useful if you have your own web server.
npx @11ty/eleventy --watch

# Find out the most up-to-date list of commands (there are more)
npx @11ty/eleventy --help


### Shhhhh—Don’t log so much to the console
npx @11ty/eleventy --quiet


### Runs without writing to the file system. Useful when debugging.
npx @11ty/eleventy --dryrun


### DEBUG
DEBUG=Eleventy* npx @11ty/eleventy


### Glup tasks
gulp --tasks


## build css from scss and create static site
npm run build
