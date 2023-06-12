--- 
header_title: ARP scan, Rust-based ARP network scans
header_description: Discover the arp-scan-rs KongBytes project, a Rust rewrite of the ARP scanner CLI that performs local network discovery  using the ARP protocol

doc_title: Introduction
doc_index: 0
--- 

Find all hosts in your local network using this fast ARP scanner. The CLI is written in Rust and provides a minimal scanner that finds all hosts using the ARP protocol. Inspired by the awesome [arp-scan project](https://github.com/royhills/arp-scan).

✔ Minimal Rust binary & fast ARP scans

✔ Scan customization (ARP, timings, interface, DNS, ...)

✔ MAC vendor search

✔ JSON, YAML & CSV exports

✔ Pre-defined scan profiles (default, fast, stealth & chaos)

### Examples

Start by listing all network interfaces on the host.

```bash
# List all network interfaces
$ arp-scan -l

lo                   ✔ UP      00:00:00:00:00:00    127.0.0.1/8
enp3s0f0             ✔ UP      4f:6e:cd:78:bb:5a    
enp4s0               ✖ DOWN    d0:c5:e9:40:00:4a    
wlp1s0               ✔ UP      d2:71:d8:29:a8:72    192.168.1.21/24
docker0              ✔ UP      49:fd:cd:60:73:77    172.17.0.1/16
br-fa6dc54a91ee      ✔ UP      61:ab:c1:a7:50:79    172.18.0.1/16

Found 6 network interfaces, 5 seems up for ARP scan
Default network interface will be wlp1s0
```

Perform a default ARP scan on the local network with safe defaults.

```bash
# Perform a scan on the default network interface
$ arp-scan

Selected interface wlp1s0 with IP 192.168.1.21/24
Estimated scan time 2068ms (10752 bytes, 14000 bytes/s)
Sending 256 ARP requests (waiting at least 800ms, 0ms request interval)

| IPv4            | MAC               | Hostname     | Vendor       |
|-----------------|-------------------|--------------|--------------|
| 192.168.1.1     | 91:10:fb:30:06:04 | router.home  | Vendor, Inc. |
| 192.168.1.11    | 45:2e:99:bc:22:b6 | host-a.home  |              |
| 192.168.1.15    | bc:03:c2:92:47:df | host-b.home  | Vendor, Inc. |
| 192.168.1.18    | 8d:eb:56:17:b8:e1 | host-c.home  | Vendor, Inc. |
| 192.168.1.34    | 35:e0:6c:1e:e3:fe |              | Vendor, Inc. |

ARP scan finished, 5 hosts found in 1.623 seconds
7 packets received, 5 ARP packets filtered
```
