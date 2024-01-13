# using node image for runtime
FROM node:latest

WORKDIR /consult-frontend

# copy package.json into container working dir to do npm install later
# copy source code 
COPY . ./

# command triggers while we build the docker image
RUN npm install

# EXPOSE 3000 only for documentation would need to -p 3000:3000 on cli
EXPOSE 3000

# start the application command triggers while we launch the created docker image
CMD ["npm", "start"]