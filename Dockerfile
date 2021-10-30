FROM tomcat
WORKDIR /usr/local/tomcat/webapps
RUN mkdir ROOT
ADD * ROOT/

