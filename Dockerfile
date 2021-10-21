FROM node:10

WORKDIR /opt/bits/react-ui
COPY . /opt/bits/react-ui/
RUN npm install
EXPOSE 3000
CMD ["npm", "start"]