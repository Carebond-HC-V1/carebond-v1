# Use the latest Keycloak image
FROM quay.io/keycloak/keycloak:latest

# Set environment variables
ENV KC_DB=mysql \
    KC_DB_URL="jdbc:mysql://database-1.c38gskg283wz.ap-south-1.rds.amazonaws.com/carebondKC" \
    KC_DB_USERNAME="admin" \
    KC_DB_PASSWORD="DaofY4zYWN4bSJVKQ3ld" \
    KC_HOSTNAME="database-1.c38gskg283wz.ap-south-1.rds.amazonaws.com" \
    KEYCLOAK_ADMIN=admin \
    KEYCLOAK_ADMIN_PASSWORD=password \
    KC_HTTP_ENABLED=true

# Switch to root for installing utilities
USER root

# # Install Git to fetch realm and theme files
# RUN microdnf install git -y \
#     && microdnf clean all

# # Create a directory for themes and realm config
# RUN mkdir -p /opt/keycloak/data/import && mkdir -p /opt/keycloak/themes

# # Clone the repository containing the theme and realm JSON
# RUN git clone https://github.com/your-repo/keycloak-config.git /tmp/keycloak-config \
#     && cp -r /tmp/keycloak-config/themes/* /opt/keycloak/themes/ \
#     && cp /tmp/keycloak-config/realm.json /opt/keycloak/data/import/realm.json \
#     && rm -rf /tmp/keycloak-config

# Set the working directory
WORKDIR /opt/keycloak

# Expose ports
EXPOSE 8080

# Start Keycloak with the imported realm and custom theme
# ENTRYPOINT ["/opt/keycloak/bin/kc.sh", "start-dev", "--import-realm"]
 ENTRYPOINT ["/opt/keycloak/bin/kc.sh", "start-dev", "--http-host=0.0.0.0"]
