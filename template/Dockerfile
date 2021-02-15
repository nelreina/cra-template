FROM nginx:alpine
COPY default.conf /etc/nginx/conf.d/default.conf
COPY ./build /usr/share/nginx/html/back-office

EXPOSE 80
CMD ["nginx","-g","daemon off;"]