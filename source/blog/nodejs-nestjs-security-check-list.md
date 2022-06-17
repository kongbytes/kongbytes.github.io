--- 
header_title: Discover the KongBytes NestJS security check-list
header_description: Learn how to secure your Node.js API projects using a NestJS security check-list with best-practices (rate-limiting, encryption, authentication, ...)

post_title: NestJS security check-list
post_summary: Discover in this blog post a set of essential NestJS security techniques that will enhance your API protection.
--- 

# {{ post_title }}

The [NestJS framework](https://nestjs.com/) is one of the most popular Node.js frameworks out here. It has a well-designed architecture, is reliable for server-side applications and comes with a modular set of features (GraphQL, task scheduling, queues, ...) that can be used for many use-cases.

The goal of this blog post is to discover the security features offered by the NestJS framework and other common security measures that will secure your server-side applications.

- Enable rate-limiting
- Filter all request items
- Force HTTPS
- Use HTTP headers
- Take care of cookie security
- Encrypt sensitive data
- Use CSRF protection
- Authentication essentials
- Enforce proper authorization
- Audit the NPM packages

Let's discover some security techniques below.

#### Enable rate-limiting

An attacker can damage your server-side applications by sending a huge amount of requests to your API endpoints (DDOS). The server resources (such memory, network bandwidth, CPU, ...) will therefore not be able to handle properly other HTTP requests. This attack does not require extended planning from the attacker and can cause a denial of service.

The NestJS framework provides the [@nestjs/throttler](https://github.com/nestjs/throttler) package that can be used for rate-limiting requests. Rate-limiting means that a given API user identified by request properties(such as the IP address) will be able to perform a limited number of API calls in a given time-range. Start by including the package in your project.

```bash
npm i --save @nestjs/throttler
```

See the [NestJS rate-limiting documentation](https://docs.nestjs.com/security/rate-limiting) for set-up details. By default, the rate-limiting module uses an in-memory storage for blacklisted requesters. This is a safe-default for most projects, but keep in mind that distributed NestJS API (such as a Kubernetes production environment) will require other storage providers.