--- 
header_title: Performing advanced ARP scans
header_description: Discover all advanced CLI options (JSON, ARP internals, scan profiles, ...) offered by the KongBytes arp-scan-rs project, a Rust-based ARP scanner

doc_title: Advanced options
doc_index: 2
--- 
  
#### Get help `-h`

Display the main help message with all commands and available ARP scan options.

#### List interfaces `-l`

List all available network interfaces. Using this option will only print a list of interfaces and exit the process.

#### Select scan profile `-p stealth`

A scan profile groups together a set of ARP scan options to perform a specific scan. The scan profiles are listed below:

- `default` : default option, this is enabled if the `-p` option is not used
- `fast` : fast ARP scans, the results may be less accurate
- `stealth` : slower scans that minimize the network impact
- `chaos` : randomly-selected values for the ARP scan

#### Select interface `-i eth0`

Perform a scan on the network interface `eth0`. The first valid IPv4 network on this interface will be used as scan target. By default, the first network interface with an `up` status and a valid IPv4 will be selected.

#### Set IPv4 network range `-n 172.17.0.0/24`

By default, the scan process will select the first IPv4 network on the interface and start a scan on the whole range. With the `--network` option, an IPv4 network can be defined _(this may be used for specific scans on a subset of network targets)_.

#### Set global scan timeout `-t 15s`

Enforce a timeout of at least 15 seconds. This timeout is a minimum value (scans may take a little more time). Default value is `2000ms`.

#### Change ARP request interval `-I 39ms`

By default, a `10ms` gap will be set between ARP requests to avoid an ARP storm on the network. This value can be changed to reduce or increase the milliseconds between each ARP request.

#### Enforce scan bandwidth limit `-B 1000`

Enforce a bandwidth limit (expressed in bits per second) on ARP scans. The `--bandwidth` option conflicts with `--interval` since these 2 arguments change the same parameter underneath.

#### Numeric mode `--numeric`

Switch to numeric mode. This will skip the local hostname resolution process and will only display IP addresses.

#### Host retry count `-r 3`

Send 3 ARP requests to the targets (retry count). By default, a single ARP request will be sent to each host.

#### Change source IPv4 `-S 192.168.1.130`

Change or force the IPv4 address sent as source in the broadcasted ARP packets. By default, a valid IPv4 address on the network interface will be used. This option may be useful for isolated hosts and security checks.

#### Change destination MAC `-M 55:44:33:22:11:00`

Change or force the MAC address sent as destination ARP request. By default, a broadcast destination (`00:00:00:00:00:00`) will be set.

#### Change source MAC `-M 11:24:71:29:21:76`

Change or force the MAC address sent as source in the ARP request. By default, the network interface MAC will be used.

#### Randomize target list `-R`

Randomize the IPv4 target list before sending ARP requests. By default, all ARP requests are sent in ascending order by IPv4 address.

#### Use custom MAC OUI file `--oui-file ./my-file.csv`

Use a [custom OUI MAC file](http://standards-oui.ieee.org/oui/oui.csv), the default path will be set to `/usr/share/arp-scan/ieee-oui.csv"`.

#### Set VLAN ID `-Q 42`

Add a 802.1Q field in the Ethernet frame. This fields contains the given VLAN ID for outgoing ARP requests. By default, the Ethernet frame is sent without 802.1Q fields (no VLAN).

#### Customize ARP operation ID `--arp-op 1`

Change the ARP protocol operation field, this can cause scan failure.

#### Customize ARP hardware type `--hw-type 1`

Change the ARP hardware type field, this can cause scan failure.

#### Customize ARP hardware address length `--hw-addr 6`

Change the ARP hardware address length field, this can cause scan failure.

#### Customize ARP protocol type `--proto-type 2048`

Change the ARP protocol type field, this can cause scan failure.

#### Customize ARP protocol adress length `--proto-addr 4`

Change the ARP protocol address length field, this can cause scan failure.

#### Set output format `-o json`

Set the output format to either `plain` (a full-text output with tables), `json`, `yaml` or `csv`.

#### Show version `--version`

Display the ARP scan CLI version and exits the process.