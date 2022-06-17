--- 
header_title: Getting started with Rust-based ARP scans
header_description: Learn how to perform ARP scans on local networks using this getting started guide of the KongBytes arp-scan-rs project, a Rust-based ARP scanner

doc_title: Getting started
--- 

### Getting started with arp-scan

Download the `arp-scan` binary for Linux (Ubuntu, Fedora, Debian, ...). See the [releases page](https://github.com/Saluki/arp-scan-rs/releases) for other binaries.

```bash
wget -O arp-scan https://github.com/Saluki/arp-scan-rs/releases/download/v0.13.1/arp-scan-v0.13.1-x86_64-unknown-linux-musl && chmod +x ./arp-scan
```

Optionnaly, fetch the IEEE OUI reference file (CSV format) that contains all MAC address vendors.

```bash
wget -O /usr/share/arp-scan/ieee-oui.csv http://standards-oui.ieee.org/oui/oui.csv
```

List all available network interfaces.

```bash
./arp-scan -l
```

Launch a scan on interface `wlp1s0`.

```bash
./arp-scan -i wlp1s0
```

Enhance the minimum scan timeout to 5 seconds (by default, 2 seconds).

```bash
./arp-scan -i wlp1s0 -t 5s
```

Perform an ARP scan on the default network interface, VLAN 45 and JSON output.

```bash
./arp-scan -Q 45 -o json
