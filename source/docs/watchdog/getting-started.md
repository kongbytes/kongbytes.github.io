--- 
header_title: Watchdog installation
header_description: Learn how to launch the watchdog network monitoring tool using this getting started guide of the KongBytes watchdog-rs project

doc_title: Getting started
doc_index: 1
--- 

Start by retrieving the latest release of the `watchdog-rs` CLI [on the project release page](https://github.com/kongbytes/watchdog-rs) and create a YAML configuration `config.yaml` file as shown below. This **configuration file** will be used by the monitoring server to manage your configuration accross regions.

```yaml
regions:
  - name: eu-west
    interval: 5s # Interval between network checks in a region
    threshold: 3 # Amount of region failures tolerated before alert
    groups:
      - name: default
        threshold: 4 # Amount of zone failures tolerted before alert
        mediums: telegram # Alert mediums
        tests:
          - http www.domain.be
```

Launch the main **monitoring server** that will be used by network regions to collect metrics. This service should be reachable by all network regions on port `3030`.

```bash
# Define a set of environment variables that will be used
# by the server. In a production environment, this would
# be defined in a systemd service.
export TELEGRAM_TOKEN=x
export TELEGRAM_CHAT=x
export WATCHDOG_TOKEN=x

# Launch the main watchdog server on port 3030
watchdog server --config ./config.yaml
```

In a region, launch a **network relay** : a service that will retrieve the monitoring configuration from the server and start performing network tests. Each time a test is performed, the results will be pushed to the main monitoring server.

```bash
# Define a set of environment variables that will be used
# by the relay. In a production environment, this would
# be defined in a systemd service.
export WATCHDOG_ADDR=http://localhost:3030
export WATCHDOG_TOKEN=x

# Launch a watchdog network region relay
watchdog relay --region eu-west
```

On your workstation, use the **CLI** to get details about the monitoring state & ongoing incidents.

```bash
# Put these environment variables in a safe place on your
# workstation (watch out for shell history)
WATCHDOG_ADDR=http://localhost:3030
WATCHDOG_TOKEN=x

# Get the status of all your network regions & zones
watchdog status
```