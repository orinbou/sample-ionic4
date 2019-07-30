FROM beevelop/ionic:v4.12.0
USER root:root
RUN chmod 777 /
RUN chmod 777 /root
RUN chmod 777 -R /opt/node/lib/node_modules
