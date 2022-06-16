--- 
header_title: Discover the KongBytes NestJS security check-list
page_title: NestJS security check-list

post_summary: Discover in this blog post a set of essential NestJS security techniques that will enhance your API protection.
--- 

# {{ page_title }}

The [NestJS framework](https://nestjs.com/) is one of the most popular Node.js frameworks out here. It has a well-designed architecture, is reliable for server-side applications and comes with a modular set of features (GraphQL, task scheduling, queues, ...) that can be used for many use-cases.

The goal of this blog post is to discover the security features offered by the NestJS framework and other common security measures that will secure your server-side applications.

- Enable rate-limiting
- Filter all request items
- Force HTTPS
- Use HTTPS headers
- Take care of cookie security
- Encrypt sensitive data
- Use CSRF protection
- Authentication essentials
- Enforce proper authorization
- Audit the NPM packages

Let's discover each security technique below.

#### Enable rate-limiting

An attacker can damage your server-side applications by sending a huge amount of requests. 

(redacted)