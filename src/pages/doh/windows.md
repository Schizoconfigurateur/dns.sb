---
title: "How to set DNS over HTTPS on Windows"
description: "How to set DNS.SB's DoH (DNS over HTTPS) on Windows"
---

# How to set DNS over HTTPS on Windows

This guide is for Microsoft Windows 10 and Windows 11.

## How to set DoH on Windows 11

### 1. Set DoH Provider

Open Windows Terminal with Admin access, first, right click on `Start` button on taskbar:

![k0uS.png](https://s3.image.hosting/2022/02/28/k0uS.png)

Then choose `Windows Terminal (Admin)`:

![kggf.png](https://s3.image.hosting/2022/02/28/kggf.png)

Input the following commands:

```powershell
netsh dns add encryption 185.222.222.222 https://doh.dns.sb/dns-query
netsh dns add encryption 45.11.45.11 https://doh.dns.sb/dns-query
netsh dns add encryption 2a09:: https://doh.dns.sb/dns-query
netsh dns add encryption 2a11:: https://doh.dns.sb/dns-query
```

![k7ov.png](https://s3.image.hosting/2022/02/28/k7ov.png)

Then use `netsh dns show encryption` command to check if it works:

![kDfq.png](https://s3.image.hosting/2022/02/28/kDfq.png)

### 2. Change Network Configuration

Right click on the small computer icon on taskbar:

![kIxj.png](https://s3.image.hosting/2022/02/28/kIxj.png)

Click `Network and Internet settings`

![knvP.png](https://s3.image.hosting/2022/02/28/knvP.png)

Choose `Ethernet`:

![kjLp.png](https://s3.image.hosting/2022/02/28/kjLp.png)

On `DNS Server assignment` section, click `Edit`:

![k2IR.png](https://s3.image.hosting/2022/02/28/k2IR.png)

Manually set DNS servers and set `Alternate DNS encryption` to `Encrypted only (DNS over HTTPS)`, then click `Save` button:

![k6AD.png](https://s3.image.hosting/2022/02/28/k6AD.png)

## How to set DoH on Windows 10

### 1. Download YogaDNS

You can download and install the latest version [here](https://yogadns.com/download/).

### 2. Set an empty configuration

[![KvND.png](https://s3.image.hosting/2021/07/02/KvND.png)](https://s3.image.hosting/2021/07/02/KvND.png)

### 3. Set DNS.SB DoH Server

Click `DNS Servers`, then click `Add...`

[![KKqB.png](https://s3.image.hosting/2021/07/02/KKqB.png)](https://s3.image.hosting/2021/07/02/KKqB.png)

Choose Type to `DNS over HTTPS`, set `IP address and optional port:` to:

```
185.222.222.222
```

Set `DNS over HTTPS options URL` to:

```
https://doh.dns.sb/dns-query
```

[![KejX.png](https://s3.image.hosting/2021/07/02/KejX.png)](https://s3.image.hosting/2021/07/02/KejX.png)

Click `OK`
