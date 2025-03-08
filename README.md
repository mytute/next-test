
1. create next.js application   
```bash 
$ npx create-next-app@latest
# add project name in the promnt
# accept the default settings while installing

# Would you like to use TypeScript? … No / Yes  (YES)
# Would you like to use ESLint? … No / Yes (YES)
# Would you like to use Tailwind CSS? … No / Yes (YES)
# Would you like your code inside a `src/` directory? … No / Yes (NO)
# Would you like to use App Router? (recommended) … No / Yes (YES)
# Would you like to use Turbopack for `next dev`? … No / Yes (NO)
# Would you like to customize the import alias (`@/*` by default)? … No / Yes (NO)
```

Docker builds images in layers, and each command in a Dockerfile creates a new cached layer. If a layer hasn’t changed between builds, Docker reuses it instead of rebuilding.   
If your dependencies don’t change (package.json stays the same), the npm install layer is cached and don't run "RUN npm install" command.  
If we remove "COPY package*.json ./" line and put "RUN npm run build" line under "COPY . ." line then the entire Docker build cache is invalidated. Then docker reinstalls all dependencies unnecessarily on every build and this increases build time and wastes resources.   

2. run the next.js application    
```bash  
$ cd hello-world   
$ npm run dev
```

3. run with docker
> Dockerfile   
```Dockerfile
# Use official Node.js LTS image
FROM node:18-alpine

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json first (for better Docker cache usage)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire project
COPY . .

# Build the project
RUN npm run build

# Expose port 3000
EXPOSE 3000

# Start the application
CMD ["npm", "run", "start"]

```
build the docker image   
```bash
$ sudo docker -t my-next-app .   # "my-next-app" will be image name
$ sudo docker images  # to see list of images   
```
run create docker image   
```bash
$ sudo docker run -p 3000:3000  --name next-app  my-next-app
```
