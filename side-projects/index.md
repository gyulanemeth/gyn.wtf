# Side projects

I find it essential to use familiar technologies in order to ship quickly. :rocket: That's why my first rule is to work only with a tech stack I have the most experience with.

The second rule is to use the same patterns wherever possible. These patterns can be reused in multiple projects, so I have decided to open-source many of them. Besides their reusability, it's also a fantastic way to make parts of your software legally reusable as well. :sunglasses:

::: tip Side note

Since my main focus is on my startup, these projects might progress quite slowly. Don't expect a "full-time indie hacker" speed.

:::

## Tech stack

I think it's best if you can use the same programming language on the frontend and on the backend as well. That is what I have been doing for a long, long time. I use Javascript for basically everything. The following tech stack, so I'm using it in all of my current projects. I will probably work on a hobby project, with Zig & WebAssembly, but that's more about learning, not shipping.

Server side:
 - MongoDB
 - Mongoose
 - Node.js
 - Express.js

Client side:
 - Vue.js
 - Vuetify.js

Testing:
 - Vitest
 - supertest
 - Playwright


## Open source


I am not an open source freedom fighter. I simply find open source to be a great way to reuse code in other projects and ensure legality. Imagine a scenario where you develop something and later want to use the same code in other projects. What if you sell your project and the code becomes someone else's property? Well, open source can also solve that.

I tend to create open source libraries for very generic stuff that I want to reuse across multiple projects. I don't actively promote them, but anyone can use them.

Many of my projects make use of my open source libraries. Additionally, there is a slightly larger open source project that handles user management in a very specific way. It may not be used in every project, but it will be utilized in many of them.

## Infrastructure

I have quite a lot of experience with AWS, but I find it extremely expensive. Quite a few years ago, I found a very, very cheap VPS provider, called [netcup](https://netcup.eu). They are dead-cheap and the performance of their virtual machines is great. They also provide dedicated hardware if you need more power.

As an object storage, I decided to use [wasabi](https://wasabi.com/). It is AWS S3 compatible and incredibly cheap.
