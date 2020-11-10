# Schemaspy

Run it with 
```
docker run --network="host" -v "${PWD}/output:/output" -v "${PWD}/config:/config" -v "${PWD}/meta:/meta" schemaspy/schemaspy -configFile /config/schemaspy.properties -meta /meta
```
against a running SORMAS postgres database to generate a static website.

Once the command succeeds, open `output/public/index.html` with your browser and start exploring.

Configuration and connection settings are under [config](./config/).

Comments and documentation for the database, tables and columns go into `meta/public.meta.xml`. The information there is
incorporated in the final static website.
