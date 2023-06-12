--- 
header_title: Watchdog, Rust-based network monitoring
header_description: An all-in-one network monitoring tool that detects incidents accross multiple regions. Minimal memory usage, Grafana-ready and favors configuration as code.

doc_title: Introduction
doc_index: 0
--- 

A minimalist & multi-region network monitoring tool written in Rust

- **All-in-one solution** : the project can be used to push metrics from network regions, aggregate all metrics in a server and see the results with a CLI
- **Minimal footprint** : the major open-source monitoring solutions such as Prometheus and Zabbix offer a wide range of features, but consume a lot of resources (memory, network, ...). This project provides a set of components that are designed for low-resource consumption.
- **Default "push" approach** : to enable multi-region network monitoring, the server defaults to a "push" approach. No need to have a fixed IP address or configure NAT in your router : all data is sent from the regions to the main public server.
- **Grafana-ready** : while the project provides a CLI to view the status of your regions and track incidents, the project also integrates with Grafana.
- **Configuration as code** : easily backup your configuration, keep track of changes with Git and share with other teams.
