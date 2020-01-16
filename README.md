# spelunking

Spelunking around in Splunk.

## Running Locally

- `make up`
    - Splunk will be running at `http://localhost:8000/` (`admin:Password#123`)
    - The log producer will be running at `http://localhost:5555` 
- Add a new [`http input`](http://localhost:8000/en-US/manager/launcher/adddatamethods/selectsource?input_type=http&input_mode=1)
- Update global settings to enable tokens and uncheck "use SSL"
- Uncomment the `noise-maker` service in `docker-compose.yml` and set `splunk-token` to the http input token
- `docker-compose up -d noise-maker`
- Search for logs from the container by filtering with `host="docker-desktop"`

## Links

- [`splunk-ansible`](https://splunk.github.io/splunk-ansible/)
    - [env vars](https://splunk.github.io/splunk-ansible/ADVANCED.html#inventory-script)
- [`splunk-docker`](https://splunk.github.io/docker-splunk/)
    - [ports](https://splunk.github.io/docker-splunk/ARCHITECTURE.html#networking)
- [REST API](https://docs.splunk.com/Documentation/Splunk/latest/RESTREF/RESTprolog)
- [Splunk CLI](https://docs.splunk.com/Documentation/Splunk/latest/Admin/CLIadmincommands)